/* DSF website: progressive enhancement only. Every link and section works without JS. */
(function () {
  'use strict';

  var desktop = window.matchMedia('(min-width: 1140px)');

  /* ---- Sticky header: shadow on scroll + drawer offset ---- */
  var header = document.querySelector('[data-header]');
  function setHeaderBottom() {
    if (!header) return;
    var bottom = Math.max(0, header.getBoundingClientRect().bottom);
    document.documentElement.style.setProperty('--header-bottom', bottom + 'px');
  }
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    setHeaderBottom();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', setHeaderBottom);
  onScroll();

  /* ---- Mobile drawer ---- */
  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-nav-toggle]');
  function setDrawer(open) {
    if (!nav || !toggle) return;
    setHeaderBottom();
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.nav-toggle__label').textContent = open ? 'Close' : 'Menu';
    document.body.classList.toggle('nav-open', open);
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setDrawer(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }

  /* ---- Sub-menus (click on all sizes, hover on desktop) ---- */
  var subToggles = Array.prototype.slice.call(document.querySelectorAll('[data-sub-toggle]'));
  function setSub(btn, open) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    btn.setAttribute('aria-expanded', String(open));
    if (panel) panel.classList.toggle('is-open', open);
  }
  function closeAllSubs(except) {
    subToggles.forEach(function (b) { if (b !== except) setSub(b, false); });
  }
  subToggles.forEach(function (btn) {
    var item = btn.closest('.site-nav__item');
    var closeTimer;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      if (desktop.matches) closeAllSubs(btn);
      setSub(btn, open);
    });
    item.addEventListener('mouseenter', function () {
      if (!desktop.matches) return;
      clearTimeout(closeTimer);
      closeAllSubs(btn);
      setSub(btn, true);
    });
    item.addEventListener('mouseleave', function () {
      if (!desktop.matches) return;
      closeTimer = setTimeout(function () { setSub(btn, false); }, 160);
    });
    item.addEventListener('focusout', function (e) {
      if (desktop.matches && !item.contains(e.relatedTarget)) setSub(btn, false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var openBtn = subToggles.filter(function (b) { return b.getAttribute('aria-expanded') === 'true'; })[0];
    if (openBtn && desktop.matches) { setSub(openBtn, false); openBtn.focus(); return; }
    if (nav && nav.classList.contains('is-open')) { setDrawer(false); toggle.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (desktop.matches && !e.target.closest('.site-nav__item')) closeAllSubs();
  });
  desktop.addEventListener('change', function () { setDrawer(false); closeAllSubs(); });

  /* ---- Feedstock stream selector (ARIA tabs) ---- */
  var streams = document.querySelector('[data-streams]');
  if (streams) {
    var tabs = Array.prototype.slice.call(streams.querySelectorAll('[role="tab"]'));
    var panel = streams.querySelector('[role="tabpanel"]');
    var desc = streams.querySelector('[data-stream-desc]');
    var routeList = streams.querySelector('[data-route-list]');
    var steps = Array.prototype.slice.call(streams.querySelectorAll('[data-step]'));

    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
      });
      if (focus) tab.focus();
      panel.setAttribute('aria-labelledby', tab.id);
      var route = tab.dataset.route.split(',');
      desc.textContent = tab.dataset.desc;
      routeList.innerHTML = '';
      route.forEach(function (s) {
        var li = document.createElement('li');
        li.textContent = s.charAt(0).toUpperCase() + s.slice(1);
        routeList.appendChild(li);
      });
      steps.forEach(function (el) {
        var i = route.indexOf(el.dataset.step);
        el.classList.toggle('is-on', i > -1);
        el.querySelector('.activity__order').textContent = i > -1 ? String(i + 1) : '';
      });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (e) {
        var rtl = document.dir === 'rtl';
        var next = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key];
        if (e.key === 'Home') next = -i;
        if (e.key === 'End') next = tabs.length - 1 - i;
        if (next === undefined) return;
        e.preventDefault();
        select(tabs[(i + next + tabs.length) % tabs.length], true);
      });
    });
  }

  /* ---- Footer year ---- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();

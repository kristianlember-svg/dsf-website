# DSF website: structure & Home page proposal (v0.1)

Source: *DSF Brand & Communication Playbook V1.1* + DSF design system v1.
Status: proposal, Home page built on it. Tune freely.

## 1. What the playbook tells the website

| Playbook rule | What it means for the site |
|---|---|
| One master brand; DSF owns the single institutional site (§6, §8) | `dsf…` is the corporate destination. Businesses live inside it under **Our Businesses**. |
| Delta Oil and Delta Tyres are sections inside the DSF site (§8) | `/businesses/delta-oil/`, `/businesses/delta-tyres/`. The old Delta Oil domain 301-redirects to its section. |
| Delta Plus is the exception: own site, own palette, endorsed (§6, §8) | Listed in Our Businesses as an outbound card ("a DSF company ↗"). No Delta Plus page on the DSF site, no DSF palette applied to it. |
| Endorsement line "Delta Oil, a DSF company" (§6) | Every subsidiary card/section carries the endorsement line. |
| Proof led first; impact is a number (§5, §10) | A proof strip sits directly under the hero. No "impact" adjective without a figure. |
| Five activities + four pillars (§3, §4) | Home explains the system (activities) then why it is defensible (pillars). |
| Multi-stream, don't narrow to "UCO for SAF" (§9) | Navigation is organised by **feedstock streams**, not by UCO. New streams slot in without re-architecting. |
| Two audiences: buyers/refineries/investors (DSF) vs local collectors (Delta Oil, warmer) (§7) | Home routes each audience through its own door; collectors go to Delta Oil. |
| Arabic is not an afterthought; reviewed, not machine-translated (§12) | `/ar/` mirrors the EN tree. CSS is RTL-ready from day one. AR copy waits for the reviewed translation phase. |
| Institutional register, Trafigura/ADM not green startup (§10) | Calm layouts, numbers, restrained motion. No "save the planet" copy. |

## 2. Sitemap

```
/                                  Home
/company/                          Company
    /company/about/                  Who we are (story, mental model)
    /company/model/                  How we work: four pillars
    /company/track-record/           Milestones, export history
    /company/leadership/             Leadership
/what-we-do/                       What we do: the DSF system (5 activities)
    /what-we-do/collect/ … /trade/   (optional deep pages later)
/feedstock/                        Feedstock streams
    /feedstock/uco/                  Used cooking oil
    /feedstock/soapstock-acid-oil/   Soapstock & acid oil
    /feedstock/waste-tyres/          Waste tyres
    /feedstock/future-streams/       Future streams
/businesses/                       Our Businesses
    /businesses/delta-oil/           Delta Oil, a DSF company (incl. "Supply your used oil")
    /businesses/delta-tyres/         Delta Tyres, a DSF company
    → Delta Plus (external site)     Delta Plus, a DSF company ↗
/proof/                            Certification & Traceability
    /proof/certifications/           ISCC-EU, ISCC-PLUS, ISCC-CORSIA
    /proof/traceability/             Chain of custody, mass balance, data
    /proof/impact/                   Impact in numbers (CO₂ avoided, GHG savings)
/insights/                         News & insights (milestones, thought leadership)
/careers/                          Careers
/contact/                          Contact (routed: buy feedstock / supply / partner & invest / media)
/legal/privacy/  /legal/terms/  /legal/cookies/
/ar/…                              Arabic mirror of every page above
```

## 3. Main menu

Desktop header, left to right:

`[DSF logo]   Company ▾   What we do   Feedstock ▾   Our Businesses ▾   Certification   Insights   Careers   |  EN / ع  |  [Contact us]`

- **Our Businesses ▾** opens a small mega-panel with three endorsed cards (Delta Oil, Delta Tyres, Delta Plus ↗). It is the brand architecture made visible.
- **Feedstock ▾** lists streams; "Future streams" signals the platform without over-claiming.
- Utility link for collectors in the header top bar: *"Sell used cooking oil? → Delta Oil"*. Keeps the local audience one click away without diluting DSF's institutional voice.
- Mobile: full-screen drawer, accordion sub-menus, language switch and CTA pinned to the bottom.

## 4. Home page communication blocks

| # | Block | Job | Content source |
|---|---|---|---|
| 1 | **Hero** | Say what DSF is in one breath | Tagline "Local Waste to Global Impact" + positioning sentence. CTAs: *Source certified feedstock* / *Explore the DSF system*. |
| 2 | **Proof strip** | Proof first, before any story | 22,000 t sourced & exported · ISCC-EU / PLUS / CORSIA · Operating since 2018 · Exporting since 2021 |
| 3 | **Fragmented in, certified out** | The mental model | One-line story + "DSF is / is not" distilled into 3 statements |
| 4 | **The DSF system** | How value is created at every step | 5 activities with an interactive stream selector (UCO, Soapstock, Tyres, Future) that lights up each stream's route. Traceability layer shown underneath. |
| 5 | **Four pillars** | Why it is defensible | Supply Chain · Technology · Social · Environment + internal shorthand line |
| 6 | **Our Businesses** | Brand architecture | Delta Oil / Delta Tyres / Delta Plus ↗ with endorsement lines |
| 7 | **Certified, traceable, measured** | Proof detail | Certifications, chain-of-custody, impact metrics (CO₂ figure pending) |
| 8 | **Three doors** | Route each audience | Buyers & refineries · Collectors & suppliers (→ Delta Oil) · Investors & partners |
| 9 | **Closing CTA** | Convert | "Secure certified feedstock supply" → Contact |
| 10 | **Footer** | Navigation + trust | Sitemap, businesses with endorsement, certifications, LinkedIn, language, legal |

## 5. Data still needed from DSF

- Chain-of-custody / mass-balance standard (playbook §5 blank).
- Number of export markets.
- Impact figures: t CO₂e avoided, GHG-savings %.
- Real photography (current images are CVI application mock-ups).
- Production domain (placeholder `https://www.example.com` in canonical/OG/sitemap).
- Contact email, phone, address, LinkedIn URL.
- Delta Plus website URL.

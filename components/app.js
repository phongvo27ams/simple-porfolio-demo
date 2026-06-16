import { siteData } from "../data/site-data.js";

const t = (value, lang) => (typeof value === "object" && value !== null ? value[lang] : value);
const nl2br = (value) => value.replace(/\n/g, "<br />");

const renderNavLinks = (items, activeHref, lang) =>
  items
    .map(
      (item) => `<a class="${item.href === activeHref ? "active" : ""}" href="${item.href}">${t(
        item.label,
        lang
      )}</a>`
    )
    .join("");

const renderLanguageToggle = (lang) => {
  const nextLang = lang === "vi" ? "en" : "vi";
  const current = siteData.ui.language[lang];
  const next = siteData.ui.language[nextLang];

  return `
    <button class="language-toggle" type="button" data-language-toggle="${nextLang}" aria-label="Switch language to ${next.short}">
      <span class="lang-option current">
        <img class="flag" src="${current.flag}" alt="${current.short} flag" />
        <span class="lang-current">${current.short}</span>
      </span>
      <span class="lang-separator">/</span>
      <span class="lang-option next">
        <img class="flag" src="${next.flag}" alt="${next.short} flag" />
        <span class="lang-next">${next.short}</span>
      </span>
    </button>
  `;
};

const renderServiceCards = (services, lang) =>
  services
    .map(
      (service) => `
        <article class="service-card">
          <div class="service-icon ${service.tone}">
            <i class="${service.icon}" aria-hidden="true"></i>
          </div>
          <div>
            <h3>${t(service.title, lang)}</h3>
            <p>${t(service.projects, lang)}</p>
          </div>
        </article>
      `
    )
    .join("");

const renderStats = (stats, lang) =>
  stats
    .map(
      (stat) => `
        <div>
          <strong class="stat-number" data-target="${stat.target}">0+</strong>
          <span>${t(stat.label, lang)}</span>
        </div>
      `
    )
    .join("");

const renderTimeline = (items, lang) =>
  items
    .map(
      (item) => `
        <div class="timeline-row">
          <div class="timeline-meta">
            <h3>${t(item.company, lang)}</h3>
            <p>${t(item.period, lang)}</p>
          </div>
          <div class="timeline-dot ${item.tone}"></div>
          <div class="timeline-content">
            <h3>${t(item.role, lang)}</h3>
            <p>${t(item.description, lang)}</p>
          </div>
        </div>
      `
    )
    .join("");

const renderWorks = (works, lang) =>
  works
    .map(
      (work) => `
        <article class="work-card ${work.tone}">
          <div class="work-copy">
            <h3>${t(work.title, lang)}</h3>
            <p>${t(work.subtitle, lang)}</p>
          </div>
          <img src="${work.image}" alt="${t(work.alt, lang)}" />
        </article>
      `
    )
    .join("");

const renderTestimonials = (items, lang) =>
  items
    .map(
      (item) => `
        <article class="testimonial-card">
          <img src="${item.image}" alt="Avatar placeholder" />
          <p>${t(item.quote, lang)}</p>
          <h3>${item.name}</h3>
          <span>${t(item.role, lang)}</span>
        </article>
      `
    )
    .join("");

export const renderApp = (lang) => `
  <div class="page-shell">
    <header class="site-header container">
      <a class="brand" href="#">${siteData.brand}</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${t(
        siteData.ui.openMenu,
        lang
      )}">
        <i class="fa-solid fa-bars" aria-hidden="true"></i>
        <span>${t(siteData.ui.menu, lang)}</span>
      </button>
      <nav class="main-nav" aria-label="${t(siteData.ui.primary, lang)}">${renderNavLinks(
        siteData.navItems,
        "#home",
        lang
      )}</nav>
      <div class="header-contact">
        ${renderLanguageToggle(lang)}
        <a class="phone-link" href="tel:+001313345678">${siteData.phone}</a>
        <button class="icon-button" type="button" aria-label="Call"><span>&#9742;</span></button>
      </div>
    </header>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <div class="mobile-menu-head container">
        ${renderLanguageToggle(lang)}
      </div>
      <nav class="mobile-nav container" aria-label="${t(siteData.ui.mobilePrimary, lang)}">
        ${renderNavLinks(siteData.navItems, "#home", lang)}
      </nav>
    </div>
    <main>
      <section class="hero container" id="home">
        <div class="hero-copy">
          <h1>${nl2br(t(siteData.hero.title, lang))}</h1>
          <a class="email-link" href="mailto:${siteData.email}">${siteData.email}</a>
          <div class="experience-chip">
            <strong class="stat-number" data-target="10">0</strong>
            <span>${nl2br(t(siteData.hero.yearsLabel, lang))}</span>
          </div>
        </div>
        <div class="hero-visual">
          <img src="./assets/images/avatar.png" alt="Avatar portrait" />
        </div>
        <div class="hero-side">
          <p>${t(siteData.hero.intro, lang)}</p>
          <div class="badge-card">
            <img class="badge-mark" src="./assets/images/certificate.png" alt="UX Professional Certified badge" />
            <span>${nl2br(t(siteData.hero.certificateLabel, lang))}</span>
          </div>
        </div>
      </section>
      <section class="services section-block" id="skills">
        <div class="container services-grid">
          <div class="service-list">${renderServiceCards(siteData.services, lang)}</div>
          <div class="services-copy">
            <h2>${t(siteData.servicesSection.title, lang)}</h2>
            <p>${t(siteData.servicesSection.description1, lang)}</p>
            <p>${t(siteData.servicesSection.description2, lang)}</p>
            <div class="stats-row">${renderStats(siteData.stats, lang)}</div>
          </div>
        </div>
      </section>
      <section class="experience section-block plain-tinted" id="experience">
        <div class="container">
          <h2 class="section-title centered">${t(siteData.experienceSection.title, lang)}</h2>
          <div class="timeline">${renderTimeline(siteData.experience, lang)}</div>
        </div>
      </section>
      <section class="works section-block" id="works">
        <div class="container">
          <div class="section-head">
            <div>
              <h2 class="section-title">${t(siteData.worksSection.title, lang)}</h2>
              <p>${t(siteData.worksSection.subtitle, lang)}</p>
            </div>
            <a href="#">${t(siteData.worksSection.cta, lang)}</a>
          </div>
          <div class="work-grid">${renderWorks(siteData.works, lang)}</div>
        </div>
      </section>
      <section class="testimonials section-block plain-tinted" id="about-us">
        <div class="container">
          <h2 class="section-title centered">${t(siteData.testimonialsSection.title, lang)}</h2>
          <p class="section-subtitle centered narrow">${t(siteData.testimonialsSection.subtitle, lang)}</p>
          <div class="testimonial-slider-wrap">
            <button class="testimonial-arrow prev" type="button" aria-label="${t(
              siteData.ui.previousTestimonial,
              lang
            )}"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
            <div class="testimonial-slider">
              <div class="testimonial-track">${renderTestimonials(siteData.testimonials, lang)}</div>
            </div>
            <button class="testimonial-arrow next" type="button" aria-label="${t(
              siteData.ui.nextTestimonial,
              lang
            )}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
          </div>
          <div class="slider-dots" aria-label="Testimonial navigation">
            <button class="dot active" type="button" aria-label="${t(siteData.ui.slide, lang)} 1"></button>
            <button class="dot" type="button" aria-label="${t(siteData.ui.slide, lang)} 2"></button>
            <button class="dot" type="button" aria-label="${t(siteData.ui.slide, lang)} 3"></button>
            <button class="dot" type="button" aria-label="${t(siteData.ui.slide, lang)} 4"></button>
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer section-block">
      <div class="container footer-grid">
        <div class="footer-cta">
          <h2>${t(siteData.footer.title, lang)}</h2>
          <p>${t(siteData.footer.startBy, lang)} <a href="mailto:hello@example.com">${t(
            siteData.footer.sayHi,
            lang
          )}</a></p>
        </div>
        <div class="footer-info" id="contact">
          <div>
            <h3>${t(siteData.footer.information, lang)}</h3>
            <p>${t(siteData.footer.address, lang)}</p>
          </div>
          <nav class="footer-nav" aria-label="${t(siteData.ui.footer, lang)}">${renderNavLinks(
            siteData.navItems,
            "#home",
            lang
          )}</nav>
        </div>
      </div>
      <div class="container footer-bottom">
        <a class="brand" href="#">${siteData.brand}</a>
        <p>${t(siteData.footer.rights, lang)}</p>
        <p>${t(siteData.footer.designBy, lang)}</p>
      </div>
    </footer>
  </div>
`;

import { siteData } from "../data/site-data.js";

const renderNavLinks = (items, activeHref) =>
  items.map((item) => `<a class="${item.href === activeHref ? "active" : ""}" href="${item.href}">${item.label}</a>`).join("");

const renderServiceCards = (services) =>
  services
    .map(
      (service) => `
        <article class="service-card">
          <div class="service-icon ${service.tone}">
            <i class="${service.icon}" aria-hidden="true"></i>
          </div>
          <div>
            <h3>${service.title}</h3>
            <p>${service.projects}</p>
          </div>
        </article>
      `
    )
    .join("");

const renderStats = (stats) =>
  stats
    .map(
      (stat) => `
        <div>
          <strong class="stat-number" data-target="${stat.target}">0+</strong>
          <span>${stat.label}</span>
        </div>
      `
    )
    .join("");

const renderTimeline = (items) =>
  items
    .map(
      (item) => `
        <div class="timeline-row">
          <div class="timeline-meta">
            <h3>${item.company}</h3>
            <p>${item.period}</p>
          </div>
          <div class="timeline-dot ${item.tone}"></div>
          <div class="timeline-content">
            <h3>${item.role}</h3>
            <p>${item.description}</p>
          </div>
        </div>
      `
    )
    .join("");

const renderWorks = (works) =>
  works
    .map(
      (work) => `
        <article class="work-card ${work.tone}">
          <div class="work-copy">
            <h3>${work.title}</h3>
            <p>${work.subtitle}</p>
          </div>
          <img src="${work.image}" alt="${work.alt}" />
        </article>
      `
    )
    .join("");

const renderTestimonials = (items) =>
  items
    .map(
      (item) => `
        <article class="testimonial-card">
          <img src="${item.image}" alt="Avatar placeholder" />
          <p>${item.quote}</p>
          <h3>${item.name}</h3>
          <span>${item.role}</span>
        </article>
      `
    )
    .join("");

export const renderApp = () => `
  <div class="page-shell">
    <header class="site-header container">
      <a class="brand" href="#">Binjan</a>
      <nav class="main-nav" aria-label="Primary">${renderNavLinks(siteData.navItems, "#home")}</nav>
      <div class="header-contact">
        <a class="phone-link" href="tel:+001313345678">+001 (313) 345 678</a>
        <button class="icon-button" type="button" aria-label="Call"><span>&#9742;</span></button>
      </div>
    </header>
    <main>
      <section class="hero container" id="home">
        <div class="hero-copy">
          <h1>Hey There,<br />I&rsquo;m Binjan</h1>
          <a class="email-link" href="mailto:banjan10@gmail.com">banjan10@gmail.com</a>
          <div class="experience-chip">
            <strong class="stat-number" data-target="10">0</strong>
            <span>Years<br />Experience</span>
          </div>
        </div>
        <div class="hero-visual">
          <img src="./assets/images/avatar.png" alt="Avatar portrait" />
        </div>
        <div class="hero-side">
          <p>I design beautifully simple things, And I love what i do.</p>
          <div class="badge-card">
            <img class="badge-mark" src="./assets/images/certificate.png" alt="UX Professional Certified badge" />
            <span>Certified Professional<br />UI/UX Designer</span>
          </div>
        </div>
      </section>
      <section class="services section-block" id="skills">
        <div class="container services-grid">
          <div class="service-list">${renderServiceCards(siteData.services)}</div>
          <div class="services-copy">
            <h2>What do I help?</h2>
            <p>I will help you with finding a solution and solve your problems, We use process design to create digital products.Besids that also help their business.</p>
            <p>We use process design to create digital products. Besids that also help their business.</p>
            <div class="stats-row">${renderStats(siteData.stats)}</div>
          </div>
        </div>
      </section>
      <section class="experience section-block plain-tinted" id="experience">
        <div class="container">
          <h2 class="section-title centered">My Work Experience</h2>
          <div class="timeline">${renderTimeline(siteData.experience)}</div>
        </div>
      </section>
      <section class="works section-block" id="works">
        <div class="container">
          <div class="section-head">
            <div>
              <h2 class="section-title">My Latest Works</h2>
              <p>Perfect solution for digital experience</p>
            </div>
            <a href="#">Explore More Works</a>
          </div>
          <div class="work-grid">${renderWorks(siteData.works)}</div>
        </div>
      </section>
      <section class="testimonials section-block plain-tinted" id="about-us">
        <div class="container">
          <h2 class="section-title centered">People talk about us</h2>
          <p class="section-subtitle centered narrow">I got a job that was in accordance with the salary and field of work, The process of submitting an application was quite cosy</p>
          <div class="testimonial-slider-wrap">
            <button class="testimonial-arrow prev" type="button" aria-label="Previous testimonial"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
            <div class="testimonial-slider">
              <div class="testimonial-track">${renderTestimonials(siteData.testimonials)}</div>
            </div>
            <button class="testimonial-arrow next" type="button" aria-label="Next testimonial"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
          </div>
          <div class="slider-dots" aria-label="Testimonial navigation">
            <button class="dot active" type="button" aria-label="Slide 1"></button>
            <button class="dot" type="button" aria-label="Slide 2"></button>
            <button class="dot" type="button" aria-label="Slide 3"></button>
            <button class="dot" type="button" aria-label="Slide 4"></button>
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer section-block">
      <div class="container footer-grid">
        <div class="footer-cta">
          <h2>Let&rsquo;s make something amazing toghether.</h2>
          <p>Start by <a href="mailto:hello@example.com">saying hi</a></p>
        </div>
        <div class="footer-info" id="contact">
          <div>
            <h3>Information</h3>
            <p>145 New York, FL 5467, USA</p>
          </div>
          <nav class="footer-nav" aria-label="Footer">${renderNavLinks(siteData.navItems, "#home")}</nav>
        </div>
      </div>
      <div class="container footer-bottom">
        <a class="brand" href="#">Binjan</a>
        <p>&copy;2020. All Rights Reserved</p>
        <p>Design by Orix Creative Agency</p>
      </div>
    </footer>
  </div>
`;

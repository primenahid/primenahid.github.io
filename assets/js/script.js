(() => {
  "use strict";

  const translations = {
    en: {
      "nav.about":"About","nav.experience":"Experience","nav.skills":"Skills","nav.education":"Education","nav.certificates":"Certificates","nav.japanese":"Japanese","nav.contact":"Contact",
      "hero.eyebrow":"Professional Portfolio","hero.title":"IT Professional","hero.subtitle":"Web Development • IT Support • Digital Marketing • Computer Operations • ICT Education • Japanese Language Learner",
      "hero.text":"A hands-on IT professional with practical experience across technical support, WordPress web development, digital marketing, office operations and education.",
      "hero.cta1":"Explore Experience","hero.cta2":"Contact Me","hero.meta1":"Professional roles","hero.meta2":"DCSA CGPA / 4.00","hero.meta3":"Japanese learning","hero.badge":"Professional Profile","hero.note":"Practical • Dependable • Cross-functional",
      "about.title":"About Me","about.lead":"A practical professional who connects technology, digital work and day-to-day operations.",
      "about.body":"My experience combines IT support, WordPress development, digital marketing, branch operations, teaching and computer-based office work. I focus on practical problem solving, organized workflows and useful digital experiences.",
      "about.point1":"Technology","about.point1s":"Hardware, software, networking, printers and troubleshooting.",
      "about.point2":"Web & Digital","about.point2s":"WordPress, Elementor and audience-targeted campaigns.",
      "about.point3":"People & Operations","about.point3s":"Customer support, teaching, billing and inventory workflows.",
      "experience.title":"Professional Experience","experience.lead":"A cross-functional career built around practical technology, service and operations.",
      "exp.computer":"Data entry, important document filing and organization, record maintenance and routine computer-based office support.",
      "exp.web":"Developed WordPress websites and portfolio websites, customized layouts and interfaces, maintained sites and handled basic IT support and technical troubleshooting.",
      "exp.teacher":"Taught English and ICT to students from Grades 6–10 and supported classroom activities and learning. Mojar School is known for educational support for underprivileged and disadvantaged children.",
      "exp.marketing":"Planned and managed digital advertising campaigns, ran paid ads with audience targeting, developed sales-focused campaigns and monitored performance for optimization.",
      "exp.it":"Provided hardware and software installation and support, networking support, printer setup and troubleshooting, and day-to-day technical assistance.",
      "exp.branch":"Handled POS operations, customer support, billing management, product stock management and day-to-day branch operations.",
      "skills.title":"Skills","skills.lead":"Practical skills supported by real workplace experience.","skills.web":"Web Development","skills.it":"IT Support","skills.digital":"Digital Marketing","skills.ops":"Office & Operations",
      "education.title":"Education","education.lead":"Academic background with a dedicated IT qualification.","education.journeyTitle":"DCSA Academic Journey",
      "certificates.title":"Training & Certifications","certificates.lead":"A visual record of professional and technical learning.",
      "japanese.title":"Japanese Language Journey","japanese.lead":"Building Japanese language skills with a clear focus on JFT / A2 learning.","japanese.status":"Currently Learning",
      "japanese.note":"Learning Japanese as part of a long-term professional development path. This portfolio does not claim an official JFT result.",
      "projects.title":"Selected Work","projects.lead":"A modular space ready for future websites, tools and case studies.","projects.cardTitle":"Projects coming soon","projects.cardText":"New WordPress builds, websites, software tools and case studies can be added later without changing the design system.",
      "contact.title":"Let’s Connect","contact.lead":"For recruiters, employers, clients and professional opportunities.","contact.pending":"Not added yet",
      "footer.visitors":"Portfolio Visitors","footer.counterStatus":"Counter ready","footer.rights":"All rights reserved."
    },
    ja: {
      "nav.about":"私について","nav.experience":"職務経験","nav.skills":"スキル","nav.education":"学歴","nav.certificates":"資格・研修","nav.japanese":"日本語","nav.contact":"お問い合わせ",
      "hero.eyebrow":"プロフェッショナル・ポートフォリオ","hero.title":"ITプロフェッショナル","hero.subtitle":"Web開発 • ITサポート • デジタルマーケティング • コンピューター業務 • ICT教育 • 日本語学習者",
      "hero.text":"ITサポート、WordPress開発、デジタルマーケティング、オフィス業務、教育など、実務に基づく幅広い経験を持つITプロフェッショナルです。",
      "hero.cta1":"職務経験を見る","hero.cta2":"お問い合わせ","hero.meta1":"職務経験","hero.meta2":"DCSA CGPA / 4.00","hero.meta3":"日本語学習","hero.badge":"プロフィール","hero.note":"実務力 • 信頼性 • 幅広い経験",
      "about.title":"私について","about.lead":"IT、デジタル業務、日常の業務運営を組み合わせた実務型プロフェッショナルです。",
      "about.body":"ITサポート、WordPress開発、デジタルマーケティング、支店運営、教育、コンピューターを使用した事務業務などを経験しています。実務的な問題解決、整理された業務、使いやすいデジタル環境を大切にしています。",
      "about.point1":"テクノロジー","about.point1s":"ハードウェア、ソフトウェア、ネットワーク、プリンター、トラブル対応。",
      "about.point2":"Web・デジタル","about.point2s":"WordPress、Elementor、ターゲット型キャンペーン。",
      "about.point3":"人・業務運営","about.point3s":"顧客対応、教育、請求、在庫管理。",
      "experience.title":"職務経験","experience.lead":"IT、サービス、業務運営を軸とした実務経験。",
      "exp.computer":"データ入力、重要書類のファイリング・整理、記録管理、日常的なコンピューター業務を担当。",
      "exp.web":"WordPressサイトおよびポートフォリオサイトを制作し、レイアウトやUIをカスタマイズ。Webサイトの保守・更新および基本的なITサポートにも対応。",
      "exp.teacher":"6年生から10年生までの英語とICTを指導し、授業活動と学習を支援。Mojar Schoolは、恵まれない環境にある子どもたちなどへの教育支援で知られています。",
      "exp.marketing":"デジタル広告キャンペーンの企画・運用、オーディエンスターゲティング、有料広告、販売促進キャンペーン、効果確認と最適化を担当。",
      "exp.it":"ハードウェア・ソフトウェアの導入と技術サポート、ネットワークサポート、プリンター設定・トラブル対応、日常的なIT支援を担当。",
      "exp.branch":"POS操作、顧客対応、請求管理、商品在庫管理、支店の日常業務を担当。",
      "skills.title":"スキル","skills.lead":"実際の業務経験に基づく実務スキル。","skills.web":"Web開発","skills.it":"ITサポート","skills.digital":"デジタルマーケティング","skills.ops":"オフィス・業務運営",
      "education.title":"学歴","education.lead":"IT分野の専門資格を含む学歴。","education.journeyTitle":"DCSA 学習・学生生活",
      "certificates.title":"資格・研修","certificates.lead":"技術・職業研修の実績を視覚的に紹介。",
      "japanese.title":"日本語学習","japanese.lead":"JFT / A2を中心に日本語学習を進めています。","japanese.status":"現在学習中",
      "japanese.note":"長期的なキャリア形成の一環として日本語を学習しています。本ポートフォリオでは、公式JFT合格実績を主張していません。",
      "projects.title":"主な制作実績","projects.lead":"今後のWebサイト、ツール、ケーススタディを追加できるモジュール式セクションです。","projects.cardTitle":"プロジェクトは近日追加予定","projects.cardText":"WordPressサイト、Webサイト、ソフトウェア、ケーススタディを同じデザインシステムに追加できます。",
      "contact.title":"お問い合わせ","contact.lead":"採用担当者、企業、クライアント、キャリアの機会についてお気軽にご連絡ください。","contact.pending":"未追加",
      "footer.visitors":"ポートフォリオ閲覧数","footer.counterStatus":"カウンター準備完了","footer.rights":"All rights reserved."
    }
  };

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  let lastFocused = null;

  function setLanguage(lang) {
    const chosen = translations[lang] ? lang : "en";
    document.documentElement.lang = chosen === "ja" ? "ja" : "en";
    document.documentElement.dataset.lang = chosen;

    $$("[data-i18n]").forEach((el) => {
      const value = translations[chosen][el.dataset.i18n];
      if (typeof value === "string") el.textContent = value;
    });

    $$("[data-lang-switch]").forEach((button) => {
      const active = button.dataset.langSwitch === chosen;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    try { localStorage.setItem("nahid-lang", chosen); } catch (_) {}
  }

  function setupNavigation() {
    const nav = $("#primary-nav");
    const toggle = $(".menu-toggle");
    if (!nav || !toggle) return;

    const close = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", document.documentElement.lang === "ja" ? "メニューを閉じる" : "Close menu");
    };

    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open
        ? (document.documentElement.lang === "ja" ? "メニューを閉じる" : "Close menu")
        : (document.documentElement.lang === "ja" ? "メニューを開く" : "Open menu"));
    });

    $$(".nav a").forEach((link) => link.addEventListener("click", close));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  function setupScrollUI() {
    const progress = $("#site-progress");
    const topButton = $("#back-to-top");

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (progress) progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
      if (topButton) topButton.classList.toggle("is-visible", window.scrollY > 550);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function setupReveal() {
    const elements = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    elements.forEach((el) => observer.observe(el));
  }

  function setupModal() {
    const modal = $("#media-modal");
    const image = $("#modal-img");
    const caption = $("#modal-caption");
    if (!modal || !image || !caption) return;

    const close = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      image.removeAttribute("src");
      if (lastFocused) lastFocused.focus();
    };

    const open = (trigger) => {
      const src = trigger.dataset.img;
      if (!src) return;
      lastFocused = trigger;
      image.src = src;
      image.alt = trigger.dataset.title || "Portfolio preview";
      caption.textContent = trigger.dataset.title || "Portfolio preview";
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      $(".modal-close", modal)?.focus();
    };

    $$(".cert-open,.cert-image-btn").forEach((trigger) => {
      trigger.addEventListener("click", () => open(trigger));
    });
    $$("[data-close-modal]").forEach((trigger) => trigger.addEventListener("click", close));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) close();
    });
  }

  function setupYear() {
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  async function setupVisitorCounter() {
    // A GitHub Pages site cannot maintain a real global visitor count without
    // an external service/backend. Keep a safe local fallback until the user
    // configures their preferred counter endpoint.
    const countEl = $("#visitor-count");
    const statusEl = $("#visitor-status");
    if (!countEl || !statusEl) return;

    const configuredEndpoint = ""; // Add a serverless counter endpoint later.
    const localKey = "nahid-portfolio-local-visits";

    const showLocal = () => {
      let value = 0;
      try {
        value = Number.parseInt(localStorage.getItem(localKey) || "0", 10) + 1;
        localStorage.setItem(localKey, String(value));
      } catch (_) {
        value = 1;
      }
      countEl.textContent = value.toLocaleString();
      statusEl.textContent = document.documentElement.lang === "ja"
        ? "このブラウザでの閲覧数"
        : "Local browser views";
    };

    if (!configuredEndpoint) {
      showLocal();
      return;
    }

    try {
      const response = await fetch(configuredEndpoint, { method: "GET", cache: "no-store", credentials: "omit" });
      if (!response.ok) throw new Error("counter request failed");
      const data = await response.json();
      const count = Number(data.count ?? data.value ?? data?.data?.up_count);
      if (!Number.isFinite(count)) throw new Error("invalid counter response");
      countEl.textContent = count.toLocaleString();
      statusEl.textContent = document.documentElement.lang === "ja" ? "累計閲覧数" : "Global views";
    } catch (_) {
      showLocal();
    }
  }

  function setupLanguageButtons() {
    $$("[data-lang-switch]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
    });
  }

  function init() {
    setupLanguageButtons();
    setupNavigation();
    setupScrollUI();
    setupReveal();
    setupModal();
    setupYear();

    let saved = "en";
    try { saved = localStorage.getItem("nahid-lang") || "en"; } catch (_) {}
    setLanguage(saved);
    setupVisitorCounter();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

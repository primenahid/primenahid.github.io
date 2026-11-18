/* Nahid Hasan — Portfolio scripts (no dependencies) */
(() => {
  "use strict";
  document.documentElement.classList.add("js");

  /* ------------------------------------------------------------------
     Translations — edit text here. Keys match data-i18n in index.html.
     ------------------------------------------------------------------ */
  const T = {
    en: {
      "a11y.skip": "Skip to content",
      "nav.about": "About", "nav.experience": "Experience", "nav.skills": "Skills", "nav.education": "Education",
      "nav.certificates": "Certificates", "nav.japanese": "Japanese", "nav.contact": "Contact",

      "hero.status": "Open to new opportunities", "hero.founder": "Founder of EdQoR",
      "hero.title": "Mentor, HR professional & IT expert.",
      "hero.lead": "I mentor learners, manage HR & administration and solve IT problems — with hands-on experience across technical support, WordPress development, digital marketing and ICT teaching.",
      "hero.cta1": "Get in touch", "hero.cta2": "Save CV as PDF",
      "stats.since": "Working since", "stats.roles": "Professional roles", "stats.certs": "Certificates & trainings", "stats.jp": "Japanese (JLPT)",

      "about.title": "Technology, digital work and people — connected.",
      "about.body": "My experience combines IT support, WordPress development, digital marketing, branch operations, teaching and computer-based office work. I focus on practical problem-solving, organised workflows and useful digital experiences.",
      "about.location": "Based in Bangladesh",
      "about.study": "Bachelor of Social Science (Honours) & Master of Social Science", "about.jp": "JLPT N4 & JFT-Basic A2 certified",
      "about.p1": "Technology", "about.p1s": "Hardware, software, networking, printers and everyday troubleshooting.",
      "about.p2": "Web & Digital", "about.p2s": "WordPress, Elementor and audience-targeted ad campaigns.",
      "about.p3": "People & Operations", "about.p3s": "Customer support, teaching, billing and inventory workflows.",

      "exp.title": "From founder to IT, web, marketing and teaching.", "exp.founderBadge": "Founder", "job0.title": "Founder", "job0.text": "Founder of EdQoR.",
      "exp.lead": "Click any photo to view it full-size.",
      "exp.current": "Current",
      "job1.title": "HR & Admin", "job1.text": "Handled HR and administrative work — maintaining employee records, filing and organising important documents, data entry and day-to-day office administration.",
      "job2.title": "Web Developer", "job2.text": "Built WordPress and portfolio websites, customised layouts and interfaces, maintained live sites and handled basic IT support and troubleshooting.",
      "job3.title": "Assistant Teacher", "job3.text": "Taught English and ICT to Grades 6–10 and supported classroom activities. Mojar School is known for supporting the education of underprivileged children.",
      "job4.title": "Digital Marketer", "job4.text": "Planned and ran paid ad campaigns with audience targeting, built sales-focused campaigns and monitored performance to optimise results.",
      "job5.title": "IT Executive", "job5.text": "Installed and supported hardware and software, provided networking support, set up and fixed printers, and gave day-to-day technical assistance.",
      "job6.title": "Branch Manager", "job6.text": "Ran POS operations, customer support, billing, stock management and the branch's day-to-day operations.",

      "skills.title": "What I can help you with.", "skills.lead": "Practical skills, each backed by real workplace experience.",
      "skills.web": "Web Development", "skills.webs": "Build and maintain WordPress sites with clean, responsive layouts.",
      "skills.it": "IT Support", "skills.its": "Set up, troubleshoot and keep office machines and networks working.",
      "skills.digital": "Digital Marketing", "skills.digitals": "Plan targeted ad campaigns and optimise them from the numbers.",
      "skills.ops": "Office & Operations", "skills.opss": "Accurate data entry, records, billing and inventory management.",

      "edu.title": "Academic background with a dedicated IT diploma.",
      "edu.done": "Completed",
      "edu.bss": "Bachelor of Social Science (Honours)",
      "edu.dcsa": "Diploma in Computer Science (CSE)",
      "edu.mss": "Master of Social Science",

      "cert.title": "Training & certifications.", "cert.all": "All", "cert.it": "IT & Security", "cert.digital": "Marketing & Design", "cert.teach": "Teaching",

      "jp.title": "Japanese — JLPT N4 & JFT-Basic A2 certified.",
      "jp.lead": "I hold JLPT N4 and JFT-Basic A2 certifications and studied Japanese at BMET FLSC. I keep improving my Japanese as part of my long-term career path.",
      "jp.s3": "Former student",

      "nav.book": "Free Book", "hero.promo": "30-day JLPT N5 book",
      "book.title": "Learn Japanese from zero — free 30-day JLPT N5 book.",
      "book.lead": "A step-by-step Bengali + English guide I wrote for Bangladeshi learners: Hiragana, Katakana, greetings, self-introduction, numbers and time — with daily plans, weekly tests and a final Day-30 check.",
      "book.f1": "day study plan · 90 min/day", "book.f2": "Hiragana & Katakana charts",
      "book.f3": "layers: Japanese · Kana · Romaji · Bangla · English", "book.f4": "Weekly tests + answer key & progress tracker",
      "book.download": "Download free PDF", "book.read": "Read online", "book.pages": "pages", "book.peek": "Look inside",
      "contact.title": "Let's work together.",
      "contact.lead": "Recruiters, employers and clients — I'd be glad to hear about your role or project.",
      "contact.cta": "Send me an email", "contact.email": "Email", "contact.phone": "Phone",
      "footer.top": "Back to top",

      "ui.copied": "Copied to clipboard", "ui.copyFail": "Couldn't copy — please copy manually",
      "ui.menuOpen": "Open menu", "ui.menuClose": "Close menu", "ui.theme": "Toggle dark mode"
    },
    ja: {
      "a11y.skip": "本文へスキップ",
      "nav.about": "プロフィール", "nav.experience": "職務経歴", "nav.skills": "スキル", "nav.education": "学歴",
      "nav.certificates": "資格・研修", "nav.japanese": "日本語", "nav.contact": "お問い合わせ",

      "hero.status": "新しい機会を探しています", "hero.founder": "EdQoR 創業者",
      "hero.title": "メンター、人事のプロ、そしてITエキスパート。",
      "hero.lead": "学習者を指導し、人事・総務を担い、ITの課題を解決します。ITサポート、WordPress開発、デジタルマーケティング、ICT教育まで幅広い実務経験があります。",
      "hero.cta1": "お問い合わせ", "hero.cta2": "履歴書をPDFで保存",
      "stats.since": "職歴開始", "stats.roles": "職務経験", "stats.certs": "資格・研修", "stats.jp": "日本語（JLPT）",

      "about.title": "テクノロジー、デジタル、そして人をつなぐ。",
      "about.body": "ITサポート、WordPress開発、デジタルマーケティング、支店運営、教育、コンピューターを使った事務業務などを経験してきました。実践的な問題解決、整理された業務フロー、使いやすいデジタル環境づくりを大切にしています。",
      "about.location": "バングラデシュ在住",
      "about.study": "社会科学学士（優等）・社会科学修士", "about.jp": "JLPT N4・JFT-Basic A2 取得",
      "about.p1": "テクノロジー", "about.p1s": "ハードウェア、ソフトウェア、ネットワーク、プリンター、日常的なトラブル対応。",
      "about.p2": "Web・デジタル", "about.p2s": "WordPress、Elementor、ターゲティング広告の運用。",
      "about.p3": "人・業務運営", "about.p3s": "顧客対応、教育、請求処理、在庫管理。",

      "exp.title": "創業者として、そしてIT・Web・マーケティング・教育の現場で。", "exp.founderBadge": "創業者", "job0.title": "創業者", "job0.text": "EdQoRの創業者。",
      "exp.lead": "写真をクリックすると拡大表示されます。",
      "exp.current": "現職",
      "job1.title": "人事・総務", "job1.text": "従業員記録の管理、重要書類のファイリング・整理、データ入力、日常的な総務業務など、人事・総務全般を担当。",
      "job2.title": "Webデベロッパー", "job2.text": "WordPressサイトやポートフォリオサイトを制作し、レイアウトやUIをカスタマイズ。サイト保守と基本的なITサポートも担当。",
      "job3.title": "アシスタントティーチャー", "job3.text": "6〜10年生に英語とICTを指導し、授業活動を支援。Mojar Schoolは恵まれない環境の子どもたちへの教育支援で知られています。",
      "job4.title": "デジタルマーケター", "job4.text": "ターゲティングを活用した有料広告キャンペーンを企画・運用し、販売促進キャンペーンの作成と効果測定・最適化を担当。",
      "job5.title": "ITエグゼクティブ", "job5.text": "ハードウェア・ソフトウェアの導入とサポート、ネットワーク対応、プリンターの設定・修理、日常的な技術支援を担当。",
      "job6.title": "支店マネージャー", "job6.text": "POS操作、顧客対応、請求管理、在庫管理、支店の日常業務を担当。",

      "skills.title": "お手伝いできること。", "skills.lead": "すべて実際の職務経験に裏付けられた実践的なスキルです。",
      "skills.web": "Web開発", "skills.webs": "見やすくレスポンシブなWordPressサイトの制作と保守。",
      "skills.it": "ITサポート", "skills.its": "オフィスのPCやネットワークの設定・トラブル対応・安定運用。",
      "skills.digital": "デジタルマーケティング", "skills.digitals": "ターゲティング広告の企画と、数値に基づく改善。",
      "skills.ops": "事務・業務運営", "skills.opss": "正確なデータ入力、記録管理、請求処理、在庫管理。",

      "edu.title": "IT分野の専門ディプロマを含む学歴。",
      "edu.done": "修了",
      "edu.bss": "社会科学学士（優等）",
      "edu.dcsa": "コンピューターサイエンス・ディプロマ（CSE）",
      "edu.mss": "社会科学修士",

      "cert.title": "資格・研修。", "cert.all": "すべて", "cert.it": "IT・セキュリティ", "cert.digital": "マーケティング・デザイン", "cert.teach": "教育",

      "jp.title": "日本語 — JLPT N4・JFT-Basic A2 取得。",
      "jp.lead": "JLPT N4とJFT-Basic A2を取得し、BMET FLSCで日本語を学びました。長期的なキャリアのために、今も日本語力を磨き続けています。",
      "jp.s3": "元受講生",

      "nav.book": "無料教材", "hero.promo": "30日間 JLPT N5 無料教材",
      "book.title": "ゼロから日本語 — 30日間 JLPT N5 無料テキスト。",
      "book.lead": "バングラデシュの学習者のために書いた、ベンガル語＋英語のステップ式ガイドです。ひらがな、カタカナ、あいさつ、自己紹介、数字と時間を、毎日の学習計画・週ごとのテスト・30日目の総まとめテストで学べます。",
      "book.f1": "日間の学習プラン・1日90分", "book.f2": "ひらがな・カタカナ表",
      "book.f3": "層：日本語・かな・ローマ字・ベンガル語・英語", "book.f4": "週ごとのテスト＋解答・進捗表",
      "book.download": "無料PDFをダウンロード", "book.read": "オンラインで読む", "book.pages": "ページ", "book.peek": "中身を見る",
      "contact.title": "一緒に働きましょう。",
      "contact.lead": "採用担当者さま、企業さま、クライアントさま — お仕事やプロジェクトのご相談をお待ちしています。",
      "contact.cta": "メールを送る", "contact.email": "メール", "contact.phone": "電話",
      "footer.top": "トップへ戻る",

      "ui.copied": "コピーしました", "ui.copyFail": "コピーできませんでした",
      "ui.menuOpen": "メニューを開く", "ui.menuClose": "メニューを閉じる", "ui.theme": "ダークモード切替"
    }
  };

  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
  };
  let lang = "en";
  const t = (key) => (T[lang] && T[lang][key]) || T.en[key] || "";


  /* ---------- Animations ---------- */
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Hero title: word-by-word rise
  function splitWords(el) {
    const text = el.textContent;
    let parts;
    if (window.Intl && Intl.Segmenter && document.documentElement.lang === "ja") {
      parts = [];
      Array.from(new Intl.Segmenter("ja", { granularity: "word" }).segment(text), (x) => x.segment).forEach((seg) => {
        const prev = parts[parts.length - 1] || "";
        if (prev && (/^[、。，．・！？」）\s]+$/.test(seg) || (/[A-Za-z]$/.test(prev) && /^[\u30A0-\u30FF]/.test(seg)))) parts[parts.length - 1] += seg; else parts.push(seg);
      });
    } else {
      parts = text.split(/(\s+)/);
    }
    el.textContent = "";
    el.setAttribute("aria-label", text);
    let i = 0;
    parts.forEach((p) => {
      if (/^\s+$/.test(p)) { el.appendChild(document.createTextNode(p)); return; }
      const w = document.createElement("span");
      w.className = "w" + (/^(Mentor|メンター)/.test(p) ? " w--accent" : "") + (/(expert|エキスパート)/.test(p) ? " w--mark" : "");
      w.setAttribute("aria-hidden", "true");
      const inner = document.createElement("span");
      inner.textContent = p;
      inner.style.animationDelay = `${120 + i++ * 70}ms`;
      w.appendChild(inner);
      el.appendChild(w);
    });
  }

  // Count-up numbers
  function initCounters() {
    const els = $$("[data-count]");
    const run = (el) => {
      const to = +el.dataset.count, from = +(el.dataset.from || 0), dur = 1400, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(from + (to - from) * e);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (reduced || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((en) => en.forEach((x) => {
      if (x.isIntersecting) { run(x.target); io.unobserve(x.target); }
    }), { threshold: 0.6 });
    els.forEach((el) => { el.textContent = el.dataset.from || 0; io.observe(el); });
  }

  // Spotlight glow that follows the pointer on cards
  function initSpotlight() {
    if (!finePointer || reduced) return;
    $$(".focus, .job, .skill, .cert, .edu__item, .contact__list li, .stats").forEach((el) => {
      el.classList.add("spot");
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  }

  // 3D tilt on the book + portrait
  function initTilt() {
    if (!finePointer || reduced) return;
    $$(".book3d, .portrait, .skill").forEach((el) => {
      const max = el.classList.contains("book3d") ? 14 : el.classList.contains("skill") ? 8 : 6;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
        el.style.setProperty("--sx", `${(x + 0.5) * 100}%`);
        el.style.setProperty("--sy", `${(y + 0.5) * 100}%`);
        el.classList.add("is-tilting");
      });
      el.addEventListener("pointerleave", () => {
        el.style.removeProperty("--rx"); el.style.removeProperty("--ry");
        el.classList.remove("is-tilting");
      });
    });
  }

  // Parallax on hero kanji
  function initParallax() {
    if (reduced) return;
    const k = $(".hero__kanji");
    if (!k) return;
    addEventListener("scroll", () => {
      if (scrollY < innerHeight) k.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
    }, { passive: true });
  }

  // Falling sakura petals (canvas, only while visible)
  function initPetals() {
    if (reduced) return;
    $$("canvas.petals").forEach((cv) => {
      const ctx = cv.getContext("2d");
      const host = cv.parentElement;
      let w = 0, h = 0, petals = [], raf = 0, running = false;
      const dpr = Math.min(2, devicePixelRatio || 1);
      const count = () => Math.round(Math.min(34, Math.max(12, w / 40)));
      const make = (y) => ({
        x: Math.random() * w, y: y ?? Math.random() * h, s: 6 + Math.random() * 8,
        vy: 0.35 + Math.random() * 0.7, vx: -0.2 + Math.random() * 0.6,
        a: Math.random() * Math.PI * 2, va: -0.02 + Math.random() * 0.04, sway: Math.random() * 100,
        o: 0.35 + Math.random() * 0.5
      });
      const size = () => {
        w = host.clientWidth; h = host.clientHeight;
        cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        petals = Array.from({ length: count() }, () => make());
      };
      const light = cv.classList.contains("petals--jp");
      const draw = (p) => {
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.globalAlpha = p.o;
        ctx.fillStyle = light ? "#ffffff" : "#f4a7b5";
        ctx.beginPath();
        ctx.moveTo(0, -p.s / 2);
        ctx.bezierCurveTo(p.s / 2, -p.s / 2, p.s / 2, p.s / 3, 0, p.s / 2);
        ctx.bezierCurveTo(-p.s / 2, p.s / 3, -p.s / 2, -p.s / 2, 0, -p.s / 2);
        ctx.fill(); ctx.restore();
      };
      const frame = (t) => {
        ctx.clearRect(0, 0, w, h);
        petals.forEach((p) => {
          p.y += p.vy; p.x += p.vx + Math.sin((t / 1000) + p.sway) * 0.35; p.a += p.va;
          if (p.y > h + 20 || p.x > w + 20 || p.x < -20) Object.assign(p, make(-20));
          draw(p);
        });
        raf = requestAnimationFrame(frame);
      };
      size();
      addEventListener("resize", () => { clearTimeout(cv._t); cv._t = setTimeout(size, 200); });
      new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !running) { running = true; raf = requestAnimationFrame(frame); }
        else if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
      }).observe(host);
    });
  }


  /* ---------- Advanced motion ---------- */
  function initLoader() {
    const el = $("#loader"), root = document.documentElement;
    if (!el) return;
    if (root.classList.contains("no-loader")) { el.remove(); return; }
    const done = () => {
      if (!root.classList.contains("is-loading")) return;
      root.classList.remove("is-loading");
      el.classList.add("is-done");
      try { sessionStorage.setItem("nh-intro", "1"); } catch (_) {}
      setTimeout(() => el.remove(), 900);
    };
    const start = performance.now();
    const finish = () => setTimeout(done, Math.max(0, 1100 - (performance.now() - start)));
    if (document.readyState === "complete") finish(); else addEventListener("load", finish, { once: true });
    setTimeout(done, 2600); // safety
    el.addEventListener("click", done);
  }

  function initCursor() {
    const c = $(".cursor");
    if (!c) return;
    if (!finePointer || reduced) { c.remove(); return; }
    const dot = $(".cursor__dot", c), ring = $(".cursor__ring", c);
    let x = -100, y = -100, rx = -100, ry = -100, shown = false;
    addEventListener("pointermove", (e) => {
      x = e.clientX; y = e.clientY;
      if (!shown) { shown = true; rx = x; ry = y; c.classList.add("is-on"); }
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }, { passive: true });
    document.addEventListener("pointerleave", () => c.classList.remove("is-on"));
    document.addEventListener("pointerenter", () => shown && c.classList.add("is-on"));
    document.addEventListener("pointerover", (e) => {
      const t = e.target.closest("a, button, [data-full], .book3d");
      c.classList.toggle("is-hover", !!t);
      c.classList.toggle("is-view", !!(t && (t.matches("[data-full]") || t.matches(".book3d"))));
    });
    document.addEventListener("pointerdown", () => c.classList.add("is-down"));
    document.addEventListener("pointerup", () => c.classList.remove("is-down"));
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  function initMagnetic() {
    if (!finePointer || reduced) return;
    $$(".btn, .hero__social a, .promo, .nav__cta, #theme-toggle").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  function initNavIndicator() {
    const nav = $("#nav"), ind = $(".nav__indicator", nav);
    if (!nav || !ind) return;
    const links = $$("a:not(.nav__cta)", nav);
    const desktop = () => matchMedia("(min-width: 961px)").matches;
    const moveTo = (a) => {
      if (!a || !desktop()) { ind.style.opacity = "0"; return; }
      ind.style.opacity = "1";
      ind.style.width = `${a.offsetWidth}px`;
      ind.style.transform = `translateX(${a.offsetLeft}px)`;
    };
    nav.classList.add("has-indicator");
    links.forEach((a) => a.addEventListener("pointerenter", () => moveTo(a)));
    nav.addEventListener("pointerleave", () => moveTo($("a.is-active:not(.nav__cta)", nav)));
    new MutationObserver(() => moveTo($("a.is-active:not(.nav__cta)", nav)))
      .observe(nav, { subtree: true, attributes: true, attributeFilter: ["class"] });
    addEventListener("resize", () => moveTo($("a.is-active:not(.nav__cta)", nav)));
    $$("a", nav).forEach((a, i) => a.style.setProperty("--i", i));
  }

  function initTimeline() {
    const tl = $(".timeline"), fill = $(".timeline__fill");
    if (!tl || !fill) return;
    const jobs = $$(".job", tl);
    let ticking = false;
    const update = () => {
      const r = tl.getBoundingClientRect(), mid = innerHeight * 0.55;
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      fill.style.transform = `scaleY(${p})`;
      jobs.forEach((j) => j.classList.toggle("is-lit", j.getBoundingClientRect().top < mid));
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  function initToTop() {
    const btn = $("#to-top"), bar = $(".to-top__bar", btn || document);
    if (!btn || !bar) return;
    const len = 2 * Math.PI * 21;
    bar.style.strokeDasharray = len;
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? scrollY / max : 0;
      bar.style.strokeDashoffset = len * (1 - p);
      btn.classList.toggle("is-visible", scrollY > 700);
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- Language ---------- */
  function setLanguage(next) {
    lang = T[next] ? next : "en";
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      const v = T[lang][el.dataset.i18n];
      if (typeof v === "string") el.textContent = v;
    });
    $$("[data-split]").forEach(splitWords);
    $$("[data-lang-switch]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langSwitch === lang)));
    $("#theme-toggle")?.setAttribute("aria-label", t("ui.theme"));
    const menu = $(".menu-btn");
    if (menu) menu.setAttribute("aria-label", menu.getAttribute("aria-expanded") === "true" ? t("ui.menuClose") : t("ui.menuOpen"));
    store.set("nh-lang", lang);
  }

  function initLanguage() {
    $$("[data-lang-switch]").forEach((b) => b.addEventListener("click", () => setLanguage(b.dataset.langSwitch)));
    const fromUrl = new URLSearchParams(location.search).get("lang");
    const saved = store.get("nh-lang");
    const browser = (navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en";
    setLanguage(fromUrl || saved || browser);
  }

  /* ---------- Theme ---------- */
  function initTheme() {
    const btn = $("#theme-toggle");
    if (!btn) return;
    const root = document.documentElement;
    const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    btn.addEventListener("click", (e) => {
      const next = isDark() ? "light" : "dark";
      const apply = () => { root.dataset.theme = next; store.set("nh-theme", next); };
      if (!document.startViewTransition || reduced) { apply(); return; }
      const r = btn.getBoundingClientRect();
      const x = e.clientX || r.left + r.width / 2, y = e.clientY || r.top + r.height / 2;
      const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      document.startViewTransition(apply).ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
          { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)", pseudoElement: "::view-transition-new(root)" }
        );
      }).catch(() => {});
    });
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const nav = $("#nav"), btn = $(".menu-btn"), header = $(".header");
    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? t("ui.menuClose") : t("ui.menuOpen"));
    };
    btn?.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    $$("a", nav).forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    document.addEventListener("click", (e) => {
      if (nav.classList.contains("is-open") && !nav.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });

    // Scroll progress + header border
    const bar = $("#progress");
    let ticking = false;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
      header.classList.toggle("is-scrolled", scrollY > 8);
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();

    // Active section highlight
    if (!("IntersectionObserver" in window)) return;
    const links = new Map($$("a[href^='#']", nav).map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.classList.remove("is-active"));
        links.get(en.target.id)?.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { const t = en.target; t.classList.add("is-visible"); io.unobserve(t); setTimeout(() => { t.style.transitionDelay = ""; }, 1500); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e) => {
      const sibs = Array.from(e.parentElement.children).filter((c) => c.classList.contains("reveal"));
      const i = sibs.indexOf(e);
      if (i > 0) e.style.transitionDelay = `${Math.min(i, 6) * 90}ms`;
      io.observe(e);
    });
  }

  /* ---------- Lightbox with gallery navigation ---------- */
  function initLightbox() {
    const box = $("#lightbox"), img = $("#lb-img"), cap = $("#lb-caption"), count = $("#lb-count");
    let items = [], index = 0, opener = null, touchX = null;

    const visibleOnly = (list) => list.filter((el) => !el.closest(".cert.is-hidden"));
    const show = (i) => {
      index = (i + items.length) % items.length;
      const el = items[index];
      img.src = el.dataset.full;
      img.alt = el.querySelector("img")?.alt || el.dataset.caption || "";
      cap.textContent = el.dataset.caption || "";
      count.textContent = items.length > 1 ? `${index + 1} / ${items.length}` : "";
      // Preload neighbour
      if (items.length > 1) { const n = new Image(); n.src = items[(index + 1) % items.length].dataset.full; }
    };
    const open = (el) => {
      opener = el;
      items = visibleOnly($$(`[data-group="${el.dataset.group}"]`));
      box.classList.toggle("is-single", items.length < 2);
      box.hidden = false;
      document.body.classList.add("no-scroll");
      show(items.indexOf(el));
      $(".lightbox__close", box).focus();
    };
    const close = () => {
      box.hidden = true;
      document.body.classList.remove("no-scroll");
      img.src = "data:,";
      opener?.focus();
    };

    $$("[data-full]").forEach((el) => el.addEventListener("click", () => open(el)));
    box.addEventListener("click", (e) => {
      const action = e.target.closest("[data-lb]")?.dataset.lb;
      if (action === "close" || e.target === box || e.target.classList.contains("lightbox__figure")) close();
      else if (action === "prev") show(index - 1);
      else if (action === "next") show(index + 1);
    });
    document.addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(index - 1);
      else if (e.key === "ArrowRight") show(index + 1);
      else if (e.key === "Tab") {
        const f = $$("button", box).filter((b) => getComputedStyle(b).visibility !== "hidden");
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    box.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50 && items.length > 1) show(index + (dx < 0 ? 1 : -1));
      touchX = null;
    });
  }

  /* ---------- Certificate filters ---------- */
  function initFilters() {
    const buttons = $$("[data-filter]");
    buttons.forEach((b) => b.addEventListener("click", () => {
      const f = b.dataset.filter;
      buttons.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      const apply = () => $$(".cert").forEach((c) => c.classList.toggle("is-hidden", f !== "all" && c.dataset.cat !== f));
      if (document.startViewTransition && !reduced) document.startViewTransition(apply);
      else apply();
    }));
    $$(".cert").forEach((c, i) => { c.style.viewTransitionName = `cert-${i}`; });
  }

  /* ---------- Copy + toast ---------- */
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("is-visible"), 2200);
  }
  function initCopy() {
    $$("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy); toast(t("ui.copied")); }
      catch (_) { toast(t("ui.copyFail")); }
    }));
  }

  /* ---------- Print CV ---------- */
  function initPrint() {
    $$("[data-print]").forEach((b) => b.addEventListener("click", () => {
      $$(".reveal").forEach((e) => e.classList.add("is-visible"));
      window.print();
    }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initTheme();
    initNav();
    initReveal();
    initLightbox();
    initFilters();
    initCopy();
    initPrint();
    initCounters();
    initSpotlight();
    initTilt();
    initParallax();
    initPetals();
    initLoader();
    initCursor();
    initMagnetic();
    initNavIndicator();
    initTimeline();
    initToTop();
    const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  });
})();

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

      "hero.status": "Open to new opportunities", "hero.founder": "Founder of EdQoR Academy",
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

      "exp.title": "Leadership, HR, operations, IT and teaching roles.", "exp.founderBadge": "Founder", "job0.title": "Founder", "job0.text": "Founded EdQoR Academy to make Japanese language learning practical and accessible for Bangladeshi learners — including the free 30-day JLPT N5 foundation book.",
      "exp.lead": "Click any photo to view it full-size.",
      "exp.current": "Current",
      "job1.date": "2026 – July 2026", "job1.title": "Operations Executive", "job1.text": "Supported day-to-day operations, HR and administration — maintaining employee records, filing and organising important documents, data entry and keeping office workflows running smoothly.",
      "job2.title": "Web Developer", "job2.text": "Built WordPress and portfolio websites, customised layouts and interfaces, maintained live sites and handled basic IT support and troubleshooting.",
      "job3.title": "ICT Teacher & Trainer", "job3.text": "Taught English and ICT to Grades 6–10 and supported classroom activities. Mojar School is known for supporting the education of underprivileged children.",
      "job4.title": "Digital Marketer", "job4.text": "Planned and ran paid ad campaigns with audience targeting, built sales-focused campaigns and monitored performance to optimise results.",
      "job5.title": "IT Executive & Hardware Expert", "job5.text": "Installed and supported hardware and software, provided networking support, set up and fixed printers, and gave day-to-day technical assistance.",
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

      "cert.title": "Training & certifications.", "cert.all": "All", "cert.it": "IT & Security", "cert.digital": "Marketing & Design", "cert.teach": "Teaching", "cert.lang": "Languages", "cert.mgmt": "Management", "ven.role": "Founder & Chairman", "cert.verify": "Verify",

      "jp.title": "Japanese — JLPT N4 & JFT-Basic A2 certified.",
      "jp.lead": "I hold JLPT N4 and JFT-Basic A2 certifications and studied Japanese at BMET FLSC. I keep improving my Japanese as part of my long-term career path.",
      "jp.s3": "Former student",

      "nav.book": "Free Book", "hero.promo": "30-day JLPT N5 book", "hero.chipD": "2 companies · 8 roles",
      "book.title": "Learn Japanese from zero — free 30-day JLPT N5 book.",
      "book.lead": "A step-by-step Bengali + English guide I wrote for Bangladeshi learners: Hiragana, Katakana, greetings, self-introduction, numbers and time — with daily plans, weekly tests and a final Day-30 check.",
      "book.f1": "day study plan · 90 min/day", "book.f2": "Hiragana & Katakana charts",
      "book.f3": "layers: Japanese · Kana · Romaji · Bangla · English", "book.f4": "Weekly tests + answer key & progress tracker",
      "book.download": "Download free PDF", "book.read": "Read online", "book.pages": "pages", "book.peek": "Look inside",
      "form.name": "Name", "form.wa": "WhatsApp", "form.optional": "(optional)", "form.waPh": "Number or username",
      "form.email": "Email", "form.desc": "Description", "form.descPh": "Tell me about your role, project or question…",
      "form.send": "Send message", "form.sending": "Sending…", "form.ok": "Thank you! Your message has been sent — I'll get back to you soon.",
      "form.invalid": "Please fill in your name, a valid email and a description.",
      "form.fallback": "Couldn't send directly — your email app is opening with the message ready to send.",
      "nav.ventures": "Ventures", "exp.present": "Present", "ven.founded": "Founded", "hero.founder2": "Founder of Projukti Bari",
      "ven.title": "Two companies I lead.", "ven.lead": "Education and digital services — built to help learners and businesses in Bangladesh grow.",
      "ven.edqTag": "Education · Japanese language", "ven.edqText": "Japanese language learning for Bangladeshi learners — publisher of the free 30-day JLPT N5 foundation book.",
      "ven.pbTag": "Digital agency", "ven.pbText": "Custom WordPress website development, genuine software licenses, WordPress themes & plugins and premium online tools — with fast delivery and after-sale support.",
      "ven.book": "Free N5 book",
      "jobpb.title": "Founder & Digital Agency Lead", "jobpb.text": "Founder of Projukti Bari — a digital agency offering custom WordPress website development, genuine software licenses, WordPress themes & plugins and premium online tools.",
      "rev.eyebrow": "Reviews", "rev.title": "What my students & clients say.", 
      "form.type": "I'm sending", "form.typeInq": "An inquiry", "form.typeRev": "A review / testimonial",
      "form.descPhRev": "Your review: how do you know me, and what helped you most?",
      "jobsb.title": "CMO — Chief Monitoring Officer", "jobsb.text": "Part of the leadership team at Scholars' Base, an English-language learning centre in Bangladesh offering live online IELTS preparation, Spoken English, Kids English and Phonics programs — overseeing day-to-day operations and quality to help learners “learn today and lead tomorrow”.",
      "jobgi.title": "HR Officer", "jobgi.text": "Handling the HR function — recruitment and onboarding, employee records and documentation, attendance and leave tracking, and supporting a healthy, productive workplace.",
      "rev.write": "Write a review", "rev.empty": "Studied or worked with me? Be one of the first to share your experience.",
      "rev.formTitle": "Share your experience", "rev.formIntro": "Your review helps others know what it's like to learn or work with me. It will appear on this site after a quick check.",
      "rev.photo": "Add your photo", "rev.photoHint": "Optional · JPG/PNG · max 5 MB", "rev.photoRemove": "Remove", "rev.photoBad": "Please choose a JPG, PNG or WebP image under 5 MB.",
      "rev.role": "Who are you?", "rev.rolePh": "e.g. Student, Mojar School", "rev.rating": "Rating", "rev.text": "Your review",
      "rev.private": "(private, not shown)", "rev.consent": "I agree that my name, photo and review may be shown on this website.",
      "rev.submit": "Submit review", "rev.invalid": "Please add your name, who you are, a review (at least 15 characters) and tick the consent box.",
      "rev.ok": "Thank you! Your review was saved and will appear after approval.", "rev.okEmail": "Thank you! Your review has been sent to Nahid.", "rev.fail": "Sorry, it couldn't be sent. Please try again or email primenahid@gmail.com.",
      "sk.teach.t": "Academic Teaching — English & ICT",
      "sk.teach.s": "SSC & HSC level",
      "sk.teach.p": "I teach English and ICT for SSC and HSC students — clear explanations, exam-focused practice and patient one-to-one support, built on years of classroom experience.",
      "sk.jp.t": "Japanese Language Trainer — N5 & N4",
      "sk.jp.s": "JLPT N5 · N4",
      "sk.jp.p": "I train beginners from zero up to JLPT N5 and N4 — hiragana, katakana, grammar, vocabulary and real-life conversation — with a structured, step-by-step plan.",
      "sk.hr.t": "HR Management",
      "sk.hr.s": "People & operations",
      "sk.hr.p": "I handle the full HR cycle — recruitment and onboarding, employee records, attendance and leave, documentation and day-to-day people operations.",
      "sk.ai.t": "AI Automation — Facebook & Website",
      "sk.ai.s": "Save time, never miss a lead",
      "sk.ai.p": "I set up AI-powered automation for Facebook pages and websites — automatic replies, lead capture and simple workflows — so businesses respond faster and save hours every week.",
      "sk.web.t": "Web Development — Front-end",
      "sk.web.s": "Design & development",
      "sk.web.p": "I design and build fast, responsive websites — from clean layouts and UI to front-end code and WordPress sites — like the portfolio you are viewing now.",
      "sk.proof": "Where I've used it",
      "sk.also": "Also experienced in",
      "contact.title": "Let's work together.",
      "contact.lead": "Recruiters, employers and clients — I'd be glad to hear about your role or project.",
      "contact.cta": "Send me an email", "contact.email": "Email", "contact.direct": "Or reach me directly", "contact.langs": "I speak", "contact.wa": "Username",
      "footer.top": "Back to top",

      "ui.copied": "Copied to clipboard", "ui.copyFail": "Couldn't copy — please copy manually",
      "ui.menuOpen": "Open menu", "ui.menuClose": "Close menu", "ui.theme": "Toggle dark mode"
    },
    ja: {
      "a11y.skip": "本文へスキップ",
      "nav.about": "プロフィール", "nav.experience": "職務経歴", "nav.skills": "スキル", "nav.education": "学歴",
      "nav.certificates": "資格・研修", "nav.japanese": "日本語", "nav.contact": "お問い合わせ",

      "hero.status": "新しい機会を探しています", "hero.founder": "EdQoR Academy 創業者",
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

      "exp.title": "経営・人事・業務運営・IT・教育の職務経歴。", "exp.founderBadge": "創業者", "job0.title": "創業者", "job0.text": "バングラデシュの学習者が実践的に日本語を学べるよう EdQoR Academy を創業。30日間 JLPT N5 無料テキストも提供しています。",
      "exp.lead": "写真をクリックすると拡大表示されます。",
      "exp.current": "現職",
      "job1.date": "2026年 – 2026年7月", "job1.title": "オペレーションズ・エグゼクティブ", "job1.text": "日常業務の運営、人事・総務を担当。従業員記録の管理、重要書類のファイリング・整理、データ入力を行い、オフィス業務を円滑に回しました。",
      "job2.title": "Webデベロッパー", "job2.text": "WordPressサイトやポートフォリオサイトを制作し、レイアウトやUIをカスタマイズ。サイト保守と基本的なITサポートも担当。",
      "job3.title": "ICT講師・トレーナー", "job3.text": "6〜10年生に英語とICTを指導し、授業活動を支援。Mojar Schoolは恵まれない環境の子どもたちへの教育支援で知られています。",
      "job4.title": "デジタルマーケター", "job4.text": "ターゲティングを活用した有料広告キャンペーンを企画・運用し、販売促進キャンペーンの作成と効果測定・最適化を担当。",
      "job5.title": "ITエグゼクティブ・ハードウェア専門", "job5.text": "ハードウェア・ソフトウェアの導入とサポート、ネットワーク対応、プリンターの設定・修理、日常的な技術支援を担当。",
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

      "cert.title": "資格・研修。", "cert.all": "すべて", "cert.it": "IT・セキュリティ", "cert.digital": "マーケティング・デザイン", "cert.teach": "教育", "cert.lang": "語学", "cert.mgmt": "マネジメント", "ven.role": "創業者・会長", "cert.verify": "認証を確認",

      "jp.title": "日本語 — JLPT N4・JFT-Basic A2 取得。",
      "jp.lead": "JLPT N4とJFT-Basic A2を取得し、BMET FLSCで日本語を学びました。長期的なキャリアのために、今も日本語力を磨き続けています。",
      "jp.s3": "元受講生",

      "nav.book": "無料教材", "hero.promo": "30日間 JLPT N5 無料教材", "hero.chipD": "2社経営 · 8職歴",
      "book.title": "ゼロから日本語 — 30日間 JLPT N5 無料テキスト。",
      "book.lead": "バングラデシュの学習者のために書いた、ベンガル語＋英語のステップ式ガイドです。ひらがな、カタカナ、あいさつ、自己紹介、数字と時間を、毎日の学習計画・週ごとのテスト・30日目の総まとめテストで学べます。",
      "book.f1": "日間の学習プラン・1日90分", "book.f2": "ひらがな・カタカナ表",
      "book.f3": "層：日本語・かな・ローマ字・ベンガル語・英語", "book.f4": "週ごとのテスト＋解答・進捗表",
      "book.download": "無料PDFをダウンロード", "book.read": "オンラインで読む", "book.pages": "ページ", "book.peek": "中身を見る",
      "form.name": "お名前", "form.wa": "WhatsApp", "form.optional": "（任意）", "form.waPh": "番号またはユーザー名",
      "form.email": "メールアドレス", "form.desc": "ご用件", "form.descPh": "募集内容・プロジェクト・ご質問などをご記入ください…",
      "form.send": "送信する", "form.sending": "送信中…", "form.ok": "ありがとうございます！メッセージを送信しました。折り返しご連絡します。",
      "form.invalid": "お名前、正しいメールアドレス、ご用件をご入力ください。",
      "form.fallback": "直接送信できなかったため、メールアプリを開きます。そのまま送信してください。",
      "nav.ventures": "事業", "exp.present": "現在", "ven.founded": "創業", "hero.founder2": "Projukti Bari 創業者",
      "ven.title": "私が率いる2つの会社。", "ven.lead": "教育とデジタルサービスで、バングラデシュの学習者と企業の成長を支えています。",
      "ven.edqTag": "教育・日本語", "ven.edqText": "バングラデシュの学習者のための日本語教育。30日間 JLPT N5 無料テキストの発行元です。",
      "ven.pbTag": "デジタルエージェンシー", "ven.pbText": "WordPressサイト制作、正規ソフトウェアライセンス、WordPressテーマ・プラグイン、各種プレミアムツールを提供。迅速な納品とアフターサポートが強みです。",
      "ven.book": "N5 無料テキスト",
      "jobpb.title": "創業者・デジタルエージェンシー代表", "jobpb.text": "Projukti Bariの創業者。WordPressサイト制作、正規ソフトウェアライセンス、テーマ・プラグイン、プレミアムツールを提供するデジタルエージェンシーです。",
      "rev.eyebrow": "レビュー", "rev.title": "受講生・クライアントの声。", 
      "form.type": "送信内容", "form.typeInq": "お問い合わせ", "form.typeRev": "レビュー・推薦の言葉",
      "form.descPhRev": "レビュー：私との関係と、特に役立ったことをお書きください。",
      "jobsb.title": "CMO（チーフ・モニタリング・オフィサー）", "jobsb.text": "バングラデシュの英語教育機関 Scholars' Base の経営メンバー。IELTS対策、スピーキング、キッズ英語、フォニックスなどのオンライン講座を提供しており、日々の運営と品質管理を担当しています。",
      "jobgi.title": "人事担当（HRオフィサー）", "jobgi.text": "採用・入社手続き、従業員記録と書類管理、勤怠・休暇管理など人事業務全般を担当し、働きやすい職場づくりを支えています。",
      "rev.write": "レビューを書く", "rev.empty": "一緒に学んだ・働いた方は、ぜひ最初のレビューをお寄せください。",
      "rev.formTitle": "あなたの体験を共有", "rev.formIntro": "レビューは、私と学ぶ・働くとどうなのかを他の方に伝える助けになります。確認後、このサイトに掲載されます。",
      "rev.photo": "写真を追加", "rev.photoHint": "任意・JPG/PNG・5MBまで", "rev.photoRemove": "削除", "rev.photoBad": "5MB以下のJPG、PNG、WebP画像を選択してください。",
      "rev.role": "あなたについて", "rev.rolePh": "例：Mojar School の生徒", "rev.rating": "評価", "rev.text": "レビュー",
      "rev.private": "（非公開）", "rev.consent": "名前・写真・レビューをこのサイトに掲載することに同意します。",
      "rev.submit": "レビューを送信", "rev.invalid": "お名前、ご関係、レビュー（15文字以上）を入力し、同意にチェックしてください。",
      "rev.ok": "ありがとうございます！レビューを保存しました。承認後に掲載されます。", "rev.okEmail": "ありがとうございます！レビューを送信しました。", "rev.fail": "送信できませんでした。もう一度お試しいただくか、primenahid@gmail.com までご連絡ください。",
      "sk.teach.t": "学業指導 — 英語・ICT",
      "sk.teach.s": "SSC・HSCレベル",
      "sk.teach.p": "SSC・HSCの学生に英語とICTを指導しています。わかりやすい説明、試験対策の演習、丁寧な個別サポートを、長年の教室経験をもとに提供します。",
      "sk.jp.t": "日本語講師 — N5・N4",
      "sk.jp.s": "JLPT N5・N4",
      "sk.jp.p": "ゼロから JLPT N5・N4 レベルまで指導します。ひらがな・カタカナ、文法、語彙、日常会話を、段階的な学習プランで学べます。",
      "sk.hr.t": "人事マネジメント",
      "sk.hr.s": "人材・業務運営",
      "sk.hr.p": "採用・入社手続き、従業員記録、勤怠・休暇管理、書類管理、日々の人事業務まで、人事全般を担当します。",
      "sk.ai.t": "AI自動化 — Facebook・Webサイト",
      "sk.ai.s": "時間を節約し、見込み客を逃さない",
      "sk.ai.p": "FacebookページやWebサイトにAIを活用した自動化を導入します。自動返信、見込み客の獲得、簡単なワークフローで、対応を速くし、毎週の作業時間を削減します。",
      "sk.web.t": "Web開発 — フロントエンド",
      "sk.web.s": "デザイン・開発",
      "sk.web.p": "高速でレスポンシブなWebサイトをデザイン・制作します。レイアウトやUI、フロントエンドのコーディング、WordPressサイトまで対応。今ご覧のポートフォリオも私が制作しました。",
      "sk.proof": "実績・経験",
      "sk.also": "その他の経験",
      "contact.title": "一緒に働きましょう。",
      "contact.lead": "採用担当者さま、企業さま、クライアントさま — お仕事やプロジェクトのご相談をお待ちしています。",
      "contact.cta": "メールを送る", "contact.email": "メール", "contact.direct": "直接のご連絡はこちら", "contact.langs": "対応言語", "contact.wa": "ユーザー名",
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
      if (el._done) return;
      el._done = true;
      const to = +el.dataset.count, from = +(el.dataset.from || 0), dur = 1400, t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(from + (to - from) * e);
        if (p < 1) requestAnimationFrame(tick); else el.textContent = to;
      };
      requestAnimationFrame(tick);
      setTimeout(() => { el.textContent = to; }, dur + 400); // guarantees the final value
    };
    if (reduced || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((en) => en.forEach((x) => {
      // start when visible, or if the visitor already scrolled past it
      if (x.isIntersecting || x.boundingClientRect.top < 0) { run(x.target); io.unobserve(x.target); }
    }), { threshold: 0.1 });
    els.forEach((el) => { el.textContent = el.dataset.from || 0; io.observe(el); });
    // safety net: never leave a counter on its start value
    setTimeout(() => els.forEach((el) => { if (!el._done) { el._done = true; el.textContent = el.dataset.count; } }), 6000);
  }


  // Spotlight glow that follows the pointer on cards
  function initSpotlight() {
    if (!finePointer || reduced) return;
    $$(".focus, .sk-panel, .cert, .edu__item, .contact__list li, .stats").forEach((el) => {
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
    $$(".book3d, .portrait").forEach((el) => {
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
    const finish = () => setTimeout(done, Math.max(0, 1700 - (performance.now() - start)));
    if (document.readyState === "complete") finish(); else addEventListener("load", finish, { once: true });
    setTimeout(done, 3200); // safety
    el.addEventListener("click", done);
  }

  function initCursor() {
    const c = $(".cursor");
    if (!c) return;
    if (!finePointer || reduced) { c.remove(); return; }
    const dot = $(".cursor__dot", c), ring = $(".cursor__ring", c);
    let x = -100, y = -100, rx = -100, ry = -100, shown = false;
    addEventListener("pointermove", (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
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

  function initMobileBar() {
    const bar = $(".mbar"), contact = $("#contact");
    if (!bar || !("IntersectionObserver" in window)) return;
    let inContact = false;
    const sync = () => bar.classList.toggle("is-hidden", inContact);
    new IntersectionObserver(([e]) => { inContact = e.isIntersecting; sync(); }, { threshold: 0.15 }).observe(contact);
    sync();
  }


  /* ---------- Contact form ---------- */
  function initForm() {
    const f = $("#contact-form");
    if (!f) return;
    const status = $(".cform__status", f), btn = $(".cform__submit", f), label = $("span", btn);
    const setStatus = (msg, type) => { status.textContent = msg; status.dataset.type = type || ""; };
    const mailtoFallback = (d) => {
      const body = `Type: ${d.type}\nName: ${d.name}\nWhatsApp: ${d.whatsapp || "-"}\nEmail: ${d.email}\n\n${d.message}`;
      location.href = `mailto:${f.dataset.mailto}?subject=${encodeURIComponent((d.type === "Testimonial" ? "Portfolio REVIEW — " : "Portfolio inquiry — ") + d.name)}&body=${encodeURIComponent(body)}`;
    };
    f.addEventListener("input", (e) => e.target.closest(".cform__field")?.classList.remove("is-invalid"));
    const el = (n) => f.elements.namedItem(n);
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (el("_honey").value) return;
      const type = (f.querySelector("input[name=type]:checked") || {}).value || "Inquiry";
      const d = { type, name: el("name").value.trim(), whatsapp: el("whatsapp").value.trim(), email: el("email").value.trim(), message: el("message").value.trim() };
      let ok = true;
      [["name", d.name], ["email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) ? d.email : ""], ["message", d.message]].forEach(([k, v]) => {
        const field = el(k).closest(".cform__field");
        field.classList.toggle("is-invalid", !v);
        if (!v) ok = false;
      });
      if (!ok) { setStatus(t("form.invalid"), "error"); f.querySelector(".is-invalid input, .is-invalid textarea")?.focus(); return; }
      btn.disabled = true; label.textContent = t("form.sending"); setStatus("", "");
      try {
        const res = await fetch(f.dataset.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...d, _subject: (type === "Testimonial" ? "Portfolio REVIEW — " : "Portfolio inquiry — ") + d.name, _template: "table", _captcha: "false" })
        });
        if (!res.ok) throw new Error("bad status");
        f.reset();
        f.classList.add("is-sent");
        setStatus(t("form.ok"), "ok");
      } catch (_) {
        setStatus(t("form.fallback"), "warn");
        mailtoFallback(d);
      } finally {
        btn.disabled = false; label.textContent = t("form.send");
      }
    });
  }


  /* ---------- Reviews: list + submit form with photo ---------- */
  const REVIEWS_API = (document.querySelector('meta[name="reviews-api"]')?.content || "").trim();
  let reviewsData = [];

  function renderReviews() {
    const list = $("#reviews-list"), empty = $("#reviews-empty");
    if (!list) return;
    const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    list.innerHTML = reviewsData.map((r) => {
      const text = (lang === "ja" && r.text_ja) ? r.text_ja : (r.text || r.text_ja || "");
      const initials = String(r.name).trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
      const n = Math.max(0, Math.min(5, parseInt(r.rating, 10) || 0));
      const stars = n ? `<span class="review__stars" aria-label="${n} / 5">${"★".repeat(n)}<i>${"★".repeat(5 - n)}</i></span>` : "";
      const photo = /^https:\/\//.test(r.photo || "") ? `<img class="review__photo" src="${esc(r.photo)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : "";
      return `<figure class="review"><span class="review__q" aria-hidden="true">“</span>${stars}<blockquote>${esc(text)}</blockquote>
        <figcaption><span class="review__av" aria-hidden="true">${esc(initials)}${photo}</span><span><strong>${esc(r.name)}</strong>${r.role ? `<small>${esc(r.role)}</small>` : ""}</span></figcaption></figure>`;
    }).join("");
    if (empty) empty.hidden = reviewsData.length > 0;
  }

  async function loadReviews() {
    const ok = (r) => r && r.name && (r.text || r.text_ja);
    let local = [], remote = [];
    try { const res = await fetch("assets/data/reviews.json", { cache: "no-cache" }); if (res.ok) local = await res.json(); } catch (_) {}
    if (REVIEWS_API) {
      try { const res = await fetch(REVIEWS_API + (REVIEWS_API.includes("?") ? "&" : "?") + "action=list"); if (res.ok) { const j = await res.json(); remote = Array.isArray(j) ? j : (j.reviews || []); } } catch (_) {}
    }
    reviewsData = [...(Array.isArray(remote) ? remote : []), ...(Array.isArray(local) ? local : [])].filter(ok);
    renderReviews();
  }

  // Resize & compress a photo in the browser (max 480px, JPEG) before upload
  function compressImage(file, max = 480, quality = 0.82) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale), h = Math.round(img.height * scale);
        const c = document.createElement("canvas"); c.width = w; c.height = h;
        const ctx = c.getContext("2d"); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h); ctx.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        resolve(c.toDataURL("image/jpeg", quality));
      };
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("bad image")); };
      img.src = url;
    });
  }

  function initReviews() {
    const dlg = $("#review-dialog"), f = $("#review-form");
    loadReviews();
    $$("[data-lang-switch]").forEach((b) => b.addEventListener("click", renderReviews));
    if (!dlg || !f) return;
    const status = $(".rform__status", f), submit = $(".rform__submit", f), label = $("span", submit);
    const fileIn = $("#rv-photo"), preview = $("#rv-preview"), removeBtn = $("#rv-remove");
    let photoData = "";
    const setStatus = (m, type) => { status.textContent = m; status.dataset.type = type || ""; };
    const open = () => { if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", ""); document.body.classList.add("no-scroll"); setTimeout(() => f.elements.namedItem("name").focus(), 50); };
    const close = () => { dlg.open && dlg.close(); };
    dlg.addEventListener("close", () => document.body.classList.remove("no-scroll"));
    dlg.addEventListener("click", (e) => { if (e.target === dlg) close(); });
    $$("[data-open-review]").forEach((b) => b.addEventListener("click", open));
    $$("[data-close-review]").forEach((b) => b.addEventListener("click", close));

    const clearPhoto = () => { photoData = ""; fileIn.value = ""; preview.hidden = true; preview.removeAttribute("src"); removeBtn.hidden = true; f.classList.remove("has-photo"); };
    removeBtn.addEventListener("click", clearPhoto);
    fileIn.addEventListener("change", async () => {
      const file = fileIn.files && fileIn.files[0];
      if (!file) return;
      if (!/^image\/(jpeg|png|webp)$/.test(file.type) || file.size > 5 * 1024 * 1024) { clearPhoto(); setStatus(t("rev.photoBad"), "error"); return; }
      try { photoData = await compressImage(file); preview.src = photoData; preview.hidden = false; removeBtn.hidden = false; f.classList.add("has-photo"); setStatus("", ""); }
      catch (_) { clearPhoto(); setStatus(t("rev.photoBad"), "error"); }
    });

    const el = (n) => f.elements.namedItem(n);
    f.addEventListener("input", (e) => e.target.closest(".cform__field, .rform__consent")?.classList.remove("is-invalid"));
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (el("_honey").value) return;
      const d = {
        name: el("name").value.trim(), role: el("role").value.trim(), text: el("text").value.trim(),
        email: el("email").value.trim(), rating: (f.querySelector("input[name=rating]:checked") || {}).value || "5",
        consent: el("consent").checked, lang
      };
      const checks = [["name", d.name], ["role", d.role], ["text", d.text.length >= 15 ? d.text : ""], ["email", !d.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) ? "ok" : ""]];
      let valid = true;
      checks.forEach(([k, v]) => { const fld = el(k).closest(".cform__field"); fld.classList.toggle("is-invalid", !v); if (!v) valid = false; });
      el("consent").closest(".rform__consent").classList.toggle("is-invalid", !d.consent);
      if (!d.consent) valid = false;
      if (!valid) { setStatus(t("rev.invalid"), "error"); return; }
      submit.disabled = true; label.textContent = t("form.sending"); setStatus("", "");
      try {
        if (REVIEWS_API) {
          // text/plain avoids a CORS preflight with Google Apps Script
          const res = await fetch(REVIEWS_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "submit", ...d, photo: photoData }) });
          const j = await res.json().catch(() => ({}));
          if (!res.ok || j.ok === false) throw new Error(j.error || "failed");
        } else {
          // Fallback: email the review (photo can't be attached in this mode)
          const ep = $("#contact-form")?.dataset.endpoint;
          const res = await fetch(ep, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ type: "Testimonial", name: d.name, role: d.role, rating: d.rating + "/5", email: d.email || "-", message: d.text,
              photo: photoData ? "(photo attached in browser — enable the reviews backend to store photos)" : "-", _subject: "Portfolio REVIEW — " + d.name, _template: "table", _captcha: "false" }) });
          if (!res.ok) throw new Error("failed");
        }
        f.reset(); clearPhoto();
        setStatus(t(REVIEWS_API ? "rev.ok" : "rev.okEmail"), "ok");
        f.classList.add("is-sent");
        setTimeout(() => { close(); f.classList.remove("is-sent"); setStatus("", ""); }, 3200);
      } catch (_) {
        setStatus(t("rev.fail"), "error");
      } finally {
        submit.disabled = false; label.textContent = t("rev.submit");
      }
    });
  }


  /* ---------- Skills explorer (tabs + autoplay) ---------- */
  function initSkills() {
    const tabs = $$(".sk-tab"), wrap = $(".skx");
    if (!tabs.length) return;
    const DURATION = 6500;
    let idx = 0, timer = 0, start = 0, paused = false, userTook = false, inView = false;
    const show = (i, focus) => {
      idx = (i + tabs.length) % tabs.length;
      tabs.forEach((t, k) => {
        const on = k === idx;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        const pn = document.getElementById(t.getAttribute("aria-controls"));
        if (pn) { pn.hidden = !on; if (on) { pn.classList.remove("is-in"); void pn.offsetWidth; pn.classList.add("is-in"); } }
      });
      if (focus) tabs[idx].focus();
      const bar = tabs[idx].parentElement;
      if (bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: tabs[idx].offsetLeft - bar.offsetLeft - 4, behavior: reduced ? "auto" : "smooth" });
      start = performance.now();
      wrap.style.setProperty("--p", 0);
    };
    const tick = (now) => {
      if (!paused && inView && !userTook && !reduced) {
        const p = Math.min(1, (now - start) / DURATION);
        wrap.style.setProperty("--p", p);
        if (p >= 1) show(idx + 1);
      } else { start = now - (parseFloat(wrap.style.getPropertyValue("--p")) || 0) * DURATION; }
      timer = requestAnimationFrame(tick);
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => { userTook = true; wrap.classList.add("is-manual"); show(i); });
      t.addEventListener("keydown", (e) => {
        const k = e.key;
        if (["ArrowDown", "ArrowRight"].includes(k)) { e.preventDefault(); userTook = true; wrap.classList.add("is-manual"); show(idx + 1, true); }
        else if (["ArrowUp", "ArrowLeft"].includes(k)) { e.preventDefault(); userTook = true; wrap.classList.add("is-manual"); show(idx - 1, true); }
        else if (k === "Home") { e.preventDefault(); show(0, true); } else if (k === "End") { e.preventDefault(); show(tabs.length - 1, true); }
      });
    });
    if (finePointer) {
      wrap.addEventListener("pointerenter", () => { paused = true; });
      wrap.addEventListener("pointerleave", () => { paused = false; });
    }
    wrap.addEventListener("focusin", () => { paused = true; });
    wrap.addEventListener("focusout", () => { paused = false; });
    if ("IntersectionObserver" in window) new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: 0.12 }).observe(wrap);
    if (reduced) wrap.classList.add("is-manual");
    show(0);
    timer = requestAnimationFrame(tick);
  }


  /* ---------- Hero: typed line + rotating chips ---------- */
  function initHeroMotion() {
    const el = $(".typed");
    if (el) {
      let words = [], w = 0, c = 0, deleting = false, tm = 0;
      const load = () => { try { words = JSON.parse(el.getAttribute(lang === "ja" ? "data-typed-ja" : "data-typed-en")); } catch (_) { words = []; } w = 0; c = 0; deleting = false; };
      const step = () => {
        clearTimeout(tm);
        if (!words.length) return;
        const word = words[w % words.length];
        if (reduced) { el.textContent = word; tm = setTimeout(() => { w++; step(); }, 2600); return; }
        c += deleting ? -1 : 1;
        el.textContent = word.slice(0, c);
        let delay = deleting ? 28 : (lang === "ja" ? 90 : 55);
        if (!deleting && c >= word.length) { deleting = true; delay = 1900; }
        else if (deleting && c <= 0) { deleting = false; w++; delay = 350; }
        tm = setTimeout(step, delay);
      };
      load(); setTimeout(step, 1200);
      $$("[data-lang-switch]").forEach((b) => b.addEventListener("click", () => { load(); el.textContent = ""; step(); }));
    }
    const chips = $$("[data-rotate]");
    if (!chips.length || reduced) return;
    const sets = chips.map((ch) => { try { return JSON.parse(ch.dataset.rotate); } catch (_) { return []; } });
    let i = 0;
    setInterval(() => {
      if (document.hidden) return;
      i++;
      chips.forEach((ch, k) => {
        const txt = $(".chip__txt", ch), list = sets[k];
        if (!txt || !list.length) return;
        setTimeout(() => {
          ch.classList.add("is-flip");
          setTimeout(() => {
            txt.textContent = list[i % list.length];
            try { const ic = JSON.parse(ch.dataset.icons || "[]"); const u = ch.querySelector("use"); if (ic.length && u) u.setAttribute("href", "#" + ic[i % ic.length]); } catch (_) {}
            ch.classList.remove("is-flip");
          }, 260);
        }, k * 420);
      });
    }, 3800);
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
    $$("[data-i18n-ph]").forEach((el) => { const v = T[lang][el.dataset.i18nPh]; if (v) el.placeholder = v; });
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
    initMobileBar();
    initForm();
    initReviews();
    initSkills();
    initHeroMotion();
    const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  });
})();

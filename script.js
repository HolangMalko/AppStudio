// FlosisLab Multi-Language Dictionary (KO / EN / JA)
const translations = {
    ko: {
        brandName: "FlosisLab",
        heroTitle: "FlosisLab",
        heroSubtitle: "스마트하고 유용한 모바일 애플리케이션.",
        btnPlayStoreText: "Google Play 다운로드",
        btnPlayStoreSubtext: "(출시 준비 중)",

        sectionScreenshotsTitle: "실제 앱 구동 화면 미리보기",
        screenTitleMain: "✈️ 여행 일정 및 가계부 관리",
        screenTitleRoadmap: "📍 로드맵 여행 발자취 타임라인",
        screenTitleRouteMap: "🗺️ GPS 여행 동선 지도",
        screenTitleExpenses: "💸 상세 지출 내역",
        screenTitleOCR: "📝 지출/수입 기록",
        screenTitleSettlement: "🤝 동행자 정산 매니저",
        screenTitleStats: "📊 지출 카테고리 차트 분석",
        screenTitleBudget: "💱 현지 통화 예산 관리",
        screenTitlePdf: "📄 여행 발자취 PDF 리포트 내보내기",
        screenTitleChecklist: "📋 준비물 체크리스트",
        screenTitleExchange: "💱 실시간 환율 계산기",

        sectionFeaturesTitle: "주요 핵심 기능",
        feat1Title: "🧾 1초 영수증 스캔",
        feat1Desc: "카메라로 촬영하면 스마트 AI 스캔이 결제 금액을 1초 만에 자동 인식합니다.",
        feat2Title: "📍 원터치 로드맵 기록",
        feat2Desc: "GPS 좌표와 함께 여행지 사진을 지도의 타임라인에 기록합니다.",
        feat3Title: "📱 편리한 위젯",
        feat3Desc: "홈 화면에서 오늘 사용 금액과 남은 예산을 실시간으로 모니터링합니다.",
        feat4Title: "💱 다국어 환율 & 정산",
        feat4Desc: "실시간 환율 변환 및 여행 동행자와의 분할 정산 기능을 제공합니다.",

        sectionWidgetsTitle: "스마트 홈 화면 위젯",
        widgetTitleReceipt: "🧾 빠른 영수증 스캔 위젯",
        widgetTitleRoadmap: "📍 빠른 발자취 기록 위젯",
        widgetTitleMoney: "💰 잔여 예산 및 지출 요약 위젯",

        sectionGuideTitle: "초간단 사용 가이드",
        guide1Title: "1. 빠른 영수증 스캔하는 법",
        guide1Desc: "위젯 아이콘이나 지출 추가 버튼을 눌러 영수증을 촬영하면, 스마트 AI가 결제 금액을 자동 인식하여 저장 준비를 마칩니다.",
        guide2Title: "2. 로드맵 지도 발자취 남기기",
        guide2Desc: "여행지에서 사진을 찍으면 현재 GPS 주소와 함께 로드맵 지도 상에 감성 기록이 자동 저장됩니다.",
        guide3Title: "3. 예산 및 동행자 정산 관리",
        guide3Desc: "기본 예산을 설정하고 동행자와의 지출 분할 비율을 적용하여 남은 예산을 실시간 모니터링하세요.",
        btnDetailedGuide: "📖 전체 상세 가이드 보러가기",

        sectionPortfolioTitle: "FlosisLab 라인업",
        app1Desc: "영수증 자동 스캔, GPS 기반 로드맵 발자취, 스마트 홈 위젯을 탑재한 여행 지출 및 추억 관리 어플.",
        app2Title: "Neroa",
        app2Desc: "소중한 순간을 감성적인 시네마틱 모션과 대형 디지털 시계로 완성하는 스마트 TV & 태블릿 감성 디지털 액자 어플.",
        app3Title: "Lifestyle App",
        app3Desc: "소중한 순간을 기록하는 차세대 라이프스타일 프로젝트가 곧 찾아옵니다.",

        btnViewDetail: "✈️ TravelMoney 상세보기",
        btnNeroaDetail: "🖼️ Neroa 상세보기",
        neroaHeroTitle: "Neroa - 감성 디지털 액자",
        neroaHeroSubtitle: "소중한 순간을 감성적인 시네마틱 카메라 모션과 대형 디지털 시계로 완성하는 스마트 TV & 태블릿 감성 디지털 액자 어플.",
        neroaFeatTitle: "Neroa 핵심 감성 기능",
        neroaFeat1Title: "✨ 시네마틱 줌/팬 모션",
        neroaFeat1Desc: "사진의 비율과 인물을 지능적으로 계산하여 살아 움직이는 듯한 입체적 서정 카메라 모션을 보여줍니다.",
        neroaFeat2Title: "⏰ 대형 디지털 시계 & 위젯",
        neroaFeat2Desc: "슬라이드쇼와 함께 시계, 날씨, 캘린더 위젯을 수채화처럼 은은하게 배치하여 실용적인 분위기를 완성합니다.",
        neroaFeat3Title: "🎵 배경 음악 & 내 음악 재생",
        neroaFeat3Desc: "힐링 자연의 소리 BGM 및 내 기기 속 음악 라이브러리를 연동하여 나만의 감성 오디오를 재생할 수 있습니다.",
        neroaFeat4Title: "📱 1초 QR 로컬 무선 공유",
        neroaFeat4Desc: "스마트폰으로 TV의 QR 코드를 스캔하여 사진을 즉시 전송할 수 있으며, 서버에 남지 않는 보안 전송을 보장합니다.",
        neroaFeat5Title: "☁️ 구글 드라이브 연동",
        neroaFeat5Desc: "클라우드 사진 폴더를 실시간 연동하여 거실 TV나 액자에서 언제든 최신 사진을 감상할 수 있습니다.",
        neroaFeat6Title: "🔒 100% 온디바이스 개인정보 보호",
        neroaFeat6Desc: "사용자의 사진 데이터는 어떠한 외부 중앙 서버로도 업로드되지 않으며 오직 사용자 단말기 내부에만 안전하게 보관됩니다.",
        neroaPolicyTitle: "약관 및 정책",
        neroaPrivacyTitle: "Neroa 개인정보 처리방침",
        neroaTermsTitle: "Neroa 이용약관",
        navPrivacy: "TravelMoney 개인정보 처리방침",
        navTerms: "TravelMoney 이용약관",
        navSupport: "문의하기 (Support)",
        backToMain: "← 메인으로 돌아가기",
        backToNeroa: "← Neroa 페이지로 돌아가기",
        footerRights: "© 2026 FlosisLab. All rights reserved."
    },
    en: {
        brandName: "FlosisLab",
        heroTitle: "FlosisLab",
        heroSubtitle: "Smart and useful mobile applications.",
        btnPlayStoreText: "Download on Google Play",
        btnPlayStoreSubtext: "(Coming Soon)",

        sectionScreenshotsTitle: "Real App Screenshots Preview",
        screenTitleMain: "✈️ Trip Itinerary Management",
        screenTitleRoadmap: "📍 Interactive Footprint Roadmap Timeline",
        screenTitleRouteMap: "🗺️ GPS Travel Route Map",
        screenTitleExpenses: "💸 Detailed Expense Log",
        screenTitleOCR: "📝 Expense / Income Log",
        screenTitleSettlement: "🤝 Companion Settlement Manager",
        screenTitleStats: "📊 Expense Category Chart Analytics",
        screenTitleBudget: "💱 Multi-Currency Budgeting",
        screenTitlePdf: "📄 Travel Memory PDF Export Report",
        screenTitleChecklist: "📋 Packing Checklist",
        screenTitleExchange: "💱 Live Currency Calculator",

        sectionFeaturesTitle: "Core Features",
        feat1Title: "🧾 1-Sec Receipt Scan",
        feat1Desc: "Snap a photo of any receipt. Smart AI instantly recognizes the payment amount in 1 second.",
        feat2Title: "📍 Instant Roadmap Log",
        feat2Desc: "Pin travel photos with automatic GPS coordinates onto the interactive Roadmap timeline.",
        feat3Title: "📱 Convenient Widgets",
        feat3Desc: "Monitor today's spending and remaining budget directly from your Home Screen.",
        feat4Title: "💱 Multi-Currency & Settlement",
        feat4Desc: "Provides real-time currency conversion and companion settlement calculations.",

        sectionWidgetsTitle: "Smart Home Screen Widgets",
        widgetTitleReceipt: "🧾 Quick Receipt Scan Widget",
        widgetTitleRoadmap: "📍 Quick Footprint Map Widget",
        widgetTitleMoney: "💰 Remaining Budget & Expenses Widget",

        sectionGuideTitle: "Quick Start User Guide",
        guide1Title: "1. Quick Receipt Scanning",
        guide1Desc: "Tap the widget or add button to snap a receipt. Smart AI automatically detects the total payment amount.",
        guide2Title: "2. Recording Roadmap Footprints",
        guide2Desc: "Take a photo on location. Your GPS address and memory are saved seamlessly to the Roadmap timeline.",
        guide3Title: "3. Budget & Expense Sharing",
        guide3Desc: "Set your trip budget and configure expense split ratios among companions in real-time.",
        btnDetailedGuide: "📖 View Detailed User Guide",

        sectionPortfolioTitle: "FlosisLab Lineup",
        app1Desc: "An all-in-one travel expense & memory manager featuring automatic receipt scanning, GPS footprints, and widgets.",
        app2Title: "Neroa",
        app2Desc: "A digital photo frame app for Smart TVs and tablets featuring cinematic motion, large digital clock, and ambient music.",
        app3Title: "Lifestyle App",
        app3Desc: "A next-generation lifestyle companion app designed for capturing precious memories is coming soon.",

        btnViewDetail: "✈️ View TravelMoney Details",
        btnNeroaDetail: "🖼️ View Neroa Details",
        neroaHeroTitle: "Neroa - Digital Photo Frame",
        neroaHeroSubtitle: "Transform your Smart TV and Tablet into an emotional digital photo frame with cinematic motion and large digital clock.",
        neroaFeatTitle: "Neroa Key Features",
        neroaFeat1Title: "✨ Cinematic Zoom & Pan Motion",
        neroaFeat1Desc: "Intelligently calculates subject proportions for smooth, dynamic camera motion.",
        neroaFeat2Title: "⏰ Large Digital Clock & Widgets",
        neroaFeat2Desc: "Displays elegant digital clock, weather, and calendar widgets alongside your photo slideshow.",
        neroaFeat3Title: "🎵 Background Music & Audio",
        neroaFeat3Desc: "Play ambient nature soundscapes or stream audio from your local device music library.",
        neroaFeat4Title: "📱 1-Sec Local QR Transfer",
        neroaFeat4Desc: "Scan the TV QR code with your phone to instantly send photos securely without cloud storage.",
        neroaFeat5Title: "☁️ Google Drive Integration",
        neroaFeat5Desc: "Sync cloud photo folders directly to enjoy latest memories on your TV frame anytime.",
        neroaFeat6Title: "🔒 100% On-Device Privacy",
        neroaFeat6Desc: "Your photos remain completely private on your local device and are never uploaded to developer servers.",
        neroaPolicyTitle: "Policies & Terms",
        neroaPrivacyTitle: "Neroa Privacy Policy",
        neroaTermsTitle: "Neroa Terms of Service",
        navPrivacy: "TravelMoney Privacy Policy",
        navTerms: "TravelMoney Terms of Service",
        navSupport: "Contact Support",
        backToMain: "← Back to Main",
        backToNeroa: "← Back to Neroa Page",
        footerRights: "© 2026 FlosisLab. All rights reserved."
    },
    ja: {
        brandName: "FlosisLab",
        heroTitle: "FlosisLab",
        heroSubtitle: "スマートで便利なモバイルアプリケーション。",
        btnPlayStoreText: "Google Playでダウンロード",
        btnPlayStoreSubtext: "(準備中)",

        sectionScreenshotsTitle: "実際のアプリ画面プレビュー",
        screenTitleMain: "✈️ 旅行日程管理",
        screenTitleRoadmap: "📍 ロードマップ旅行足跡タイムライン",
        screenTitleRouteMap: "🗺️ GPS旅行動線マップ",
        screenTitleExpenses: "💸 詳細支出履歴",
        screenTitleOCR: "📝 支出・収入の記録",
        screenTitleSettlement: "🤝 同行者精算マネージャー",
        screenTitleStats: "📊 支出カテゴリチャート分析",
        screenTitleBudget: "💱 現地通貨予算管理",
        screenTitlePdf: "📄 旅行足跡PDFレポート出力",
        screenTitleChecklist: "📋 持ち物チェックリスト",
        screenTitleExchange: "💱 リアルタイム為替電卓",

        sectionFeaturesTitle: "主な機能",
        feat1Title: "🧾 1秒レシートスキャン",
        feat1Desc: "レシートを撮影するだけでスマートAIが合計金額を1秒で自動認識します。",
        feat2Title: "📍 ワンタッチロードマップ記録",
        feat2Desc: "GPS座標とともに撮影した旅写真をロードマップにタイムライン保存します。",
        feat3Title: "📱 便利なウィジェット",
        feat3Desc: "ホーム画面で本日の支出と残額予算をリアルタイム表示。",
        feat4Title: "💱 リアルタイム為替＆精算",
        feat4Desc: "現地通貨と基準通貨のリアルタイム換算および同行メンバーとの割り勘精算に対応。",

        sectionWidgetsTitle: "スマートホーム画面ウィジェット",
        widgetTitleReceipt: "🧾 クイックレシートスキャンウィジェット",
        widgetTitleRoadmap: "📍 クイック足跡記録ウィジェット",
        widgetTitleMoney: "💰 残額予算・支出概要ウィジェット",

        sectionGuideTitle: "簡単使いかたガイド",
        guide1Title: "1. クイックレシートスキャンの手順",
        guide1Desc: "ウィジェットのカメラアイコンを押してレシートを撮影するとスマートAIが金額を自動認識します。",
        guide2Title: "2. ロードマップ足跡の残しかた",
        guide2Desc: "撮影した写真は現在のGPS住所とともにロードマップ上にタイムライン保存されます。",
        guide3Title: "3. 予算と精算の管理",
        guide3Desc: "旅行予算を設定し、同行者との精算割合を調整して日別の残額をモニタリングできます。",
        btnDetailedGuide: "📖 全体詳細ガイドを見る",

        sectionPortfolioTitle: "FlosisLab ラインナップ",
        app1Desc: "レシート自動スキャン、GPSロードマップ足跡、ウィジェットを備えた旅行予算＆思い出管理アプリ。",
        app2Title: "Neroa",
        app2Desc: "大切な瞬間をシネマティックカメラモーションと大型デジタル時計で彩るスマートTV＆タブレット向けデジタルフォトフレームアプリ。",
        app3Title: "Lifestyle App",
        app3Desc: "大切な瞬間を記録する次世代ライフスタイルプロジェクトが間もなく登場します。",

        btnViewDetail: "✈️ TravelMoney 詳細を見る",
        btnNeroaDetail: "🖼️ Neroa 詳細を見る",
        neroaHeroTitle: "Neroa - デジタルフォトフレーム",
        neroaHeroSubtitle: "大切な瞬間をシネマティックカメラモーションと大型デジタル時計で彩るスマートTV＆タブレット向けデジタルフォトフレームアプリ。",
        neroaFeatTitle: "Neroa の主な機能",
        neroaFeat1Title: "✨ シネマティックズーム・パンモーション",
        neroaFeat1Desc: "写真の構図と被写体を高度に計算し、立体的なカメラワークを表示します。",
        neroaFeat2Title: "⏰ 大型デジタル時計・ウィジェット",
        neroaFeat2Desc: "スライドショーとともに時計、天気、カレンダーウィジェットを水彩画のように表示。",
        neroaFeat3Title: "🎵 背景音楽・ローカル音楽再生",
        neroaFeat3Desc: "自然音BGMや端末内の音楽ライブラリを再生できます。",
        neroaFeat4Title: "📱 1秒QRローカル転送",
        neroaFeat4Desc: "スマホでTVのQRコードをスキャンして写真を安全に直接送信できます。",
        neroaFeat5Title: "☁️ Google Drive 連携",
        neroaFeat5Desc: "クラウドフォルダと同期して最新の写真をいつでもお楽しみいただけます。",
        neroaFeat6Title: "🔒 100% オンデバイスプライバシー",
        neroaFeat6Desc: "写真データは外部サーバーに送信されず、端末内でのみ安全に保管されます。",
        neroaPolicyTitle: "規約・ポリシー",
        neroaPrivacyTitle: "Neroa プライバシーポリシー",
        neroaTermsTitle: "Neroa 利用規約",
        navPrivacy: "TravelMoney プライバシーポリシー",
        navTerms: "TravelMoney 利用規約",
        navSupport: "お問い合わせ",
        backToMain: "← メインへ戻る",
        backToNeroa: "← Neroa ページへ戻る",
        footerRights: "© 2026 FlosisLab. All rights reserved."
    }
};

function getInitialLanguage() {
    const saved = localStorage.getItem('app_lang');
    if (saved && translations[saved]) {
        return saved;
    }
    const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (navLang.startsWith('ja')) {
        return 'ja';
    } else if (navLang.startsWith('en')) {
        return 'en';
    }
    return 'ko';
}

let currentLang = getInitialLanguage();

// Screenshot Carousel
let currentSlideIndex = 0;
const totalSlides = 11;

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });

    const activeSlide = document.querySelectorAll('.carousel-slide')[currentSlideIndex];
    const captionEl = document.getElementById('carousel-caption');
    if (activeSlide && captionEl) {
        const captionKey = activeSlide.dataset.i18nCaption;
        const dict = translations[currentLang];
        if (dict && dict[captionKey]) {
            captionEl.textContent = dict[captionKey];
        }
    }
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarousel();
}

// Dynamic Screenshot Image Switcher per Selected Language (ko / en / jp)
function updateScreenshotImages(lang) {
    const prefix = (lang === 'ja') ? 'jp' : lang; // 'ko', 'en', or 'jp'
    document.querySelectorAll('.carousel-slide').forEach(slide => {
        const slideNum = slide.dataset.slideNum;
        const img = slide.querySelector('img');
        const basePath = slide.dataset.basePath || 'travelmoney/assets/images/app_TravelMoney/Screenshots';
        if (slideNum && img) {
            img.src = `${basePath}/${prefix}_${slideNum}.jpg`;
        }
    });
}

// Widget Carousel (3 Widgets: Receipt, Roadmap, TravelMoney)
let currentWidgetIndex = 0;
const totalWidgetSlides = 3;

function updateWidgetCarousel() {
    const track = document.getElementById('widget-track');
    if (!track) return;
    track.style.transform = `translateX(-${currentWidgetIndex * 100}%)`;

    document.querySelectorAll('.widget-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentWidgetIndex);
    });

    const activeSlide = document.querySelectorAll('.widget-slide')[currentWidgetIndex];
    const captionEl = document.getElementById('widget-caption');
    if (activeSlide && captionEl) {
        const captionKey = activeSlide.dataset.i18nCaption;
        const dict = translations[currentLang];
        if (dict && dict[captionKey]) {
            captionEl.textContent = dict[captionKey];
        }
    }
}

function nextWidgetSlide() {
    currentWidgetIndex = (currentWidgetIndex + 1) % totalWidgetSlides;
    updateWidgetCarousel();
}

function prevWidgetSlide() {
    currentWidgetIndex = (currentWidgetIndex - 1 + totalWidgetSlides) % totalWidgetSlides;
    updateWidgetCarousel();
}

function goToWidgetSlide(index) {
    currentWidgetIndex = index;
    updateWidgetCarousel();
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('app_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Toggle policy & terms language blocks (e.g., policy-ko/policy-en/policy-ja, terms-ko/terms-en/terms-ja)
    document.querySelectorAll('.policy-lang-block').forEach(block => {
        if (block.id && block.id.endsWith(`-${lang}`)) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });

    updateScreenshotImages(lang);
    updateCarousel();
    updateWidgetCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Screenshot Carousel
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
        dot.addEventListener('click', () => goToSlide(idx));
    });

    // Widget Carousel
    const wPrevBtn = document.getElementById('widget-prev');
    const wNextBtn = document.getElementById('widget-next');
    if (wPrevBtn) wPrevBtn.addEventListener('click', prevWidgetSlide);
    if (wNextBtn) wNextBtn.addEventListener('click', nextWidgetSlide);

    document.querySelectorAll('.widget-dot').forEach((dot, idx) => {
        dot.addEventListener('click', () => goToWidgetSlide(idx));
    });

    setLanguage(currentLang);
});

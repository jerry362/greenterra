// ==================== 1. DATA SOURCES ====================

const techTabsData = [
  {
    id: "smartfarm",
    label: "스마트팜 기술",
    en: "Smart Farm Tech",
    headline: "ICT와 생물학의 완벽한 융합",
    desc: "그린테라의 독자적인 스마트팜 플랫폼은 최첨단 센서 기술과 데이터 분석을 통해 작물 재배 환경의 모든 변수를 정밀하게 통제합니다.",
    img: "https://images.unsplash.com/photo-1622548066678-a25ead9d3849?w=800&h=560&fit=crop&auto=format",
    features: [
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
        title: "24시간 실시간 환경 감지",
        desc: "온·습도, CO₂, 광량, EC/pH 농도를 초단위로 측정",
      },
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
        title: "원격 제어 시스템",
        desc: "어디서나 스마트폰으로 팜 환경을 실시간 제어",
      },
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>`,
        title: "밀폐형 환경 제어",
        desc: "외부 오염물질을 100% 차단하는 클린룸 기술",
      },
    ],
    stats: [
      { v: "99.8%", l: "생육 정확도" },
      { v: "0%", l: "외부 오염" },
      { v: "24h", l: "실시간 모니터링" },
    ],
  },
  {
    id: "automation",
    label: "자동화 시스템",
    en: "Automation",
    headline: "24시간 쉬지 않는 지능형 공정",
    desc: "입고부터 재배, 영양 공급, 수확에 이르기까지 전 과정을 자동화하여 사람의 개입을 최소화하고 생산성을 극대화합니다.",
    img: "https://images.unsplash.com/photo-1774229637247-3cd45219826c?w=800&h=560&fit=crop&auto=format",
    features: [
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`,
        title: "지능형 관수 시스템",
        desc: "작물 뿌리에 필요한 미세 영양액을 시간대별 정확 분사",
      },
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>`,
        title: "로봇 수확 솔루션",
        desc: "머신비전 기반 로봇 팔이 완벽한 타이밍에 자율 수확",
      },
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
        title: "전 공정 자동화",
        desc: "씨앗 파종부터 포장까지 인력 최소화 풀 자동화",
      },
    ],
    stats: [
      { v: "99%", l: "수확 정밀도" },
      { v: "3x", l: "생산성 향상" },
      { v: "0", l: "농약 사용" },
    ],
  },
  {
    id: "ai",
    label: "AI 재배 환경",
    en: "AI Growing Environment",
    headline: "빅데이터와 AI가 만드는 최적의 생육 솔루션",
    desc: "수백만 건의 생육 데이터를 학습한 AI가 작물별 맞춤 환경을 스스로 학습하고 예측하여 최상의 품질을 유지합니다.",
    img: "https://images.unsplash.com/photo-1668600372311-66950b110d64?w=800&h=560&fit=crop&auto=format",
    features: [
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>`,
        title: "AI 병충해 사전 진단",
        desc: "이미지 분석으로 극미세 변색을 발생 전에 예측",
      },
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>`,
        title: "생육 예측 및 최적화",
        desc: "수확량과 영양분 함량을 예측하여 LED·영양 실시간 조정",
      },
      {
        icon: `<svg class="w-6 h-6 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`,
        title: "딥러닝 생육 모델",
        desc: "100만 건+ 데이터로 학습된 작물별 맞춤 AI 알고리즘",
      },
    ],
    stats: [
      { v: "99.8%", l: "병충해 사전감지" },
      { v: "30%", l: "수확량 증가" },
      { v: "1M+", l: "학습 데이터 셋" },
    ],
  },
];

const productsData = [
  {
    name: "유럽종 버터헤드 상추",
    en: "Butterhead Lettuce",
    category: "프리미엄 엽채류",
    img: "https://images.unsplash.com/photo-1649470824391-f9e29e21d751?w=400&h=400&fit=crop&auto=format",
    nutrition: "비타민 K·A 풍부, 수분 95%",
    cert: ["무농약", "GAP"],
    desc: "부드럽고 아삭한 유럽형 상추. 씻지 않고 바로 섭취 가능.",
  },
  {
    name: "슈퍼푸드 케일",
    en: "Superfoods Kale",
    category: "프리미엄 엽채류",
    img: "https://images.unsplash.com/photo-1617183309923-427fedc0b7ea?w=400&h=400&fit=crop&auto=format",
    nutrition: "비타민 C 200mg+, 항산화 성분",
    cert: ["무농약", "GAP", "HACCP"],
    desc: "영양 밀도 세계 1위 작물. AI 조명으로 최대 영양 함량 재배.",
  },
  {
    name: "로메인 레터스",
    en: "Romaine Lettuce",
    category: "프리미엄 엽채류",
    img: "https://images.unsplash.com/photo-1589664088344-aac0f999a1fc?w=400&h=400&fit=crop&auto=format",
    nutrition: "엽산·철분 풍부, 저칼로리",
    cert: ["무농약", "GAP"],
    desc: "시저 샐러드의 필수 재료. 아삭함과 청량감이 뛰어남.",
  },
  {
    name: "스마트 방울토마토",
    en: "Smart Cherry Tomato",
    category: "기능성 과채류",
    img: "https://images.unsplash.com/photo-1759509295194-e85b92b24e15?w=400&h=400&fit=crop&auto=format",
    nutrition: "리코펜·비타민C 풍부",
    cert: ["무농약", "GAP"],
    desc: "당도 12브릭스 이상의 달콤한 방울토마토.",
  },
  {
    name: "미니 파프리카",
    en: "Mini Paprika",
    category: "기능성 과채류",
    img: "https://images.unsplash.com/photo-1783923417295-daf9ada7d437?w=400&h=400&fit=crop&auto=format",
    nutrition: "비타민C 257mg, 베타카로틴",
    cert: ["무농약"],
    desc: "선명한 색상과 풍부한 영양. 스낵으로도 즐기기 좋음.",
  },
  {
    name: "스마트팜 허브 믹스",
    en: "Herb Mix",
    category: "스마트 굿즈",
    img: "https://images.unsplash.com/photo-1681313409698-dbe22c68cfce?w=400&h=400&fit=crop&auto=format",
    nutrition: "항산화·항균 성분 다수",
    cert: ["무농약"],
    desc: "바질·루꼴라·치커리를 혼합한 프리미엄 허브 믹스.",
  },
];

const galleryData = [
  {
    id: 1,
    category: "스마트팜 내부",
    img: "https://images.unsplash.com/photo-1707586387441-c6657a1dfeae?w=600&h=600&fit=crop&auto=format",
    title: "다층 수직 재배 시스템",
    desc: "수십 층으로 쌓인 모던한 수직농장에서 작물이 최적 LED 환경 아래 무균 재배됩니다.",
    tags: ["수직농장", "LED", "무균재배"],
    prompt:
      "ultra-clean vertical farm, multi-tier hydroponic shelves, lime green LED glow, cinematic, 8K",
  },
  {
    id: 2,
    category: "스마트팜 내부",
    img: "https://images.unsplash.com/photo-1623251963103-511f665a9782?w=600&h=600&fit=crop&auto=format",
    title: "클린룸 재배 전경",
    desc: "외부 오염이 완전 차단된 밀폐형 클린룸 내부의 대규모 재배 시스템 전경.",
    tags: ["클린룸", "밀폐형", "대규모"],
    prompt:
      "large scale indoor farm, clean room interior, lush green plants, futuristic, drone view",
  },
  {
    id: 3,
    category: "AI 모니터링",
    img: "https://images.unsplash.com/photo-1631556759511-6ce895fbf0ad?w=600&h=600&fit=crop&auto=format",
    title: "실시간 데이터 분석 팀",
    desc: "AI 센서 데이터를 태블릿으로 실시간 분석하는 그린테라 연구진.",
    tags: ["AI분석", "빅데이터", "연구팀"],
    prompt:
      "scientists analyzing AI data tablet, smart farm monitoring, lab coats, professional",
  },
  {
    id: 4,
    category: "AI 모니터링",
    img: "https://images.unsplash.com/photo-1669707040737-a6237bc0ae50?w=600&h=600&fit=crop&auto=format",
    title: "AI 생육 진단 시스템",
    desc: "전문 보호 장비를 착용한 연구원이 AI 진단 시스템을 운영하는 모습.",
    tags: ["AI진단", "생육분석", "GreenBot"],
    prompt:
      "researcher in lab gear operating AI growth diagnosis system, futuristic lab, green glow",
  },
  {
    id: 5,
    category: "재배 과정",
    img: "https://images.unsplash.com/photo-1617183309923-427fedc0b7ea?w=600&h=600&fit=crop&auto=format",
    title: "이슬 맺힌 청정 케일",
    desc: "이른 아침 이슬이 맺힌 케일 잎. AI 센서 빔이 생육 상태를 스캔하는 매크로 컷.",
    tags: ["케일", "무농약", "신선도"],
    prompt:
      "macro shot of kale leaf with morning dew, AI scanner overlay, ultra-clean, 8K",
  },
  {
    id: 6,
    category: "재배 과정",
    img: "https://images.unsplash.com/photo-1649470824391-f9e29e21d751?w=600&h=600&fit=crop&auto=format",
    title: "신선한 잎채소 성장",
    desc: "씨앗에서 청정한 잎채소로 성장하는 생육 과정의 근접 촬영.",
    tags: ["잎채소", "성장과정", "청정재배"],
    prompt:
      "close up fresh green leafy plant, hydroponic growth, clean, vivid green",
  },
  {
    id: 7,
    category: "미래 컨셉",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=600&fit=crop&auto=format",
    title: "ZERO-Carbon 솔라 팜",
    desc: "태양광 패널로 100% 친환경 에너지를 공급하는 미래형 그린테라 단지 컨셉.",
    tags: ["태양광", "ESG", "탄소제로"],
    prompt:
      "solar panels at sunset, zero carbon smart farm, aerial view, cinematic blue hour",
  },
  {
    id: 8,
    category: "미래 컨셉",
    img: "https://images.unsplash.com/photo-1774229637247-3cd45219826c?w=600&h=600&fit=crop&auto=format",
    title: "Green-Bot 수확 로봇",
    desc: "라임색 레이저 빔으로 작물을 탐지하고 정밀하게 수확하는 Green-Bot 컨셉 이미지.",
    tags: ["Green-Bot", "로봇수확", "자동화"],
    prompt:
      "futuristic robot arm with lime laser beam harvesting crops, dark background, 8K render",
  },
];

const videosData = [
  {
    id: 1,
    title: "그린테라 브랜드 하이라이트 필름",
    desc: "이른 아침 안개가 걷히는 태양광 온실 단지 드론 뷰 → 내부 로봇 수확 → 작물 근접 샷 → 그린테라 로고",
    duration: "0:45",
    thumb:
      "https://images.unsplash.com/photo-1622548066678-a25ead9d3849?w=800&h=450&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "스마트팜 자동화 시스템",
    desc: "미세 안개(Mist) 양액이 작물 뿌리에 자동 분사되고 Green-Bot이 라임색 빔으로 수확하는 루프 영상",
    duration: "0:10",
    thumb:
      "https://images.unsplash.com/photo-1623413649787-d7c0c07b4f3b?w=800&h=450&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "AI 타임랩스 생육 스토리",
    desc: "AI 조명 아래에서 씨앗에서 웅장한 케일/상추로 초고속 성장하는 타임랩스 3D 애니메이션",
    duration: "0:30",
    thumb:
      "https://images.unsplash.com/photo-1681313409698-dbe22c68cfce?w=800&h=450&fit=crop&auto=format",
  },
];

const faqsData = [
  {
    q: "그린테라의 스마트팜 기술은 기존 온실과 무엇이 다른가요?",
    a: "그린테라는 단순 자동화를 넘어 AI 기반의 밀폐형 생육 제어 시스템을 적용합니다. 빅데이터 알고리즘이 24시간 온·습도, CO₂ 농도, LED 스펙트럼, 양액 분사를 스스로 측정하고 최적화하여 기후 변화나 외부 오염물질의 영향 없이 연중 일정하게 최고 품질의 작물을 생산합니다.",
  },
  {
    q: "그린테라 수확물은 정말 무농약으로 재배되나요? 씻지 않고 먹어도 되나요?",
    a: "네, 100% 안심하고 드셔도 됩니다. 외부 오염을 완전 차단한 청정 클린룸형 스마트팜에서 재배하므로 화학 농약과 생육 촉진제를 전혀 사용하지 않습니다. 세균 검사까지 마친 상태로 포장되므로 씻지 않고 바로 드실 수 있습니다.",
  },
  {
    q: "스마트팜 시스템 구축 및 기술 제휴 절차는 어떻게 되나요?",
    a: "Contact 메뉴를 통해 접수해 주시면 전문 컨설턴트가 1:1로 배정되어 [부지 및 환경 조사 → AI 표준 모듈 설계 → 시스템 시공 → 알고리즘 이식 및 교육]의 프로세스로 진행됩니다.",
  },
  {
    q: "스마트팜 운영 시 환경 오염이나 에너지 소모가 심하지 않나요?",
    a: "자체 개발 순환식 용수 필터링 기술로 농업용수를 90% 이상 절감하며, 태양광 패널 등 신재생 에너지를 결합해 탄소 배출을 최소화하고 있습니다.",
  },
  {
    q: "일반 농가나 지역 사회와의 상생 프로그램도 운영하나요?",
    a: "네, 지역 상생 플랫폼 Green-Bridge를 통해 농가에 AI 모니터링 센서를 보급하고 청년 농부를 위한 스마트팜 교육 프로그램을 제공하고 있습니다.",
  },
];

let currentVideo = videosData[0];
let isVideoPlaying = false;

// ==================== 2. EVENT LISTENERS & LOGIC ====================

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  const logoText = document.getElementById("nav-logo-text");
  const links = document.querySelectorAll(".nav-link");
  const toggleBtn = document.getElementById("mobile-toggle");

  if (window.scrollY > 60) {
    nav.classList.add("nav-solid");
    nav.classList.remove("nav-glass");
    logoText.classList.replace("text-white", "text-[#1B5E20]");
    toggleBtn.classList.replace("text-white", "text-[#2E7D32]");
    links.forEach((link) => {
      link.classList.remove(
        "text-white",
        "hover:text-[#8BC34A]",
        "hover:bg-white/10",
      );
      link.classList.add(
        "text-gray-800",
        "hover:text-[#2E7D32]",
        "hover:bg-green-50",
      );
    });
  } else {
    nav.classList.remove("nav-solid");
    nav.classList.add("nav-glass");
    logoText.classList.replace("text-[#1B5E20]", "text-white");
    toggleBtn.classList.replace("text-[#2E7D32]", "text-white");
    links.forEach((link) => {
      link.classList.remove(
        "text-gray-800",
        "hover:text-[#2E7D32]",
        "hover:bg-green-50",
      );
      link.classList.add(
        "text-white",
        "hover:text-[#8BC34A]",
        "hover:bg-white/10",
      );
    });
  }
});

// Dropdowns
document.querySelectorAll(".nav-dropdown-wrap").forEach((wrap) => {
  const menu = wrap.querySelector(".nav-dropdown");
  wrap.addEventListener("mouseenter", () => menu.classList.remove("hidden"));
  wrap.addEventListener("mouseleave", () => menu.classList.add("hidden"));
});

// Mobile Drawer
const mobileBtn = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

function toggleMobileMenu(force) {
  const isOpen =
    force !== undefined ? force : mobileMenu.classList.contains("max-h-0");
  if (isOpen) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-screen");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-screen");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
}
mobileBtn.addEventListener("click", () => toggleMobileMenu());

document.querySelectorAll(".mobile-acc-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const body = btn.nextElementSibling;
    body.classList.toggle("hidden");
    btn.querySelector("svg").classList.toggle("rotate-180");
  });
});

// ==================== 3. SECTION RENDERERS ====================

// Technology
function renderTech(idx) {
  const item = techTabsData[idx];
  const container = document.getElementById("tech-content");
  container.innerHTML = `
    <div class="relative rounded-3xl overflow-hidden aspect-[4/3] bg-green-50 shadow-xl">
      <img src="${item.img}" alt="${item.headline}" class="w-full h-full object-cover"/>
      <div class="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/20 to-transparent"></div>
      <div class="absolute bottom-4 left-4 right-4 flex gap-3">
        ${item.stats
          .map(
            (s) => `
          <div class="flex-1 rounded-xl p-3 text-center" style="background: rgba(255,255,255,0.12); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2);">
            <div class="text-[#8BC34A] text-lg font-extrabold">${s.v}</div>
            <div class="text-white text-xs">${s.l}</div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
    <div>
      <div class="text-xs font-bold text-[#8BC34A] uppercase tracking-widest mb-2">${item.en}</div>
      <h3 class="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">${item.headline}</h3>
      <p class="text-gray-500 leading-relaxed mb-8">${item.desc}</p>
      <div class="space-y-4">
        ${item.features
          .map(
            (f) => `
          <div class="flex gap-4 p-4 rounded-2xl bg-[#F8FAF8] border border-[#E8F5E9]">
            <div class="text-2xl flex-shrink-0">${f.icon}</div>
            <div>
              <div class="font-semibold text-gray-900 text-sm mb-1">${f.title}</div>
              <div class="text-gray-500 text-sm">${f.desc}</div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

document.querySelectorAll(".tech-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tech-tab-btn").forEach((b) => {
      b.className =
        "tech-tab-btn px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-[#2E7D32] hover:bg-[#C8E6C9]";
    });
    btn.className =
      "tech-tab-btn px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 bg-[#2E7D32] text-white shadow-md";
    renderTech(Number(btn.dataset.idx));
  });
});

// Products
const certColors = {
  무농약: "bg-[#E8F5E9] text-[#2E7D32]",
  GAP: "bg-[#F9FBE7] text-[#827717]",
  HACCP: "bg-[#E3F2FD] text-[#1565C0]",
};

function renderProducts(category = "전체") {
  const container = document.getElementById("products-grid");
  const filtered =
    category === "전체"
      ? productsData
      : productsData.filter((p) => p.category === category);

  container.innerHTML = filtered
    .map(
      (p, i) => `
    <div onclick="openProductModal(${i})" class="group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-md card-lift border border-gray-100">
      <div class="relative aspect-square overflow-hidden bg-green-50">
        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
        <div class="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          ${p.cert.map((c) => `<span class="px-2 py-0.5 rounded-lg text-xs font-bold ${certColors[c] || "bg-gray-100 text-gray-600"}">${c}</span>`).join("")}
        </div>
      </div>
      <div class="p-5">
        <div class="text-xs text-[#8BC34A] font-semibold mb-1">${p.category}</div>
        <h3 class="font-bold text-gray-900 text-lg mb-1">${p.name}</h3>
        <p class="text-xs text-[#2E7D32] font-medium mb-2">${p.en}</p>
        <p class="text-gray-500 text-sm mb-3">${p.desc}</p>
        <div class="flex items-center gap-2 text-xs text-gray-400">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          ${p.nutrition}
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

document.querySelectorAll(".prod-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".prod-tab-btn").forEach((b) => {
      b.className =
        "prod-tab-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 text-gray-600 hover:text-[#2E7D32] hover:bg-green-50";
    });
    btn.className =
      "prod-tab-btn px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 bg-[#2E7D32] text-white shadow";
    renderProducts(btn.dataset.cat);
  });
});

// Gallery
function renderGallery(category = "전체") {
  const container = document.getElementById("gallery-grid");
  const filtered =
    category === "전체"
      ? galleryData
      : galleryData.filter((g) => g.category === category);

  container.innerHTML = filtered
    .map(
      (item, i) => `
    <div onclick="openGalleryModal(${item.id})" class="group relative cursor-pointer rounded-2xl overflow-hidden bg-green-50 ${i % 5 === 0 ? "col-span-2 row-span-2" : ""}" style="aspect-ratio: 1/1;">
      <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute inset-0 flex flex-col justify-end p-4" style="background: linear-gradient(to top, rgba(27,94,32,0.88) 0%, rgba(27,94,32,0.2) 60%, transparent 100%);">
        <div class="text-[#8BC34A] text-xs font-bold mb-1">${item.category}</div>
        <div class="text-white font-bold text-sm">${item.title}</div>
        <div class="flex gap-1 mt-2 flex-wrap">
          ${item.tags.map((tag) => `<span class="px-2 py-0.5 rounded bg-white/15 text-white text-[10px]">#${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

document.querySelectorAll(".gal-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".gal-tab-btn").forEach((b) => {
      b.className =
        "gal-tab-btn flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 bg-[#F1F8E9] text-[#2E7D32] hover:bg-[#C8E6C9]";
    });
    btn.className =
      "gal-tab-btn flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 bg-[#2E7D32] text-white shadow-md";
    renderGallery(btn.dataset.cat);
  });
});

// Video Showcase
function renderVideoPlayer() {
  const player = document.getElementById("main-video-player");
  const thumbs = document.getElementById("video-thumbnails");
  if (!player || !thumbs) return;

  player.innerHTML = `
    <img src="${currentVideo.thumb}" alt="${currentVideo.title}" class="w-full h-full object-cover opacity-80" />
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      ${
        !isVideoPlaying
          ? `
        <button onclick="playVideo(true)" class="group flex items-center justify-center w-20 h-20 rounded-full bg-white/20 hover:bg-[#8BC34A] border-2 border-white transition-all duration-300 hover:scale-110 shadow-xl">
          <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
      `
          : `
        <div class="flex flex-col items-center gap-4">
          <div class="flex gap-2">
            <div class="w-2 bg-[#8BC34A] rounded-full h-8 animate-pulse"></div>
            <div class="w-2 bg-[#8BC34A] rounded-full h-12 animate-pulse" style="animation-delay: 0.2s"></div>
            <div class="w-2 bg-[#8BC34A] rounded-full h-6 animate-pulse" style="animation-delay: 0.4s"></div>
            <div class="w-2 bg-[#8BC34A] rounded-full h-10 animate-pulse" style="animation-delay: 0.1s"></div>
            <div class="w-2 bg-[#8BC34A] rounded-full h-7 animate-pulse" style="animation-delay: 0.3s"></div>
          </div>
          <div class="text-white/80 text-sm font-medium">재생 중...</div>
          <button onclick="playVideo(false)" class="px-5 py-2 rounded-xl bg-white/20 text-white text-sm hover:bg-white/30 transition-colors">
            ⏸ 일시정지
          </button>
        </div>
      `
      }
    </div>
    <div class="absolute bottom-0 left-0 right-0 p-6" style="background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);">
      <div class="flex items-end justify-between">
        <div>
          <div class="text-[#8BC34A] text-xs font-semibold mb-1">그린테라 공식 영상</div>
          <h3 class="text-white font-bold text-lg">${currentVideo.title}</h3>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-black/40 text-white text-sm font-mono">${currentVideo.duration}</span>
      </div>
    </div>
  `;

  thumbs.innerHTML = videosData
    .map(
      (v) => `
    <button onclick="selectVideo(${v.id})" class="group text-left rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
      currentVideo.id === v.id
        ? "border-[#8BC34A] shadow-lg shadow-lime-900/30"
        : "border-white/10 hover:border-white/30"
    }">
      <div class="relative aspect-video bg-black overflow-hidden">
        <img src="${v.thumb}" alt="${v.title}" class="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"/>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white transition-all ${
            currentVideo.id === v.id
              ? "bg-[#8BC34A]"
              : "bg-black/40 group-hover:bg-[#8BC34A]/80"
          }">
            <svg class="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-xs font-mono">${v.duration}</span>
      </div>
      <div class="p-4 bg-white/5">
        <div class="text-white font-semibold text-sm mb-1 truncate">${v.title}</div>
        <div class="text-white/50 text-xs line-clamp-2">${v.desc}</div>
      </div>
    </button>
  `,
    )
    .join("");
}

function selectVideo(id) {
  currentVideo = videosData.find((v) => v.id === id);
  isVideoPlaying = false;
  renderVideoPlayer();
}

function playVideo(play) {
  isVideoPlaying = play;
  renderVideoPlayer();
}

// FAQ
function renderFAQ() {
  const container = document.getElementById("faq-accordion");
  container.innerHTML = faqsData
    .map(
      (f, i) => `
    <div class="faq-item rounded-2xl border-2 transition-all duration-200 overflow-hidden ${i === 0 ? "border-[#8BC34A] shadow-md" : "border-gray-100 hover:border-[#C8E6C9]"}">
      <button onclick="toggleFAQ(${i})" class="w-full flex items-start gap-4 p-5 text-left bg-white">
        <span class="faq-num flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${i === 0 ? "bg-[#8BC34A] text-white" : "bg-[#F1F8E9] text-[#2E7D32]"}">${i + 1}</span>
        <span class="faq-q flex-1 font-semibold text-sm sm:text-base leading-relaxed ${i === 0 ? "text-[#2E7D32]" : "text-gray-800"}">${f.q}</span>
        <span class="faq-icon flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${i === 0 ? "border-[#8BC34A] bg-[#8BC34A] text-white rotate-45" : "border-gray-300 text-gray-400"}">
          <svg class="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 2v8M2 6h8"/></svg>
        </span>
      </button>
      <div class="faq-body ${i === 0 ? "" : "hidden"} px-5 pb-5 flex gap-4">
        <div class="w-7 flex-shrink-0 flex justify-center"><div class="w-0.5 h-full bg-[#E8F5E9]"></div></div>
        <p class="text-gray-600 text-sm leading-relaxed">${f.a}</p>
      </div>
    </div>
  `,
    )
    .join("");
}

function toggleFAQ(idx) {
  document.querySelectorAll(".faq-item").forEach((item, i) => {
    const body = item.querySelector(".faq-body");
    const num = item.querySelector(".faq-num");
    const q = item.querySelector(".faq-q");
    const icon = item.querySelector(".faq-icon");

    if (i === idx && body.classList.contains("hidden")) {
      item.className =
        "faq-item rounded-2xl border-2 transition-all duration-200 overflow-hidden border-[#8BC34A] shadow-md";
      body.classList.remove("hidden");
      num.className =
        "faq-num flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold bg-[#8BC34A] text-white";
      q.className =
        "faq-q flex-1 font-semibold text-sm sm:text-base leading-relaxed text-[#2E7D32]";
      icon.className =
        "faq-icon flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 border-[#8BC34A] bg-[#8BC34A] text-white rotate-45";
    } else {
      item.className =
        "faq-item rounded-2xl border-2 transition-all duration-200 overflow-hidden border-gray-100 hover:border-[#C8E6C9]";
      body.classList.add("hidden");
      num.className =
        "faq-num flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold bg-[#F1F8E9] text-[#2E7D32]";
      q.className =
        "faq-q flex-1 font-semibold text-sm sm:text-base leading-relaxed text-gray-800";
      icon.className =
        "faq-icon flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 border-gray-300 text-gray-400";
    }
  });
}

// ==================== 4. MODALS ====================

const modalEl = document.getElementById("global-modal");
modalEl.addEventListener("click", (e) => {
  if (e.target === modalEl) modalEl.classList.add("hidden");
});

function openGalleryModal(id) {
  const item = galleryData.find((g) => g.id === id);
  if (!item) return;

  modalEl.innerHTML = `
    <div class="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative" onclick="event.stopPropagation()">
      <div class="relative bg-green-50" style="aspect-ratio: 4/3;">
        <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover"/>
        <button onclick="document.getElementById('global-modal').classList.add('hidden')" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div class="absolute bottom-0 left-0 right-0 p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
          <div class="flex gap-2 flex-wrap">
            ${item.tags.map((t) => `<span class="px-2.5 py-1 rounded-lg bg-[#8BC34A]/80 text-white text-xs font-semibold">#${t}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="p-6">
        <div class="text-[#8BC34A] text-xs font-bold uppercase tracking-widest mb-1">${item.category}</div>
        <h3 class="text-xl font-extrabold text-gray-900 mb-3">${item.title}</h3>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">${item.desc}</p>
        
      </div>
    </div>
  `;
  modalEl.classList.remove("hidden");
}

function openProductModal(idx) {
  const p = productsData[idx];
  if (!p) return;

  modalEl.innerHTML = `
    <div class="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative" onclick="event.stopPropagation()">
      <div class="relative aspect-[4/3] bg-green-50">
        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover"/>
        <button onclick="document.getElementById('global-modal').classList.add('hidden')" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors shadow">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div class="absolute top-4 left-4 flex gap-2">
          ${p.cert.map((c) => `<span class="px-2.5 py-1 rounded-lg text-xs font-bold ${certColors[c] || "bg-gray-100 text-gray-600"}">${c}</span>`).join("")}
        </div>
      </div>
      <div class="p-6">
        <div class="text-xs text-[#8BC34A] font-bold uppercase tracking-wider mb-1">${p.category}</div>
        <h3 class="text-xl font-extrabold text-gray-900 mb-1">${p.name}</h3>
        <p class="text-sm text-gray-500 mb-4">${p.en}</p>
        <p class="text-gray-700 text-sm leading-relaxed mb-4">${p.desc}</p>
        <div class="p-4 rounded-2xl bg-[#F1F8E9]">
          <div class="text-xs font-bold text-[#2E7D32] uppercase tracking-wider mb-2">영양 정보</div>
          <p class="text-gray-700 text-sm">${p.nutrition}</p>
        </div>
      </div>
    </div>
  `;
  modalEl.classList.remove("hidden");
}

// ==================== 5. FORM VALIDATION ====================

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.getElementById("form-type").value;
  const name = document.getElementById("form-name").value.trim();
  const email = document.getElementById("form-email").value.trim();
  const message = document.getElementById("form-message").value.trim();

  let valid = true;
  document.getElementById("err-type").classList.toggle("hidden", !!type);
  if (!type) valid = false;

  document.getElementById("err-name").classList.toggle("hidden", !!name);
  if (!name) valid = false;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = emailPattern.test(email);
  document.getElementById("err-email").classList.toggle("hidden", emailValid);
  if (!emailValid) valid = false;

  document.getElementById("err-message").classList.toggle("hidden", !!message);
  if (!message) valid = false;

  if (valid) {
    modalEl.innerHTML = `
      <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative" onclick="event.stopPropagation()">
        <div class="w-20 h-20 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto mb-5">
          <svg class="w-10 h-10 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-extrabold text-gray-900 mb-2">문의가 접수되었습니다!</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-6">24시간 내에 전담 컨설턴트가<br/>이메일로 연락드리겠습니다.</p>
        <button onclick="document.getElementById('global-modal').classList.add('hidden')" class="w-full py-3 bg-[#8BC34A] text-white font-bold rounded-xl hover:bg-[#7CB342] transition-colors">
          확인
        </button>
      </div>
    `;
    modalEl.classList.remove("hidden");
    document.getElementById("contact-form").reset();
  }
});

// ==================== 6. SCROLL REVEAL OBSERVER ====================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Initialize All Sections
renderTech(0);
renderProducts("전체");
renderGallery("전체");
renderVideoPlayer();
renderFAQ();

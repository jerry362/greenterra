// ==================== 1. DATA SOURCES ====================

const techTabsData = [
  {
    id: "smartfarm",
    label: "스마트팜 기술",
    en: "Smart Farm Tech",
    headline: "ICT와 생물학의 완벽한 융합",
    desc: "기술과 데이터 분석을 통해 작물 재배 환경의 모든 변수를 정밀하게 통제합니다.",
    img: "img/스마트팜.png",
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
    img: "img/자동화시스템.png",
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
    img: "img/ai재배환경.png",
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
    img: "img/버터헤드.png",
    nutrition: "비타민 K·A 풍부, 수분 95%",
    cert: ["무농약", "GAP"],
    desc: "부드럽고 아삭한 유럽형 상추. 씻지 않고 바로 섭취 가능.",
  },
  {
    name: "슈퍼푸드 케일",
    en: "Superfoods Kale",
    category: "프리미엄 엽채류",
    img: "img/케일.png",
    nutrition: "비타민 C 200mg+, 항산화 성분",
    cert: ["무농약", "GAP", "HACCP"],
    desc: "영양 밀도 세계 1위 작물. AI 조명으로 최대 영양 함량 재배.",
  },
  {
    name: "유럽종 오크리프",
    en: "Oakleaf Lettuce",
    category: "프리미엄 엽채류",
    img: "img/오크리프.png",
    nutrition: "비타민 C·E 풍부, 항산화 성분",
    cert: ["무농약", "GAP"],
    desc: "참나무 잎을 닮은 부드러운 식감. 쓴맛이 적고 단맛이 도는 고급 샐러드 채소.",
  },
  {
    name: "버터헤드 카이피라",
    en: "Caipira Lettuce",
    category: "프리미엄 엽채류",
    img: "img/카이피라.png",
    nutrition: "식이섬유·칼슘 풍부, 수분 95%",
    cert: ["무농약", "GAP"],
    desc: "도톰하고 부드러운 잎의 결. 씹을수록 은은한 단맛과 아삭함이 느껴지는 품종.",
  },
  {
    name: "로메인 레터스",
    en: "Romaine Lettuce",
    category: "프리미엄 엽채류",
    img: "img/로메인.png",
    nutrition: "엽산·철분 풍부, 저칼로리",
    cert: ["무농약", "GAP"],
    desc: "시저 샐러드의 필수 재료. 아삭함과 청량감이 뛰어남.",
  },
  {
    name: "크리스피 프릴아이스",
    en: "Frillice Lettuce",
    category: "프리미엄 엽채류",
    img: "img/프릴아이스.png",
    nutrition: "엽산·비타민 A 풍부, 저칼로리",
    cert: ["무농약", "GAP"],
    desc: "톱니 모양의 잎 끝이 주는 극상의 아삭함. 드레싱과 곁들여도 쉽게 숨이 죽지 않는 식감.",
  },
  {
    name: "방울토마토",
    en: "Cherry Tomato",
    category: "기능성 과채류",
    img: "img/토마토.png",
    nutrition: "리코펜·비타민C 풍부",
    cert: ["무농약", "GAP"],
    desc: "당도 12브릭스 이상의 달콤한 방울토마토.",
  },
  {
    name: "파프리카",
    en: "Paprika",
    category: "기능성 과채류",
    img: "img/파프리카.png",
    nutrition: "비타민C 257mg, 베타카로틴",
    cert: ["무농약"],
    desc: "선명한 색상과 풍부한 영양. 스낵으로도 즐기기 좋음.",
  },
  {
    name: "샤인머스켓",
    en: "Muscat",
    category: "기능성 과채류",
    img: "img/샤인머스켓.png",
    nutrition: "폴리페놀·칼륨 풍부, 당도 18Brix+",
    cert: ["무농약", "GAP"],
    desc: "AI 광량 제어로 완성한 얇은 껍질과 풍부한 과즙. 망고 향의 깊은 풍미를 자랑하는 프리미엄 포도.",
  },
  {
    name: "미니 애플수박",
    en: "Mini Apple Watermelon",
    category: "기능성 과채류",
    img: "img/애플수박.png",
    nutrition: "리코펜·시트룰린 풍부, 수분 92%",
    cert: ["무농약", "GAP"],
    desc: "사과처럼 깎아 먹는 얇은 껍질과 높은 당도. 1인 가구 디저트로 최적화된 고당도 미니 수박.",
  },
  {
    name: "식물 성장 사운드 & 힐링 스피커",
    en: "Plant Sound & Healing Speaker",
    category: "스마트 굿즈",
    img: "img/식물 성장 사운드 & 힐링 스피커.png",
    nutrition: "블루투스 연동, 생육 음파 케어",
    cert: ["친환경", "KC인증"],
    desc: "식물 생육을 촉진하는 특화 음파 기술과 감성 조명이 결합된 프리미엄 홈 가드닝 스피커.",
  },
  {
    name: "신선도 유지 스마트 클립",
    en: "Freshness Monitoring Smart Clip",
    category: "스마트 굿즈",
    img: "img/신선도 유지 스마트 클립.png",
    nutrition: "온·습도 및 에틸렌 가스 정밀 감지",
    cert: ["IoT인증", "KC인증"],
    desc: "밀폐 용기에 장착하여 채소와 과일의 신선 상태 및 가스 농도를 스마트폰 앱으로 실시간 모니터링.",
  },
  {
    name: "과채류 당도 측정 리모컨",
    en: "Brix Sweetness Sensor",
    category: "스마트 굿즈",
    img: "img/과채류 당도 측정 리모컨.png",
    nutrition: "비파괴 광학 당도(Brix) 측정",
    cert: ["정밀센서", "KC인증"],
    desc: "표면에 대는 즉시 과채류 손상 없이 10.8°Bx 이상의 고당도를 초정밀 수치로 측정하는 휴대용 센서.",
  },
  {
    name: "마이크로 버블 세척 캡슐",
    en: "Micro-Bubble Cleaning Capsule",
    category: "스마트 굿즈",
    img: "img/껍질째 먹는 채소_과일 전용 마이크로 버블 세척 캡슐.png",
    nutrition: "잔류 농약 99.9% 무세제 분해 세척",
    cert: ["친환경", "살균인증"],
    desc: "물속에 담그면 초미세 마이크로 버블을 발생시켜 껍질째 먹는 농산물을 완벽하게 세척하는 캡슐 디바이스.",
  },
  {
    name: "맞춤형 수직 스마트 가든 타워",
    en: "Vertical Smart Garden Tower",
    category: "스마트 굿즈",
    img: "img/맞춤형 수직 스마트 가든 타워.png",
    nutrition: "LED 광량·순환 양액 AI 전자동 제어",
    cert: ["AI스마트", "KC인증"],
    desc: "거실이나 주방에서 상추부터 미니 수박까지 사계절 청정 재배할 수 있는 도심형 수직 스마트 팜 타워.",
  },
  {
    name: "AI 엽채류 영양 매니저 팟",
    en: "AI Smart Hydroponic Planter Pot",
    category: "스마트 굿즈",
    img: "img/AI 엽채류 영양 매니저 팟.png",
    nutrition: "LED 파장·수분·양액 지능형 자동 공급",
    cert: ["친환경", "KC인증"],
    desc: "주방이나 식탁 위에서 신선한 엽채류를 무농약으로 손쉽게 키우는 IoT 스마트 수경재배기. 맞춤형 광량과 급수 알림을 자동 지원합니다.",
  },
];

const galleryData = [
  {
    id: 1,
    category: "스마트팜",
    img: "img/스마트팜1.png",
    title: "그린테라 메가 스마트팜 콤플렉스",
    desc: "태양광 발전 패널과 대규모 다층 수직온실, 친환경 물류 인프라가 유기적으로 연결된 미래형 친환경 농업 클러스터 전경.",
    tags: ["스마트팜단지", "태양광", "친환경농업", "글로벌메가팜"],
    prompt:
      "massive futuristic smart farm complex, large glass vertical greenhouse with solar roof panels, Greenterra logo, aerial drone view, sunny day, 8K render",
  },
  {
    id: 2,
    category: "스마트팜",
    img: "img/스마트팜2.jpg",
    title: "도심형 에코-아그리 파크",
    desc: "곡면형 태양광 루프와 도심 수변 생태 공원이 융합되어 시민과 상생하는 혁신적인 수직 스마트팜 단지 아키텍처.",
    tags: ["도심형수직농장", "에코파크", "친환경건축", "생태도시"],
    prompt:
      "eco-agri complex, futuristic curved glass architectural greenhouse, lush park with pond, solar canopy, aerial view, cinematic lighting, 8K",
  },
  {
    id: 3,
    category: "스마트팜",
    img: "img/스마트팜3.png",
    title: "자율 이송 로봇과 AI 클린룸",
    desc: "수직 다단 베드 사이를 자율주행하며 수확물을 운반하는 로봇 캐리어와 홀로그램 패널로 작물 생육 지수를 체크하는 스마트 공정.",
    tags: ["자율주행로봇", "생육모니터링", "클린룸", "GreenBot"],
    prompt:
      "futuristic indoor vertical farm, AGV harvest transport robots, holographic crop health display 99.8%, researchers in lab coats, clean green LED lighting, 8K",
  },
  {
    id: 4,
    category: "스마트팜",
    img: "img/스마트팜4.png",
    title: "우드-글라스 중정형 수직 연구 팜",
    desc: "자연 채광을 극대화한 중정 아트리움 구조의 목조 빌딩 속에서 자율 로봇 암(Arm)과 연구진이 협업하는 친환경 재배 시설.",
    tags: ["스마트연구팜", "자연채광", "협동로봇", "친환경목조"],
    prompt:
      "modern multi-story wooden atrium indoor farm, glass ceiling skylight, autonomous robotic inspection rover, female agricultural scientist, lush lettuce tiers, 8K",
  },
  {
    id: 5,
    category: "스마트팜",
    img: "img/스마트팜5.png",
    title: "스마트 온실 자율 선별 로봇 Agri-Bot",
    desc: "고정밀 로봇 암이 엽채류의 성숙도를 광학 스캔하여 정밀 수확하고, 전용 태블릿으로 데이터를 동기화하는 스마트 온실 시스템.",
    tags: ["AgriBot", "정밀수확", "수경재배", "온실자동화"],
    prompt:
      "high-tech greenhouse with stacked hydroponic shelves, white caterpillar robotic arm Agri-Bot harvesting lettuce, scientist monitoring with tablet, bright daylight, 8K",
  },
  {
    id: 6,
    category: "스마트팜",
    img: "img/스마트팜6.jpeg",
    title: "스마트 작물 영양 및 잔류 성분 정밀 분석",
    desc: "홀로그램 UI를 통해 재배된 채소의 비타민 함량과 무농약 안전성 지표를 실시간 분자 단위로 계측하는 첨단 R&D 연구소.",
    tags: ["성분분석", "안전성검사", "무농약인증", "스마트R&D"],
    prompt:
      "advanced agricultural R&D laboratory, female researcher operating spectrometer, holographic UI showing nutrient profile and zero pesticide safety check, test tubes with plant extracts, 8K",
  },
  {
    id: 7,
    category: "스마트팜",
    img: "img/스마트팜7.png",
    title: "100% 순환식 용수 재활용 시스템",
    desc: "우수 집수부터 3단계 UV 나노 정화, 양액 밸런싱을 거쳐 90% 이상의 물을 재순환시키는 그린테라의 독자적 클로즈드 루프 수자원 기술.",
    tags: ["용수재활용", "순환농업", "워터리사이클", "ESG기술"],
    prompt:
      "architectural cross-section of modern vertical farm, transparent 100% closed-loop water filtration and recycling system with glowing blue pipes and tanks, solar roof, cityscape background, 8K",
  },
  {
    id: 19,
    category: "AI 모니터링",
    img: "img/모니터링1.png",
    title: "AI 멀티 스펙트럼 영양 밸런스 분석",
    desc: "AI 비전 카메라가 질소(N), 인(P), 칼륨(K) 등 5대 필수 무기질 균형과 엽면 세포 활성도를 실시간 측정해 14일 내 32% 생육 향상을 유도하는 정밀 분석 시스템.",
    tags: ["멀티스펙트럼", "영양밸런스", "비전스캔", "생육최적화"],
    prompt:
      "advanced AI vision camera scanning fresh hydroponic lettuce, futuristic holographic HUD showing nutrient balance N P K and plant health index 98%, Greenterra lab background, 8K",
  },
  {
    id: 20,
    category: "AI 모니터링",
    img: "img/모니터링2.png",
    title: "AI 초미세 병충해 사전 감지 (99.8%)",
    desc: "잎 단면의 미세 세포 구조를 돋보기형 AI 센서로 스캔해 병충해 조기 차단과 온·습도, CO₂, 광량(320μmol)의 최적 조합을 실시간 검증하는 지능형 모니터링.",
    tags: ["병충해사전감지", "99.8%정확도", "미세세포스캔", "환경최적화"],
    prompt:
      "close-up of dew-covered lettuce leaf with glowing holographic circular scanner, HUD displaying plant health 99.8% and environmental metrics, vertical farm background, 8K",
  },
  {
    id: 21,
    category: "AI 모니터링",
    img: "img/모니터링3.jpg",
    title: "버터헤드 생육 추이 및 수확 디데이 예측",
    desc: "파종 32일차 버터헤드 상추의 누적 생육 키(cm), H2O 포화도(93%), pH(6.2) 수치를 토대로 잔여 수확 일자(D-7)를 자동 연산하는 생육 예측 알고리즘.",
    tags: ["수확예측", "생육트렌드", "버터헤드", "수경데이터"],
    prompt:
      "indoor hydroponic vertical shelves with fresh butterhead lettuce, floating HUD interface displaying growth trend curve, health optimal 96%, and estimated harvest 7 days, 8K",
  },
  {
    id: 22,
    category: "AI 모니터링",
    img: "img/모니터링4.jpg",
    title: "야외 스마트 필드 엽록소 및 NDVI 분석",
    desc: "노지 및 개방형 스마트 팜 필드에서 작물 엽록소(512nm 파장)와 식생지수(NDVI 0.88), 예상 수확량(104%)을 실시간 증강현실(AR) HUD로 분석하는 테크놀로지.",
    tags: ["NDVI지수", "엽록소스캔", "수확량예측", "스마트필드"],
    prompt:
      "green soybean plant in a smart farm field at sunrise, illuminated green scanning outline on leaf, holographic data HUD displaying chlorophyll 512nm and NDVI 0.88, 8K",
  },
  {
    id: 12,
    category: "재배 과정",
    img: "img/재배과정1.png",
    title: "AI 로봇 정밀 미스트 양액 공급",
    desc: "AI 작물 모니터링 시스템과 연동된 로봇 암이 생육 데이터를 실시간 판독하며 최적의 미세 양액을 분사하는 자동화 재배 공정.",
    tags: ["정밀관수", "양액제어", "로봇암", "스마트공정"],
    prompt:
      "advanced robotic arm spraying fine nutrient mist over lush green crops, AI crop monitoring screen displaying growth 98%, Greenterra vertical farm, 8K",
  },
  {
    id: 13,
    category: "재배 과정",
    img: "img/재배과정2.jpg",
    title: "듀얼 로보틱 스캐닝 & 미세 분사",
    desc: "라임색 레이저 비전으로 작물 잎의 엽록소 상태를 초정밀 스캐닝함과 동시에 마이크로 노즐로 수분을 제어하는 하이테크 케어.",
    tags: ["레이저스캔", "비전센서", "마이크로노즐", "생육케어"],
    prompt:
      "high-tech carbon fiber robotic arm emitting green laser scanner over young green seedlings, micro mist nozzles spraying, macro photography, 8K",
  },
  {
    id: 14,
    category: "재배 과정",
    img: "img/재배과정3.jpg",
    title: "새싹의 태동과 이슬 맺힘",
    desc: "비옥한 스마트 배지에서 껍질을 깨고 힘차게 움튼 여린 새싹 잎 위에 맺힌 청명한 물방울 매크로 포커스.",
    tags: ["발아", "새싹", "자연생명력", "매크로"],
    prompt:
      "macro close-up of a tiny green sprout emerging from rich soil with a perfect clear water droplet on its leaf, soft sunlight, bokeh, photorealistic, 8K",
  },
  {
    id: 15,
    category: "재배 과정",
    img: "img/재배과정4.png",
    title: "AI 6단계 생육 인포그래픽 타임라인",
    desc: "씨앗 파종부터 발아, 어린 묘, 왕성한 성장, 수확기에 이르는 전 과정을 AI 센서(온도, 습도, CO₂, 광량 320μmol)로 정밀 제어하는 생육 로드맵.",
    tags: ["생육타임라인", "AI생육분석", "단계별성장", "스마트파밍"],
    prompt:
      "horizontal plant growth stages from seed to mature lettuce, floating holographic UI showing temperature 22.4C and plant health 99.8%, Greenterra farm background, 8K",
  },
  {
    id: 16,
    category: "재배 과정",
    img: "img/재배과정5.jpeg",
    title: "지하부 뿌리 발달 단면",
    desc: "토양 및 스마트 배지 속에서 씨앗이 수분을 흡수해 깊고 튼튼하게 뻗어 나가는 뿌리 시스템의 성장 단계별 지하 단면.",
    tags: ["뿌리성장", "발아단면", "지하생육", "영양흡수"],
    prompt:
      "cross-section view of plant roots growing into rich soil, stages of seed germination to young seedling, detailed root hairs, macro studio photography, 8K",
  },
  {
    id: 17,
    category: "재배 과정",
    img: "img/재배과정6.jpg",
    title: "청정 케일 잎맥과 물방울 극접사",
    desc: "무농약 무균 환경에서 건강하게 뻗은 청정 잎채소의 선명한 잎맥과 싱그러운 빗방울을 포착한 초근접 텍스처.",
    tags: ["잎맥접사", "무농약", "극상의신선함", "수분텍스처"],
    prompt:
      "extreme macro shot of fresh green vegetable leaf with crystalline morning dew drops, intricate leaf veins, dark moody background, razor-sharp detail, 8K",
  },
  {
    id: 18,
    category: "재배 과정",
    img: "img/재배과정7.png",
    title: "아침 햇살 머금은 청정 버터헤드",
    desc: "LED 최적 광량과 청정 수분을 듬뿍 머금어 씻지 않고 바로 먹을 수 있는 프리미엄 엽채류의 싱싱한 수확 직전 모습.",
    tags: ["버터헤드", "수확직전", "청정먹거리", "햇살연출"],
    prompt:
      "close-up of vibrant fresh lettuce leaves covered with sparkling water droplets, glowing morning sunlight in a modern vertical farm, Greenterra logo background, 8K",
  },
  {
    id: 23,
    category: "미래 컨셉",
    img: "img/미래컨셉1.jpeg",
    title: "도심 공존형 버던트 버티컬 팜 타워",
    desc: "고층 오피스 빌딩 숲 중심에서 사계절 청정 채소를 자급자족하고 도시 탄소를 정화하는 도심 생태 공존형 수직농장 타워.",
    tags: ["수직농장타워", "도시생태", "탄소정화", "어반스마트팜"],
    prompt:
      "massive futuristic urban ecosystem coexistence building, verdant vertical farm skyscraper, modern glass facade covered with hanging plants, city streets with trams, aerial view, 8K render",
  },
  {
    id: 24,
    category: "미래 컨셉",
    img: "img/미래컨셉2.png",
    title: "그린테라 바이오필릭 메가 아그리 타워",
    desc: "유선형 테라스 녹지와 유리 온실 튜브가 감싸고 있는 미래형 초고층 랜드마크 농업 타워. 수변 공원과 연계된 청정 랜드스케이프 구현.",
    tags: ["메가아그리타워", "바이오필릭", "스마트시티", "랜드마크"],
    prompt:
      "gigantic biophilic vertical farm skyscraper, Greenterra logo on glass facade, organic curved terraces with lush greenery, waterfront smart city, daylight, cinematic lighting, 8K",
  },
  {
    id: 25,
    category: "미래 컨셉",
    img: "img/미래컨셉3.jpg",
    title: "나선형 트위스트 스카이 스마트팜",
    desc: "나선형으로 회전하며 자연 일조량을 극대화한 독창적인 트위스트 구조의 수직 스마트팜과 공중 스카이브릿지 보행로.",
    tags: ["나선형온실", "트위스트타워", "스카이브릿지", "태양광루프"],
    prompt:
      "futuristic twisted helix skyscraper with integrated greenhouse pods, green rooftop gardens, solar panels, aerial pedestrian bridges, clean eco city street, 8K",
  },
  {
    id: 26,
    category: "미래 컨셉",
    img: "img/미래컨셉4.png",
    title: "도심 자율 연결형 하이퍼 버티컬 팜",
    desc: "도시 간 고가 공중 회랑으로 유통망이 연결되고 대규모 유리 다단 재배실에서 청정 먹거리를 연중 연속 생산하는 도심 농업 허브.",
    tags: ["스카이웨이", "도심식량허브", "자동화재배실", "하이퍼팜"],
    prompt:
      "hyper-futuristic multi-tier vertical farming skyscraper with connecting skybridges, glowing Greenterra signage, lush aeroponic chambers visible through glass, metropolis background, 8K",
  },
  {
    id: 27,
    category: "미래 컨셉",
    img: "img/미래컨셉5.jpg",
    title: "친환경 신재생 에너지 에코 실린더 팜",
    desc: "옥상 태양광 패널과 소형 풍력 터빈으로 100% 자체 전력을 생산하며 트램 및 도심 녹지 축과 완벽히 연계된 원통형 클린 에너지 스마트팜.",
    tags: ["풍력태양광", "에코실린더", "친환경트램", "탄소제로타워"],
    prompt:
      "cylindrical futuristic glass greenhouse tower with rooftop solar panels and micro wind turbines, modern green boulevard with electric trams, zero carbon eco architecture, 8K",
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
  {
    id: 4,
    title: "도심 속 수직정원 시뮬레이션",
    desc: "미래 메가시티 빌딩 숲 속에서 구현되는 그린테라의 탄소 제로 수직 농장 가상 투어",
    duration: "0:50",
    thumb:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=450&fit=crop&auto=format",
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

// 특정 탭을 활성화하면서 섹션으로 부드럽게 스크롤 이동하는 함수
function goToTechTab(idx) {
  // 1. 해당 탭 화면 렌더링
  renderTech(idx);

  // 2. 탭 버튼들의 스타일(초록색 활성 상태) 동기화 (모바일 폰트 크기 유지 클래스 포함)
  const tabBtns = document.querySelectorAll(".tech-tab-btn");
  tabBtns.forEach((btn, i) => {
    if (i === idx) {
      btn.className =
        "tech-tab-btn flex-1 sm:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 bg-[#2E7D32] text-white shadow-md text-center whitespace-nowrap";
    } else {
      btn.className =
        "tech-tab-btn flex-1 sm:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-[#2E7D32] hover:bg-[#C8E6C9] text-center whitespace-nowrap";
    }
  });

  // 3. 테크놀로지 섹션 위치로 스크롤 이동
  scrollToSection("technology");
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");
  const toggleBtn = document.getElementById("mobile-toggle");

  if (window.scrollY > 60) {
    // 스크롤을 내렸을 때: 흰색 불투명 배경 + 어두운 텍스트
    nav.classList.add("nav-solid");
    nav.classList.remove("nav-glass");
    if (toggleBtn) toggleBtn.classList.replace("text-white", "text-[#2E7D32]");

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
    // 최상단에 있을 때: 반투명 글래스 배경 + 흰색 텍스트
    nav.classList.remove("nav-solid");
    nav.classList.add("nav-glass");
    if (toggleBtn) toggleBtn.classList.replace("text-[#2E7D32]", "text-white");

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
        "tech-tab-btn flex-1 sm:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-[#2E7D32] hover:bg-[#C8E6C9] text-center whitespace-nowrap";
    });
    btn.className =
      "tech-tab-btn flex-1 sm:flex-none px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 bg-[#2E7D32] text-white shadow-md text-center whitespace-nowrap";
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

  let filtered = [];

  if (category === "전체") {
    // 3가지 카테고리별로 각각 앞의 2개씩만 추출하여 총 6개 구성
    const greens = productsData
      .filter((p) => p.category === "프리미엄 엽채류")
      .slice(0, 2);
    const fruits = productsData
      .filter((p) => p.category === "기능성 과채류")
      .slice(0, 2);
    const goods = productsData
      .filter((p) => p.category === "스마트 굿즈")
      .slice(0, 2);
    filtered = [...greens, ...fruits, ...goods];
  } else {
    // 특정 카테고리 탭을 눌렀을 때는 해당 카테고리 상품 전체 표시
    filtered = productsData.filter((p) => p.category === category);
  }

  container.innerHTML = filtered
    .map(
      (p) => `
    <div onclick="openProductModalByName('${p.name}')" class="group cursor-pointer rounded-3xl overflow-hidden bg-white shadow-md card-lift border border-gray-100">
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
    // 모든 탭을 연한 연두색 비활성 스타일로 초기화
    document.querySelectorAll(".prod-tab-btn").forEach((b) => {
      b.className =
        "prod-tab-btn px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 bg-[#F1F8E9] text-[#2E7D32] hover:bg-[#C8E6C9]";
    });
    // 클릭된 탭만 짙은 초록색 활성 스타일로 변경
    btn.className =
      "prod-tab-btn px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 bg-[#2E7D32] text-white shadow-md";
    renderProducts(btn.dataset.cat);
  });
});

// Gallery
function renderGallery(category = "전체") {
  const container = document.getElementById("gallery-grid");
  let filtered = [];

  if (category === "전체") {
    // 1. 전체 탭: 카테고리별 대표 1개씩 추출 (총 4개)
    const catInternal = galleryData.find((g) => g.category === "스마트팜");
    const catMonitoring = galleryData.find((g) => g.category === "AI 모니터링");
    const catProcess = galleryData.find((g) => g.category === "재배 과정");
    const catConcept = galleryData.find((g) => g.category === "미래 컨셉");

    filtered = [catInternal, catMonitoring, catProcess, catConcept].filter(
      Boolean,
    );

    // 전체 탭: 가장 큰 2열 배치 유지
    container.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8";
  } else {
    // 2. 카테고리 탭: 해당 카테고리 전체 노출
    filtered = galleryData.filter((g) => g.category === category);

    // 카테고리 탭 전용: 4열 -> 3열(lg:grid-cols-3)로 변경하여 기존보다 카드 크기 확대!
    container.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6";
  }

  // 전체/카테고리 탭 모두 와이드 뷰(4:3)로 통일하여 시원한 비율 제공
  const aspectClass = "aspect-[4/3]";

  container.innerHTML = filtered
    .map(
      (item) => `
    <div onclick="openGalleryModal(${item.id})" class="group relative cursor-pointer rounded-3xl overflow-hidden bg-green-50 ${aspectClass} shadow-md card-lift">
      <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute inset-0 flex flex-col justify-end p-5 lg:p-6" style="background: linear-gradient(to top, rgba(27,94,32,0.92) 0%, rgba(27,94,32,0.2) 60%, transparent 100%);">
        <div class="text-[#8BC34A] text-xs font-bold mb-1 tracking-wide">${item.category}</div>
        <div class="text-white font-bold text-base lg:text-lg mb-1 truncate">${item.title}</div>
        <p class="text-white/80 text-xs line-clamp-1 mb-2 hidden sm:block">${item.desc}</p>
        <div class="flex gap-1.5 flex-wrap">
          ${item.tags.map((tag) => `<span class="px-2.5 py-0.5 rounded-lg bg-white/20 text-white text-[11px] backdrop-blur-sm">#${tag}</span>`).join("")}
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

  // 👇 [이 부분이 추가되었습니다: 데스크톱에서 4개 한 줄 정렬]
  thumbs.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

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

function openProductModalByName(productName) {
  const p = productsData.find((item) => item.name === productName);
  if (!p) return;

  // 카테고리가 '스마트 굿즈'면 '제품 스펙', 식품이면 '영양 정보'로 라벨 자동 분기
  const infoLabel = p.category === "스마트 굿즈" ? "제품 스펙" : "영양 정보";

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
          <div class="text-xs font-bold text-[#2E7D32] uppercase tracking-wider mb-2">${infoLabel}</div>
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

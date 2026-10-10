window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 및 초기 설정
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // -----------------------------
  // 1. 원본 데이터 (A유형: 1, B유형: 2, C유형: 3)
  // -----------------------------
  const rawData = [
    // ==========================================
    // [A유형] 1유형: 뜻 맞추기 (총 89단어 - 10초)
    // ==========================================
    { q: "불규칙적인", a: "irregular", type: 1 },
    { q: "불안, 걱정거리", a: "anxiety", type: 1 },
    { q: "결과", a: "outcome", type: 1 },
    { q: "엄격한", a: "strict", type: 1 },
    { q: "여신", a: "goddess", type: 1 },
    { q: "천체의, 별의", a: "astral", type: 1 },
    { q: "물품", a: "merchandise", type: 1 },
    { q: "발명품, 발명", a: "invention", type: 1 },
    { q: "필수적인", a: "vital", type: 1 },
    { q: "혹독, 엄정", a: "severity", type: 1 },
    { q: "만료, 만기", a: "expiration", type: 1 },
    { q: "위성", a: "satellite", type: 1 },
    { q: "생산성", a: "productivity", type: 1 },
    { q: "마차, 객차", a: "carriage", type: 1 },
    { q: "자격이 없는", a: "ineligible", type: 1 },
    { q: "시행하다, 도구", a: "implement", type: 1 },
    { q: "관찰", a: "observation", type: 1 },
    { q: "예산", a: "budget", type: 1 },
    { q: "신장시키다", a: "boost", type: 1 },
    { q: "연락선, 페리, 나르다, 수송하다", a: "ferry", type: 1 },
    { q: "항체", a: "antibody", type: 1 },
    { q: "믿을 수 있는", a: "reliable", type: 1 },
    { q: "종업원", a: "employee", type: 1 },
    { q: "지하 세계", a: "underworld", type: 1 },
    { q: "환상, 오해, 환각", a: "illusion", type: 1 },
    { q: "열렬한, 간절히 바라는", a: "eager", type: 1 },
    { q: "자석", a: "magnet", type: 1 },
    { q: "무관한, 상관없는", a: "irrelevant", type: 1 },
    { q: "궁전", a: "palace", type: 1 },
    { q: "고고학자", a: "archeologist", type: 1 },
    { q: "손상되지 않은", a: "undamaged", type: 1 },
    { q: "전쟁 시기", a: "wartime", type: 1 },
    { q: "묘사하다", a: "portray", type: 1 },
    { q: "이에 의하여, 이로써", a: "hereby", type: 1 },
    { q: "활발하지 않은, 소극적인", a: "inactive", type: 1 },
    { q: "노출, 폭로", a: "exposure", type: 1 },
    { q: "임박한", a: "imminent", type: 1 },
    { q: "소포, 꾸러미", a: "packet", type: 1 },
    { q: "결점, 문제점", a: "drawback", type: 1 },
    { q: "되살리다, 재현하다", a: "recreate", type: 1 },
    { q: "불필요한", a: "unnecessary", type: 1 },
    { q: "설명서", a: "specification", type: 1 },
    { q: "참가, 참여", a: "participation", type: 1 },
    { q: "회복", a: "recovery", type: 1 },
    { q: "값비싼", a: "pricey", type: 1 },
    { q: "조사하다", a: "investigate", type: 1 },
    { q: "투자", a: "investment", type: 1 },
    { q: "정신 이상", a: "insanity", type: 1 },
    { q: "강제, 강압", a: "coercion", type: 1 },
    { q: "줄기", a: "stem", type: 1 },
    { q: "인식의, 인지의", a: "cognitive", type: 1 },
    { q: "행사, 우세한 쪽", a: "bandwagon", type: 1 },
    { q: "생태계의", a: "ecological", type: 1 },
    { q: "수송, 수송품", a: "shipment", type: 1 },
    { q: "야만스럽게, 난폭하게", a: "brutally", type: 1 },
    { q: "덮개, 모자", a: "hood", type: 1 },
    { q: "우세한, 지배적인", a: "dominant", type: 1 },
    { q: "고용하다, 이용하다", a: "employ", type: 1 },
    { q: "광활한", a: "expansive", type: 1 },
    { q: "폐쇄, 종료", a: "closure", type: 1 },
    { q: "결백, 천진", a: "innocence", type: 1 },
    { q: "(건축 공사장의) 비계", a: "scaffolding", type: 1 },
    { q: "생각하다, 여겨지다", a: "reckon", type: 1 },
    { q: "문간, 출입구", a: "doorway", type: 1 },
    { q: "자백하다, 고백하다", a: "confess", type: 1 },
    { q: "선택적인", a: "selective", type: 1 },
    { q: "현장, 장면", a: "scene", type: 1 },
    { q: "분열", a: "fragmentation", type: 1 },
    { q: "부분, (여러 부분으로) 나누다", a: "segment", type: 1 },
    { q: "구멍을 뚫다, 점선 구멍이 나 있는", a: "perforate", type: 1 },
    { q: "복원하다", a: "reconstruct", type: 1 },
    { q: "다시 구성하다", a: "reframe", type: 1 },
    { q: "착수, 시초, 발단", a: "outset", type: 1 },
    { q: "잠시 멈추다, 멈춤", a: "pause", type: 1 },
    { q: "수분하다", a: "pollinate", type: 1 },
    { q: "극단주의자", a: "extremist", type: 1 },
    { q: "분투하다, 노력하다", a: "strive", type: 1 },
    { q: "발코니", a: "balcony", type: 1 },
    { q: "잔혹한, 잔인한", a: "cruel", type: 1 },
    { q: "가볍게 입을 맞추다 / 쪼다", a: "peck", type: 1 },
    { q: "밴드, 악단", a: "band", type: 1 },
    { q: "연달아", a: "continuously", type: 1 },
    { q: "상위 인지", a: "metacognition", type: 1 },
    { q: "예배실", a: "chapel", type: 1 },
    { q: "회로, 순환", a: "circuit", type: 1 },
    { q: "검사, 회계 감사", a: "audit", type: 1 },
    { q: "제공하다", a: "serve", type: 1 },
    { q: "2학년생", a: "sophomore", type: 1 },
    { q: "(물 위나 공중에) 뜬", a: "afloat", type: 1 },
    { q: "주택, 거주지", a: "residence", type: 1 },
    { q: "기업, 회사", a: "enterprise", type: 1 },
    { q: "뒤이어 일어나는", a: "ensuing", type: 1 },
    { q: "인근의, 주위의", a: "surrounding", type: 1 },
    { q: "부수다, 고장 내다", a: "bust", type: 1 },
    { q: "진화의", a: "evolutionary", type: 1 },
    { q: "액체, 유동체", a: "fluid", type: 1 },
    { q: "제한, 한계", a: "limitation", type: 1 },
    { q: "백, 100", a: "hundred", type: 1 },
    { q: "증명하다", a: "certify", type: 1 },
    { q: "돈, 비용", a: "expense", type: 1 },

    // ==========================================
    // [B유형] 2유형: 빈칸 단문 (총 40문제 - 15초)
    // ==========================================
    {
      q: "The game ____ was easy to use.\n게임 콘솔은 사용하기 쉬웠다.",
      a: "console",
      type: 2,
    },
    {
      q: "This car is a ____.\n이 차는 혼합형 자동차이다.",
      a: "hybrid",
      type: 2,
    },
    {
      q: "A ____ opened the trash can at night.\n너구리 한 마리가 밤에 쓰레기통을 열었다.",
      a: "racoon",
      type: 2,
    },
    {
      q: "He wasted time on ____.\n그는 쓸데없는 일에 시간을 낭비했다.",
      a: "frivolity",
      type: 2,
    },
    {
      q: "The school met ____ students today.\n그 학교는 오늘 예비 학생들을 만났다.",
      a: "prospective",
      type: 2,
    },
    {
      q: "The store sells winter ____.\n그 가게는 겨울 의류를 판매한다.",
      a: "apparel",
      type: 2,
    },
    {
      q: "This old ring has great ____.\n이 오래된 반지는 큰 가치가 있다.",
      a: "value",
      type: 2,
    },
    {
      q: "Our school is a large ____.\n우리 학교는 큰 기관이다.",
      a: "institution",
      type: 2,
    },
    {
      q: "The ____ clapped loudly.\n관객들이 큰 소리로 박수를 쳤다.",
      a: "audience",
      type: 2,
    },
    {
      q: "The final ____ was worth the long wait.\n마지막 보상은 오랫동안 기다릴 만한 가치가 있었다.",
      a: "payoff",
      type: 2,
    },
    {
      q: "I used a ____ after lunch.\n나는 점심 식사 후에 이쑤시개를 사용했다.",
      a: "toothpick",
      type: 2,
    },
    {
      q: "They stayed in a ____ hotel.\n그들은 호화로운 호텔에 머물렀다.",
      a: "luxurious",
      type: 2,
    },
    {
      q: "This cable is a ____.\n이 케이블은 연결 장치이다.",
      a: "connector",
      type: 2,
    },
    {
      q: "She was a ____ to the accident.\n그녀는 그 사고의 목격자였다.",
      a: "witness",
      type: 2,
    },
    {
      q: "Our teacher is very ____.\n우리 선생님은 매우 활동적이다.",
      a: "dynamic",
      type: 2,
    },
    {
      q: "I felt sick and wanted to ____.\n나는 속이 메스꺼웠고 토하고 싶었다.",
      a: "vomit",
      type: 2,
    },
    {
      q: "Do not ____ your friend.\n친구를 놀리지 마라.",
      a: "mock",
      type: 2,
    },
    {
      q: "I ____ enjoy watching the game.\n나도 마찬가지로 그 경기를 보는 것을 좋아한다.",
      a: "likewise",
      type: 2,
    },
    {
      q: "She got her first ____.\n그녀는 첫 월급을 받았다.",
      a: "paycheck",
      type: 2,
    },
    {
      q: "The bread was hard and ____.\n그 빵은 딱딱하고 껍질이 바삭했다.",
      a: "crusty",
      type: 2,
    },
    {
      q: "The plan had a ____ result.\n그 계획은 분명한 결과를 가져왔다.",
      a: "tangible",
      type: 2,
    },
    {
      q: "Cut the cake ____.\n케이크를 똑같이 나누어 잘라라.",
      a: "evenly",
      type: 2,
    },
    {
      q: "The army tested a ____ plane.\n군대는 무인 비행기를 시험했다.",
      a: "pilotless",
      type: 2,
    },
    {
      q: "The workers may ____ tomorrow.\n노동자들은 내일 파업할지도 모른다.",
      a: "strike",
      type: 2,
    },
    {
      q: "I found the answer in an ____.\n나는 백과사전에서 그 답을 찾았다.",
      a: "encyclopedia",
      type: 2,
    },
    {
      q: "I ____ he will be late.\n나는 그가 늦을 것이라고 생각한다.",
      a: "reckon",
      type: 2,
    },
    {
      q: "Several students improved, ____ Mina.\n몇몇 학생들의 실력이 향상되었는데, 특히 미나의 실력이 향상되었다.",
      a: "notably",
      type: 2,
    },
    {
      q: "____, it was very dark.\n게다가, 매우 어두웠다.",
      a: "furthermore",
      type: 2,
    },
    {
      q: "This old phone is still ____.\n이 오래된 전화기는 여전히 기능을 한다.",
      a: "functional",
      type: 2,
    },
    {
      q: "She got a special ____ at work.\n그녀는 직장에서 특별 보너스를 받았다.",
      a: "bonus",
      type: 2,
    },
    {
      q: "A ____ hit the town last night.\n뇌우가 어젯밤 그 마을을 덮쳤다.",
      a: "thunderstorm",
      type: 2,
    },
    {
      q: "Bees help ____ many flowers.\n벌들은 많은 꽃의 수분을 돕는다.",
      a: "pollinate",
      type: 2,
    },
    {
      q: "The wall had an old ____.\n그 벽에는 오래된 상형문자가 있었다.",
      a: "hieroglyph",
      type: 2,
    },
    {
      q: "The painting will ____ a quiet village.\n그 그림은 조용한 마을을 묘사할 것이다.",
      a: "depict",
      type: 2,
    },
    {
      q: "He put soap under each ____.\n그는 각 겨드랑이에 비누를 발랐다.",
      a: "armpit",
      type: 2,
    },
    {
      q: "The man used ____ to get money.\n그 남자는 돈을 얻기 위해 강압을 사용했다.",
      a: "coercion",
      type: 2,
    },
    {
      q: "That sound was really ____.\n그 소리는 정말 이상했다.",
      a: "weird",
      type: 2,
    },
    {
      q: "The machine’s ____ was too low.\n그 기계의 생산량이 너무 적었다.",
      a: "output",
      type: 2,
    },
    {
      q: "The mountain was ____ from the beach.\n그 산은 해변에서 보였다.",
      a: "visible",
      type: 2,
    },
    {
      q: "The ____ lost money at the casino.\n그 도박꾼은 카지노에서 돈을 잃었다.",
      a: "gambler",
      type: 2,
    },

    // ==========================================
    // [C유형] 3유형: 빈칸 복합문 (총 21문제 - 20초)
    // ==========================================
    {
      q: "The dark clouds ____ rain.\nThe bully tried to ____ the younger boy.",
      a: "threaten",
      type: 3,
    },
    {
      q: "Some birds can ____ sounds.\nThe child tried to ____ his teacher’s voice.",
      a: "mimic",
      type: 3,
    },
    {
      q: "He received a ____ after graduation.\nThe ____ helped him get a job.",
      a: "diploma",
      type: 3,
    },
    {
      q: "A ____ lives on another animal.\nThe ____ takes food from its host.",
      a: "parasite",
      type: 3,
    },
    {
      q: "Draw a ____ line on the paper.\nThe flag has three ____ stripes.",
      a: "vertical",
      type: 3,
    },
    {
      q: "He tried to ____ the guard.\nA ____ is money given to make someone act unfairly.",
      a: "bribe",
      type: 3,
    },
    {
      q: "This car gets good ____.\nHigh ____ saves money on gas.",
      a: "mileage",
      type: 3,
    },
    {
      q: "She has an ____ style.\nHer ____ talent impressed the teacher.",
      a: "artistic",
      type: 3,
    },
    {
      q: "Each ____ got a name tag.\nThe ____ sat near the front.",
      a: "trainee",
      type: 3,
    },
    {
      q: "The cave gave us ____ from the rain.\nMany people found ____ in the old school.",
      a: "refuge",
      type: 3,
    },
    {
      q: "I asked the singer for an ____.\nHer ____ is on my notebook.",
      a: "autograph",
      type: 3,
    },
    {
      q: "The soldiers planned a night ____.\nPirates tried to ____ the ship.",
      a: "raid",
      type: 3,
    },
    {
      q: "This book is a useful ____ for class.\nYou can ____ your diet with more fruit.",
      a: "supplement",
      type: 3,
    },
    {
      q: "Do not ____ a crime.\nYou should ____ to your promise.",
      a: "commit",
      type: 3,
    },
    {
      q: "The ____ cat hid under the bed.\nA ____ student may speak very quietly.",
      a: "timid",
      type: 3,
    },
    {
      q: "We need to ____ the system.\nThe coach helped us ____ our training.",
      a: "optimize",
      type: 3,
    },
    {
      q: "I watched a ____ online.\nThe ____ showed me how to use the app.",
      a: "tutorial",
      type: 3,
    },
    {
      q: "Smartphones are ____ in daily life.\nTheir influence is ____ in schools too.",
      a: "pervasive",
      type: 3,
    },
    {
      q: "His excuse was ____.\nThe plan also seemed ____ to me.",
      a: "questionable",
      type: 3,
    },
    {
      q: "His idea was a ____.\nA ____ can make an argument weak.",
      a: "fallacy",
      type: 3,
    },
  ];

  // -----------------------------
  // 2. 공통 함수: 셔플 및 보기 생성
  // -----------------------------
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const allAnswers = rawData.map((item) => item.a);

  const questions = rawData.map((item) => {
    // 1. 기본 오답 풀 (자기 자신 정답 제외)
    let candidatePool = allAnswers.filter((a) => a !== item.a);

    // [★ 예외 처리] 정답이 "questionable"일 때 오답 후보에서 "irrelevant" 제외
    if (item.a === "questionable") {
      candidatePool = candidatePool.filter((a) => a !== "irrelevant");
    }

    // 2. 오답 3개 무작위 추출 및 전체 보기 셔플
    const wrongOptions = shuffle(candidatePool).slice(0, 3);
    const options = shuffle([item.a, ...wrongOptions]);

    return {
      title: item.q,
      options: options,
      correctIndex: options.indexOf(item.a),
      img: null,
      type: item.type || 1,
    };
  });

  // -----------------------------
  // 3. 정답 테이블 동적 생성 (결과창)
  // -----------------------------
  const tbody = document.querySelector(".answer-table tbody");
  if (tbody) {
    tbody.innerHTML = "";
    const totalQuestions = questions.length;
    const groupSize = 5;
    const groupCount = Math.ceil(totalQuestions / groupSize);

    for (let g = 0; g < groupCount; g++) {
      const start = g * groupSize + 1;
      const titleRow = document.createElement("tr");
      const titleLabelCell = document.createElement("td");
      titleLabelCell.textContent = "문제";
      titleRow.appendChild(titleLabelCell);

      const answerRow = document.createElement("tr");
      const answerLabelCell = document.createElement("td");
      answerLabelCell.textContent = "선택";
      answerRow.appendChild(answerLabelCell);

      for (let n = start; n < start + groupSize && n <= totalQuestions; n++) {
        const titleTd = document.createElement("td");
        titleTd.id = "title-q" + n;
        titleTd.className = "question-title-cell";
        titleTd.textContent = questions[n - 1].title.split("\n")[0];
        titleRow.appendChild(titleTd);

        const answerTd = document.createElement("td");
        answerTd.id = "answer-q" + n;
        answerTd.className = "answer";
        answerRow.appendChild(answerTd);
      }
      tbody.appendChild(titleRow);
      tbody.appendChild(answerRow);
    }
  }

  // -----------------------------
  // 4. 시험 상태 변수 및 타이머
  // -----------------------------
  let currentQuestion = 0;
  let selectedIndex = null;
  let timeLeft = 10;
  let countdownInterval = null;
  let correctCount = 0;

  const questionLabel = document.getElementById("questionLabel");
  const buttons = [
    document.querySelector(".one"),
    document.querySelector(".two"),
    document.querySelector(".three"),
    document.querySelector(".four"),
  ];
  const timerSpan = document.getElementById("timer-sec");

  function startTimer(duration) {
    if (countdownInterval) clearInterval(countdownInterval);
    timeLeft = duration;
    if (timerSpan) timerSpan.textContent = timeLeft;

    countdownInterval = setInterval(() => {
      timeLeft--;
      if (timerSpan) timerSpan.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        handleTimeout();
      }
    }, 1000);
  }

  function handleTimeout() {
    if (currentQuestion >= questions.length) return;
    const qNum = currentQuestion + 1;
    const cell = document.getElementById("answer-q" + qNum);
    if (cell) {
      cell.textContent = "-";
      cell.classList.add("wrong-cell");
    }
    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : finishExam();
  }

  function finishExam() {
    if (countdownInterval) clearInterval(countdownInterval);

    const testPanel = document.querySelector(".test-panel-wrapper");
    if (testPanel) {
      testPanel.style.display = "none";
    }

    const examOverPanel = document.querySelector(".examOver");
    if (examOverPanel) {
      examOverPanel.style.display = "block";
    }
  }

  // -----------------------------
  // 5. 문제 렌더링 (Basic 전용 - 하단 레이아웃 완벽 정리)
  // -----------------------------
  function renderQuestion() {
    const q = questions[currentQuestion];
    if (!q) return;

    selectedIndex = null;

    // 선택 해제
    buttons.forEach((btn) => {
      if (btn) {
        btn.classList.remove("selected");
        const chk = btn.querySelector(".check-icon");
        if (chk) chk.remove();
      }
    });

    const partBadge = document.querySelector(".part-badge");
    const categoryTitle = document.querySelector(".category-title");

    if (partBadge) {
      if (q.type === 1) {
        partBadge.textContent = "Part A";
        if (categoryTitle) categoryTitle.textContent = "Vocabulary by Meaning";
      } else if (q.type === 2) {
        partBadge.textContent = "Part B";
        if (categoryTitle)
          categoryTitle.textContent = "Sentence Completion (Short)";
      } else if (q.type === 3) {
        partBadge.textContent = "Part C";
        if (categoryTitle)
          categoryTitle.textContent = "Sentence Completion (Context)";
      }
    }

    // 기존 <img> 태그가 잔존해 있다면 완전히 삭제 (Basic은 이미지 사용 안 함)
    let existingImg = document.getElementById("questionImage");
    if (existingImg) {
      existingImg.remove();
    }

    // [★ 핵심] 하단 돋보기/더하기 데코 영역 완전 삭제 (유령 공간 제거)
    const footerDeco = document.querySelector(".card-footer-deco");
    if (footerDeco) {
      footerDeco.remove();
    }

    // 텍스트 출력
    if (questionLabel) {
      questionLabel.innerHTML = q.title.replace(/\n/g, "<br>");
    }

    // [★ 핵심] 보기 텍스트 안전하게 주입 (A, B, C, D 뱃지 파괴 방지)
    q.options.forEach((opt, idx) => {
      const btn = buttons[idx];
      if (btn) {
        const textSpan = btn.querySelector(".opt-text");
        if (textSpan) {
          textSpan.textContent = opt;
        } else {
          btn.textContent = opt;
        }
      }
    });

    const btnFive = document.querySelector(".five");
    if (btnFive) btnFive.style.display = "none";

    // 시간 배정
    let duration = 10;
    if (q.type === 2) duration = 15;
    if (q.type === 3) duration = 20;

    startTimer(duration);
  }

  function handleAnswer(choiceIndex) {
    const q = questions[currentQuestion];
    if (countdownInterval) clearInterval(countdownInterval);

    const qNum = currentQuestion + 1;
    const cell = document.getElementById("answer-q" + qNum);
    if (cell) cell.textContent = q.options[choiceIndex];

    if (choiceIndex === q.correctIndex) {
      correctCount++;
    } else {
      if (cell) cell.classList.add("wrong-cell");
    }

    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : finishExam();
  }

  // -----------------------------
  // 6. 이벤트 리스너 (키보드 및 결과)
  // -----------------------------
  const keyToIndex = { 1: 0, 2: 1, 3: 2, 4: 3 };
  document.addEventListener("keydown", (e) => {
    if (currentQuestion >= questions.length) return;

    if (e.code === "Space") {
      e.preventDefault();
      if (selectedIndex === null) {
        alert("먼저 1~4 중 하나를 선택하세요.");
        return;
      }
      handleAnswer(selectedIndex);
    }

    const idx = keyToIndex[e.key];
    if (idx !== undefined) {
      selectedIndex = idx;
      buttons.forEach((btn, i) => {
        if (btn) {
          if (i === idx) {
            btn.classList.add("selected");
          } else {
            btn.classList.remove("selected");
          }
        }
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (currentQuestion >= questions.length || e.target.closest(".resultOk"))
      return;
    alert("⚠️ 경고: 키보드(1~4 및 Space)만 사용 가능합니다!");
  });

  window.resultOk = function () {
    const modal = document.getElementById("pwModal");
    const pwInput = document.getElementById("pwInput");
    const confirmBtn = document.getElementById("pwConfirmBtn");
    const cancelBtn = document.getElementById("pwCancelBtn");

    if (!modal || !pwInput) return;

    // 모달 초기화 및 열기
    pwInput.value = "";
    modal.style.display = "flex";
    pwInput.focus();

    // 확인 처리 함수
    function handlePasswordSubmit() {
      const pw = pwInput.value;

      if (pw !== "1234") {
        alert("비밀번호가 올바르지 않습니다.");
        pwInput.value = "";
        pwInput.focus();
        return;
      }

      // 비밀번호가 일치하면 모달 닫기
      modal.style.display = "none";
      cleanupEvents();

      // 결과 화면 전환 및 PDF 생성
      document.querySelector(".examOver").style.display = "none";
      document.querySelector(".answer-panel").style.display = "block";

      document.getElementById("result-name").textContent = studentNameValue;
      document.getElementById("result-correct").textContent = correctCount;
      document.getElementById("result-total").textContent = questions.length;

      const element = document.querySelector(".answer-panel");

      setTimeout(() => {
        html2canvas(element, {
          backgroundColor: "#ffffff",
          useCORS: true,
        }).then((canvas) => {
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF("p", "mm", "a4");
          const imgData = canvas.toDataURL("image/png");

          const imgWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          const dateStr = new Date()
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "");
          pdf.save(`${dateStr}_${studentNameValue}_결과.pdf`);
        });
      }, 500);
    }

    // 취소 처리 함수
    function handleCancel() {
      modal.style.display = "none";
      cleanupEvents();
    }

    // 엔터키 입력 지원
    function handleKeyDown(e) {
      if (e.key === "Enter") {
        handlePasswordSubmit();
      } else if (e.key === "Escape") {
        handleCancel();
      }
    }

    // 이벤트 리스너 정리
    function cleanupEvents() {
      confirmBtn.removeEventListener("click", handlePasswordSubmit);
      cancelBtn.removeEventListener("click", handleCancel);
      pwInput.removeEventListener("keydown", handleKeyDown);
    }

    // 이벤트 바인딩
    confirmBtn.addEventListener("click", handlePasswordSubmit);
    cancelBtn.addEventListener("click", handleCancel);
    pwInput.addEventListener("keydown", handleKeyDown);
  };

  renderQuestion();
};

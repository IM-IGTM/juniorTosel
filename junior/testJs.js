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
    // [A유형] 1유형: 뜻 맞추기 (총 70단어 - 10초)
    { q: "개발하다", a: "develop", type: 1 },
    { q: "이민자", a: "immigrant", type: 1 },
    { q: "토너먼트", a: "tournament", type: 1 },
    { q: "여기다(평가하다), 관심, 고려", a: "regard", type: 1 },
    { q: "뭐라고요 / 미안해요, 용서", a: "pardon", type: 1 },
    { q: "능력, 재능", a: "ability", type: 1 },
    { q: "오토바이", a: "motorbike", type: 1 },
    { q: "더 멀리에(로), 더 나아가, 더 이상의", a: "further", type: 1 },
    { q: "굉장히 아름다운[멋진] / 충격적인", a: "stunning", type: 1 },
    { q: "먹다/소모하다", a: "consume", type: 1 },
    { q: "노하여, 성나서", a: "angrily", type: 1 },
    { q: "거의, ~가까이", a: "approximately", type: 1 },
    { q: "교차로, 길목", a: "crossroad", type: 1 },
    { q: "최근의", a: "recent", type: 1 },
    { q: "매일 일어나는, 나날의, 일일, 하루", a: "daily", type: 1 },
    { q: "자원 봉사자, 자원(자진)하다", a: "volunteer", type: 1 },
    { q: "상기시키다", a: "remind", type: 1 },
    { q: "언급하다, 나타내다", a: "refer", type: 1 },
    { q: "빙산", a: "iceberg", type: 1 },
    { q: "행복", a: "happiness", type: 1 },
    { q: "워크숍, 연수회", a: "workshop", type: 1 },
    { q: "아무[하나]도 (~않다[없다])", a: "none", type: 1 },
    { q: "장난기 많은, 농담의", a: "playful", type: 1 },
    { q: "존재, 실재, 현존", a: "existence", type: 1 },
    { q: "발표", a: "presentation", type: 1 },
    { q: "조용히", a: "quietly", type: 1 },
    { q: "천문학", a: "astronomy", type: 1 },
    { q: "끔찍한", a: "awful", type: 1 },
    { q: "환불 가능한", a: "refundable", type: 1 },
    { q: "안구", a: "eyeball", type: 1 },
    { q: "도예가", a: "potter", type: 1 },
    { q: "밑줄을 긋다 / 강조하다", a: "underline", type: 1 },
    { q: "(~일 것이라고) 생각하다, 추정[추측]하다", a: "suppose", type: 1 },
    { q: "손잡이", a: "doorknob", type: 1 },
    { q: "제외하고는(외에는)", a: "except", type: 1 },
    { q: "염료, 염색하다", a: "dye", type: 1 },
    { q: "핀/(비디오의) 클립, 클립으로 고정하다", a: "clip", type: 1 },
    { q: "화산의", a: "volcanic", type: 1 },
    { q: "이, 치아, 이빨", a: "tooth", type: 1 },
    { q: "연어", a: "salmon", type: 1 },
    { q: "어떤 것, 무엇", a: "something", type: 1 },
    { q: "천", a: "thousand", type: 1 },
    { q: "수평선", a: "horizon", type: 1 },
    { q: "유충, 애벌레", a: "larva", type: 1 },
    { q: "조직, 단체", a: "organization", type: 1 },
    { q: "결합시키다, 결합되다, 유대, 끈", a: "bond", type: 1 },
    { q: "휴양지 / 의지, 의존", a: "resort", type: 1 },
    { q: "고생물학, 화석학", a: "paleontology", type: 1 },
    { q: "못 / 손톱", a: "nail", type: 1 },
    { q: "얼룩, 얼룩지게 하다", a: "stain", type: 1 },
    { q: "갈퀴, 갈퀴질을 하다", a: "rake", type: 1 },
    { q: "시작하다, 시작", a: "start", type: 1 },
    { q: "위통, 복통", a: "stomachache", type: 1 },
    { q: "응결, 압축", a: "condensation", type: 1 },
    { q: "낙하산", a: "parachute", type: 1 },
    { q: "~인지 아닌지", a: "whether", type: 1 },
    { q: "인치, 조금, 약간", a: "inch", type: 1 },
    { q: "실내의", a: "indoor", type: 1 },
    { q: "전화, 전화를 걸다", a: "telephone", type: 1 },
    { q: "넓적다리, 허벅지", a: "thigh", type: 1 },
    { q: "상징, 부호", a: "symbol", type: 1 },
    { q: "터미널/종점", a: "terminal", type: 1 },
    { q: "업적, 성취", a: "achievement", type: 1 },
    { q: "멍, 멍이 생기다", a: "bruise", type: 1 },
    { q: "목욕통, 욕조", a: "bathtub", type: 1 },
    { q: "안전하게", a: "safely", type: 1 },
    { q: "생생한, 선명한", a: "vivid", type: 1 },
    { q: "부드러워지다", a: "soften", type: 1 },
    { q: "부담, 짐, 부담[짐]을 지우다", a: "burden", type: 1 },
    { q: "가뭄", a: "drought", type: 1 },
    { q: "보통(은)", a: "normally", type: 1 },
    { q: "기타 연주자", a: "guitarist", type: 1 },
    { q: "누구든지", a: "everybody", type: 1 },
    { q: "가죽끈(줄)", a: "leash", type: 1 },
    { q: "임명하다, 정하다", a: "appoint", type: 1 },
    { q: "금속의", a: "metallic", type: 1 },
    { q: "가능한", a: "possible", type: 1 },
    { q: "극도의/지나친, 극단", a: "extreme", type: 1 },
    { q: "감촉(질감)", a: "texture", type: 1 },
    { q: "호스, 호스로 물을 뿌리다", a: "hose", type: 1 },
    { q: "비틀다", a: "twist", type: 1 },
    { q: "자리를 잡다 / 해결하다", a: "settle", type: 1 },
    { q: "지진", a: "earthquake", type: 1 },
    { q: "줄거리, 음모", a: "plot", type: 1 },
    { q: "지역의, 현지의, 주민, 현지인", a: "local", type: 1 },
    { q: "경찰", a: "police", type: 1 },
    { q: "위험한", a: "unsafe", type: 1 },
    { q: "관련, 관계", a: "link", type: 1 },
    { q: "현재의, 지금의, 흐름, 해류, 기류", a: "current", type: 1 },
    { q: "국가의", a: "national", type: 1 },
    { q: "행동, 처신, 태도", a: "behavior", type: 1 },
    { q: "독", a: "poison", type: 1 },
    { q: "고릴라", a: "gorilla", type: 1 },
    { q: "규모(범위), 비늘을 치다[벗기다]", a: "scale", type: 1 },
    { q: "규소, 실리콘", a: "silicon", type: 1 },
    { q: "폭행, 공격", a: "attack", type: 1 },
    { q: "조각가", a: "sculptor", type: 1 },
    { q: "처방전, 처방", a: "prescription", type: 1 },
    { q: "줄이다[축소하다]", a: "reduce", type: 1 },
    { q: "황금빛의", a: "golden", type: 1 },

    // [B유형] 2유형: 빈칸 단문 (총 30문제 - 15초)
    {
      q: "Please ____ me before you leave.\n떠나기 전에 나한테 알려 줘.",
      a: "inform",
      type: 2,
    },
    {
      q: "I respect your ____.\n나는 네 의견을 존중해.",
      a: "opinion",
      type: 2,
    },
    {
      q: "Take an ____ with you.\n우산 챙겨 가.",
      a: "umbrella",
      type: 2,
    },
    {
      q: "Her main ____ was the weather.\n그녀가 가장 걱정한 건 날씨였어.",
      a: "concern",
      type: 2,
    },
    {
      q: "The actor wore a funny ____.\n그 배우는 우스꽝스러운 가발을 썼어.",
      a: "wig",
      type: 2,
    },
    {
      q: '"It rained all day. ____, 하루 종일 비가 왔어.',
      a: "therefore",
      type: 2,
    },
    {
      q: "The movie was ____.\n그 영화는 정말 웃겼어.",
      a: "hilarious",
      type: 2,
    },
    {
      q: "Our school uses a new ____.\n우리 학교는 새로운 시스템을 사용해.",
      a: "system",
      type: 2,
    },
    {
      q: "A ____ sound came from the room.\n방 안에서 수상한 소리가 들려왔어.",
      a: "mysterious",
      type: 2,
    },
    {
      q: "The zoo will ____ the bird today.\n동물원은 오늘 그 새를 풀어 줄 거야.",
      a: "release",
      type: 2,
    },
    {
      q: "We had a small ____.\n우리는 작은 오해가 있었어.",
      a: "misunderstanding",
      type: 2,
    },
    {
      q: "It had no real medicine. It was just a ____.\n그 알약에는 실제 약효가 없었어. 그냥 위약이었지.",
      a: "placebo",
      type: 2,
    },
    {
      q: "Do not ____ the ending.\n결말을 망치지 마.",
      a: "spoil",
      type: 2,
    },
    {
      q: "I paid the bus ____.\n나는 버스 요금을 냈어.",
      a: "fare",
      type: 2,
    },
    {
      q: "The report has a useful ____.\n그 보고서에는 유용한 도표가 있어.",
      a: "graphic",
      type: 2,
    },
    {
      q: "Please write your ____ here.\n여기에 서명해 주세요.",
      a: "signature",
      type: 2,
    },
    {
      q: "The story is a short ____.\n그 이야기는 짧은 우화야.",
      a: "fable",
      type: 2,
    },
    {
      q: "The people wanted ____.\n사람들은 자유를 원했어.",
      a: "liberty",
      type: 2,
    },
    {
      q: "The walk takes ____ ten minutes.\n걸어서 가면 10분 정도 걸려.",
      a: "approximately",
      type: 2,
    },
    {
      q: "This ____ was made by a young student.\n이 작품은 어린 학생이 만든 거야.",
      a: "artwork",
      type: 2,
    },
    {
      q: "The small puppy is very ____.\n그 작은 강아지는 정말 귀여워.",
      a: "adorable",
      type: 2,
    },
    {
      q: "A cow is a ____.\n소는 초식동물이야.",
      a: "herbivore",
      type: 2,
    },
    {
      q: "Many people live in ____.\n많은 사람들이 가난하게 살아가고 있어.",
      a: "poverty",
      type: 2,
    },
    {
      q: "I heard a loud ____.\n나는 쾅 하는 큰 소리를 들었어.",
      a: "snap",
      type: 2,
    },
    {
      q: "The teacher used a ____ on the map.\n선생님은 지도에서 포인터를 사용했어.",
      a: "pointer",
      type: 2,
    },
    {
      q: "We rode a ____ on the river.\n우리는 강에서 배를 탔어.",
      a: "riverboat",
      type: 2,
    },
    {
      q: "The heavy rain caused a ____.\n폭우 때문에 운행이 지연됐어.",
      a: "delay",
      type: 2,
    },
    {
      q: "Read the ____ before using the machine.\n기계를 사용하기 전에 설명서를 읽어.",
      a: "manual",
      type: 2,
    },
    {
      q: "The ____ fixed my dad's car.\n정비공이 아빠 차를 고쳐 줬어.",
      a: "mechanic",
      type: 2,
    },
    {
      q: "The store wants to ____ its products.\n그 가게는 판매하는 제품을 다양하게 늘리려고 해.",
      a: "diversify",
      type: 2,
    },
    {
      q: "She enjoys ____ music.\n그녀는 클래식 음악을 좋아해.",
      a: "classical",
      type: 2,
    },
    {
      q: "He spent his ____ in a small town.\n그는 어린 시절을 작은 마을에서 보냈어.",
      a: "youth",
      type: 2,
    },
    {
      q: "The light has a special ____.\n그 조명에는 특별한 센서가 달려 있어.",
      a: "sensor",
      type: 2,
    },
    {
      q: "The police had a ____.\n경찰은 영장을 가지고 있었어.",
      a: "warrant",
      type: 2,
    },
    {
      q: "We watched the news on ____.\n우리는 텔레비전으로 뉴스를 봤어.",
      a: "television",
      type: 2,
    },
    {
      q: "Take one ____ of this medicine.\n이 약은 한 번에 한 알(회분)만 복용하세요.",
      a: "dose",
      type: 2,
    },
    {
      q: "Her English improved ____.\n그녀의 영어 실력이 많이 향상됐어.",
      a: "greatly",
      type: 2,
    },
    {
      q: "The village is in a deep ____.\n그 마을은 깊은 계곡에 자리 잡고 있어.",
      a: "valley",
      type: 2,
    },
    {
      q: "I waited for his ____.\n나는 그의 답변을 기다렸어.",
      a: "response",
      type: 2,
    },
    {
      q: "She is a new ____ of this town.\n그녀는 이 마을에 새로 이사 온 주민이야.",
      a: "resident",
      type: 2,
    },

    // [C유형] 3유형: 빈칸 복합/장문 (총 15문제 - 20초)
    {
      q: "This job will ____ teamwork.\nThe form will ____ your name and age.",
      a: "require",
      type: 3,
    },
    {
      q: "Come here ____ after class.\nThe bell rang, so we left ____.",
      a: "immediately",
      type: 3,
    },
    {
      q: "We must ____ the winner today.\nThe test will ____ your level.",
      a: "determine",
      type: 3,
    },
    {
      q: "She loves ____ stories.\nThe movie is full of ____ and magic.",
      a: "fantasy",
      type: 3,
    },
    {
      q: "It was ____ to stay quiet.\nHis ____ answer stopped the fight.",
      a: "politic",
      type: 3,
    },
    {
      q: "I can ____ her voice.\nDid you ____ the man in the photo?",
      a: "recognize",
      type: 3,
    },
    {
      q: "Scientists ____ animals in the wild.\nPlease ____ the rules carefully.",
      a: "observe",
      type: 3,
    },
    {
      q: "We saw ____ on the mountain.\nThe road was covered with ____.",
      a: "snow",
      type: 3,
    },
    {
      q: "That dress is too ____.\nThe bird has ____ feathers.",
      a: "showy",
      type: 3,
    },
    {
      q: "A ____ can sting you.\nMany ____ live in warm seas.",
      a: "jellyfish",
      type: 3,
    },
    {
      q: "I will ____ you some help.\nThe store will ____ a free gift today.",
      a: "offer",
      type: 3,
    },
    {
      q: '"She is always ____ to adults.\nA ____ student says thank you.',
      a: "polite",
      type: 3,
    },
    {
      q: "The test was ____ easy.\nHe speaks English ____ well.",
      a: "fairly",
      type: 3,
    },
    {
      q: "The storm cut the ____ at night.\nThis machine needs electric ____.",
      a: "power",
      type: 3,
    },
    {
      q: "Her ____ was clear and short.\nThe ____ lasted ten minutes.",
      a: "presentation",
      type: 3,
    },
    {
      q: "His answer was ____.\nA ____ person may tell lies.",
      a: "dishonest",
      type: 3,
    },
    {
      q: "The ____ made a stone lion.\nA famous ____ visited our school.",
      a: "sculptor",
      type: 3,
    },
    {
      q: "Dirty water can ____ sea animals.\nFast driving may ____ many people.",
      a: "endanger",
      type: 3,
    },
    {
      q: "The camera works ____.\nWe saw an ____ cave in the video.",
      a: "underwater",
      type: 3,
    },
    {
      q: "I fed my ____ this morning.\nThree ____ swam in the bowl.",
      a: "goldfish",
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
    const wrongOptions = shuffle(allAnswers.filter((a) => a !== item.a)).slice(
      0,
      3,
    );
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

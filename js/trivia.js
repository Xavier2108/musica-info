const questions = [
    {
      question: 'Que album no se encontraba en la pagina principal?',
      options: ['Cry baby', 'Transtorno bipolar', 'Iowa', 'Duality'],
      answer: 'Transtorno bipolar'
    },
    {
      question: 'Cual es el pais de procedencia de Alvaro Lopez?',
      options: ['Mexico', 'Venezuela', 'Chile', 'Argentina'],
      answer: 'Chile'
    },
    {
      question: 'Cual de estas no es una plataforma de streaming musical?',
      options: ['Twitch', 'Spotify', 'Amazon Music', 'Apple Music'],
      answer: 'Twitch'
    },
    {
      question: 'Cuál de estos géneros musicales se originó en Jamaica?',
      options: ['Samba', 'Flamenco', 'Tango', 'Reggae'],
      answer: 'Reggae'
    },
    {
      question: 'Que genero es el mas escuchado en Corea',
      options: ['Rap', 'Metal', 'K-Pop', 'J-Pop'],
      answer: 'K-Pop'
    },
    {
      question: 'Genero rural de Estados Unidos',
      options: ['Norteño banda', 'Country', 'Reggaeton', 'Cumbia'],
      answer: 'Country'
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  
  function showQuestion() {
    const currentQuiz = questions[currentQuestion];
    questionElement.textContent = currentQuiz.question;
  
    optionsElement.innerHTML = '';
    currentQuiz.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(answer) {
    const currentQuiz = questions[currentQuestion];
    if (currentQuiz.answer === answer) {
      score++;
      resultElement.textContent = 'Correct!';
    } else {
      resultElement.textContent = 'Incorrect!';
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    resultElement.textContent = `Acertaste ${score} de ${questions.length} preguntas :3.`;
    document.getElementById('next-btn').style.display = 'none';
  }
  
  function nextQuestion() {
    resultElement.textContent = '';
    showQuestion();
  }
  
  
  showQuestion();



function restartGame() {
    window.location.reload(); 
  }
  
  
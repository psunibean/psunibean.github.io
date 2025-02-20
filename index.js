
if (!localStorage.getItem("visited")) {
  localStorage.setItem("visited", "true"); // Set a flag in local storage
  window.location.href = "game.html"; // Redirect to game.html
}

      // JavaScript to trigger the redirect
      function redirectToYouTube() {
        window.location.href = "https://www.youtube.com/watch?v=bzLaL0SVwwI"; // Replace with your YouTube link
    }

    
const quizData = [
    {
      question: "What day is Valentines?",
      options: ["14 Feb", "Today 0_0", "21 June", "30 November"],
      answer: ["14 Feb", "Today 0_0"]
    },
    {
      question: "What is Mercy's real name?",
      options: ["Angela Ziegler", "Akon", "Erin Jaeger", "Angelia Zeegla"],
      answer: ["Angela Ziegler"]
    },
	
    {
      question: "What is the cooldown of Mercy's Resurrect?",
      options: ["120 secs", "30 secs", "1secs  (hehe)", "27 secs"],
      answer: ["30 secs"]
    },

    {
      question: "Which type of chocolates did Mercy give Genji?",
      options: ["Pan Au", "Swiss", "French", "Cocoa"],
      answer: ["Swiss"]
    },

    {
      question: "What level were you in Overwatch 1?",
      options: ["2000", "331", "469", "669"],
      answer: ["469"]
    },

    {
      question: "Who is your most played Overwatch 2 hero?",
      options: ["Lifeweaver", "Ana",  "Mercy", "Winton"],
      answer: ["Lifeweaver"]
    },

    {
      question: "What is my main in Overwatch 2?",
      options: ["Hammond", "Soldier: 76", "Reinhardt", "Juno"],
      answer: ["Soldier: 76"]
    },

    {
      question: "Why are you running?",
      options: ["Jet Boosters", "Halo Gliders", "Guardian Angel", "Super Jump"],
      answer: ["Guardian Angel"]
    },

    {
      question: "Who is my favourite Sanrio character? :3",
      options: ["Kuromi", "Badtz-Maru", "Cinnamoroll", "Pingu"],
      answer: ["Badtz-Maru"]
    },
	
    {
      question: "Are you gonna be my pocket Mercy?",
      options: ["Yes", "Probably", "Maybe", "No"],
      answer: ["Yes"]
    },
	
	 {
      question: "Let's duo sometime? :3",
      options: ["No", "Yes", "No", "Yes"],
      answer: ["Yes"]
    }
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const questionCounterElement = document.getElementById("question-counter"); // New element for question counter
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  
  // Add audio for button click sound
  const clickSound = new Audio("https://github.com/psunibean/psunibean.github.io/raw/refs/heads/main/sfx/Elim-1.mp3");
  
  
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
	
	
	// Update the question counter
    questionCounterElement.innerText = `Question ${currentQuestion + 1} of ${quizData.length}`;
	
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
	  button.style.margin = "5px"; //Button Spacing HERE
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  function delay (URL) {
    setTimeout( function() { window.location = URL }, 4500 );
}

  function delay2 (URL) {
    setTimeout( function() { window.location = URL }, 2700 );
}

//ANSWERS

  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

	// Play the click sound effect
    clickSound.play();  

    // Disable all buttons after one is clicked
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true; // Disable all buttons
    });

    // Only highlight the selected answer
    selectedButton.style.backgroundColor = "powderblue"; // Highlight the selected answer

    // Check if the selected answer is correct
    if (Array.isArray(answer) && answer.includes(selectedButton.innerText)) {
        score++; // Increment score for correct answer
    }

  
  
    currentQuestion++;
  
	setTimeout(() => {
        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 800); // delay before the next question or result
}
  
 function showResult() {
    let message = "";
    const total = (score);
    let endingSound; // Declare the sound variable


    if (total === 11) {
        message = "Ultimate cat toucher";
        endingSound = new Audio("https://github.com/psunibean/psunibean.github.io/raw/refs/heads/main/sfx/Catto.mp3");

    } else if (total >= 10) {
       message = "Winston.";
       endingSound = new Audio("https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/16/Winston_-_Winston.ogg/revision/latest?cb=20230915030155");

    } else if (total >= 8) {
        message = "OMG, CARRY ME PLEASE? :O";
        endingSound = new Audio("https://github.com/psunibean/psunibean.github.io/raw/refs/heads/main/sfx/Victory.mp3");
        
    } else if (total >= 5) {
        message = "I guess you're an average Overwatch player";
        endingSound = new Audio("https://github.com/psunibean/psunibean.github.io/raw/refs/heads/main/sfx/LW-hello.mp3");

    } else if (total >= 2) {
        message = "You kinda suck...";
        endingSound = new Audio("https://github.com/psunibean/psunibean.github.io/raw/refs/heads/main/sfx/Genji-1.mp3");

	} else {
		window.location.href = "ending.html"; // Redirect to another HTML file if score is low
        return;
		
    }

    // **Play the ending sound**
    if (endingSound) {
      endingSound.play();
  }

  // Trigger confetti effect when quiz completes
  if (total > 5) {
    confetti({
      particleCount: 200,  // Number of confetti pieces
      spread: 200,         // Spread angle
      origin: { y: 0.6 },  // Confetti starts around the middle
    });
  }



    quiz.innerHTML = `
      <h3>QUIZ COMPLETE!</h3>
      <h5>Your score: ${score}/${quizData.length}</h5>
      <h6>${message}</h6>
	  
	  <audio id="player" src="https://github.com/psunibean/psunibean.github.io/raw/refs/heads/main/sfx/Mercy-1.mp3">
	  </audio>
	  
	  <br>
	  
	  <div class="click-me">
		<a href="javascript:delay2('game.html')" onclick="document.getElementById('player').play()" style="text-decoration:none">
			<button class="click-me" > Restart? </button>
		</a>
	</div>
    `;
}
  
showQuestion();
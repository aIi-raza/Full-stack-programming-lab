// =============================================
// TASK 8 - Quiz Game
// Features: DOM Manipulation, Event Handling,
//           Effects & Animations, CSS Manipulation
// GOAL: Show one question at a time, navigate
//       through questions, display score at end
//       with animation
// =============================================

$(document).ready(function () {

  // Quiz questions data
  const questions = [
    {
      q: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "HyperTransfer Markup Language"],
      answer: 0
    },
    {
      q: "Which jQuery method hides an element with a sliding motion?",
      options: [".hide()", ".collapse()", ".slideUp()", ".fadeOut()"],
      answer: 2
    },
    {
      q: "In CSS, which property controls the space between the element's border and its content?",
      options: ["margin", "spacing", "padding", "border-gap"],
      answer: 2
    },
    {
      q: "What does Ajax stand for?",
      options: ["Asynchronous JavaScript and XML", "Advanced Java Access Extension", "Animated JavaScript and XML", "Asynchronous Java Application Exchange"],
      answer: 0
    },
    {
      q: "Which symbol is used to select an element by ID in jQuery?",
      options: [".", "*", "#", "@"],
      answer: 2
    },
    {
      q: "What does the jQuery $ sign represent?",
      options: ["A currency symbol for billing", "A shortcut for the document object", "The jQuery function / alias for jQuery()", "The DOM selector method"],
      answer: 2
    }
  ];

  const letters  = ["A", "B", "C", "D"];
  let current    = 0;   // Index of current question
  let score      = 0;   // Player's score
  let answered   = false; // Prevents answering twice

  // =============================================
  // DOM MANIPULATION: Load and display one question
  // Requirement: Show one question at a time
  // =============================================
  function loadQuestion() {
    answered = false;
    const q = questions[current];

    // DOM Manipulation: update progress bar width
    const progress = (current / questions.length) * 100;
    $("#progressBar").css("width", progress + "%");

    // DOM Manipulation: update question number text
    $("#qNum").text("Question " + (current + 1) + " / " + questions.length);

    // DOM Manipulation: clear feedback and hide Next button
    $("#feedback").text("");
    $("#nextBtn").hide();

    // Effects & Animations: fade in the question text
    $("#questionText").hide().text(q.q).fadeIn(300);

    // DOM Manipulation: clear old options
    $("#optionsContainer").empty();

    // DOM Manipulation: create a button for each option
    q.options.forEach(function (optText, i) {
      const $btn = $("<button>")
        .addClass("option-btn")
        .attr("data-index", i)
        .append($("<span>").addClass("opt-letter").text(letters[i]))
        .append($("<span>").text(optText))
        .hide(); // Start hidden for animation

      $("#optionsContainer").append($btn);

      // Effects & Animations: stagger each option button's fade-in
      $btn.delay(i * 80).fadeIn(200);
    });
  }

  // =============================================
  // EVENT HANDLING + CSS MANIPULATION:
  // Answer option click
  // Requirement: Track answers, highlight correct/wrong
  // =============================================
  $("#optionsContainer").on("click", ".option-btn", function () {
    if (answered) return; // Prevent double-answering
    answered = true;

    const chosen  = parseInt($(this).data("index"));
    const correct = questions[current].answer;

    // Disable all buttons after answering
    $(".option-btn").prop("disabled", true);

    if (chosen === correct) {
      // CSS Manipulation: highlight chosen button green
      $(this).addClass("correct");
      score++;
      // DOM Manipulation: update score display
      $("#scoreDisplay").text("Score: " + score);
      // DOM Manipulation: show feedback message
      $("#feedback").css("color", "#22c55e").text("✓ Correct!");

    } else {
      // CSS Manipulation: highlight chosen button red
      $(this).addClass("wrong");
      // CSS Manipulation: reveal the correct answer in green
      $(".option-btn").eq(correct).addClass("correct");
      // DOM Manipulation: show feedback message
      $("#feedback").css("color", "#ef4444").text("✗ Wrong — the correct answer is highlighted.");
    }

    // DOM Manipulation: show appropriate Next button label
    if (current < questions.length - 1) {
      $("#nextBtn").text("Next →").fadeIn(200);
    } else {
      $("#nextBtn").text("See Results →").fadeIn(200);
    }
  });

  // =============================================
  // EVENT HANDLING: Next button click
  // Requirement: Navigate through questions
  // =============================================
  $("#nextBtn").on("click", function () {
    current++;
    if (current < questions.length) {
      loadQuestion(); // DOM Manipulation: load next question
    } else {
      showResults();  // Show final score
    }
  });

  // =============================================
  // DOM MANIPULATION + EFFECTS & ANIMATIONS:
  // Show results screen with score animation
  // Requirement: Display score at end with animation
  // =============================================
  function showResults() {
    // DOM Manipulation: complete the progress bar
    $("#progressBar").css("width", "100%");

    // Effects & Animations: fade out quiz, fade in results
    $("#quizScreen").fadeOut(300, function () {

      // DOM Manipulation: set final score text
      $("#finalScore").text(score + "/" + questions.length);

      // DOM Manipulation: set result message based on score
      let msg = "";
      if (score === questions.length) msg = "🏆 Perfect score! You're a web dev master!";
      else if (score >= 4)            msg = "🎉 Great job! Solid knowledge.";
      else if (score >= 2)            msg = "📚 Not bad! Keep practising.";
      else                            msg = "💡 Review the material and try again!";

      $("#resultMsg").text(msg);

      // Effects & Animations: fade in the results screen
      $("#resultsScreen").hide().fadeIn(400);
    });
  }

  // =============================================
  // EVENT HANDLING: Start button click
  // Requirement: Begin the quiz on button press
  // =============================================
  $("#startBtn").on("click", function () {
    // Effects & Animations: fade out start screen
    $("#startScreen").fadeOut(250, function () {
      loadQuestion(); // DOM Manipulation: load first question
      // Effects & Animations: fade in quiz screen
      $("#quizScreen").hide().fadeIn(350);
      $("#scoreDisplay").text("Score: 0");
    });
  });

  // =============================================
  // EVENT HANDLING: Retry button click
  // Requirement: Restart the quiz
  // =============================================
  $("#retryBtn").on("click", function () {
    current  = 0;
    score    = 0;
    answered = false;

    // Effects & Animations: fade out results, fade in quiz
    $("#resultsScreen").fadeOut(250, function () {
      loadQuestion();
      // DOM Manipulation: reset score display and progress bar
      $("#scoreDisplay").text("Score: 0");
      $("#progressBar").css("width", "0%");
      // Effects & Animations: fade in fresh quiz
      $("#quizScreen").hide().fadeIn(350);
    });
  });

});
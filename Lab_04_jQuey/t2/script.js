// =============================================
// TASK 2 - Animated Image Gallery
// Features: Effects & Animations, DOM Manipulation,
//           Chaining
// GOAL: Smooth fade transitions between images
//       and dynamic captions on next/previous click
// =============================================

$(document).ready(function () {

  // Captions for each slide (DOM Manipulation: displayed dynamically)
  const captions = [
    "A serene mountain landscape at dawn",
    "Golden light through forest canopy",
    "Abstract urban geometry",
    "Coastal waves at sunset",
    "Minimalist architectural form"
  ];

  const $imgs = $(".gallery-frame img");
  const total = $imgs.length;
  let current = 0;

  // =============================================
  // DOM MANIPULATION: Create dot indicators dynamically
  // Requirement: Navigate between slides using dots
  // =============================================
  for (let i = 0; i < total; i++) {
    const $dot = $("<div>")
      .addClass("dot")
      .data("index", i); // store index on element

    if (i === 0) $dot.addClass("active");
    $("#dots").append($dot); // DOM Manipulation: append to page
  }

  // =============================================
  // EFFECTS & ANIMATIONS + CHAINING:
  // Transition to a specific slide index
  // Requirement: Smooth fade in/out when clicking next/previous
  // =============================================
  function goTo(idx) {
    const $old = $imgs.eq(current);
    current = (idx + total) % total; // wrap around
    const $new = $imgs.eq(current);

    // Chaining + Effects: fadeOut old image, then fadeIn new image
    // .stop(true) cancels any running animation first
    $old
      .stop(true)
      .fadeOut(400, function () {         // Effects: fade out old
        $new
          .stop(true)
          .hide()
          .addClass("active")
          .fadeIn(400);                   // Effects: fade in new
      })
      .removeClass("active");

    // =============================================
    // DOM MANIPULATION + CHAINING:
    // Update caption dynamically with fade animation
    // Requirement: Dynamic captions on slide change
    // =============================================
    $("#caption")
      .fadeOut(200, function () {          // Chaining: fade out caption
        $(this)
          .text(captions[current])         // DOM Manipulation: update text
          .fadeIn(200);                    // Chaining: fade it back in
      });

    // DOM Manipulation: update slide counter text
    $("#slideCounter").text((current + 1) + " / " + total);

    // CSS Manipulation: move active class to correct dot
    $(".dot").removeClass("active");
    $(".dot").eq(current).addClass("active");
  }

  // =============================================
  // EVENT HANDLING: Next / Prev button clicks
  // Requirement: Navigate through gallery
  // =============================================
  $("#nextBtn").on("click", function () {
    goTo(current + 1);
  });

  $("#prevBtn").on("click", function () {
    goTo(current - 1);
  });

  // EVENT HANDLING: Click on a dot to jump to that slide
  $("#dots").on("click", ".dot", function () {
    goTo($(this).data("index"));
  });

  // Initialize first caption
  $("#caption").text(captions[0]);

});
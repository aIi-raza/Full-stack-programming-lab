// =============================================
// TASK 5 - Chained Style Editor
// Features: CSS Manipulation, Chaining,
//           Event Handling
// GOAL: Apply multiple styles at once using
//       chaining and toggle styles on/off
// =============================================

$(document).ready(function () {

  // Default styles for the reset button
  const defaults = {
    fontSize:        "1.3rem",
    color:           "#ffffff",
    backgroundColor: "#27272a",
    fontWeight:      "500",
    fontStyle:       "normal",
    textDecoration:  "none",
    textShadow:      "none"
  };

  // =============================================
  // EVENT HANDLING: All style buttons share one handler
  // data-action attribute tells us what to do
  // =============================================
  $(".style-btn").on("click", function () {
    const action = $(this).data("action");
    const $t = $("#textBlock");

    // =============================================
    // CSS MANIPULATION: Change font size
    // Requirement: Button changes font size of text block
    // =============================================
    if (action === "size-sm") $t.css("font-size", "0.9rem");
    if (action === "size-md") $t.css("font-size", "1.1rem");
    if (action === "size-lg") $t.css("font-size", "1.6rem");
    if (action === "size-xl") $t.css("font-size", "2rem");

    // =============================================
    // CSS MANIPULATION: Change text color
    // Requirement: Button changes color of text
    // =============================================
    if (action === "color-white")  $t.css("color", "#ffffff");
    if (action === "color-yellow") $t.css("color", "#f5e642");
    if (action === "color-cyan")   $t.css("color", "#22d3ee");
    if (action === "color-pink")   $t.css("color", "#f472b6");
    if (action === "color-green")  $t.css("color", "#4ade80");

    // =============================================
    // CSS MANIPULATION: Change background color
    // Requirement: Button changes background of text block
    // =============================================
    if (action === "bg-dark")   $t.css("background-color", "#27272a");
    if (action === "bg-blue")   $t.css("background-color", "#1e3a5f");
    if (action === "bg-purple") $t.css("background-color", "#3b1a5f");
    if (action === "bg-orange") $t.css("background-color", "#7c2d12");

    // =============================================
    // CHAINING + CSS MANIPULATION: Toggle bold
    // Requirement: Toggle bold style using chaining
    // .css() + .fadeOut() + .fadeIn() chained together
    // =============================================
    if (action === "toggle-bold") {
      const isBold = $t.css("font-weight") === "700" || $t.css("font-weight") === "bold";
      $t
        .css("font-weight", isBold ? "500" : "700") // CSS Manipulation: toggle weight
        .fadeOut(80)                                  // Chaining: animate out
        .fadeIn(80);                                  // Chaining: animate back in
      $("#boldBtn").toggleClass("toggled");           // CSS Manipulation: highlight button
    }

    // =============================================
    // CHAINING + CSS MANIPULATION: Toggle italic
    // =============================================
    if (action === "toggle-italic") {
      const isItalic = $t.css("font-style") === "italic";
      $t
        .css("font-style", isItalic ? "normal" : "italic") // CSS Manipulation
        .fadeOut(80)                                         // Chaining
        .fadeIn(80);                                         // Chaining
      $("#italicBtn").toggleClass("toggled");
    }

    // =============================================
    // CSS MANIPULATION: Toggle underline
    // =============================================
    if (action === "toggle-underline") {
      const isUnderlined = $t.css("text-decoration").includes("underline");
      $t.css("text-decoration", isUnderlined ? "none" : "underline"); // CSS Manipulation
      $("#underlineBtn").toggleClass("toggled");
    }

    // =============================================
    // CSS MANIPULATION: Toggle text shadow
    // =============================================
    if (action === "toggle-shadow") {
      const hasShadow = $t.css("text-shadow") !== "none";
      $t.css("text-shadow", hasShadow ? "none" : "0 0 20px rgba(245,230,66,0.8)"); // CSS Manipulation
      $("#shadowBtn").toggleClass("toggled");
    }
  });

  // =============================================
  // CHAINING: Reset all styles in one chain
  // Requirement: Apply multiple styles at once
  // All .css() calls are chained on the same element
  // =============================================
  $("#resetBtn").on("click", function () {
    $("#textBlock")
      .css("font-size",        defaults.fontSize)         // Chaining: reset size
      .css("color",            defaults.color)             // Chaining: reset color
      .css("background-color", defaults.backgroundColor)   // Chaining: reset bg
      .css("font-weight",      defaults.fontWeight)        // Chaining: reset weight
      .css("font-style",       defaults.fontStyle)         // Chaining: reset style
      .css("text-decoration",  defaults.textDecoration)    // Chaining: reset decoration
      .css("text-shadow",      defaults.textShadow)        // Chaining: reset shadow
      .fadeOut(150)                                        // Chaining: animate out
      .fadeIn(300);                                        // Chaining: animate back in

    // CSS Manipulation: remove toggled state from all buttons
    $(".style-btn").removeClass("toggled");
  });

});
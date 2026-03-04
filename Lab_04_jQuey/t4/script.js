// =============================================
// TASK 4 - Tabbed Content with Smooth Scroll
// Features: DOM Manipulation, Effects & Animations,
//           Event Handling
// GOAL: Switch tabs, smooth scroll to section,
//       animate content display
// =============================================

$(document).ready(function () {

  // =============================================
  // EVENT HANDLING: Tab button click
  // Requirement: Clicking a tab shows its content
  //              and scrolls smoothly to it
  // =============================================
  $(".tab-btn").on("click", function () {

    // Get the target section ID from the data-target attribute
    const target = $(this).data("target");

    // =============================================
    // CSS MANIPULATION: Update active tab button
    // Remove active from all, add to clicked one
    // =============================================
    $(".tab-btn").removeClass("active");      // CSS Manipulation: deactivate all
    $(this).addClass("active");               // CSS Manipulation: activate clicked

    // =============================================
    // DOM MANIPULATION + EFFECTS & ANIMATIONS:
    // Hide all sections, then show the target one
    // Requirement: Show tab content with animation
    // =============================================
    $(".tab-section")
      .removeClass("active")  // DOM Manipulation: remove active class
      .hide();                 // DOM Manipulation: hide all sections

    $("#" + target)
      .addClass("active")     // DOM Manipulation: mark as active
      .hide()                 // Start hidden so fadeIn works
      .fadeIn(350);           // Effects & Animations: fade the section in

    // =============================================
    // EFFECTS & ANIMATIONS: Smooth scroll to section
    // Requirement: Scroll smoothly when tab is clicked
    // jQuery .animate() scrolls the page to the section
    // =============================================
    $("html, body").animate(
      {
        scrollTop: $("#" + target).offset().top - 70  // 70px offset for sticky tab bar
      },
      500  // duration in milliseconds
    );

  });

});
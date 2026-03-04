// =============================================
// TASK 1 - Dynamic List Manager
// Features: DOM Manipulation, Event Handling,
//           CSS Manipulation
// GOAL: Add/remove list items dynamically
//       and highlight on hover
// =============================================

$(document).ready(function () {

  // ---- HELPER: Update item count and empty message ----
  // DOM Manipulation: Updates text content of #count dynamically
  function updateCount() {
    const n = $("#itemList li").length;
    $("#count").text(n); // DOM Manipulation: change text
    if (n === 0) {
      $("#emptyMsg").fadeIn(200); // DOM Manipulation: show element
    } else {
      $("#emptyMsg").hide();     // DOM Manipulation: hide element
    }
  }

  // =============================================
  // EVENT HANDLING: Click event on Add button
  // Requirement: Add items to the list
  // =============================================
  $("#addBtn").on("click", function () {
    addItem();
  });

  // EVENT HANDLING: Keypress on input (Enter key)
  // Allows adding items without clicking the button
  $("#itemInput").on("keypress", function (e) {
    if (e.key === "Enter") {
      addItem();
    }
  });

  // =============================================
  // DOM MANIPULATION: Create and append a new list item
  // Requirement: Add items to the list dynamically
  // =============================================
  function addItem() {
    const val = $("#itemInput").val().trim();

    // Validate: empty input check
    if (!val) {
      // CSS Manipulation: Add error class to highlight input red
      $("#itemInput").addClass("input-error");
      setTimeout(function () {
        $("#itemInput").removeClass("input-error");
      }, 800);
      return;
    }

    // DOM Manipulation: Create a new <li> element
    const $li = $("<li>")
      .hide() // start hidden so we can animate it in
      .append(
        $("<span class='item-text'>").text(val) // DOM Manipulation: set text
      )
      .append(
        $("<button class='delete-btn'>").text("Delete") // DOM Manipulation: add delete button
      );

    // DOM Manipulation: Append the new item to the list
    $("#itemList").append($li);

    // Effects & Animations: Slide the new item into view
    $li.slideDown(250);

    // DOM Manipulation: Clear the input field and refocus
    $("#itemInput").val("").focus();

    updateCount();
  }

  // =============================================
  // EVENT HANDLING + DOM MANIPULATION:
  // Delete button — remove item from the list
  // Requirement: Remove items by clicking Delete button
  // Using event delegation (.on on parent) so it works
  // for dynamically added buttons too
  // =============================================
  $("#itemList").on("click", ".delete-btn", function () {
    // Effects: Slide item up before removing (animation)
    $(this).closest("li").slideUp(200, function () {
      $(this).remove(); // DOM Manipulation: remove element from DOM
      updateCount();
    });
  });

  // Initialize count on page load
  updateCount();

});
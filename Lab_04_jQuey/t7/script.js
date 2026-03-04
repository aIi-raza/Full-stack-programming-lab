// =============================================
// TASK 7 - Drag & Drop Sortable List
// Features: DOM Manipulation, Event Handling,
//           CSS Manipulation
// GOAL: Enable drag-and-drop reordering,
//       highlight dragged item,
//       update order display dynamically
// =============================================

$(document).ready(function () {

  let dragSrc = null; // Stores the item being dragged

  // =============================================
  // DOM MANIPULATION: Update position numbers
  // Requirement: Update order dynamically after drop
  // =============================================
  function updateNumbers() {
    $("#sortList li").each(function (i) {
      // DOM Manipulation: update the number badge on each item
      $(this).find(".item-num").text(i + 1);
    });
    updateOrderDisplay();
  }

  // =============================================
  // DOM MANIPULATION: Update the order display bar
  // Requirement: Display current order after reordering
  // =============================================
  function updateOrderDisplay() {
    const labels = [];
    $("#sortList li").each(function () {
      labels.push($(this).find(".item-label").text());
    });
    // DOM Manipulation: update text of order display
    $("#orderList").text(labels.join("  →  "));
  }

  // =============================================
  // EVENT HANDLING: dragstart
  // Fires when the user starts dragging an item
  // Requirement: Detect which item is being dragged
  // =============================================
  $("#sortList").on("dragstart", "li", function (e) {
    dragSrc = this; // Remember which item we're dragging
    // CSS Manipulation: highlight the dragged item
    $(this).addClass("dragging");
    e.originalEvent.dataTransfer.effectAllowed = "move";
  });

  // =============================================
  // EVENT HANDLING: dragend
  // Fires when the drag operation finishes
  // =============================================
  $("#sortList").on("dragend", "li", function () {
    // CSS Manipulation: remove dragging highlight
    $(this).removeClass("dragging");
    // CSS Manipulation: remove all drag-over highlights
    $("#sortList li").removeClass("drag-over");
  });

  // =============================================
  // EVENT HANDLING: dragover
  // Must call e.preventDefault() to allow dropping
  // =============================================
  $("#sortList").on("dragover", "li", function (e) {
    e.preventDefault(); // Required to allow drop
    e.originalEvent.dataTransfer.dropEffect = "move";
    return false;
  });

  // =============================================
  // EVENT HANDLING: dragenter
  // Fires when dragged item enters a new list item
  // CSS Manipulation: highlight the potential drop target
  // Requirement: Highlight the item being dragged over
  // =============================================
  $("#sortList").on("dragenter", "li", function () {
    if (this !== dragSrc) {
      $("#sortList li").removeClass("drag-over");     // CSS Manipulation: clear others
      $(this).addClass("drag-over");                  // CSS Manipulation: highlight target
    }
  });

  // EVENT HANDLING: dragleave — remove highlight when leaving
  $("#sortList").on("dragleave", "li", function () {
    $(this).removeClass("drag-over"); // CSS Manipulation: remove highlight
  });

  // =============================================
  // EVENT HANDLING + DOM MANIPULATION: drop
  // Fires when item is dropped on a target
  // Requirement: Reorder list items and update display
  // =============================================
  $("#sortList").on("drop", "li", function (e) {
    e.stopPropagation();

    if (this !== dragSrc) {
      const $src  = $(dragSrc);
      const $dest = $(this);
      const srcPos  = $src.index();
      const destPos = $dest.index();

      // DOM Manipulation: reorder the elements in the DOM
      if (srcPos < destPos) {
        $dest.after($src);   // DOM Manipulation: move src after dest
      } else {
        $dest.before($src);  // DOM Manipulation: move src before dest
      }

      // DOM Manipulation: update position numbers and order display
      updateNumbers();
    }

    // CSS Manipulation: remove drag-over highlight
    $(this).removeClass("drag-over");
    return false;
  });

  // Initialize order display on load
  updateOrderDisplay();

});
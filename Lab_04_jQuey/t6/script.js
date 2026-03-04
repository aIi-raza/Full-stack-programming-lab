// =============================================
// TASK 6 - API Data Fetcher
// Features: Ajax, DOM Manipulation, Event Handling
// GOAL: Fetch a list of posts from an external API,
//       display in formatted list, Load More button
//       fetches additional data
// =============================================

$(document).ready(function () {

  let page    = 1;       // Current page of posts being displayed
  const perPage = 5;     // Number of posts per page
  let allPosts = [];     // Stores all fetched posts from API

  // =============================================
  // DOM MANIPULATION: Build and show a batch of posts
  // Requirement: Display API data in a formatted list
  // =============================================
  function showPosts(posts) {
    posts.forEach(function (post) {

      // DOM Manipulation: Create a formatted list item for each post
      const $item = $("<li>")
        .addClass("post-item")
        .append(
          $("<p>").addClass("post-id").text("Post #" + post.id)      // DOM Manipulation
        )
        .append(
          $("<p>").addClass("post-title").text(post.title)            // DOM Manipulation
        )
        .append(
          $("<p>").addClass("post-body").text(post.body)              // DOM Manipulation
        );

      // DOM Manipulation: Append post to list
      $("#postList").append($item);

      // Effects: Slide each post into view
      $item.slideDown(200);
    });
  }

  // =============================================
  // EVENT HANDLING + AJAX:
  // Load button — fetch all posts from external API
  // Requirement: Fetch API data dynamically using Ajax
  // =============================================
  $("#loadBtn").on("click", function () {
    if (allPosts.length > 0) return; // Already loaded, skip

    // DOM Manipulation: Show spinner while loading
    $("#loader").show();
    $("#status").text("Fetching...");

    // =============================================
    // AJAX: Fetch posts from JSONPlaceholder API
    // $.ajax() sends HTTP GET request to the API URL
    // Data is returned asynchronously (no page refresh)
    // =============================================
    $.ajax({
      url:    "https://jsonplaceholder.typicode.com/posts",
      method: "GET",

      // Ajax success callback — runs when data arrives
      success: function (data) {
        allPosts = data; // Store all 100 posts
        $("#loader").hide(); // DOM Manipulation: hide spinner

        // Display first batch
        const firstBatch = allPosts.slice(0, perPage);
        showPosts(firstBatch);
        page = 1;

        // DOM Manipulation: update status text
        $("#status").text(
          "Showing " + Math.min(page * perPage, allPosts.length) + " of " + allPosts.length + " posts"
        );

        // DOM Manipulation: show Load More button
        $("#loadMoreBtn").fadeIn(300);

        // Disable Load button after first use
        $("#loadBtn").prop("disabled", true).css("opacity", 0.5);
      },

      // Ajax error callback — runs if request fails
      error: function () {
        $("#loader").hide();
        $("#status").text("Error fetching data. Check your internet connection.");
      }
    });
  });

  // =============================================
  // EVENT HANDLING + DOM MANIPULATION:
  // Load More button — display next batch of posts
  // Requirement: Load More button fetches additional data
  // =============================================
  $("#loadMoreBtn").on("click", function () {
    page++;
    const start = (page - 1) * perPage;
    const end   = page * perPage;
    const nextBatch = allPosts.slice(start, end);

    if (nextBatch.length === 0) {
      // DOM Manipulation: no more posts
      $("#status").text("All " + allPosts.length + " posts loaded.");
      $(this).fadeOut();
      return;
    }

    // DOM Manipulation: display next batch
    showPosts(nextBatch);

    // DOM Manipulation: update status counter
    $("#status").text(
      "Showing " + Math.min(end, allPosts.length) + " of " + allPosts.length + " posts"
    );

    // Hide Load More if all posts shown
    if (end >= allPosts.length) {
      $(this).fadeOut(300);
      $("#status").text("All " + allPosts.length + " posts loaded.");
    }
  });

});
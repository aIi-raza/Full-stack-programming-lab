// =============================================
// TASK 3 - Interactive Form Validation
// Features: Event Handling, CSS Manipulation,
//           DOM Manipulation
// GOAL: Validate fields on blur (losing focus),
//       highlight errors, display success message
//       without page refresh
// =============================================

$(document).ready(function () {

  // =============================================
  // EVENT HANDLING: Validate on blur
  // Requirement: Highlight errors when user leaves a field
  // .on("blur") fires when the user clicks away from input
  // =============================================

  $("#fullName").on("blur", function () {
    validateName();
  });

  $("#email").on("blur", function () {
    validateEmail();
  });

  $("#password").on("blur", function () {
    validatePassword();
  });

  // Also re-validate confirm when password changes
  $("#confirm").on("blur", function () {
    validateConfirm();
  });

  // =============================================
  // VALIDATION FUNCTIONS
  // CSS Manipulation: .error / .success classes applied
  // DOM Manipulation: error messages shown/hidden
  // =============================================

  function validateName() {
    const val = $("#fullName").val().trim();
    if (val.length < 3) {
      setError("#fullName", "#nameErr");
      return false;
    }
    setSuccess("#fullName", "#nameErr");
    return true;
  }

  function validateEmail() {
    const val = $("#email").val().trim();
    // Simple regex to check valid email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) {
      setError("#email", "#emailErr");
      return false;
    }
    setSuccess("#email", "#emailErr");
    return true;
  }

  function validatePassword() {
    const val = $("#password").val();
    if (val.length < 6) {
      setError("#password", "#passErr");
      return false;
    }
    setSuccess("#password", "#passErr");
    return true;
  }

  function validateConfirm() {
    if ($("#confirm").val() !== $("#password").val()) {
      setError("#confirm", "#confirmErr");
      return false;
    }
    setSuccess("#confirm", "#confirmErr");
    return true;
  }

  // =============================================
  // CSS MANIPULATION: Apply error styles to input
  // Requirement: Highlight fields with errors
  // =============================================
  function setError(inputSel, msgSel) {
    $(inputSel)
      .removeClass("success")  // CSS Manipulation: remove green class
      .addClass("error");       // CSS Manipulation: add red class

    $(msgSel).slideDown(150);   // DOM Manipulation: show error message
  }

  // =============================================
  // CSS MANIPULATION: Apply success styles to input
  // =============================================
  function setSuccess(inputSel, msgSel) {
    $(inputSel)
      .removeClass("error")    // CSS Manipulation: remove red class
      .addClass("success");     // CSS Manipulation: add green class

    $(msgSel).slideUp(150);     // DOM Manipulation: hide error message
  }

  // =============================================
  // EVENT HANDLING: Form Submit button click
  // Requirement: Validate all fields, show success
  //              message WITHOUT page refresh
  // =============================================
  $("#submitBtn").on("click", function () {

    // Run all validators — & (bitwise AND) ensures all run even if one fails
    const allValid = validateName() & validateEmail() & validatePassword() & validateConfirm();

    if (allValid) {
      // DOM Manipulation: Show success message (no page reload!)
      $("#successMsg").slideDown(300);

      // DOM Manipulation + CSS Manipulation: Reset all fields
      $("input").val("").removeClass("success error");

      // Auto-hide success message after 4 seconds
      setTimeout(function () {
        $("#successMsg").slideUp(300);
      }, 4000);
    }
  });

});
// ============================================================
// t4 — Unique Course Registration System
// ES6 Features: Set, for...of loop, Template Literals,
//               const/let, Arrow functions
// ============================================================

// ── ES6 SET — stores only unique values; no duplicates allowed ──
const registeredCourses = new Set();

// Pre-populate with some default courses to demonstrate the Set
registeredCourses.add('JavaScript ES6');
registeredCourses.add('Data Structures');
registeredCourses.add('Web Development');

// ── Display all courses from the Set ──
const displayCourses = () => {
    const output = document.getElementById('output');

    // Build list items by iterating with for...of (ES6 Set iteration)
    let courseHTML = '';
    let index = 1;

    // ── ES6 FOR...OF LOOP — iterates over Set values directly ──
    for (const course of registeredCourses) {
        courseHTML += `
      <li class="course-item">
        <span class="course-num">${index++}</span>
        ${course}
        <span class="course-dot"></span>
      </li>
    `;
    }

    // Inject complete UI into output div using Template Literals
    output.innerHTML = `
    <div class="count-banner">
      <p class="count-label">Total Registered Courses</p>
      <span class="count-number">${registeredCourses.size}</span>
    </div>
    ${courseHTML ? `
      <p class="courses-header">Registered Courses (Set)</p>
      <ul class="course-list">${courseHTML}</ul>
    ` : '<p style="color:#64748b;font-size:.88rem">No courses registered yet.</p>'}
  `;
};

// ── Add a course — demonstrates Set duplicate prevention ──
const addCourse = () => {
    const input = document.getElementById('courseInput');
    const courseName = input.value.trim();

    if (!courseName) return; // Do nothing on empty input

    // Check if the Set already contains this course (Set ignores duplicate .add())
    if (registeredCourses.has(courseName)) {
        // ── DUPLICATE WARNING — Show toast message ──
        const existing = document.querySelector('.warning-toast');
        if (existing) existing.remove(); // Remove old toast first

        const toast = document.createElement('div');
        toast.className = 'warning-toast';
        toast.textContent = `⚠️ "${courseName}" is already registered! Set prevents duplicates.`;

        // Insert the toast above the output div
        document.querySelector('main').insertBefore(toast, document.getElementById('output'));

        // Auto-remove toast after 3 seconds
        setTimeout(() => toast.remove(), 3000);
    } else {
        // ── NEW COURSE — Set.add() adds unique value ──
        registeredCourses.add(courseName);

        // Remove any existing warning if adding a new valid course
        const existing = document.querySelector('.warning-toast');
        if (existing) existing.remove();
    }

    input.value = ''; // Clear input field
    displayCourses(); // Refresh the displayed list
};

// ── Allow pressing Enter in the input to add a course ──
document.getElementById('courseInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addCourse();
});

// Run on page load
displayCourses();

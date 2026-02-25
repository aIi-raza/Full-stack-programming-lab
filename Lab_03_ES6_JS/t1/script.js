// ============================================================
// t1 — Student Management System
// ES6 Features: Class, Constructor, Template Literals,
//               const/let, Array methods, Arrow functions
// ============================================================

// ── ES6 CLASS with constructor and method ──
class Student {
  constructor(id, name, semester, courses) {
    // 'courses' is an array of course name strings
    this.id       = id;
    this.name     = name;
    this.semester = semester;
    this.courses  = courses;  // ES6 Array stored as property
  }

  // ── ES6 TEMPLATE LITERAL inside a class method ──
  getDetails() {
    // Build the courses <li> list using .map() and .join()
    const courseItems = this.courses
      .map(course => `<li>${course}</li>`)
      .join('');

    // Return an HTML string built entirely with template literals
    return `
      <div class="student-card">
        <h2>${this.name}</h2>
        <span class="badge">Student</span>
        <div class="info-row">
          <span class="label">ID</span>
          <span class="value">${this.id}</span>
        </div>
        <div class="info-row">
          <span class="label">Semester</span>
          <span class="value">Semester ${this.semester}</span>
        </div>
        <p class="courses-label">Enrolled Courses</p>
        <ul class="courses-list">${courseItems}</ul>
      </div>
    `;
  }
}

// ── ES6 CONST for the class instances ──
const student1 = new Student('BS-001', 'Alice Johnson',   3, ['JavaScript ES6', 'Data Structures', 'Web Dev']);
const student2 = new Student('BS-002', 'Muhammad Usman',  5, ['Node.js', 'Databases', 'Operating Systems', 'Computer Networks']);
const student3 = new Student('BS-003', 'Sara Malik',      4, ['Python', 'Machine Learning', 'Linear Algebra']);

// ── ES6 LET for the students array ──
let students = [student1, student2, student3];

// ── Render to DOM using Template Literals and Array loop ──
// Arrow function assigned to a const — clean ES6 style
const renderStudents = () => {
  // .map() each student to its HTML string, then .join('') and inject
  document.getElementById('output').innerHTML =
    students.map(s => s.getDetails()).join('');
};

// Run on page load
renderStudents();

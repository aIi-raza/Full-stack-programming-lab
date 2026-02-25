// ============================================================
// t6 — Mini University Portal
// ES6 Features: Class, Map, Set, Promise, Template Literals,
//               Arrow functions, const/let, Default params
// ============================================================

// ── ES6 CLASS — Student with id, name, and a Set of courses ──
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // ── ES6 SET for each student's courses (unique only) ──
        this.courses = new Set();
    }
}

// ── ES6 MAP — stores all students; key = studentId ──
const studentMap = new Map();

// ── ES6 SET — global registry of all courses ever registered ──
const courseRegistry = new Set();

// ── Add a new student using Map.set() ──
const addStudent = () => {
    const nameInput = document.getElementById('studentName');
    const idInput = document.getElementById('studentId');

    const name = nameInput.value.trim();
    const id = idInput.value.trim();

    if (!name || !id) {
        showToast('⚠️ Please enter both Name and Student ID.', 'warning');
        return;
    }

    if (studentMap.has(id)) {
        showToast(`⚠️ Student ID "${id}" already exists!`, 'warning');
        return;
    }

    // Instantiate Student class and store in Map
    const student = new Student(id, name);
    studentMap.set(id, student);   // ── Map.set() ──

    nameInput.value = '';
    idInput.value = '';

    showToast(`✅ Student "${name}" added successfully!`, 'success');
    renderOutput();
};

// ── Register a course — added to ALL students AND global Set ──
const registerCourse = () => {
    const courseInput = document.getElementById('courseInput');
    const courseName = courseInput.value.trim();

    if (!courseName) {
        showToast('⚠️ Please enter a course name.', 'warning');
        return;
    }

    if (studentMap.size === 0) {
        showToast('⚠️ Add at least one student before registering courses.', 'warning');
        return;
    }

    // Add to global courseRegistry Set (duplicates automatically ignored)
    courseRegistry.add(courseName);  // ── Set.add() ──

    // Also add to every student's personal courses Set
    studentMap.forEach(student => {
        student.courses.add(courseName);
    });

    courseInput.value = '';
    showToast(`📚 Course "${courseName}" registered to all students!`, 'success');
    renderOutput();
};

// ── Save Data — simulates server save using a Promise ──
const saveData = () => {
    // Show loading toast while the promise is pending
    showToast('⏳ Saving data to server…', 'loading');

    const savePromise = new Promise((resolve, reject) => {
        // setTimeout simulates a 2-second server round-trip
        setTimeout(() => {
            resolve(`Data saved successfully at ${new Date().toLocaleTimeString()}`);
        }, 2000);
    });

    // ── .then() — runs after resolve ──
    savePromise
        .then(message => {
            showToast(`✅ ${message}`, 'success');
        })
        .catch(err => {
            showToast(`❌ Save failed: ${err}`, 'error');
        });
};

// ── Render the two data panels (Students Map + Courses Set) ──
const renderOutput = () => {
    const output = document.getElementById('output');

    // ── Students from Map ──
    let studentsHTML = '';
    if (studentMap.size > 0) {
        // ── Map.forEach() to iterate entries ──
        studentMap.forEach((student, id) => {
            const courseTags = [...student.courses]  // Spread Set into array
                .map(c => `<span class="s-course-tag">${c}</span>`)
                .join('');

            studentsHTML += `
        <div class="student-entry">
          <div class="s-name">${student.name}</div>
          <div class="s-id">ID: ${id}</div>
          <div class="s-courses-wrap">
            ${courseTags || '<span style="color:#475569;font-size:.75rem">No courses yet</span>'}
          </div>
        </div>
      `;
        });
    } else {
        studentsHTML = '<p class="empty-msg">No students added yet.</p>';
    }

    // ── Courses from global Set ──
    let coursesHTML = '';
    if (courseRegistry.size > 0) {
        // ── for...of on a Set ──
        for (const course of courseRegistry) {
            coursesHTML += `<div class="course-pill">${course}</div>`;
        }
    } else {
        coursesHTML = '<p class="empty-msg">No courses registered yet.</p>';
    }

    // Template literal builds the entire UI
    output.innerHTML = `
    <div class="data-panel panel-students">
      <div class="panel-title">
        Students (Map)
        <span class="panel-count">${studentMap.size} students</span>
      </div>
      ${studentsHTML}
    </div>
    <div class="data-panel panel-courses">
      <div class="panel-title">
        Course Registry (Set)
        <span class="panel-count">${courseRegistry.size} courses</span>
      </div>
      ${coursesHTML}
    </div>
  `;
};

// ── Toast notification helper ──
const showToast = (message, type = 'success') => {
    // Remove any existing toast
    const existing = document.querySelector('.save-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `save-toast ${type === 'loading' ? 'save-loading' : ''}`;
    toast.textContent = message;

    document.querySelector('main').insertBefore(toast, document.getElementById('output'));

    if (type !== 'loading') {
        setTimeout(() => toast.remove(), 3000);
    }
};

// ── Initialize display on load ──
renderOutput();

// ============================================================
// t7 — Student Data Using JSON
// ES6 Features: JSON.stringify(), JSON.parse(), Destructuring,
//               forEach, Template Literals, const/let, Arrow functions
// ============================================================

// ── Original student objects ──
const studentsRaw = [
    {
        name: 'Alice Johnson',
        age: 21,
        semester: 4,
        courses: ['JavaScript ES6', 'Data Structures', 'Web Dev']
    },
    {
        name: 'Muhammad Usman',
        age: 22,
        semester: 6,
        courses: ['Node.js', 'Databases', 'Operating Systems', 'Networks']
    },
    {
        name: 'Sara Malik',
        age: 20,
        semester: 3,
        courses: ['Python', 'Machine Learning', 'Linear Algebra']
    }
];

// ── ES6 JSON.stringify() — convert JS objects to JSON string ──
// null = no replacer function, 2 = indentation spaces for readability
const jsonString = JSON.stringify(studentsRaw, null, 2);

// ── ES6 JSON.parse() — convert JSON string back to JS objects ──
const parsedStudents = JSON.parse(jsonString);

// ── Syntax highlighting helper for JSON display ──
const syntaxHighlight = (json) => {
    // Replace special characters to safely embed in HTML
    return json
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            (match) => {
                let cls = 'json-number';
                if (/^"/.test(match)) {
                    cls = /:$/.test(match) ? 'json-key' : 'json-string';
                } else if (/true|false/.test(match)) {
                    cls = 'json-bool';
                }
                return `<span class="${cls}">${match}</span>`;
            }
        );
};

// ── Build student cards using Destructuring and Template Literals ──
let cardsHTML = '';

// ── forEach loop to iterate parsed students ──
parsedStudents.forEach((student) => {
    // ── ES6 DESTRUCTURING — extract fields from each parsed object ──
    const { name, age, semester, courses } = student;

    // Build course tags
    const courseTagsHTML = courses
        .map(c => `<span class="course-tag">${c}</span>`)
        .join('');

    // ── Template Literal builds the card HTML ──
    cardsHTML += `
    <div class="student-card">
      <h3>${name}</h3>
      <div class="info-row">
        <span class="lbl">Age</span>
        <span class="val">${age} years old</span>
      </div>
      <div class="info-row">
        <span class="lbl">Semester</span>
        <span class="semester-badge">Semester ${semester}</span>
      </div>
      <div class="courses-section">
        <div class="courses-title">Enrolled Courses (${courses.length})</div>
        <div class="courses-wrap">${courseTagsHTML}</div>
      </div>
    </div>
  `;
});

// ── Inject student cards into #output ──
document.getElementById('output').innerHTML = cardsHTML;

// ── Display raw JSON string in #json-display using <pre> tags ──
// syntaxHighlight adds color-coded spans for visual JSON distinction
document.getElementById('json-display').innerHTML =
    `<pre>${syntaxHighlight(jsonString)}</pre>`;

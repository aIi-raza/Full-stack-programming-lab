// ============================================================
// t3 — Asynchronous Data Loader
// ES6 Features: Promise, Arrow functions, Template Literals,
//               .then() / .catch() chaining, const/let
// ============================================================

// ── Flag to simulate network failure (change to true to test) ──
let shouldFail = false;

// ── ES6 PROMISE — wraps an async operation ──
const fetchUsers = () => {
    // Show loading indicator before the promise resolves
    document.getElementById('status').innerHTML = `
    <div class="loading-box">
      <div class="spinner"></div>
      <span class="loading-text">Loading users from server…</span>
    </div>
  `;

    // Return a new Promise (ES6 native)
    return new Promise((resolve, reject) => {
        // Simulate a 3-second network delay with setTimeout
        setTimeout(() => {
            if (shouldFail) {
                // ── REJECT — triggers .catch() ──
                reject('❌ Network error: Unable to fetch users. Please try again.');
            } else {
                // ── RESOLVE — triggers .then() ──
                resolve([
                    { id: 1, name: 'Alice Johnson', email: 'alice@uni.edu', role: 'admin' },
                    { id: 2, name: 'Bob Rahman', email: 'bob@uni.edu', role: 'teacher' },
                    { id: 3, name: 'Sara Malik', email: 'sara@uni.edu', role: 'student' },
                    { id: 4, name: 'James Carter', email: 'james@uni.edu', role: 'student' },
                    { id: 5, name: 'Nadia Ahmed', email: 'nadia@uni.edu', role: 'staff' },
                    { id: 6, name: 'Omar Farooq', email: 'omar@uni.edu', role: 'teacher' },
                ]);
            }
        }, 3000); // 3-second simulated delay
    });
};

// ── Helper: get initials for avatar ──
const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

// ── Promise chaining with .then() and .catch() ──
fetchUsers()
    .then(users => {
        // ── SUCCESS: hide loading, render user cards ──
        document.getElementById('status').innerHTML = `
      <span class="success-status">✅ ${users.length} users loaded successfully</span>
    `;

        // Build user cards using Template Literals and .map()
        const cardsHTML = users
            .map(user => `
        <div class="user-card">
          <div class="user-avatar">${getInitials(user.name)}</div>
          <h3>${user.name}</h3>
          <p class="user-email">${user.email}</p>
          <span class="role-badge role-${user.role}">${user.role}</span>
        </div>
      `)
            .join('');

        // Inject into output div
        document.getElementById('output').innerHTML = cardsHTML;
    })
    .catch(errorMsg => {
        // ── ERROR: show error state ──
        document.getElementById('status').innerHTML = `
      <span class="error-status">${errorMsg}</span>
    `;
        document.getElementById('output').innerHTML = '';
    });

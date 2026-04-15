const authCard = document.getElementById('authCard');
const loginToggleBtn = document.getElementById('loginToggleBtn');
const signupToggleBtn = document.getElementById('signupToggleBtn');
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');

function toggleAuth(isSignup) {
  if (isSignup) {
    authCard.classList.add('signup-active');
    loginToggleBtn.classList.remove('active');
    signupToggleBtn.classList.add('active');
  } else {
    authCard.classList.remove('signup-active');
    loginToggleBtn.classList.add('active');
    signupToggleBtn.classList.remove('active');
  }
}

loginToggleBtn?.addEventListener('click', () => toggleAuth(false));
signupToggleBtn?.addEventListener('click', () => toggleAuth(true));
toSignup?.addEventListener('click', () => toggleAuth(true));
toLogin?.addEventListener('click', () => toggleAuth(false));

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-auth');
  btn.textContent = 'Signing in...';
  btn.style.opacity = '0.7';
  btn.disabled = true;
  setTimeout(() => {
    window.location.href = '../Dashboard/dashboard.html';
  }, 1200);
});

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-auth');
  btn.textContent = 'Creating account...';
  btn.style.opacity = '0.7';
  btn.disabled = true;
  setTimeout(() => {
    window.location.href = '../Dashboard/dashboard.html';
  }, 1500);
});

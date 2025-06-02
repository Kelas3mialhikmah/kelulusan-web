document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Contoh username & password yang valid
  const validUsers = {
    '1234567890': 'siswa2025',
    '9876543210': 'ujian2025'
  };

  if (validUsers[username] === password) {
    localStorage.setItem('user', username); // Simpan sesi sederhana
    window.location.href = 'result.html';
  } else {
    document.getElementById('errorMsg').textContent = 'NISN atau Password salah!';
  }
});

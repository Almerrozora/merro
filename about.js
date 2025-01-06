// about.js
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form agar tidak refresh halaman
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    alert(`Thank you for your feedback, ${name}! Your message: "${message}"`);
});
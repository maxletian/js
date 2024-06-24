// script.js
document.getElementById('bookingForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const flight = document.getElementById('flight').value;
    const date = document.getElementById('date').value;

    const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, flight, date })
    });

    const result = await response.json();
    document.getElementById('message').textContent = result.message;
});

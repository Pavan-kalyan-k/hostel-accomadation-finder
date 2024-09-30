function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

document.getElementById('hostelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const area = document.getElementById('area').value.trim().toLowerCase();
    const gender = document.getElementById('gender').value.trim().toLowerCase();
    
    let csvFile = '';
    
    if (area === 'srnagar') {
        if (gender === 'boy' || gender === 'men') {
            csvFile = 'srnagarboys.csv';
        } else if (gender === 'girl' || gender === 'women') {
            csvFile = 'srnagargirls.csv';
        }
    } else if (area === 'madhapur') {
        if (gender === 'boy' || gender === 'men') {
            csvFile = 'madhapurboys.csv';
        } else if (gender === 'girl' || gender === 'women') {
            csvFile = 'madhapurgirls.csv';
        }
    } else if (area === 'maisammaguda') {
        if (gender === 'boy' || gender === 'men') {
            csvFile = 'maisammagudaboys.csv';
        } else if (gender === 'girl' || gender === 'women') {
            csvFile = 'maisammagudagirls.csv';
        }
    }

    if (csvFile) {
        fetch(csvFile)
            .then(response => response.text())
            .then(data => {
                displayResult(data);
            })
            .catch(error => {
                console.error('Error fetching the CSV file:', error);
            });
    } else {
        document.getElementById('result').innerHTML = '<p>Invalid input or location not found.</p>';
    }
});

function displayResult(data) {
    const rows = data.split('\n').map(row => row.split(','));
    let table = '<table>';
    
    rows.forEach((row, index) => {
        table += '<tr>';
        row.forEach(cell => {
            table += index === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`;
        });
        table += '</tr>';
    });
    
    table += '</table>';
    document.getElementById('result').innerHTML = table;
}

// Simulated login functionality (replace with your actual backend integration)
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Replace this with actual authentication logic (e.g., API call)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Optionally, redirect to a dashboard or another page
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Simulated sign up functionality (replace with your actual backend integration)
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    
    // Replace this with actual sign-up logic (e.g., API call)
    alert('Sign up successful! You can now login with your credentials.');
    // Optionally, clear form fields or take other actions after successful sign-up
});

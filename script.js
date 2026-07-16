// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Responsive Navbar Toggle Logic
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Dynamic Icon Change (Hamburger to Close symbol)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on any Link (For Mobile View)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // 2. Home Button Click Logic
    const clickBtn = document.getElementById('clickBtn');
    clickBtn.addEventListener('click', () => {
        alert('Welcome to my world! Let\'s build something beautiful together.');
    });

    // 3. Advanced Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page reload

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validation & Success Logic 
        if(name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset(); // Clear input boxes
        } else {
            alert('Please fill out all fields before sending.');
        }
    });
});
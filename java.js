// Scroll animations for sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const triggerPoint = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
        // You can add backend integration for actual form submission.
    }
});

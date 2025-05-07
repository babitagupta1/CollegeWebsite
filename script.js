// Load random images for course cards
document.addEventListener('DOMContentLoaded', () => {
    // Set specific images for course cards
    const courseImages = document.querySelectorAll('.course-image');
    const courseImageUrls = [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80', // Computer Science
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80', // Business Administration
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'  // Engineering
    ];
    
    courseImages.forEach((imageDiv, index) => {
        imageDiv.style.backgroundImage = `url('${courseImageUrls[index]}')`;
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
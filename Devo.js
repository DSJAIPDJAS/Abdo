// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${size}px`;
        
        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            // Update active class
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// Form submission handler
function setupFormSubmission() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupSmoothScrolling();
    setupFormSubmission();
    
    // Highlight current section in navigation
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav ul li a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
 // Create floating particles
 function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${size}px`;
        
        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}


 // Initialize everything when DOM loads
 document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupSmoothScrolling();
    setupFormSubmission();
    setupScrollAnimation();
    
    // Add click effect to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Add a nice effect
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
// (Previous JavaScript remains the same)

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupSmoothScrolling();
    setupFormSubmission();
    
    // Animate project cards on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        projectObserver.observe(card);
    });

    // Highlight current section in navigation
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav ul li a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
// أضف هذا الكود في نهاية ملف JavaScript
function setupScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

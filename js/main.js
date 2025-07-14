// Dark/Light mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update toggle button state
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (themeToggle) {
        updateToggleButton(savedTheme);
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateToggleButton(newTheme);
        });
    }
    
    function updateToggleButton(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
});

// Navigation with smooth scrolling and active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const header = document.querySelector('.header') || document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 80;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
        }
    }

    function updateActiveNavLink() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // If we're at the top of the page, set about as active
        if (window.scrollY < 100) {
            currentSection = 'about';
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a hash (#) without target
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const targetId = href.substring(1);
            
            // Immediately update active state
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            smoothScroll(targetId);
        });
    });

    // Throttle scroll events for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNavLink, 10);
    });
    
    updateActiveNavLink(); // Initial call
});

// Social media button functionality
document.addEventListener('DOMContentLoaded', function() {
    const githubBtn = document.getElementById('github-btn');
    const linkedinBtn = document.getElementById('linkedin-btn');
    const whatsappBtn = document.getElementById('WhatsApp-btn') || document.getElementById('whatsapp-btn');
    
    // Also handle WhatsApp links in footer
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    if (githubBtn) {
        githubBtn.addEventListener('click', function() {
            window.open('https://github.com/userHarpreet', '_blank');
        });
    }
    
    if (linkedinBtn) {
        linkedinBtn.addEventListener('click', function() {
            window.open('https://www.linkedin.com/in/userHarpreet', '_blank');
        });
    }
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            window.open('https://wa.me/+919478089291', '_blank');
        });
    }
    
    // Ensure WhatsApp links work properly
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    });
});

// Project card interactions
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // You can add project details modal or navigation here
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    const projectImages = document.querySelectorAll('.project-image');
    
    function addLoadingEffect(element) {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, 100);
    }
    
    if (profileImage) {
        addLoadingEffect(profileImage);
    }
    
    projectImages.forEach(image => {
        addLoadingEffect(image);
    });
});

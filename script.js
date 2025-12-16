// ===========================
// LANGUAGE SWITCHER
// ===========================
const translations = {
    es: {
        // Already in HTML as default
    },
    en: {
        // Translations are in data-en attributes
    }
};

let currentLang = 'es';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    if (savedLang === 'en') {
        switchLanguage('en');
    }
    
    // Language button listeners
    document.getElementById('lang-es').addEventListener('click', () => switchLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon
    const icon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .cert-card, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ===========================
// TYPING EFFECT FOR HERO (Optional enhancement)
// ===========================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===========================
// STATS COUNTER ANIMATION
// ===========================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const numbers = entry.target.querySelectorAll('.stat-number');
            
            numbers.forEach(num => {
                const target = parseInt(num.textContent);
                animateCounter(num, target);
            });
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// ===========================
// FORM VALIDATION (If you add a contact form later)
// ===========================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===========================
// TECH BADGES RANDOM ANIMATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const techBadges = document.querySelectorAll('.tech-badge');
    
    techBadges.forEach((badge, index) => {
        // Random delay for staggered animation
        badge.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===========================
// COPY EMAIL TO CLIPBOARD
// ===========================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show feedback
        const feedback = document.createElement('div');
        feedback.textContent = currentLang === 'es' ? '¡Email copiado!' : 'Email copied!';
        feedback.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #E74C3C;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 4px 16px rgba(0,0,0,0.2);
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => feedback.remove(), 300);
        }, 2000);
    });
}

// Add click listeners to email links
document.addEventListener('DOMContentLoaded', () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        // Add a copy button next to email (optional enhancement)
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.style.cssText = `
            margin-left: 10px;
            background: transparent;
            border: none;
            color: var(--primary);
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.2s;
        `;
        copyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = link.href.replace('mailto:', '').split('?')[0];
            copyToClipboard(email);
        });
        copyBtn.addEventListener('mouseenter', () => {
            copyBtn.style.transform = 'scale(1.2)';
        });
        copyBtn.addEventListener('mouseleave', () => {
            copyBtn.style.transform = 'scale(1)';
        });
        
        // Insert copy button after email link
        link.parentNode.insertBefore(copyBtn, link.nextSibling);
    });
});

// ===========================
// KEYBOARD NAVIGATION
// ===========================
document.addEventListener('keydown', (e) => {
    // Language switcher with Ctrl+L
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        switchLanguage(currentLang === 'es' ? 'en' : 'es');
    }
});

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================
// Lazy load images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// ANALYTICS TRACKING (Placeholder)
// ===========================
function trackEvent(category, action, label) {
    // Add your analytics tracking here
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent.trim());
    });
});

// ===========================
// CONSOLE MESSAGE
// ===========================
console.log('%c👋 ¡Hola! / Hi!', 'font-size: 20px; font-weight: bold; color: #E74C3C;');
console.log('%cGracias por visitar mi portfolio / Thanks for visiting my portfolio', 'font-size: 14px; color: #3498DB;');
console.log('%c¿Buscas un desarrollador Oracle? / Looking for an Oracle developer?', 'font-size: 14px;');
console.log('%cContáctame: aranda.carlos.damian@gmail.com', 'font-size: 14px; font-weight: bold;');

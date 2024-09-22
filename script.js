// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Check for saved theme preference or use user's system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for subtitle
const subtitleElement = document.getElementById('typed-subtitle');
const subtitleText = "Web Developer & Designer";
let i = 0;

function typeSubtitle() {
    if (i < subtitleText.length) {
        subtitleElement.innerHTML += subtitleText.charAt(i);
        i++;
        setTimeout(typeSubtitle, 100);
    }
}

typeSubtitle();

// Skill progress bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const progress = bar.querySelector('.bg-primary');
        const targetWidth = progress.style.width;
        progress.style.width = '0%';
        setTimeout(() => {
            progress.style.width = targetWidth;
            progress.style.transition = 'width 1s ease-in-out';
        }, 200);
    });
}

// Trigger skill bars animation when the skills section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkillBars();
        observer.unobserve(skillsSection);
    }
});

observer.observe(skillsSection);

// Project filter
const projectFilters = document.querySelectorAll('.project-filter');
const projectItems = document.querySelectorAll('.project-item');

projectFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        const category = filter.getAttribute('data-filter');
        projectItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form validation and submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate form submission (replace with actual form submission logic)
        setTimeout(() => {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.classList.remove('hidden', 'text-red-500');
            formMessage.classList.add('text-green-500');
            contactForm.reset();
        }, 1000);
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.classList.remove('hidden', 'text-green-500');
        formMessage.classList.add('text-red-500');
    }
});

// Add this to the end of your script
document.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('transition-opacity', 'duration-1000', 'opacity-100');
});

// Navigation bar scroll effect
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('nav-hidden');
    } else {
        nav.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});
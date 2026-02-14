// Floating Hearts Animation
class FloatingHearts {
    constructor() {
        this.container = document.getElementById('heartsContainer');
        this.hearts = ['❤️', '💕', '💖', '💗', '💝', '🌹', '✨'];
        this.init();
    }

    init() {
        // Create initial hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(() => this.createHeart(), i * 300);
        }
        
        // Continue creating hearts
        setInterval(() => this.createHeart(), 2000);
    }

    createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = this.hearts[Math.floor(Math.random() * this.hearts.length)];
        
        // Random starting position
        heart.style.left = Math.random() * 100 + '%';
        
        // Random animation duration and delay
        const duration = 6 + Math.random() * 4;
        const delay = Math.random() * 2;
        heart.style.animationDuration = duration + 's';
        heart.style.animationDelay = delay + 's';
        
        // Random size
        const size = 15 + Math.random() * 25;
        heart.style.fontSize = size + 'px';
        
        this.container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }
}

// Typewriter Effect for Love Letter
class TypewriterEffect {
    constructor() {
        this.letterContent = document.getElementById('letterContent');
        this.paragraphs = this.letterContent.querySelectorAll('p');
        this.init();
    }

    init() {
        // Reset paragraphs for animation
        this.paragraphs.forEach(p => {
            p.style.opacity = '0';
            p.style.transform = 'translateX(-20px)';
        });

        // Start typewriter effect when section is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startTypewriter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(this.letterContent);
    }

    startTypewriter() {
        this.paragraphs.forEach((p, index) => {
            setTimeout(() => {
                p.style.transition = 'all 0.5s ease-out';
                p.style.opacity = '1';
                p.style.transform = 'translateX(0)';
            }, index * 500);
        });
    }
}

// Card Carousel Animation
class CardCarousel {
    constructor() {
        this.cards = document.querySelectorAll('.love-card');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        this.cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
            observer.observe(card);
        });
    }
}

// CTA Button Interaction
class CTAInteraction {
    constructor() {
        this.button = document.getElementById('ctaButton');
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.createSurprise());
    }

    createSurprise() {
        // Create explosion of hearts
        for (let i = 0; i < 20; i++) {
            setTimeout(() => this.createExplosionHeart(), i * 50);
        }

        // Change button text
        this.button.textContent = 'I Love You, Sister! 💕';
        this.button.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8787)';
        
        // Create floating message
        this.createFloatingMessage();
    }

    createExplosionHeart() {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '30px';
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * Math.random());
        const velocity = 5 + Math.random() * 10;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(heart);
        
        let x = 0;
        let y = 0;
        let opacity = 1;
        
        const animate = () => {
            x += vx;
            y += vy;
            opacity -= 0.02;
            
            heart.style.transform = `translate(${x}px, ${y}px)`;
            heart.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }

    createFloatingMessage() {
        const message = document.createElement('div');
        message.textContent = 'You are the best sister ever! 🌹';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #FFD700, #FFA500);
            color: #722F37;
            padding: 20px 40px;
            border-radius: 50px;
            font-size: 1.5rem;
            font-weight: 700;
            z-index: 1001;
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.5);
            animation: messageFloat 3s ease-out forwards;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes messageFloat {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.5);
                }
                50% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.1);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -150%) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
            style.remove();
        }, 3000);
    }
}

// Smooth Scroll Enhancement
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Parallax effect for hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FloatingHearts();
    new TypewriterEffect();
    new CardCarousel();
    new CTAInteraction();
    new SmoothScroll();
    
    // Add some interactive hover effects
    addInteractiveEffects();
});

function addInteractiveEffects() {
    // Add sparkle effect to cards on hover
    const cards = document.querySelectorAll('.love-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            createSparkles(this);
        });
    });
}

function createSparkles(element) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.cssText = `
                position: absolute;
                font-size: 20px;
                pointer-events: none;
                z-index: 10;
                animation: sparkleFloat 1s ease-out forwards;
            `;
            
            const rect = element.getBoundingClientRect();
            sparkle.style.left = (Math.random() * rect.width) + 'px';
            sparkle.style.top = (Math.random() * rect.height) + 'px';
            
            element.style.position = 'relative';
            element.appendChild(sparkle);
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes sparkleFloat {
                    0% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-30px) scale(0.5);
                    }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                sparkle.remove();
                style.remove();
            }, 1000);
        }, i * 100);
    }
}

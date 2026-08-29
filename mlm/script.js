// Timer functionality
function getDeclension(number, forms) {
    // Forms: [one, two, five] for Russian declension
    const n = Math.abs(number) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Enhanced button interactions with digital effects
function initButtonEffects() {
    // Registration button
    const registrationBtn = document.querySelector('.btn-registration');
    if (registrationBtn) {
        registrationBtn.addEventListener('click', function() {
            // Digital pulse effect
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 0 20px rgba(255, 124, 92, 0.6)';

            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }, 150);
        });

        // Hover effect with glow
        registrationBtn.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(255, 124, 92, 0.4)';
        });

        registrationBtn.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    }

    // Floating buttons
    const floatingBtns = document.querySelectorAll('.floating-buttons .btn');
    floatingBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Digital click effect
            this.style.transform = 'scale(0.9) translateY(2px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';

            setTimeout(() => {
                this.style.transform = 'scale(1) translateY(0)';
                this.style.boxShadow = 'none';
            }, 150);
        });

        // Enhanced hover effects
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Pricing card buttons
    const cardButtons = document.querySelectorAll('.card-button');
    cardButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Digital pulse effect
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = '0 0 20px rgba(255, 124, 92, 0.8)';

            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            }, 150);
        });

        // Hover effect with digital glow
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 0 15px rgba(255, 124, 92, 0.5)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// Enhanced card hover effects
function initCardEffects() {
    // Advantage cards
    const advantageCards = document.querySelectorAll('.advantage-card');
    advantageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.01)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Change cards
    const changeCards = document.querySelectorAll('.change-card');
    changeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.015)';
            this.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.08)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Speaker cards
    const speakerCards = document.querySelectorAll('.speaker-card');
    speakerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.025)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Badge floating animation
function initBadgeAnimations() {
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        badge.addEventListener('mouseenter', function() {
            this.style.animation = `pulse 0.6s ease-in-out ${index * 0.1}s`;
        });

        badge.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}



function updateTimer() {
    // Check if timer elements exist on the page
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const timerLabels = document.querySelectorAll('.timer-label');

    // If timer elements don't exist, exit the function
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement || timerLabels.length === 0) {
        return;
    }

    const targetDate = new Date('2025-11-17T00:00:00+03:00'); // Moscow time
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        // Timer has reached zero
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';

        // Update labels for zero values
        if (timerLabels.length >= 4) {
            timerLabels[0].textContent = 'дней';
            timerLabels[1].textContent = 'часов';
            timerLabels[2].textContent = 'минут';
            timerLabels[3].textContent = 'секунд';
        }
        return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update display with leading zeros
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    // Update labels with correct declension
    if (timerLabels.length >= 4) {
        timerLabels[0].textContent = getDeclension(days, ['день', 'дня', 'дней']);
        timerLabels[1].textContent = getDeclension(hours, ['час', 'часа', 'часов']);
        timerLabels[2].textContent = getDeclension(minutes, ['минута', 'минуты', 'минут']);
        timerLabels[3].textContent = getDeclension(seconds, ['секунда', 'секунды', 'секунд']);
    }
}

// Update timer every second
setInterval(updateTimer, 1000);

// Initialize timer immediately
updateTimer();

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    // Handle main navigation links
    document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for header height (approximately 80px)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close burger menu if open
                closeBurgerMenu();
            }
        });
    });

    // Handle burger menu links
    document.querySelectorAll('.burger-nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for header height (approximately 80px)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close burger menu
                closeBurgerMenu();
            }
        });
    });
}

// Helper function to close burger menu
function closeBurgerMenu() {
    const burgerButton = document.getElementById('burgerButton');
    const burgerNav = document.getElementById('burgerNav');

    if (burgerButton && burgerNav && burgerNav.classList.contains('active')) {
        burgerButton.classList.remove('active');
        burgerNav.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Add some interactive effects for floating buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Burger Menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.getElementById('burgerButton');
    const burgerNav = document.getElementById('burgerNav');

    if (burgerButton && burgerNav) {
        burgerButton.addEventListener('click', function() {
            // Toggle burger button animation
            burgerButton.classList.toggle('active');

            // Toggle burger navigation visibility
            burgerNav.classList.toggle('active');

            // Prevent body scroll when menu is open on mobile
            if (burgerNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close burger menu when clicking on a link
        const burgerLinks = burgerNav.querySelectorAll('.burger-nav-link');
        burgerLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerButton.classList.remove('active');
                burgerNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close burger menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideBurger = burgerButton.contains(event.target) || burgerNav.contains(event.target);

            if (!isClickInsideBurger && burgerNav.classList.contains('active')) {
                burgerButton.classList.remove('active');
                burgerNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close burger menu on window resize if screen becomes larger than 1000px
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1000 && burgerNav.classList.contains('active')) {
                burgerButton.classList.remove('active');
                burgerNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faqItem => {
                if (faqItem !== item) {
                    faqItem.classList.remove('active');
                    const faqAnswer = faqItem.querySelector('.faq-answer');
                    if (faqAnswer) {
                        faqAnswer.style.maxHeight = '0px';
                        faqAnswer.style.opacity = '0';
                        faqAnswer.style.padding = '0px 30px';
                    }
                }
            });

            // Toggle the clicked item
            if (isActive) {
                // Close the item
                item.classList.remove('active');
                if (answer) {
                    answer.style.maxHeight = '0px';
                    answer.style.opacity = '0';
                    answer.style.padding = '0px 30px';
                }
            } else {
                // Open the item
                item.classList.add('active');
                if (answer) {
                    // First, set initial state for animation
                    answer.style.display = 'block';
                    answer.style.maxHeight = '0px';
                    answer.style.opacity = '0';
                    answer.style.padding = '0px 30px';

                    // Force reflow
                    answer.offsetHeight;

                    // Start animation
                    answer.style.transition = 'all 0.4s ease-out';
                    answer.style.maxHeight = '1000px'; // Large enough value
                    answer.style.opacity = '1';
                    answer.style.padding = '30px';

                    // After animation completes, remove transition and set final state
                    setTimeout(() => {
                        answer.style.transition = '';
                        answer.style.maxHeight = 'none';
                        answer.style.height = 'auto';
                    }, 400);
                }
            }
        });
    });

// Initialize floating buttons scroll animation
function initFloatingButtonsScroll() {
    const floatingButtons = document.querySelector('.floating-buttons');
    if (!floatingButtons) return;

    let lastScrollTop = 0;
    let scrollTimeout;
    let isScrolling = false;

    // Show buttons by default when page loads and has scrolled past initial position
    function showButtons() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100) { // Show when scrolled down more than 100px
            floatingButtons.classList.add('visible');
        } else {
            floatingButtons.classList.remove('visible');
        }
    }

    // Initial check
    showButtons();

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        isScrolling = true;

        // Clear the previous timeout
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        // Show buttons immediately when scrolling
        if (scrollTop > 100) {
            floatingButtons.classList.add('visible');
        }

        // Set a timeout to hide buttons when scrolling stops
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
            // Hide buttons after scrolling stops, but only if not at the very top
            if (scrollTop > 100) {
                floatingButtons.classList.remove('visible');
            }
        }, 1000); // Hide after 3 seconds of no scrolling

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    // Throttle scroll events for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16);
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
}

// Testimonials Slider functionality
function initTestimonialsSlider() {
    const testimonials = [
        'img/отзыв-1.png',
        'img/отзыв-2.png',
        'img/отзыв-3.png',
        'img/отзыв-4.png',
        'img/отзыв-5.png',
        'img/отзыв-6.png',
        'img/отзыв-7.png'
    ];

    const testimonialImg = document.getElementById('testimonialImg');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');

    if (!testimonialImg || !prevBtn || !nextBtn || indicators.length === 0) {
        return; // Exit if elements not found
    }

    let currentSlide = 0;

    function updateSlide(slideIndex) {
        // Remove active class from all indicators
        indicators.forEach((indicator, index) => {
            if (index === slideIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Update image with fade effect
        if (testimonialImg) {
            testimonialImg.style.opacity = '0';
            testimonialImg.style.transform = 'scale(0.95)';

            setTimeout(() => {
                testimonialImg.src = testimonials[slideIndex];
                testimonialImg.style.opacity = '1';
                testimonialImg.style.transform = 'scale(1)';
            }, 150);
        }

        currentSlide = slideIndex;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % testimonials.length;
        updateSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
        updateSlide(prevIndex);
    }

    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateSlide(index);
        });
    });

    // Auto-slide functionality (optional)
    let autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Pause auto-slide on hover
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        testimonialsContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
        });

        testimonialsContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for swipe
        const swipeDistance = startX - endX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    }

    // Initialize first slide
    updateSlide(0);
}

// Initialize all animations and effects
    initScrollAnimations();
    initButtonEffects();
    initCardEffects();
    initBadgeAnimations();
    initFloatingButtonsScroll();
    initTestimonialsSlider();
    initSmoothScrolling();

    // Registration button handlers
    initRegistrationButtons();
});

// Registration button functionality
function initRegistrationButtons() {
    // Handle "Участвовать бесплатно" buttons
    const freeParticipationBtns = document.querySelectorAll('.btn-registration');
    freeParticipationBtns.forEach(btn => {
        if (btn.textContent.includes('Забрать бонус')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'registration.html';
            });
        }
    });
    

    // Handle "Регистрация" and "Зарегистрироваться" buttons
    const registrationBtns = document.querySelectorAll('.nav-link, .btn-black');
    registrationBtns.forEach(btn => {
        if (btn.textContent.includes('Регистрация') || btn.textContent.includes('Зарегистрироваться')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'registration.html';
            });
        }
    });

    // Handle floating buttons "Участвовать бесплатно"
    const floatingBtns = document.querySelectorAll('.floating-buttons .btn-primary, .btn-black');
    floatingBtns.forEach(btn => {
        if (btn.textContent.includes('Участвовать бесплатно')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'registration.html';
            });
        }
    });

    // Handle floating buttons "Купить записи" - scroll to pricing section
    const buyRecordsBtns = document.querySelectorAll('.floating-buttons .btn-secondary');
    buyRecordsBtns.forEach(btn => {
        if (btn.textContent.includes('Купить записи')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();

                // Find the pricing section
                const pricingSection = document.querySelector('.pricing-section');
                if (pricingSection) {
                    // Calculate offset for header height (approximately 80px)
                    const headerOffset = 80;
                    const elementPosition = pricingSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    // Smooth scroll to pricing section
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
}

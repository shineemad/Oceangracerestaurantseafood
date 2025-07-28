/**
 * Ocean Grace Beranda Animations - Gallery Style
 * Following the animation style from gallery.html
 */
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Animation configuration similar to gallery
    const animationConfig = {
        duration: 800,
        easing: 'ease-out',
        delay: 100,
        threshold: 0.1
    };

    // Utility functions similar to gallery style
    function addAnimationClass(element, className, delay = 0) {
        setTimeout(() => {
            element.classList.add(className);
        }, delay);
    }

    function removeAnimationClass(element, className) {
        element.classList.remove(className);
    }

    // CSS Animation styles injection (gallery style)
    function injectAnimationStyles() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            /* Beranda animations - Gallery style */
            .fade-in {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s ease-out;
            }
            
            .fade-in.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .slide-up {
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.6s ease-out;
            }
            
            .slide-up.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .slide-left {
                opacity: 0;
                transform: translateX(-50px);
                transition: all 0.6s ease-out;
            }
            
            .slide-left.visible {
                opacity: 1;
                transform: translateX(0);
            }
            
            .slide-right {
                opacity: 0;
                transform: translateX(50px);
                transition: all 0.6s ease-out;
            }
            
            .slide-right.visible {
                opacity: 1;
                transform: translateX(0);
            }
            
            .scale-in {
                opacity: 0;
                transform: scale(0.8);
                transition: all 0.5s ease-out;
            }
            
            .scale-in.visible {
                opacity: 1;
                transform: scale(1);
            }
            
            .stagger-animation {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease-out;
            }
            
            .stagger-animation.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Feature card hover effects - gallery style */
            .hover-effect {
                transition: all 0.3s ease;
                cursor: pointer;
                border-radius: 12px;
                overflow: hidden;
            }
            
            .hover-effect:hover {
                transform: translateY(-5px) scale(1.03);
                box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                filter: brightness(1.1);
            }
            
            /* Button animations - gallery style */
            .btn-animate {
                position: relative;
                overflow: hidden;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .btn-animate::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: left 0.5s ease;
            }
            
            .btn-animate:hover::before {
                left: 100%;
            }
            
            .btn-animate:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            }
            
            /* Navigation effects - gallery style */
            .nav-item {
                position: relative;
                transition: all 0.3s ease;
                cursor: pointer;
                padding: 10px 0;
            }
            
            .nav-item::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 50%;
                width: 0;
                height: 2px;
                background: #1a472a;
                transition: all 0.3s ease;
                transform: translateX(-50%);
                border-radius: 1px;
            }
            
            .nav-item:hover::after,
            .nav-item.active::after {
                width: 100%;
            }
            
            .nav-item:hover {
                color: #1a472a;
                transform: translateY(-1px);
            }
            
            /* Footer navigation styles */
            .footer-nav-item {
                position: relative;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: default;
                padding: 12px 8px;
                font-weight: 500;
                display: inline-block;
                margin: 0 5px;
            }
            
            .footer-nav-item:hover {
                color: #1a472a;
                transform: translateY(-3px);
                font-weight: 700;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                letter-spacing: 0.5px;
            }
            
            .footer-nav-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, transparent, rgba(26, 71, 42, 0.05), transparent);
                opacity: 0;
                transition: all 0.3s ease;
                border-radius: 8px;
                z-index: -1;
            }
            
            .footer-nav-item:hover::before {
                opacity: 1;
            }
            
            /* Social icons hover effects */
            .social-icon-hover {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
                filter: grayscale(0);
                padding: 8px;
                border-radius: 50%;
                position: relative;
                overflow: hidden;
            }
            
            .social-icon-hover::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(26, 71, 42, 0.1) 0%, transparent 70%);
                transition: all 0.4s ease;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
            }
            
            .social-icon-hover:hover::before {
                width: 120%;
                height: 120%;
            }
            
            .social-icon-hover:hover {
                transform: translateY(-6px) scale(1.15);
                filter: brightness(1.3) drop-shadow(0 8px 20px rgba(26, 71, 42, 0.4));
            }
            
            .social-icon-hover:active {
                transform: translateY(-3px) scale(1.1);
                transition: all 0.2s ease;
            }
            
            /* Footer email animation */
            .footer-email {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: default;
                position: relative;
                font-weight: 500;
                padding: 10px 15px;
                border-radius: 8px;
                display: inline-block;
            }
            
            .footer-email::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, 
                    transparent 0%, 
                    rgba(26, 71, 42, 0.05) 25%, 
                    rgba(36, 51, 82, 0.05) 50%, 
                    rgba(26, 71, 42, 0.05) 75%, 
                    transparent 100%);
                opacity: 0;
                transition: all 0.4s ease;
                border-radius: 8px;
                z-index: -1;
            }
            
            .footer-email::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: 2px;
                background: linear-gradient(90deg, #1a472a, #243352);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                transform: translateX(-50%);
                border-radius: 2px;
            }
            
            .footer-email:hover::before {
                opacity: 1;
            }
            
            .footer-email:hover::after {
                width: 80%;
            }
            
            .footer-email:hover {
                color: #1a472a;
                transform: translateY(-2px) scale(1.02);
                font-weight: 600;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            /* Footer section animation */
            footer {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s ease;
            }
            
            footer.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Footer stagger animations */
            .footer-stagger-1 { transition-delay: 0ms; }
            .footer-stagger-2 { transition-delay: 100ms; }
            .footer-stagger-3 { transition-delay: 200ms; }
            .footer-stagger-4 { transition-delay: 300ms; }
            .footer-stagger-5 { transition-delay: 400ms; }
            .footer-stagger-6 { transition-delay: 500ms; }
            
            /* Scroll indicator - gallery style */
            .scroll-indicator {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #243352, #1a472a);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-size: 18px;
                cursor: pointer;
                opacity: 0;
                transform: scale(0.8);
                transition: all 0.3s ease;
                z-index: 1000;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            }
            
            .scroll-indicator.visible {
                opacity: 1;
                transform: scale(1);
            }
            
            .scroll-indicator:hover {
                transform: scale(1.1);
                box-shadow: 0 8px 25px rgba(0,0,0,0.4);
            }
            
            /* Loading animation - gallery style */
            .loading-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #243352, #1a472a);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                opacity: 1;
                transition: all 0.5s ease;
            }
            
            .loading-overlay.hidden {
                opacity: 0;
                visibility: hidden;
            }
            
            .loading-content {
                text-align: center;
                color: white;
            }
            
            .loading-spinner {
                width: 60px;
                height: 60px;
                border: 3px solid rgba(255,255,255,0.3);
                border-top: 3px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .loading-text {
                font-family: "Playfair Display", serif;
                font-size: 24px;
                margin-bottom: 10px;
                font-weight: 600;
            }
            
            .loading-subtitle {
                font-family: "Inter", sans-serif;
                font-size: 14px;
                opacity: 0.8;
            }
            
            /* Navbar scroll effect - gallery style */
            .navbar {
                transition: all 0.4s ease;
            }
            
            .navbar.scrolled {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            
            /* Image effects - gallery style */
            .image-hover {
                transition: all 0.4s ease;
                border-radius: 8px;
                overflow: hidden;
            }
            
            .image-hover:hover {
                transform: scale(1.05);
                box-shadow: 0 12px 30px rgba(0,0,0,0.2);
                filter: brightness(1.1) contrast(1.1);
            }
            
            /* Typewriter effect - gallery style */
            .typewriter {
                overflow: hidden;
                border-right: 2px solid #1a472a;
                white-space: nowrap;
                margin: 0 auto;
                animation: blink-caret 1s step-end infinite;
                font-family: inherit;
                font-size: inherit;
                font-weight: inherit;
                color: inherit;
            }
            
            @keyframes typing {
                from { width: 0 }
                to { width: 100% }
            }
            
            @keyframes blink-caret {
                from, to { border-color: transparent }
                50% { border-color: #1a472a }
            }
            
            /* Ensure typewriter works with line breaks */
            .typewriter br {
                display: block;
                content: "";
                margin-top: 0.5em;
            }
            
            /* Prevent text from wrapping during typewriter effect */
            .headline-utama .typewriter {
                white-space: pre-line;
                overflow: visible;
                max-width: 100%;
            }
            
            /* Responsive adjustments */
            @media (max-width: 768px) {
                .hover-effect:hover {
                    transform: translateY(-3px) scale(1.02);
                }
                
                .btn-animate:hover {
                    transform: translateY(-1px);
                }
                
                .image-hover:hover {
                    transform: scale(1.02);
                }
            }
            
            /* Reduced motion support */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
                
                .typewriter {
                    animation: none;
                    border-right: none;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Intersection Observer setup - gallery style
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: animationConfig.threshold,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const delay = index * animationConfig.delay;
                    addAnimationClass(entry.target, 'visible', delay);
                }
            });
        }, observerOptions);

        // Animate main headings with alternating directions
        const mainHeadings = document.querySelectorAll('.headlineutama, .headlineutama-9, .headlineutama-5, .headlineutama-7, .headlineutama-8');
        mainHeadings.forEach((heading, index) => {
            // Skip typewriter animation for main headline
            if (heading.classList.contains('headlineutama')) {
                // Don't add scroll animation to main headline as it has typewriter effect
                return;
            }
            
            if (index % 2 === 0) {
                heading.classList.add('slide-left');
            } else {
                heading.classList.add('slide-right');
            }
            observer.observe(heading);
        });

        // Animate other headings
        const otherHeadings = document.querySelectorAll('.headlineutama-2, .headlineutama-3, .headlineutama-4, .headlineutama-6');
        otherHeadings.forEach(heading => {
            heading.classList.add('fade-in');
            observer.observe(heading);
        });

        // Animate text content
        const textElements = document.querySelectorAll('.text-wrapper-19, .text-wrapper-6, .enjoy-our-finest, .text-wrapper-7, .every-ingredient-i, .p');
        textElements.forEach(text => {
            text.classList.add('slide-up');
            observer.observe(text);
        });

        // Animate sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('fade-in');
            observer.observe(section);
        });

        // Animate feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            card.classList.add('scale-in');
            setTimeout(() => {
                observer.observe(card);
            }, index * 100);
        });
    }

    // Setup feature card animations - gallery style
    function setupFeatureCards() {
        const featureCards = document.querySelectorAll('.feature-card, .overlap-group-wrapper, .overlap-wrapper, .div-wrapper');
        
        featureCards.forEach((card, index) => {
            card.classList.add('hover-effect');
            
            // Stagger card animations
            setTimeout(() => {
                card.classList.add('scale-in');
                addAnimationClass(card, 'visible', index * 150);
            }, 300);
        });
    }

    // Setup button animations - gallery style
    function setupButtonAnimations() {
        const buttons = document.querySelectorAll('#reserve-btn, .frame');
        
        buttons.forEach(button => {
            button.classList.add('btn-animate');
            
            // Add click ripple effect
            button.addEventListener('click', function(e) {
                createRippleEffect(e, this);
            });
        });
    }

    // Create ripple effect - gallery style
    function createRippleEffect(e, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            pointer-events: none;
        `;
        
        if (!document.getElementById('ripple-keyframes')) {
            const style = document.createElement('style');
            style.id = 'ripple-keyframes';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Navigation setup - gallery style
    function setupNavigation() {
        const navItems = document.querySelectorAll('.text-wrapper, .text-wrapper-2, .text-wrapper-3, .text-wrapper-4');
        const navbar = document.getElementById('navbar');
        
        navItems.forEach(item => {
            item.classList.add('nav-item');
            
            // Remove click event listeners for navigation
            // Navigation will be handled by the HTML links directly
        });

        // Navbar scroll effect
        if (navbar) {
            let lastScrollY = window.scrollY;
            
            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                lastScrollY = currentScrollY;
            });
        }
    }

    // Setup footer navigation with animations and links
    function setupFooterNavigation() {
        const footerNavItems = document.querySelectorAll('.text-wrapper-14, .text-wrapper-15, .text-wrapper-16, .text-wrapper-17');
        
        footerNavItems.forEach((item, index) => {
            // Add animation classes
            item.classList.add('footer-nav-item');
            
            // Add stagger animation
            setTimeout(() => {
                item.classList.add('fade-in');
                addAnimationClass(item, 'visible', index * 100);
            }, 300);
            
            // Add hover effects without navigation
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Animate social icons
        const socialIcons = document.querySelectorAll('.social-icon, .vector-2, .group-18, .vector-3, .social-icons, .social-icons-2, .social-icons-3');
        socialIcons.forEach((icon, index) => {
            icon.classList.add('social-icon-hover');
            
            // Stagger social icon animations
            setTimeout(() => {
                icon.classList.add('scale-in');
                addAnimationClass(icon, 'visible', index * 80);
            }, 600);
        });
        
        // Animate footer email
        const footerEmail = document.querySelector('.text-wrapper-18');
        if (footerEmail) {
            footerEmail.classList.add('footer-email');
            setTimeout(() => {
                footerEmail.classList.add('fade-in');
                addAnimationClass(footerEmail, 'visible', 100);
            }, 800);
        }
    }

    // Setup image animations - gallery style
    function setupImageAnimations() {
        const images = document.querySelectorAll('img');
        
        images.forEach((img, index) => {
            // Skip SVG icons
            if (img.src.includes('.svg')) return;
            
            img.classList.add('image-hover');
            
            // Stagger image loading animation
            setTimeout(() => {
                img.classList.add('scale-in');
                addAnimationClass(img, 'visible', index * 100);
            }, 200);
        });
    }

    // Setup typewriter effect for main headline - gallery style
    function setupTypewriterEffect() {
        // Target element with class 'headline-utama' OR element inside it with class 'headlineutama'
        const headlineContainer = document.querySelector('.headline-utama');
        const mainHeadline = document.querySelector('.headlineutama');
        
        if (mainHeadline) {
            // Get the full text including line breaks
            const originalHTML = mainHeadline.innerHTML;
            const text = mainHeadline.textContent || mainHeadline.innerText;
            
            // Clear the content
            mainHeadline.innerHTML = '';
            mainHeadline.classList.add('typewriter');
            
            // Set initial styles for typewriter effect
            mainHeadline.style.borderRight = '2px solid #1a472a';
            mainHeadline.style.animation = 'blink-caret 1s step-end infinite';
            
            let i = 0;
            let currentText = '';
            
            const typeWriter = () => {
                if (i < text.length) {
                    const char = text.charAt(i);
                    currentText += char;
                    
                    // Preserve line breaks from original HTML
                    if (originalHTML.includes('<br />') || originalHTML.includes('<br>')) {
                        // Replace line breaks in the current text display
                        const displayText = currentText.replace(/\n/g, '<br />');
                        mainHeadline.innerHTML = displayText;
                    } else {
                        mainHeadline.textContent = currentText;
                    }
                    
                    i++;
                    
                    // Variable speed for more natural typing
                    const delay = char === ' ' ? 30 : (char === ',' || char === '.') ? 200 : 70;
                    setTimeout(typeWriter, delay);
                } else {
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        mainHeadline.style.borderRight = 'none';
                        mainHeadline.style.animation = 'none';
                        
                        // Restore original HTML formatting
                        mainHeadline.innerHTML = originalHTML;
                    }, 1000);
                }
            };
            
            // Start typing after loading animation
            setTimeout(typeWriter, 1500);
        }
    }

    // Setup loading animation - gallery style
    function setupLoadingAnimation() {
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        loadingOverlay.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <div class="loading-text">Ocean Grace</div>
                <div class="loading-subtitle">Elegant dining experience awaits...</div>
            </div>
        `;
        
        document.body.appendChild(loadingOverlay);
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingOverlay.classList.add('hidden');
                setTimeout(() => {
                    loadingOverlay.remove();
                }, 500);
            }, 1200);
        });
    }

    // Setup scroll indicator - gallery style
    function setupScrollIndicator() {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '↑';
        scrollIndicator.setAttribute('aria-label', 'Scroll to top');
        
        document.body.appendChild(scrollIndicator);
        
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollIndicator.classList.add('visible');
            } else {
                scrollIndicator.classList.remove('visible');
            }
        });
    }

    // Stagger children animation - gallery style
    function staggerChildren(parent) {
        const children = parent.querySelectorAll('div, p, img, h1, h2, h3, h4, h5, h6');
        children.forEach((child, index) => {
            child.classList.add('stagger-animation');
            setTimeout(() => {
                addAnimationClass(child, 'visible', index * 50);
            }, 100);
        });
    }

    // DOM Manipulation and Event Handling for Beranda
    function setupDOMManipulation() {
        updatePageMetadata();
        setupDynamicContent();
        setupInteractiveElements();
        setupFormHandling();
        setupScrollEffects();
        setupKeyboardNavigation();
        setupSearchFunctionality();
    }

    // Update page metadata dynamically
    function updatePageMetadata() {
        const sections = ['hero', 'about', 'features', 'menu', 'contact'];
        const sectionTitles = {
            'hero': 'Ocean Grace - Elegant Coastal Dining Experience',
            'about': 'About Ocean Grace - Premium Seafood Restaurant',
            'features': 'Our Features - Ocean Grace Restaurant',
            'menu': 'Menu - Ocean Grace Signature Dishes',
            'contact': 'Contact & Reservation - Ocean Grace'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionTitles[sectionId]) {
                        document.title = sectionTitles[sectionId];
                        updatePageDescription(sectionId);
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) observer.observe(section);
        });
    }

    // Update page description based on section
    function updatePageDescription(sectionId) {
        const descriptions = {
            'hero': 'Welcome to Ocean Grace - Where every bite is a memory and every taste is an adventure.',
            'about': 'Discover our elegant seafood dining experience with stunning ocean views.',
            'features': 'Explore our premium features and exceptional dining services.',
            'menu': 'Savor our signature dishes crafted with the finest ingredients.',
            'contact': 'Make a reservation or contact us for an unforgettable dining experience.'
        };

        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = descriptions[sectionId] || descriptions.hero;
    }

    // Setup dynamic content updates
    function setupDynamicContent() {
        setupLiveTimeDisplay();
        setupTestimonialRotation();
    }

    // Setup live time display
    function setupLiveTimeDisplay() {
        const timeElement = document.createElement('div');
        timeElement.className = 'live-time';
        timeElement.style.cssText = `
            position: fixed;
            top: auto;
            bottom: 100px;
            right: 20px;
            background: rgba(26, 71, 42, 0.9);
            color: white;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 10px;
            font-weight: 600;
            z-index: 999;
            backdrop-filter: blur(8px);
            opacity: 0.6;
            width: auto;
            max-width: 85px;
            text-align: center;
            font-family: 'Courier New', monospace;
            letter-spacing: 0.3px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.1);
            display: inline-block;
            white-space: nowrap;
        `;
        
        document.body.appendChild(timeElement);

        // Hover interactions
        timeElement.addEventListener('mouseenter', () => {
            timeElement.style.opacity = '0.9';
            timeElement.style.transform = 'scale(1.05)';
        });
        
        timeElement.addEventListener('mouseleave', () => {
            timeElement.style.opacity = '0.6';
            timeElement.style.transform = 'scale(1)';
        });

        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            timeElement.textContent = timeString;
        }

        updateTime();
        setInterval(updateTime, 1000);
    }

    // Setup testimonial rotation
    function setupTestimonialRotation() {
        const testimonials = [
            {
                text: "Exceptional dining experience with breathtaking ocean views!",
                author: "Maria Silva",
                rating: 5
            },
            {
                text: "The seafood here is absolutely divine. Highly recommended!",
                author: "James Wilson",
                rating: 5
            },
            {
                text: "Perfect atmosphere for a romantic dinner by the sea.",
                author: "Emma Thompson",
                rating: 5
            }
        ];

        let currentTestimonial = 0;

        // Create testimonial container if not exists
        let testimonialContainer = document.querySelector('.testimonial-container');
        if (!testimonialContainer) {
            testimonialContainer = document.createElement('div');
            testimonialContainer.className = 'testimonial-container';
            testimonialContainer.style.cssText = `
                position: fixed;
                bottom: 100px;
                left: 20px;
                max-width: 300px;
                background: white;
                padding: 20px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 1000;
                transform: translateX(-120%);
                transition: transform 0.4s ease;
            `;
            document.body.appendChild(testimonialContainer);
        }

        function updateTestimonial() {
            const testimonial = testimonials[currentTestimonial];
            const stars = '⭐'.repeat(testimonial.rating);
            
            testimonialContainer.innerHTML = `
                <div style="margin-bottom: 10px; font-size: 14px; line-height: 1.4; color: #2d3748;">
                    "${testimonial.text}"
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <small style="color: #1a472a; font-weight: 600;">- ${testimonial.author}</small>
                    <span style="font-size: 12px;">${stars}</span>
                </div>
            `;
            
            // Show testimonial
            testimonialContainer.style.transform = 'translateX(0)';
            
            // Hide after 4 seconds
            setTimeout(() => {
                testimonialContainer.style.transform = 'translateX(-120%)';
            }, 4000);
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }

        // Show first testimonial after page load
        setTimeout(updateTestimonial, 3000);
        // Rotate testimonials every 8 seconds
        setInterval(updateTestimonial, 8000);
    }

    // Setup interactive elements
    function setupInteractiveElements() {
        setupReservationSystem();
        setupMenuPreview();
        setupImageLightbox();
        setupContactForm();
        setupNewsletterSignup();
    }

    // Setup reservation system
    function setupReservationSystem() {
        // Remove JavaScript event listeners for reserve buttons
        // Let HTML href handle navigation to reservation.html
        const reserveButtons = document.querySelectorAll('#reserve-btn, .frame');
        
        reserveButtons.forEach(button => {
            // Remove any existing click event listeners by cloning the element
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Ensure the button uses HTML navigation instead of JavaScript
            const link = newButton.querySelector('a');
            if (link) {
                // Make sure the link works normally without JavaScript interference
                link.style.pointerEvents = 'auto';
                link.style.cursor = 'pointer';
            }
        });
    }

    // Show reservation modal
    function showReservationModal() {
        const modal = document.createElement('div');
        modal.className = 'reservation-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="reservation-form-container">
                <button class="modal-close">&times;</button>
                <h2>Reserve Your Table</h2>
                <p>Book your unforgettable dining experience at Ocean Grace</p>
                <form class="reservation-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="guest-name">Full Name *</label>
                            <input type="text" id="guest-name" required placeholder="Your name">
                        </div>
                        <div class="form-group">
                            <label for="guest-phone">Phone *</label>
                            <input type="tel" id="guest-phone" required placeholder="+1 (555) 123-4567">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="guest-email">Email *</label>
                        <input type="email" id="guest-email" required placeholder="your.email@example.com">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="reservation-date">Date *</label>
                            <input type="date" id="reservation-date" required>
                        </div>
                        <div class="form-group">
                            <label for="reservation-time">Time *</label>
                            <select id="reservation-time" required>
                                <option value="">Select time</option>
                                <option value="17:00">5:00 PM</option>
                                <option value="17:30">5:30 PM</option>
                                <option value="18:00">6:00 PM</option>
                                <option value="18:30">6:30 PM</option>
                                <option value="19:00">7:00 PM</option>
                                <option value="19:30">7:30 PM</option>
                                <option value="20:00">8:00 PM</option>
                                <option value="20:30">8:30 PM</option>
                                <option value="21:00">9:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="party-size">Party Size *</label>
                            <select id="party-size" required>
                                <option value="">Select size</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5">5+ Guests</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="occasion">Occasion</label>
                            <select id="occasion">
                                <option value="">Select occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="date">Date Night</option>
                                <option value="business">Business</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="special-requests">Special Requests</label>
                        <textarea id="special-requests" rows="3" placeholder="Any dietary restrictions, special seating preferences, or other requests..."></textarea>
                    </div>
                    <button type="submit" class="submit-reservation">Confirm Reservation</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        addReservationFormStyles();
        
        // Set minimum date to today
        const dateInput = modal.querySelector('#reservation-date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        
        // Event listeners
        modal.querySelector('.modal-close').addEventListener('click', closeReservationModal);
        modal.querySelector('.modal-backdrop').addEventListener('click', closeReservationModal);
        modal.querySelector('.reservation-form').addEventListener('submit', handleReservationSubmit);
        
        // Auto-focus first input
        setTimeout(() => {
            modal.querySelector('#guest-name').focus();
        }, 300);
        
        function closeReservationModal() {
            modal.remove();
            document.body.style.overflow = '';
        }
        
        function handleReservationSubmit(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const reservationData = Object.fromEntries(formData);
            
            // Validate required fields
            const requiredFields = ['guest-name', 'guest-phone', 'guest-email', 'reservation-date', 'reservation-time', 'party-size'];
            const missingFields = requiredFields.filter(field => !reservationData[field]);
            
            if (missingFields.length > 0) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Show processing notification
            showNotification('Processing your reservation...', 'info');
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Reservation confirmed! We will contact you shortly to finalize details.', 'success');
                closeReservationModal();
                
                // Send confirmation email (simulated)
                setTimeout(() => {
                    showNotification('Confirmation email sent to ' + reservationData['guest-email'], 'info');
                }, 2000);
            }, 2000);
        }
    }

    // Add reservation form styles
    function addReservationFormStyles() {
        if (!document.getElementById('reservation-form-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'reservation-form-styles';
            styleSheet.textContent = `
                .reservation-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: modalFadeIn 0.3s ease;
                }
                
                @keyframes modalFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .modal-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    cursor: pointer;
                }
                
                .reservation-form-container {
                    background: white;
                    padding: 30px;
                    border-radius: 16px;
                    max-width: 600px;
                    width: 95%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
                    animation: modalSlideUp 0.4s ease;
                }
                
                @keyframes modalSlideUp {
                    from { transform: translateY(50px) scale(0.9); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }
                
                .reservation-form-container h2 {
                    color: #1a472a;
                    margin-bottom: 10px;
                    text-align: center;
                    font-size: 28px;
                    font-weight: 700;
                }
                
                .reservation-form-container p {
                    text-align: center;
                    color: #4a5568;
                    margin-bottom: 25px;
                }
                
                .form-row {
                    display: flex;
                    gap: 15px;
                }
                
                .form-group {
                    margin-bottom: 20px;
                    flex: 1;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: #2d3748;
                    font-weight: 600;
                    font-size: 14px;
                }
                
                .form-group input,
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                
                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #1a472a;
                    box-shadow: 0 0 0 3px rgba(26, 71, 42, 0.1);
                }
                
                .form-group textarea {
                    resize: vertical;
                    min-height: 80px;
                }
                
                .submit-reservation {
                    width: 100%;
                    background: linear-gradient(135deg, #1a472a, #243352);
                    color: white;
                    border: none;
                    padding: 15px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .submit-reservation:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(26, 71, 42, 0.3);
                }
                
                .modal-close {
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    background: none;
                    border: none;
                    font-size: 28px;
                    cursor: pointer;
                    color: #666;
                    padding: 5px;
                    line-height: 1;
                }
                
                .modal-close:hover {
                    color: #1a472a;
                }
                
                @media (max-width: 768px) {
                    .form-row {
                        flex-direction: column;
                        gap: 0;
                    }
                    
                    .reservation-form-container {
                        padding: 20px;
                        margin: 10px;
                    }
                }
            `;
            document.head.appendChild(styleSheet);
        }
    }

    // Setup menu preview
    function setupMenuPreview() {
        const menuItems = document.querySelectorAll('.feature-card, .overlap-group-wrapper');
        
        menuItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                showMenuPreview(index);
            });
            
            item.style.cursor = 'pointer';
            item.setAttribute('title', 'Click to view details');
        });
    }

    // Show menu preview
    function showMenuPreview(index) {
        const menuData = [
            {
                name: "Grilled Lobster Thermidor",
                price: "$45",
                description: "Fresh lobster grilled to perfection with garlic butter and herbs",
                image: "/api/placeholder/300/200"
            },
            {
                name: "Pan-Seared Salmon",
                price: "$32",
                description: "Atlantic salmon with lemon dill sauce and seasonal vegetables",
                image: "/api/placeholder/300/200"
            },
            {
                name: "Seafood Paella",
                price: "$38",
                description: "Traditional Spanish rice dish with mixed seafood and saffron",
                image: "/api/placeholder/300/200"
            }
        ];
        
        const item = menuData[index] || menuData[0];
        showNotification(`
            <div style="display: flex; align-items: center; gap: 15px;">
                <div>
                    <strong>${item.name}</strong> - ${item.price}<br>
                    <small>${item.description}</small>
                </div>
            </div>
        `, 'info');
    }

    // Setup image lightbox
    function setupImageLightbox() {
        const images = document.querySelectorAll('img:not([src*=".svg"])');
        
        images.forEach(img => {
            img.addEventListener('click', () => {
                openImageLightbox(img);
            });
            
            img.style.cursor = 'pointer';
            img.setAttribute('title', 'Click to enlarge');
        });
    }

    // Open image lightbox
    function openImageLightbox(img) {
        const lightbox = document.createElement('div');
        lightbox.className = 'image-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-backdrop"></div>
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt || 'Ocean Grace Image'}" class="lightbox-image">
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        
        const lightboxStyles = `
            .image-lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease;
            }
            
            .lightbox-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                cursor: pointer;
            }
            
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                z-index: 1;
            }
            
            .lightbox-image {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                border-radius: 12px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            }
            
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 30px;
                cursor: pointer;
                padding: 5px;
            }
        `;
        
        if (!document.getElementById('lightbox-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'lightbox-styles';
            styleSheet.textContent = lightboxStyles;
            document.head.appendChild(styleSheet);
        }
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Event listeners
        lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        document.addEventListener('keydown', handleLightboxKeydown);
        
        function closeLightbox() {
            lightbox.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleLightboxKeydown);
        }
        
        function handleLightboxKeydown(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    }

    // Setup contact form
    function setupContactForm() {
        // Create floating contact button
        const contactButton = document.createElement('button');
        contactButton.className = 'floating-contact-btn';
        contactButton.innerHTML = '💬';
        contactButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1a472a, #243352);
            color: white;
            border: none;
            font-size: 24px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(contactButton);
        
        contactButton.addEventListener('click', () => {
            showContactForm();
        });
        
        contactButton.addEventListener('mouseenter', () => {
            contactButton.style.transform = 'scale(1.1)';
        });
        
        contactButton.addEventListener('mouseleave', () => {
            contactButton.style.transform = 'scale(1)';
        });
    }

    // Show contact form
    function showContactForm() {
        showNotification(`
            <div>
                <strong>Contact Ocean Grace</strong><br>
                📞 Phone: (555) 123-4567<br>
                📧 Email: info@oceangrace.co<br>
                📍 123 Coastal Drive, Oceanview<br>
                <small>Click Reserve Now for table bookings</small>
            </div>
        `, 'info');
    }

    // Setup newsletter signup
    function setupNewsletterSignup() {
        // Show newsletter popup after some time
        setTimeout(() => {
            if (!localStorage.getItem('newsletter-shown')) {
                showNewsletterSignup();
                localStorage.setItem('newsletter-shown', 'true');
            }
        }, 30000); // Show after 30 seconds
    }

    // Show newsletter signup
    function showNewsletterSignup() {
        const newsletter = document.createElement('div');
        newsletter.className = 'newsletter-popup';
        newsletter.innerHTML = `
            <div class="newsletter-content">
                <button class="newsletter-close">&times;</button>
                <h3>Stay Updated with Ocean Grace</h3>
                <p>Get exclusive offers, new menu updates, and event invitations!</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email" required>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        `;
        
        newsletter.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            z-index: 10000;
            max-width: 300px;
            transform: translateX(120%);
            transition: transform 0.4s ease;
        `;
        
        const styles = `
            .newsletter-content h3 {
                color: #1a472a;
                margin-bottom: 10px;
                font-size: 18px;
            }
            
            .newsletter-content p {
                color: #4a5568;
                margin-bottom: 15px;
                font-size: 14px;
            }
            
            .newsletter-form {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .newsletter-form input {
                padding: 10px;
                border: 2px solid #e2e8f0;
                border-radius: 6px;
                font-size: 14px;
            }
            
            .newsletter-form button {
                background: #1a472a;
                color: white;
                border: none;
                padding: 10px;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 600;
            }
            
            .newsletter-close {
                position: absolute;
                top: 10px;
                right: 15px;
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                color: #666;
            }
        `;
        
        if (!document.getElementById('newsletter-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'newsletter-styles';
            styleSheet.textContent = styles;
            document.head.appendChild(styleSheet);
        }
        
        document.body.appendChild(newsletter);
        
        // Show newsletter
        setTimeout(() => {
            newsletter.style.transform = 'translateX(0)';
        }, 100);
        
        // Event listeners
        newsletter.querySelector('.newsletter-close').addEventListener('click', () => {
            newsletter.style.transform = 'translateX(120%)';
            setTimeout(() => newsletter.remove(), 400);
        });
        
        newsletter.querySelector('.newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input').value;
            showNotification('Thank you for subscribing! Welcome to Ocean Grace family.', 'success');
            newsletter.style.transform = 'translateX(120%)';
            setTimeout(() => newsletter.remove(), 400);
        });
    }

    // Setup form handling
    function setupFormHandling() {
        // Handle all form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('ocean-grace-form')) {
                e.preventDefault();
                handleFormSubmission(e.target);
            }
        });
    }

    // Handle form submission
    function handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        showNotification('Processing your request...', 'info');
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you! Your request has been received.', 'success');
            form.reset();
        }, 1500);
    }

    // Setup scroll effects
    function setupScrollEffects() {
        setupParallaxScrolling();
        setupProgressIndicator();
        setupScrollToTop();
    }

    // Setup parallax scrolling
    function setupParallaxScrolling() {
        const parallaxElements = document.querySelectorAll('.group, .pexels-patrick-leung');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }, { passive: true });
    }

    // Setup progress indicator
    function setupProgressIndicator() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #1a472a, #243352);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = Math.max(0, Math.min(100, scrolled)) + '%';
        }, { passive: true });
    }

    // Setup scroll to top
    function setupScrollToTop() {
        const scrollBtn = document.querySelector('.scroll-indicator');
        if (scrollBtn) {
            scrollBtn.addEventListener('dblclick', () => {
                // Double click for smooth scroll with animation
                document.body.style.scrollBehavior = 'smooth';
                window.scrollTo(0, 0);
                setTimeout(() => {
                    document.body.style.scrollBehavior = '';
                }, 1000);
            });
        }
    }

    // Setup keyboard navigation
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Keyboard shortcuts
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'r':
                        e.preventDefault();
                        // Navigate to reservation page using HTML href
                        window.location.href = 'http://localhost/ocean-grace/reservation.html';
                        break;
                    case 'm':
                        e.preventDefault();
                        showNotification('Navigate to Menu using navbar links', 'info');
                        break;
                    case 'h':
                        e.preventDefault();
                        showNotification('Navigate to Home using navbar links', 'info');
                        break;
                }
            }
            
            // ESC to close modals
            if (e.key === 'Escape') {
                const modals = document.querySelectorAll('.reservation-modal, .image-lightbox');
                modals.forEach(modal => modal.remove());
                document.body.style.overflow = '';
            }
        });
    }

    // Setup search functionality
    function setupSearchFunctionality() {
        // Create search button
        const searchButton = document.createElement('button');
        searchButton.innerHTML = '🔍';
        searchButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(26, 71, 42, 0.9);
            color: white;
            border: none;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1000;
            font-size: 16px;
            width: 40px;
            height: 40px;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(searchButton);
        
        searchButton.addEventListener('click', () => {
            showSearchModal();
        });
    }

    // Show search modal
    function showSearchModal() {
        const searchModal = document.createElement('div');
        searchModal.className = 'search-modal';
        searchModal.innerHTML = `
            <div class="search-content">
                <input type="text" placeholder="Search menu, reservations, contact..." class="search-input">
                <div class="search-results"></div>
            </div>
        `;
        
        searchModal.style.cssText = `
            position: fixed;
            top: 70px;
            right: 20px;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            z-index: 10001;
            width: 300px;
            max-height: 400px;
            overflow-y: auto;
        `;
        
        document.body.appendChild(searchModal);
        
        const searchInput = searchModal.querySelector('.search-input');
        const searchResults = searchModal.querySelector('.search-results');
        
        searchInput.style.cssText = `
            width: 100%;
            padding: 10px;
            border: 2px solid #e2e8f0;
            border-radius: 6px;
            margin-bottom: 10px;
        `;
        
        searchInput.focus();
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 2) {
                performSearch(query, searchResults);
            } else {
                searchResults.innerHTML = '';
            }
        });
        
        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!searchModal.contains(e.target) && !e.target.closest('.search-modal')) {
                searchModal.remove();
            }
        }, { once: true });
    }

    // Perform search
    function performSearch(query, resultsContainer) {
        const searchData = [
            { title: 'Make Reservation', action: 'reservation', type: 'action' },
            { title: 'View Menu', action: 'menu', type: 'navigation' },
            { title: 'Contact Information', action: 'contact', type: 'info' },
            { title: 'About Ocean Grace', action: 'about', type: 'navigation' },
            { title: 'Seafood Specialties', action: 'features', type: 'navigation' }
        ];
        
        const results = searchData.filter(item => 
            item.title.toLowerCase().includes(query)
        );
        
        resultsContainer.innerHTML = results.map(result => `
            <div class="search-result-item" data-action="${result.action}" style="
                padding: 10px;
                border-bottom: 1px solid #e2e8f0;
                cursor: pointer;
                transition: background 0.3s ease;
            ">
                <div style="font-weight: 600; color: #1a472a;">${result.title}</div>
                <small style="color: #666;">${result.type}</small>
            </div>
        `).join('');
        
        resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.getAttribute('data-action');
                executeSearchAction(action);
                resultsContainer.closest('.search-modal').remove();
            });
            
            item.addEventListener('mouseenter', () => {
                item.style.background = '#f7fafc';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.background = '';
            });
        });
    }

    // Execute search action
    function executeSearchAction(action) {
        switch(action) {
            case 'reservation':
                // Navigate to reservation page using HTML href
                window.location.href = 'http://localhost/ocean-grace/reservation.html';
                break;
            case 'menu':
                showNotification('Navigate to Menu page using the navbar links', 'info');
                break;
            case 'contact':
                showContactForm();
                break;
            case 'about':
                showNotification('Navigate to About section using the navbar links', 'info');
                break;
            case 'features':
                showNotification('Scroll down to view our features', 'info');
                break;
            default:
                showNotification('Feature coming soon!', 'info');
        }
    }

    // Show notification function
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = message;
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6',
            warning: '#f59e0b'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 10001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 350px;
            font-size: 14px;
            line-height: 1.4;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Initialize all animations - gallery style
    function initAnimations() {
        console.log('🌊 Ocean Grace Beranda Animations (Gallery Style) initialized');
        
        injectAnimationStyles();
        setupLoadingAnimation();
        setupTypewriterEffect(); // Initialize typewriter first
        setupScrollAnimations();
        setupFeatureCards();
        setupButtonAnimations();
        setupNavigation();
        setupFooterNavigation(); // Add footer navigation setup
        setupImageAnimations();
        setupScrollIndicator();
        setupDOMManipulation(); // Add DOM manipulation
        
        // Stagger section children after typewriter
        setTimeout(() => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section, index) => {
                setTimeout(() => {
                    staggerChildren(section);
                }, index * 200);
            });
        }, 2000); // Wait for typewriter to start
        
        // Animate footer when it comes into view
        setupFooterIntersectionObserver();
    }

    // Setup footer intersection observer
    function setupFooterIntersectionObserver() {
        const footer = document.querySelector('footer');
        if (footer) {
            const footerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        footer.classList.add('visible');
                        
                        // Trigger footer animations
                        setTimeout(() => {
                            const footerNavItems = footer.querySelectorAll('.footer-nav-item');
                            const socialIcons = footer.querySelectorAll('.social-icon-hover');
                            const footerEmail = footer.querySelector('.footer-email');
                            
                            // Animate navigation items
                            footerNavItems.forEach((item, index) => {
                                item.classList.add(`footer-stagger-${index + 1}`);
                                setTimeout(() => {
                                    item.classList.add('fade-in', 'visible');
                                }, index * 100);
                            });
                            
                            // Animate social icons
                            socialIcons.forEach((icon, index) => {
                                setTimeout(() => {
                                    icon.classList.add('scale-in', 'visible');
                                }, (index * 80) + 400);
                            });
                            
                            // Animate email
                            if (footerEmail) {
                                setTimeout(() => {
                                    footerEmail.classList.add('fade-in', 'visible');
                                }, 800);
                            }
                        }, 200);
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            });
            
            footerObserver.observe(footer);
        }
    }

    // Start animations
    initAnimations();
    
    console.log('🎨 Gallery-style animations loaded for Ocean Grace beranda');
});

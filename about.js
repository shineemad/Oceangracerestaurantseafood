/**
 * Ocean Grace About Us Animations - Gallery Style
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
            /* About Us animations - Gallery style */
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
            
            /* Card hover effects - gallery style */
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
                font-weight: 400;
                display: inline-block;
                margin: 0 5px;
                color: inherit;
            }
            
            .footer-nav-item:hover {
                color: #1a472a;
                transform: translateY(-2px);
                font-weight: 700;
                text-shadow: 0 2px 6px rgba(26, 71, 42, 0.3);
                letter-spacing: 0.5px;
            }
            
            .footer-nav-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(45deg, transparent, rgba(26, 71, 42, 0.08), transparent);
                opacity: 0;
                transition: all 0.4s ease;
                border-radius: 8px;
                z-index: -1;
            }
            
            .footer-nav-item:hover::before {
                opacity: 1;
                transform: scale(1.05);
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
            
            /* Philosophy cards animation */
            .philosophy-card {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .philosophy-card.visible {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            
            .philosophy-card:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
            
            /* Experience items animation */
            .experience-item {
                opacity: 0;
                transform: translateX(-30px);
                transition: all 0.6s ease-out;
            }
            
            .experience-item.visible {
                opacity: 1;
                transform: translateX(0);
            }
            
            .experience-item:hover {
                transform: translateX(10px);
                color: #1a472a;
            }
            
            /* Commitment images animation */
            .commitment-image {
                opacity: 0;
                transform: scale(0.8) rotate(2deg);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .commitment-image.visible {
                opacity: 1;
                transform: scale(1) rotate(0deg);
            }
            
            .commitment-image:hover {
                transform: scale(1.05) rotate(-1deg);
                box-shadow: 0 15px 30px rgba(0,0,0,0.2);
            }
            
            /* Who We Are Here For images fade animation */
            .who-we-are-image {
                opacity: 0;
                transform: translateY(40px);
                transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            
            .who-we-are-image.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .who-we-are-image:hover {
                transform: translateY(-8px) scale(1.03);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                filter: brightness(1.05) contrast(1.05);
            }
            
            /* CTA section animation */
            .cta-animate {
                opacity: 0;
                transform: translateY(50px);
                transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .cta-animate.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
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
                
                .philosophy-card:hover {
                    transform: translateY(-5px) scale(1.01);
                }
                
                .commitment-image:hover {
                    transform: scale(1.02) rotate(-0.5deg);
                }
            }
            
            /* Reduced motion support */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
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
        const mainHeadings = document.querySelectorAll('.headlineutama, .headlineutama-2, .headlineutama-6, .headlineutama-7, .headlineutama-8, .headlineutama-9, .headlineutama-14');
        mainHeadings.forEach((heading, index) => {
            if (index % 2 === 0) {
                heading.classList.add('slide-left');
            } else {
                heading.classList.add('slide-right');
            }
            observer.observe(heading);
        });

        // Animate other headings
        const otherHeadings = document.querySelectorAll('.headlineutama-3, .headlineutama-4, .headlineutama-5, .headlineutama-10, .headlineutama-11, .headlineutama-12, .headlineutama-13');
        otherHeadings.forEach(heading => {
            heading.classList.add('fade-in');
            observer.observe(heading);
        });

        // Animate text content
        const textElements = document.querySelectorAll('.text-wrapper, .p, .text-wrapper-2, .text-wrapper-3, .text-wrapper-4, .text-wrapper-5, .text-wrapper-6, .text-wrapper-12');
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
    }

    // Setup philosophy cards animations
    function setupPhilosophyCards() {
        const philosophyCards = document.querySelectorAll('.overlap-group-wrapper, .overlap-wrapper, .group-9');
        
        philosophyCards.forEach((card, index) => {
            card.classList.add('philosophy-card');
            
            // Stagger card animations
            setTimeout(() => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            addAnimationClass(entry.target, 'visible', index * 200);
                        }
                    });
                }, { threshold: 0.1 });
                
                observer.observe(card);
            }, 300);
        });
    }

    // Setup experience items animations
    function setupExperienceItems() {
        const experienceItems = document.querySelectorAll('.chef-s-exclusive, .text-wrapper-2, .text-wrapper-3, .text-wrapper-4');
        
        experienceItems.forEach((item, index) => {
            item.classList.add('experience-item');
            
            setTimeout(() => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            addAnimationClass(entry.target, 'visible', index * 150);
                        }
                    });
                }, { threshold: 0.1 });
                
                observer.observe(item);
            }, 500);
        });
    }

    // Setup commitment images animations
    function setupCommitmentImages() {
        const commitmentImages = document.querySelectorAll('.pexels-patrick-leung-2, .pexels-patrick-leung-3, .pexels-patrick-leung-4, .pexels-patrick-leung-5');
        
        commitmentImages.forEach((img, index) => {
            img.classList.add('commitment-image');
            
            setTimeout(() => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            addAnimationClass(entry.target, 'visible', index * 100);
                        }
                    });
                }, { threshold: 0.1 });
                
                observer.observe(img);
            }, 700);
        });
    }

    // Setup Who We Are Here For images fade animation
    function setupWhoWeAreImages() {
        // Target images specifically under "Who We Are Here For" section
        const whoWeAreImages = document.querySelectorAll('.experience-section img, .icon-4, [class*="icon"], .overlap-3 img');
        
        whoWeAreImages.forEach((img, index) => {
            // Skip SVG icons but include relevant images
            if (img.src && !img.src.includes('.svg')) {
                img.classList.add('who-we-are-image');
                
                setTimeout(() => {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                // Staggered fade in with longer delays for smoother effect
                                addAnimationClass(entry.target, 'visible', index * 300);
                            }
                        });
                    }, { 
                        threshold: 0.2,
                        rootMargin: '0px 0px -20px 0px'
                    });
                    
                    observer.observe(img);
                }, 1000 + (index * 200)); // Extended initial delay for gradual appearance
            }
        });
        
        // Also target any background images or decorative elements
        const decorativeElements = document.querySelectorAll('.group-10, .overlap-3 > *:not(.headlineutama-6):not(.text-wrapper-5):not(.headlineutama-7):not(.text-wrapper-6)');
        
        decorativeElements.forEach((element, index) => {
            // Check if element contains images or has background image
            const hasImage = element.querySelector('img') || window.getComputedStyle(element).backgroundImage !== 'none';
            
            if (hasImage) {
                element.classList.add('who-we-are-image');
                
                setTimeout(() => {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                addAnimationClass(entry.target, 'visible', index * 400);
                            }
                        });
                    }, { 
                        threshold: 0.15,
                        rootMargin: '0px 0px -30px 0px'
                    });
                    
                    observer.observe(element);
                }, 1200 + (index * 250));
            }
        });
    }

    // Setup button animations - gallery style
    function setupButtonAnimations() {
        const buttons = document.querySelectorAll('.frame');
        
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
        const navItems = document.querySelectorAll('.text-wrapper-7, .text-wrapper-8, .text-wrapper-9, .text-wrapper-10');
        
        navItems.forEach(item => {
            item.classList.add('nav-item');
            
            item.addEventListener('click', function() {
                setActiveNavItem(this);
            });
        });
    }

    // Setup footer navigation
    function setupFooterNavigation() {
        const footerNavItems = document.querySelectorAll('.text-wrapper-13, .text-wrapper-14, .text-wrapper-15, .text-wrapper-16');
        
        footerNavItems.forEach((item, index) => {
            item.classList.add('footer-nav-item');
            
            setTimeout(() => {
                item.classList.add('fade-in');
                addAnimationClass(item, 'visible', index * 100);
            }, 300);
        });
        
        // Animate social icons
        const socialIcons = document.querySelectorAll('.vector, .group-16, .vector-2, .social-icons, .social-icons-2, .social-icons-3');
        socialIcons.forEach((icon, index) => {
            icon.classList.add('social-icon-hover');
            
            setTimeout(() => {
                icon.classList.add('scale-in');
                addAnimationClass(icon, 'visible', index * 80);
            }, 600);
        });
        
        // Animate footer email
        const footerEmail = document.querySelector('.text-wrapper-17');
        if (footerEmail) {
            footerEmail.classList.add('footer-email');
            setTimeout(() => {
                footerEmail.classList.add('fade-in');
                addAnimationClass(footerEmail, 'visible', 100);
            }, 800);
        }
    }

    // Set active navigation item - gallery style
    function setActiveNavItem(activeItem) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
        activeItem.classList.add('active');
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

    // Setup CTA animation
    function setupCTAAnimation() {
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            ctaSection.classList.add('cta-animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        addAnimationClass(entry.target, 'visible', 0);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(ctaSection);
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
                <div class="loading-subtitle">Discover our story...</div>
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

    // ========================================
    // ENHANCED DOM MANIPULATION & EVENT HANDLING
    // ========================================

    // Main DOM manipulation setup for About Us page
    function setupDOMManipulation() {
        updatePageMetadata();
        setupDynamicContent();
        setupInteractiveElements();
        setupFormHandling();
        setupScrollEffects();
        setupKeyboardNavigation();
        setupAdvancedInteractions();
        setupDataBindings();
        setupRealTimeUpdates();
        setupGestureHandling();
        setupAccessibilityFeatures();
        setupPerformanceOptimizations();
    }

    // Update page metadata dynamically
    function updatePageMetadata() {
        const sections = ['hero', 'philosophy', 'experience', 'showcase', 'commitment', 'cta'];
        const sectionTitles = {
            'hero': 'About Ocean Grace - Coastal Dining Excellence',
            'philosophy': 'Our Philosophy - Ocean Grace',
            'experience': 'Special Experience - Ocean Grace',
            'showcase': 'Restaurant Showcase - Ocean Grace',
            'commitment': 'Our Commitment - Ocean Grace',
            'cta': 'Reserve Now - Ocean Grace'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionTitles[sectionId]) {
                        document.title = sectionTitles[sectionId];
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) observer.observe(section);
        });
    }

    // Setup dynamic content updates
    function setupDynamicContent() {
        setupTestimonialRotation();
        setupImageGallery();
    }

    // Setup testimonial rotation
    function setupTestimonialRotation() {
        const testimonials = [
            {
                text: "Ocean Grace offers an unparalleled dining experience with breathtaking ocean views.",
                author: "Sarah Johnson"
            },
            {
                text: "The perfect blend of luxury and coastal charm. Every visit is memorable.",
                author: "Michael Chen"
            },
            {
                text: "Outstanding service and exceptional cuisine in a stunning oceanfront setting.",
                author: "Emily Rodriguez"
            }
        ];

        let currentTestimonial = 0;
        const testimonialElement = document.querySelector('.testimonial-content');
        
        if (testimonialElement) {
            function updateTestimonial() {
                const testimonial = testimonials[currentTestimonial];
                testimonialElement.innerHTML = `
                    <blockquote class="testimonial-text fade-in">
                        "${testimonial.text}"
                    </blockquote>
                    <cite class="testimonial-author slide-up">
                        - ${testimonial.author}
                    </cite>
                `;
                
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            }

            updateTestimonial();
            setInterval(updateTestimonial, 5000);
        }
    }

    // Setup interactive image gallery
    function setupImageGallery() {
        const galleryImages = document.querySelectorAll('.commitment-image, .pexels-patrick-leung-2, .pexels-patrick-leung-3, .pexels-patrick-leung-4, .pexels-patrick-leung-5');
        
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                openImageModal(img, index);
            });
            
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openImageModal(img, index);
                }
            });
            
            img.setAttribute('tabindex', '0');
            img.setAttribute('role', 'button');
            img.setAttribute('aria-label', `View image ${index + 1} in gallery`);
        });
    }

    // Open image modal
    function openImageModal(img, index) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <button class="modal-close" aria-label="Close modal">&times;</button>
                <img src="${img.src}" alt="Gallery image ${index + 1}" class="modal-image">
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        addImageModalStyles();
        
        modal.querySelector('.modal-backdrop').addEventListener('click', closeImageModal);
        modal.querySelector('.modal-close').addEventListener('click', closeImageModal);
        document.addEventListener('keydown', handleModalKeydown);
        
        function closeImageModal() {
            modal.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleModalKeydown);
        }
        
        function handleModalKeydown(e) {
            if (e.key === 'Escape') {
                closeImageModal();
            }
        }
    }

    // Add image modal styles
    function addImageModalStyles() {
        if (!document.getElementById('modal-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'modal-styles';
            styleSheet.textContent = `
                .image-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .modal-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    cursor: pointer;
                }
                
                .modal-content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                    z-index: 1;
                }
                
                .modal-image {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    border-radius: 8px;
                }
                
                .modal-close {
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
            document.head.appendChild(styleSheet);
        }
    }

    // Setup interactive elements
    function setupInteractiveElements() {
        setupPhilosophyInteraction();
        setupExperienceInteraction();
        setupCommitmentInteraction();
        setupCTAInteraction();
    }

    // Philosophy cards interaction
    function setupPhilosophyInteraction() {
        const philosophyCards = document.querySelectorAll('.overlap-group-wrapper, .overlap-wrapper, .group-9');
        
        philosophyCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02) rotateY(5deg)';
                card.style.boxShadow = '0 25px 50px rgba(26, 71, 42, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
            });
            
            card.addEventListener('click', () => {
                showPhilosophyDetail(index);
            });
            
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `Philosophy card ${index + 1}`);
        });
    }

    // Show philosophy detail
    function showPhilosophyDetail(index) {
        const philosophyDetails = [
            {
                title: "Culinary Excellence",
                description: "We source the finest ingredients from local suppliers and international markets to create dishes that celebrate the ocean's bounty."
            },
            {
                title: "Sustainable Practices",
                description: "Our commitment to sustainability guides every decision, from responsible sourcing to eco-friendly operations."
            },
            {
                title: "Guest Experience",
                description: "Every guest is treated as family, with personalized service that creates lasting memories of their Ocean Grace experience."
            }
        ];
        
        const detail = philosophyDetails[index];
        if (detail) {
            showNotification(`<strong>${detail.title}</strong><br>${detail.description}`, 'info');
        }
    }

    // Experience items interaction
    function setupExperienceInteraction() {
        const experienceItems = document.querySelectorAll('.chef-s-exclusive, .text-wrapper-2, .text-wrapper-3, .text-wrapper-4');
        
        experienceItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                item.classList.add('experience-selected');
                showExperienceDetail(index);
                
                setTimeout(() => {
                    item.classList.remove('experience-selected');
                }, 2000);
            });
            
            item.addEventListener('mouseenter', () => {
                item.style.color = '#1a472a';
                item.style.fontWeight = '600';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.color = '';
                item.style.fontWeight = '';
            });
        });
    }

    // Show experience detail
    function showExperienceDetail(index) {
        const experiences = [
            "Private dining with oceanfront views and personalized chef service",
            "Sunset dining experiences with live acoustic performances",
            "Wine pairing dinners featuring coastal cuisine specialties",
            "Special occasion celebrations with custom menu creation"
        ];
        
        if (experiences[index]) {
            showNotification(experiences[index], 'success');
        }
    }

    // Commitment section interaction
    function setupCommitmentInteraction() {
        const commitmentImages = document.querySelectorAll('.pexels-patrick-leung-2, .pexels-patrick-leung-3, .pexels-patrick-leung-4, .pexels-patrick-leung-5');
        
        commitmentImages.forEach((img, index) => {
            img.addEventListener('mouseenter', () => {
                const commitmentTexts = document.querySelectorAll('.headlineutama-10, .headlineutama-11, .headlineutama-12, .headlineutama-13');
                if (commitmentTexts[index]) {
                    commitmentTexts[index].style.color = '#1a472a';
                    commitmentTexts[index].style.fontWeight = '600';
                }
            });
            
            img.addEventListener('mouseleave', () => {
                const commitmentTexts = document.querySelectorAll('.headlineutama-10, .headlineutama-11, .headlineutama-12, .headlineutama-13');
                if (commitmentTexts[index]) {
                    commitmentTexts[index].style.color = '';
                    commitmentTexts[index].style.fontWeight = '';
                }
            });
        });
    }

    // CTA interaction
    function setupCTAInteraction() {
        const ctaButton = document.querySelector('.cta-section .frame');
        
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                handleReservationRequest();
            });
            
            ctaButton.addEventListener('mouseenter', () => {
                ctaButton.style.transform = 'translateY(-5px) scale(1.05)';
                ctaButton.style.boxShadow = '0 20px 40px rgba(26, 71, 42, 0.3)';
            });
            
            ctaButton.addEventListener('mouseleave', () => {
                ctaButton.style.transform = '';
                ctaButton.style.boxShadow = '';
            });
        }
    }

    // Handle reservation request
    function handleReservationRequest() {
        const modal = document.createElement('div');
        modal.className = 'reservation-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="reservation-form-container">
                <button class="modal-close">&times;</button>
                <h2>Make a Reservation</h2>
                <form class="reservation-form">
                    <div class="form-group">
                        <label for="guest-name">Name</label>
                        <input type="text" id="guest-name" required>
                    </div>
                    <div class="form-group">
                        <label for="guest-email">Email</label>
                        <input type="email" id="guest-email" required>
                    </div>
                    <div class="form-group">
                        <label for="guest-phone">Phone</label>
                        <input type="tel" id="guest-phone" required>
                    </div>
                    <div class="form-group">
                        <label for="reservation-date">Date</label>
                        <input type="date" id="reservation-date" required>
                    </div>
                    <div class="form-group">
                        <label for="reservation-time">Time</label>
                        <select id="reservation-time" required>
                            <option value="">Select time</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="21:00">9:00 PM</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="party-size">Party Size</label>
                        <select id="party-size" required>
                            <option value="">Select size</option>
                            <option value="2">2 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="8">8 Guests</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-reservation">Confirm Reservation</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        addReservationFormStyles();
        
        modal.querySelector('.modal-close').addEventListener('click', closeReservationModal);
        modal.querySelector('.modal-backdrop').addEventListener('click', closeReservationModal);
        modal.querySelector('.reservation-form').addEventListener('submit', handleReservationSubmit);
        
        function closeReservationModal() {
            modal.remove();
            document.body.style.overflow = '';
        }
        
        function handleReservationSubmit(e) {
            e.preventDefault();
            showNotification('Processing your reservation...', 'info');
            setTimeout(() => {
                showNotification('Reservation confirmed! We will contact you shortly.', 'success');
                closeReservationModal();
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
                }
                
                .reservation-form-container {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    max-width: 500px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }
                
                .reservation-form-container h2 {
                    color: #1a472a;
                    margin-bottom: 20px;
                    text-align: center;
                }
                
                .form-group {
                    margin-bottom: 15px;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    color: #2d3748;
                    font-weight: 500;
                }
                
                .form-group input,
                .form-group select {
                    width: 100%;
                    padding: 10px;
                    border: 2px solid #e2e8f0;
                    border-radius: 6px;
                    font-size: 14px;
                    transition: border-color 0.3s ease;
                }
                
                .form-group input:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: #1a472a;
                }
                
                .submit-reservation {
                    width: 100%;
                    background: linear-gradient(135deg, #1a472a, #243352);
                    color: white;
                    border: none;
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .submit-reservation:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(26, 71, 42, 0.3);
                }
            `;
            document.head.appendChild(styleSheet);
        }
    }

    // Setup form handling
    function setupFormHandling() {
        setupFeedbackForms();
    }

    // Setup feedback forms
    function setupFeedbackForms() {
        const feedbackButton = document.createElement('button');
        feedbackButton.className = 'feedback-btn';
        feedbackButton.textContent = '💬 Feedback';
        feedbackButton.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: linear-gradient(135deg, #1a472a, #243352);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(feedbackButton);
        
        feedbackButton.addEventListener('click', () => {
            showFeedbackForm();
        });
        
        feedbackButton.addEventListener('mouseenter', () => {
            feedbackButton.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        feedbackButton.addEventListener('mouseleave', () => {
            feedbackButton.style.transform = '';
        });
    }

    // Show feedback form
    function showFeedbackForm() {
        showNotification('Thank you for your interest in providing feedback!', 'info');
    }

    // Setup scroll effects
    function setupScrollEffects() {
        setupProgressIndicator();
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
            transition: width 0.3s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Setup keyboard navigation
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'r' && e.ctrlKey && e.shiftKey) {
                e.preventDefault();
                handleReservationRequest();
            }
        });
    }

    // Show notification
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
            max-width: 300px;
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
        }, 4000);
    }

    // Initialize all animations - gallery style
    function initAnimations() {
        console.log('🌊 Ocean Grace About Us Animations (Gallery Style) initialized');
        
        injectAnimationStyles();
        setupLoadingAnimation();
        setupScrollAnimations();
        setupPhilosophyCards();
        setupExperienceItems();
        setupCommitmentImages();
        setupWhoWeAreImages(); // Add Who We Are images animation
        setupButtonAnimations();
        setupNavigation();
        setupFooterNavigation();
        setupImageAnimations();
        setupCTAAnimation();
        setupScrollIndicator();
        setupDOMManipulation(); // Add DOM manipulation
        
        // Stagger section children
        setTimeout(() => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section, index) => {
                setTimeout(() => {
                    staggerChildren(section);
                }, index * 200);
            });
        }, 1500);
    }

    // ========================================
    // ADVANCED DOM MANIPULATION FEATURES
    // ========================================

    // Setup advanced interactions
    function setupAdvancedInteractions() {
        setupDragAndDropFeatures();
        setupVoiceCommands();
        setupInstantSearch();
        setupLiveFiltering();
        setupDataVisualization();
        setupSectionToggling();
        setupInteractiveTimeline();
    }

    // Setup drag and drop features for portfolio/gallery items
    function setupDragAndDropFeatures() {
        const draggableElements = document.querySelectorAll('.commitment-image, .who-we-are-image');
        
        draggableElements.forEach(element => {
            element.draggable = true;
            element.addEventListener('dragstart', handleDragStart);
            element.addEventListener('dragend', handleDragEnd);
            
            // Add visual feedback
            element.addEventListener('dragover', handleDragOver);
            element.addEventListener('drop', handleDrop);
        });
        
        function handleDragStart(e) {
            e.dataTransfer.setData('text/plain', '');
            e.target.style.opacity = '0.5';
            e.target.classList.add('dragging');
        }
        
        function handleDragEnd(e) {
            e.target.style.opacity = '';
            e.target.classList.remove('dragging');
        }
        
        function handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }
        
        function handleDrop(e) {
            e.preventDefault();
            showNotification('Image reordered successfully!', 'success');
        }
    }

    // Setup voice commands (experimental)
    function setupVoiceCommands() {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            const voiceButton = document.createElement('button');
            voiceButton.className = 'voice-control';
            voiceButton.innerHTML = '🎤';
            voiceButton.style.cssText = `
                position: fixed;
                bottom: 170px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #1a472a, #243352);
                color: white;
                border: none;
                cursor: pointer;
                font-size: 20px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
                z-index: 1000;
            `;
            
            document.body.appendChild(voiceButton);
            
            voiceButton.addEventListener('click', () => {
                recognition.start();
                voiceButton.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                showNotification('Listening... Say "reserve", "menu", "gallery", or "home"', 'info');
            });

            recognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                handleVoiceCommand(command);
                voiceButton.style.background = 'linear-gradient(135deg, #1a472a, #243352)';
            };

            recognition.onerror = () => {
                voiceButton.style.background = 'linear-gradient(135deg, #1a472a, #243352)';
                showNotification('Voice recognition failed. Please try again.', 'error');
            };
        }
    }

    // Handle voice commands
    function handleVoiceCommand(command) {
        const commands = {
            'reserve': () => handleReservationRequest(),
            'reservation': () => handleReservationRequest(),
            'menu': () => window.location.href = '../Menu/menu.html',
            'gallery': () => window.location.href = '../Gallery/gallery.html',
            'home': () => window.location.href = '../beranda/index.html',
            'scroll up': () => window.scrollTo({ top: 0, behavior: 'smooth' }),
            'scroll down': () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        };

        for (const [key, action] of Object.entries(commands)) {
            if (command.includes(key)) {
                action();
                showNotification(`Command "${key}" executed!`, 'success');
                return;
            }
        }
        
        showNotification('Command not recognized. Try "reserve", "menu", "gallery", or "home"', 'warning');
    }

    // Setup instant search functionality
    function setupInstantSearch() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
            background: white;
            border-radius: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            overflow: hidden;
            width: 300px;
            transition: all 0.3s ease;
            opacity: 0;
            pointer-events: none;
        `;
        
        searchContainer.innerHTML = `
            <input type="text" class="search-input" placeholder="Search Ocean Grace..." style="
                width: 100%;
                border: none;
                padding: 12px 20px;
                font-size: 14px;
                outline: none;
            ">
            <div class="search-results" style="
                max-height: 200px;
                overflow-y: auto;
                border-top: 1px solid #e2e8f0;
                display: none;
            "></div>
        `;
        
        document.body.appendChild(searchContainer);
        
        // Toggle search with Ctrl+K
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }
            if (e.key === 'Escape') {
                hideSearch();
            }
        });
        
        const searchInput = searchContainer.querySelector('.search-input');
        const searchResults = searchContainer.querySelector('.search-results');
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 2) {
                performSearch(query, searchResults);
            } else {
                searchResults.style.display = 'none';
            }
        });
        
        function toggleSearch() {
            if (searchContainer.style.opacity === '1') {
                hideSearch();
            } else {
                showSearch();
            }
        }
        
        function showSearch() {
            searchContainer.style.opacity = '1';
            searchContainer.style.pointerEvents = 'auto';
            searchInput.focus();
        }
        
        function hideSearch() {
            searchContainer.style.opacity = '0';
            searchContainer.style.pointerEvents = 'none';
            searchResults.style.display = 'none';
        }
    }

    // Perform search across page content
    function performSearch(query, resultsContainer) {
        const searchableElements = document.querySelectorAll('h1, h2, h3, p, .text-wrapper, .headlineutama');
        const results = [];
        
        searchableElements.forEach((element, index) => {
            const text = element.textContent.toLowerCase();
            if (text.includes(query)) {
                results.push({
                    element,
                    text: element.textContent.substring(0, 100) + '...',
                    index
                });
            }
        });
        
        if (results.length > 0) {
            resultsContainer.innerHTML = results.map(result => `
                <div class="search-result-item" style="
                    padding: 10px 20px;
                    border-bottom: 1px solid #f1f5f9;
                    cursor: pointer;
                    transition: background 0.2s ease;
                " data-index="${result.index}">
                    ${result.text}
                </div>
            `).join('');
            
            resultsContainer.style.display = 'block';
            
            // Add click handlers
            resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const index = item.dataset.index;
                    const element = results[index].element;
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Highlight element
                    element.style.background = 'rgba(26, 71, 42, 0.1)';
                    setTimeout(() => {
                        element.style.background = '';
                    }, 2000);
                });
                
                item.addEventListener('mouseenter', () => {
                    item.style.background = '#f8fafc';
                });
                
                item.addEventListener('mouseleave', () => {
                    item.style.background = '';
                });
            });
        } else {
            resultsContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: #6b7280;">No results found</div>';
            resultsContainer.style.display = 'block';
        }
    }

    // Setup live filtering for sections
    function setupLiveFiltering() {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-container';
        filterContainer.style.cssText = `
            position: fixed;
            bottom: 220px;
            right: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            padding: 15px;
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            min-width: 200px;
        `;
        
        filterContainer.innerHTML = `
            <h4 style="margin: 0 0 10px 0; color: #1a472a;">Section Filters</h4>
            <label style="display: block; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" checked data-section="philosophy"> Philosophy
            </label>
            <label style="display: block; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" checked data-section="experience"> Experience
            </label>
            <label style="display: block; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" checked data-section="commitment"> Commitment
            </label>
            <label style="display: block; margin-bottom: 8px; cursor: pointer;">
                <input type="checkbox" checked data-section="showcase"> Showcase
            </label>
        `;
        
        document.body.appendChild(filterContainer);
        
        const filterButton = document.createElement('button');
        filterButton.className = 'filter-toggle';
        filterButton.innerHTML = '🔍';
        filterButton.style.cssText = `
            position: fixed;
            bottom: 220px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1a472a, #243352);
            color: white;
            border: none;
            cursor: pointer;
            font-size: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            z-index: 1001;
        `;
        
        document.body.appendChild(filterButton);
        
        let filterVisible = false;
        
        filterButton.addEventListener('click', () => {
            filterVisible = !filterVisible;
            if (filterVisible) {
                filterContainer.style.transform = 'translateX(-70px)';
                filterButton.style.transform = 'translateX(-70px)';
            } else {
                filterContainer.style.transform = 'translateX(100%)';
                filterButton.style.transform = 'translateX(0)';
            }
        });
        
        // Handle filter changes
        filterContainer.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const section = e.target.dataset.section;
                const isChecked = e.target.checked;
                toggleSectionVisibility(section, isChecked);
            }
        });
    }

    // Toggle section visibility
    function toggleSectionVisibility(sectionName, show) {
        const sectionMappings = {
            'philosophy': ['.philosophy-section', '.overlap-group-wrapper'],
            'experience': ['.experience-section', '.chef-s-exclusive'],
            'commitment': ['.commitment-section', '.pexels-patrick-leung-2'],
            'showcase': ['.showcase-section', '.group-10']
        };
        
        const selectors = sectionMappings[sectionName];
        if (selectors) {
            selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    if (show) {
                        element.style.display = '';
                        element.style.opacity = '1';
                    } else {
                        element.style.opacity = '0';
                        setTimeout(() => {
                            if (element.style.opacity === '0') {
                                element.style.display = 'none';
                            }
                        }, 300);
                    }
                });
            });
        }
    }

    // Setup data visualization for restaurant stats
    function setupDataVisualization() {
        const statsData = {
            'Years of Excellence': 15,
            'Happy Customers': 50000,
            'Awards Won': 25,
            'Signature Dishes': 120
        };
        
        const statsContainer = document.createElement('div');
        statsContainer.className = 'stats-visualization';
        statsContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            min-width: 200px;
        `;
        
        statsContainer.innerHTML = `
            <h4 style="margin: 0 0 15px 0; color: #1a472a; text-align: center;">Ocean Grace Stats</h4>
            ${Object.entries(statsData).map(([label, value]) => `
                <div class="stat-item" style="margin-bottom: 12px;">
                    <div style="font-size: 12px; color: #6b7280; margin-bottom: 4px;">${label}</div>
                    <div class="stat-bar" style="
                        background: #e5e7eb;
                        height: 8px;
                        border-radius: 4px;
                        overflow: hidden;
                        position: relative;
                    ">
                        <div class="stat-fill" style="
                            height: 100%;
                            background: linear-gradient(90deg, #1a472a, #243352);
                            width: 0%;
                            transition: width 2s ease;
                            border-radius: 4px;
                        "></div>
                    </div>
                    <div style="font-size: 14px; font-weight: 600; color: #1a472a; margin-top: 4px;">${value.toLocaleString()}</div>
                </div>
            `).join('')}
        `;
        
        document.body.appendChild(statsContainer);
        
        // Show stats on scroll to middle of page
        window.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrollPercent > 0.3 && scrollPercent < 0.8) {
                showStats();
            } else {
                hideStats();
            }
        });
        
        function showStats() {
            statsContainer.style.opacity = '1';
            statsContainer.style.pointerEvents = 'auto';
            
            // Animate bars
            const statFills = statsContainer.querySelectorAll('.stat-fill');
            statFills.forEach((fill, index) => {
                setTimeout(() => {
                    const maxValue = Math.max(...Object.values(statsData));
                    const currentValue = Object.values(statsData)[index];
                    const percentage = (currentValue / maxValue) * 100;
                    fill.style.width = percentage + '%';
                }, index * 200);
            });
        }
        
        function hideStats() {
            statsContainer.style.opacity = '0';
            statsContainer.style.pointerEvents = 'none';
        }
    }

    // Setup section toggling
    function setupSectionToggling() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            // Add toggle button to each section header
            const header = section.querySelector('h1, h2, .headlineutama');
            if (header) {
                const toggleBtn = document.createElement('button');
                toggleBtn.innerHTML = '−';
                toggleBtn.style.cssText = `
                    margin-left: 10px;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background: #1a472a;
                    color: white;
                    border: none;
                    cursor: pointer;
                    font-size: 16px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                `;
                
                header.style.display = 'flex';
                header.style.alignItems = 'center';
                header.appendChild(toggleBtn);
                
                toggleBtn.addEventListener('click', () => {
                    const content = Array.from(section.children).slice(1); // All except header
                    const isCollapsed = toggleBtn.innerHTML === '+';
                    
                    content.forEach(child => {
                        if (isCollapsed) {
                            child.style.display = '';
                            child.style.opacity = '0';
                            setTimeout(() => child.style.opacity = '1', 10);
                        } else {
                            child.style.opacity = '0';
                            setTimeout(() => child.style.display = 'none', 300);
                        }
                    });
                    
                    toggleBtn.innerHTML = isCollapsed ? '−' : '+';
                });
            }
        });
    }

    // Setup content switching - removed tab navigation

    // Setup interactive timeline
    function setupInteractiveTimeline() {
        const timelineData = [
            { year: '2009', event: 'Ocean Grace Founded', description: 'Started as a small coastal restaurant' },
            { year: '2012', event: 'First Award', description: 'Best Seafood Restaurant of the Year' },
            { year: '2015', event: 'Expansion', description: 'Added private dining and event spaces' },
            { year: '2018', event: 'Sustainability Initiative', description: 'Launched eco-friendly practices' },
            { year: '2021', event: 'Digital Innovation', description: 'Introduced online reservations and virtual tours' },
            { year: '2024', event: 'Excellence Continues', description: 'Serving the community with pride' }
        ];
        
        const timeline = document.createElement('div');
        timeline.className = 'interactive-timeline';
        timeline.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            max-width: 80vw;
            overflow-x: auto;
        `;
        
        timeline.innerHTML = `
            <div style="display: flex; gap: 20px; min-width: 600px;">
                ${timelineData.map((item, index) => `
                    <div class="timeline-item" style="
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        min-width: 80px;
                    " data-index="${index}">
                        <div style="
                            width: 12px;
                            height: 12px;
                            background: #1a472a;
                            border-radius: 50%;
                            margin: 0 auto 8px;
                            transition: all 0.3s ease;
                        "></div>
                        <div style="font-size: 12px; font-weight: 600; color: #1a472a;">${item.year}</div>
                        <div style="font-size: 10px; color: #6b7280; margin-top: 4px;">${item.event}</div>
                    </div>
                `).join('')}
            </div>
            <div class="timeline-details" style="
                margin-top: 15px;
                padding-top: 15px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
                display: none;
            ">
                <div class="timeline-description"></div>
            </div>
        `;
        
        document.body.appendChild(timeline);
        
        // Show timeline on certain scroll position
        window.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrollPercent > 0.5) {
                timeline.style.opacity = '1';
                timeline.style.pointerEvents = 'auto';
            } else {
                timeline.style.opacity = '0';
                timeline.style.pointerEvents = 'none';
            }
        });
        
        // Handle timeline item clicks
        timeline.addEventListener('click', (e) => {
            const timelineItem = e.target.closest('.timeline-item');
            if (timelineItem) {
                const index = parseInt(timelineItem.dataset.index);
                const data = timelineData[index];
                
                // Update active state
                timeline.querySelectorAll('.timeline-item').forEach(item => {
                    const dot = item.querySelector('div');
                    dot.style.background = '#1a472a';
                    dot.style.transform = 'scale(1)';
                });
                
                const activeDot = timelineItem.querySelector('div');
                activeDot.style.background = '#ef4444';
                activeDot.style.transform = 'scale(1.5)';
                
                // Show details
                const details = timeline.querySelector('.timeline-details');
                const description = timeline.querySelector('.timeline-description');
                description.innerHTML = `
                    <strong>${data.event} (${data.year})</strong><br>
                    ${data.description}
                `;
                details.style.display = 'block';
            }
        });
    }

    // Setup data bindings for dynamic content
    function setupDataBindings() {
        const restaurantData = {
            name: 'Ocean Grace',
            established: '2009',
            location: 'Coastal Paradise',
            capacity: '120 guests',
            specialties: ['Fresh Seafood', 'Ocean Views', 'Fine Dining'],
            awards: ['Best Seafood 2023', 'Excellence Award 2022', 'Top Restaurant 2021']
        };
        
        // Bind data to elements
        document.querySelectorAll('[data-bind]').forEach(element => {
            const property = element.dataset.bind;
            if (restaurantData[property]) {
                if (Array.isArray(restaurantData[property])) {
                    element.textContent = restaurantData[property].join(', ');
                } else {
                    element.textContent = restaurantData[property];
                }
            }
        });
        
        // Update data in real-time
        window.restaurantData = restaurantData;
        window.updateRestaurantData = (property, value) => {
            restaurantData[property] = value;
            document.querySelectorAll(`[data-bind="${property}"]`).forEach(element => {
                element.textContent = Array.isArray(value) ? value.join(', ') : value;
            });
        };
    }

    // Setup real-time updates
    function setupRealTimeUpdates() {
        // Simulated real-time visitor counter
        let visitorCount = Math.floor(Math.random() * 1000) + 500;
        
        const visitorCounter = document.createElement('div');
        visitorCounter.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            background: rgba(26, 71, 42, 0.9);
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 12px;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        `;
        
        visitorCounter.innerHTML = `
            <div>👥 Online Visitors</div>
            <div style="font-size: 16px; font-weight: 600; text-align: center;">${visitorCount}</div>
        `;
        
        document.body.appendChild(visitorCounter);
        
        // Update visitor count periodically
        setInterval(() => {
            const change = Math.floor(Math.random() * 10) - 5; // -5 to +5
            visitorCount = Math.max(1, visitorCount + change);
            visitorCounter.querySelector('div:last-child').textContent = visitorCount;
        }, 5000);
        
        // Simulated reservation updates
        const reservationAlerts = [
            'New reservation from Sarah J.',
            'Table for 4 confirmed',
            'VIP booking received',
            'Special dietary request noted'
        ];
        
        let alertIndex = 0;
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance
                showNotification(reservationAlerts[alertIndex], 'info');
                alertIndex = (alertIndex + 1) % reservationAlerts.length;
            }
        }, 15000);
    }

    // Setup gesture handling for mobile
    function setupGestureHandling() {
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleGesture();
        }, { passive: true });
        
        function handleGesture() {
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            const minSwipeDistance = 100;
            
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal swipe
                if (Math.abs(deltaX) > minSwipeDistance) {
                    if (deltaX > 0) {
                        // Swipe right - go to previous page
                        showNotification('Swipe right detected - Previous page', 'info');
                    } else {
                        // Swipe left - go to next page
                        showNotification('Swipe left detected - Next page', 'info');
                    }
                }
            } else {
                // Vertical swipe
                if (Math.abs(deltaY) > minSwipeDistance) {
                    if (deltaY > 0) {
                        // Swipe down - scroll to top
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        // Swipe up - scroll to bottom
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }
                }
            }
        }
    }

    // Setup accessibility features
    function setupAccessibilityFeatures() {
        // High contrast mode toggle
        const contrastToggle = document.createElement('button');
        contrastToggle.innerHTML = '🌗';
        contrastToggle.setAttribute('aria-label', 'Toggle high contrast mode');
        contrastToggle.style.cssText = `
            position: fixed;
            bottom: 270px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1a472a, #243352);
            color: white;
            border: none;
            cursor: pointer;
            font-size: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            z-index: 1000;
        `;
        
        document.body.appendChild(contrastToggle);
        
        let highContrast = false;
        contrastToggle.addEventListener('click', () => {
            highContrast = !highContrast;
            document.body.style.filter = highContrast ? 'contrast(150%) brightness(120%)' : '';
            showNotification(`High contrast mode ${highContrast ? 'enabled' : 'disabled'}`, 'info');
        });
        
        // Font size controls
        const fontControls = document.createElement('div');
        fontControls.style.cssText = `
            position: fixed;
            bottom: 320px;
            right: 30px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            z-index: 1000;
        `;
        
        fontControls.innerHTML = `
            <button class="font-size-btn" data-action="increase" style="
                width: 50px;
                height: 30px;
                border: none;
                border-radius: 15px;
                background: linear-gradient(135deg, #1a472a, #243352);
                color: white;
                cursor: pointer;
                font-size: 16px;
            ">A+</button>
            <button class="font-size-btn" data-action="decrease" style="
                width: 50px;
                height: 30px;
                border: none;
                border-radius: 15px;
                background: linear-gradient(135deg, #1a472a, #243352);
                color: white;
                cursor: pointer;
                font-size: 12px;
            ">A-</button>
        `;
        
        document.body.appendChild(fontControls);
        
        let fontSize = 16;
        fontControls.addEventListener('click', (e) => {
            if (e.target.classList.contains('font-size-btn')) {
                const action = e.target.dataset.action;
                if (action === 'increase' && fontSize < 24) {
                    fontSize += 2;
                } else if (action === 'decrease' && fontSize > 12) {
                    fontSize -= 2;
                }
                
                document.body.style.fontSize = fontSize + 'px';
                showNotification(`Font size: ${fontSize}px`, 'info');
            }
        });
        
        // Skip to content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #1a472a;
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
            border-radius: 4px;
            transition: top 0.3s ease;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main content ID if not exists
        const mainContent = document.querySelector('main') || document.querySelector('.div');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
        }
    }

    // Setup performance optimizations
    function setupPerformanceOptimizations() {
        // Lazy loading for images
        const images = document.querySelectorAll('img');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            if (img.src && !img.src.includes('data:')) {
                img.dataset.src = img.src;
                img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                imageObserver.observe(img);
            }
        });
        
        // Throttle scroll events
        let ticking = false;
        const scrollHandlers = [];
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    scrollHandlers.forEach(handler => handler());
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Performance monitor
        if (window.performance && window.performance.memory) {
            const perfMonitor = document.createElement('div');
            perfMonitor.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px;
                border-radius: 8px;
                font-size: 12px;
                font-family: monospace;
                z-index: 1000;
                display: none;
            `;
            
            document.body.appendChild(perfMonitor);
            
            // Toggle performance monitor with Ctrl+Shift+P
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.shiftKey && e.key === 'P') {
                    e.preventDefault();
                    perfMonitor.style.display = perfMonitor.style.display === 'none' ? 'block' : 'none';
                }
            });
            
            // Update performance stats
            setInterval(() => {
                if (perfMonitor.style.display === 'block') {
                    const memory = window.performance.memory;
                    perfMonitor.innerHTML = `
                        Memory Used: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB<br>
                        Memory Limit: ${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB<br>
                        DOM Nodes: ${document.querySelectorAll('*').length}
                    `;
                }
            }, 1000);
        }
    }

    // Initialize all animations - gallery style
    initAnimations();
    
    console.log('🎨 Gallery-style animations loaded for Ocean Grace About Us');
});

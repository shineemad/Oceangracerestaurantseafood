// Ocean Grace Gallery Animations - Following Beranda.html Style
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Animation configuration similar to beranda
    const animationConfig = {
        duration: 800,
        easing: 'ease-out',
        delay: 100,
        threshold: 0.1
    };

    // Utility functions similar to beranda style
    function addAnimationClass(element, className, delay = 0) {
        setTimeout(() => {
            element.classList.add(className);
        }, delay);
    }

    function removeAnimationClass(element, className) {
        element.classList.remove(className);
    }

    // CSS Animation styles injection (beranda style)
    function injectAnimationStyles() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            /* Gallery animations - Beranda style */
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
            
            /* Image hover effects - beranda style */
            .hover-effect {
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .hover-effect:hover {
                transform: translateY(-5px) scale(1.03);
                box-shadow: 0 15px 35px rgba(0,0,0,0.2);
                filter: brightness(1.1);
            }
            
            /* Button animations - beranda style */
            .btn-animate {
                position: relative;
                overflow: hidden;
                transition: all 0.3s ease;
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
            
            /* Navigation effects - beranda style */
            .nav-item {
                position: relative;
                transition: all 0.3s ease;
                cursor: pointer;
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
            }
            
            .nav-item:hover::after,
            .nav-item.active::after {
                width: 100%;
            }
            
            .nav-item:hover {
                color: #1a472a;
                transform: translateY(-1px);
            }
            
            /* Footer navigation - no underline */
            .text-wrapper-4.nav-item::after,
            .text-wrapper-5.nav-item::after,
            .text-wrapper-6.nav-item::after,
            .text-wrapper-7.nav-item::after {
                display: none;
            }
            
            .text-wrapper-4.nav-item:hover::after,
            .text-wrapper-5.nav-item:hover::after,
            .text-wrapper-6.nav-item:hover::after,
            .text-wrapper-7.nav-item:hover::after {
                display: none;
            }
            
            /* Category navigation - no underline */
            .text-wrapper.nav-item::after,
            .headlineutama-2.nav-item::after,
            .headlineutama-3.nav-item::after {
                display: none;
            }
            
            .text-wrapper.nav-item:hover::after,
            .headlineutama-2.nav-item:hover::after,
            .headlineutama-3.nav-item:hover::after {
                display: none;
            }
            
            /* Modal animation - beranda style */
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .modal-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            
            .modal-content {
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
                box-shadow: 0 25px 50px rgba(0,0,0,0.5);
                transform: scale(0.7) rotate(3deg);
                transition: all 0.3s ease;
            }
            
            .modal-overlay.active .modal-content {
                transform: scale(1) rotate(0deg);
            }
            
            /* Scroll indicator - beranda style */
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
            
            /* Loading animation - beranda style */
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
            }
            
            .loading-subtitle {
                font-family: "Inter", sans-serif;
                font-size: 14px;
                opacity: 0.8;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Intersection Observer setup - beranda style
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

        // Animate headings
        const headings = document.querySelectorAll('.headlineutama, .headlineutama-2, .headlineutama-3, .headlineutama-4, .headlineutama-5, .headlineutama-6, .headlineutama-7, .headlineutama-8');
        headings.forEach(heading => {
            heading.classList.add('fade-in');
            observer.observe(heading);
        });

        // Animate text content
        const textElements = document.querySelectorAll('.text-wrapper-2, .text-wrapper-3, .p');
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

    // Image animations - beranda style
    function setupImageAnimations() {
        const images = document.querySelectorAll('img');
        let modal = null;

        images.forEach((img, index) => {
            // Skip SVG icons
            if (img.src.includes('.svg')) return;

            img.classList.add('hover-effect');
            
            // Stagger image loading animation
            setTimeout(() => {
                img.classList.add('scale-in');
                addAnimationClass(img, 'visible', index * 150);
            }, 200);

            // Click to zoom functionality
            img.addEventListener('click', function() {
                if (!modal) {
                    modal = createImageModal();
                }
                showImageModal(modal, this.src);
            });
        });
    }

    // Create modal - beranda style
    function createImageModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        
        modal.addEventListener('click', function() {
            hideImageModal(this);
        });
        
        document.body.appendChild(modal);
        return modal;
    }

    function showImageModal(modal, imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'modal-content';
        
        modal.innerHTML = '';
        modal.appendChild(img);
        modal.classList.add('active');
    }

    function hideImageModal(modal) {
        modal.classList.remove('active');
    }

    // Navigation setup - beranda style
    function setupNavigation() {
        // Header navigation - Use href instead of scroll
        const navItems = document.querySelectorAll('.text-wrapper-9, .text-wrapper-10, .text-wrapper-11, .text-wrapper-12');
        navItems.forEach(item => {
            item.classList.add('nav-item');
            
            // Remove click event listeners - let HTML href handle navigation
            const existingListeners = item.cloneNode(true);
            item.parentNode.replaceChild(existingListeners, item);
            
            // Add hover effects only
            existingListeners.addEventListener('mouseenter', function() {
                this.style.color = '#1a472a';
                this.style.transform = 'translateY(-1px)';
            });
            
            existingListeners.addEventListener('mouseleave', function() {
                this.style.color = '';
                this.style.transform = '';
            });
        });

        // Category navigation - keep scroll behavior for sections within gallery
        const categories = document.querySelectorAll('.text-wrapper, .headlineutama-2, .headlineutama-3');
        categories.forEach(category => {
            category.classList.add('nav-item');
            
            category.addEventListener('click', function() {
                const text = this.textContent.toLowerCase();
                let targetSelector = '';
                
                switch(text) {
                    case 'dish':
                        targetSelector = '.headlineutama-5'; // Scroll to specific heading class
                        break;
                    case 'moments':
                        targetSelector = '.headlineutama-4'; // Scroll to specific heading class
                        break;
                    case 'sunset':
                        targetSelector = '.headlineutama-6'; // Scroll to specific heading class
                        break;
                }
                
                if (targetSelector) {
                    smoothScrollToElement(targetSelector);
                    setActiveCategoryItem(this, categories);
                }
            });
            
            // Add hover effects - font weight instead of underline
            category.addEventListener('mouseenter', function() {
                this.style.color = '#1a472a';
                this.style.fontWeight = 'bold';
                this.style.transform = 'translateY(-1px)';
            });
            
            category.addEventListener('mouseleave', function() {
                this.style.color = '';
                this.style.fontWeight = '';
                this.style.transform = '';
            });
        });

        // Footer navigation - Use href instead of scroll
        const footerNavItems = document.querySelectorAll('.text-wrapper-4, .text-wrapper-5, .text-wrapper-6, .text-wrapper-7');
        footerNavItems.forEach(item => {
            item.classList.add('nav-item');
            
            // Remove click event listeners - let HTML href handle navigation
            const existingListeners = item.cloneNode(true);
            item.parentNode.replaceChild(existingListeners, item);
            
            // Add hover effects only - font weight instead of underline
            existingListeners.addEventListener('mouseenter', function() {
                this.style.color = '#1a472a';
                this.style.fontWeight = 'bold';
                this.style.transform = 'translateY(-1px)';
            });
            
            existingListeners.addEventListener('mouseleave', function() {
                this.style.color = '';
                this.style.fontWeight = '';
                this.style.transform = '';
            });
        });
    }

    // Smooth scroll function - beranda style
    function smoothScrollTo(targetId) {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Enhanced smooth scroll for both ID and class selectors
    function smoothScrollToElement(selector) {
        const target = document.querySelector(selector);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center' // Center the heading in viewport for better visibility
            });
        }
    }

    // Set active navigation item
    function setActiveNavItem(activeItem) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
    }

    function setActiveCategoryItem(activeItem, categoryItems) {
        categoryItems.forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
    }

    // Button animations - beranda style
    function setupButtonAnimations() {
        const buttons = document.querySelectorAll('.frame, .text-wrapper-13');
        buttons.forEach(button => {
            button.classList.add('btn-animate');
        });
    }

    // Scroll indicator - beranda style
    function setupScrollIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = '↑';
        indicator.setAttribute('aria-label', 'Scroll to top');
        
        indicator.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(indicator);

        // Show/hide on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                indicator.classList.add('visible');
            } else {
                indicator.classList.remove('visible');
            }
        });
    }

    // Parallax effect - beranda style
    function setupParallaxEffect() {
        const hero = document.querySelector('.headline-utama');
        if (hero) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.2;
                hero.style.transform = `translate3d(0, ${rate}px, 0)`;
            });
        }
    }

    // Social media animations - beranda style
    function setupSocialAnimations() {
        const socialIcons = document.querySelectorAll('.vector, .group-10, .vector-2, .social-icons, .social-icons-2, .social-icons-3');
        
        socialIcons.forEach(icon => {
            icon.classList.add('hover-effect');
            
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(5deg)';
                this.style.filter = 'brightness(1.2)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.filter = 'brightness(1)';
            });
        });
    }

    // Setup typewriter effect for headlineutama-8
    function setupTypewriterEffect() {
        const targetElement = document.querySelector('.headlineutama-8');
        
        if (targetElement) {
            // Get the full text
            const originalText = targetElement.textContent || targetElement.innerText;
            
            // Clear the content
            targetElement.innerHTML = '';
            targetElement.style.borderRight = '2px solid #1a472a';
            targetElement.style.animation = 'blink-caret 1s step-end infinite';
            
            // Add typewriter CSS if not exists
            if (!document.getElementById('typewriter-styles')) {
                const typewriterStyle = document.createElement('style');
                typewriterStyle.id = 'typewriter-styles';
                typewriterStyle.textContent = `
                    .typewriter-cursor {
                        border-right: 2px solid #1a472a;
                        animation: blink-caret 1s step-end infinite;
                    }
                    
                    @keyframes blink-caret {
                        from, to { border-color: transparent }
                        50% { border-color: #1a472a }
                    }
                    
                    .typewriter-text {
                        overflow: hidden;
                        white-space: nowrap;
                        font-family: inherit;
                        font-size: inherit;
                        font-weight: inherit;
                        color: inherit;
                        line-height: inherit;
                    }
                `;
                document.head.appendChild(typewriterStyle);
            }
            
            let i = 0;
            let currentText = '';
            
            const typeWriter = () => {
                if (i < originalText.length) {
                    const char = originalText.charAt(i);
                    currentText += char;
                    targetElement.textContent = currentText;
                    i++;
                    
                    // Variable speed for more natural typing
                    const delay = char === ' ' ? 50 : (char === ',' || char === '.') ? 300 : 100;
                    setTimeout(typeWriter, delay);
                } else {
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        targetElement.style.borderRight = 'none';
                        targetElement.style.animation = 'none';
                        targetElement.classList.add('typewriter-complete');
                    }, 1000);
                }
            };
            
            // Start typing after loading animation with delay
            setTimeout(typeWriter, 2000);
        }
    }

    // Loading animation - beranda style
    function setupLoadingAnimation() {
        const loader = document.createElement('div');
        loader.className = 'loading-overlay';
        loader.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <div class="loading-text">Ocean Grace Gallery</div>
                <div class="loading-subtitle">Loading beautiful moments...</div>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Hide loader after page load
        window.addEventListener('load', function() {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 1000);
        });
    }

    // Stagger animations for image groups - beranda style
    function setupStaggerAnimations() {
        const imageGroups = [
            document.querySelectorAll('.group-5 img'),
            document.querySelectorAll('.group-3 img'),
            document.querySelectorAll('.group-6 img')
        ];

        imageGroups.forEach(group => {
            group.forEach((img, index) => {
                if (!img.src.includes('.svg')) {
                    img.classList.add('stagger-animation');
                    
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                setTimeout(() => {
                                    entry.target.classList.add('visible');
                                }, index * 200);
                            }
                        });
                    }, { threshold: 0.3 });
                    
                    observer.observe(img);
                }
            });
        });
    }

    // Initialize all animations - beranda style
    function initializeAnimations() {
        injectAnimationStyles();
        setupLoadingAnimation();
        setupTypewriterEffect(); // Add typewriter effect
        setupScrollAnimations();
        setupImageAnimations();
        setupNavigation();
        setupButtonAnimations();
        setupScrollIndicator();
        setupParallaxEffect();
        setupSocialAnimations();
        setupStaggerAnimations();
        setupGalleryEventHandling();
        
        console.log('🌊 Ocean Grace Gallery animations initialized - Beranda style');
    }

    // Enhanced Event Handling for Gallery
    function setupGalleryEventHandling() {
        setupReservationButton();
        setupEmailLink();
        setupKeyboardNavigation();
        setupMobileMenuToggle();
        setupImageGalleryNavigation();
        setupFormValidation();
        setupScrollProgress();
        setupLazyLoading();
        setupAdvancedGalleryFeatures(); // Add new advanced features
        setupInteractiveImageGrid();
        setupDynamicImageFilters();
        setupImagePreloader();
        setupGalleryStats();
        setupImageComments();
        setupImageShare();
        setupFullscreenGallery();
        setupImageComparison();
        setupGallerySearch();
    }

    // Reservation button event handling
    function setupReservationButton() {
        const reserveButtons = document.querySelectorAll('.frame, .text-wrapper-13');
        
        reserveButtons.forEach(button => {
            // Remove JavaScript event listeners - let HTML href handle navigation
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Add hover effects only
            newButton.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
            });
            
            newButton.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
            
            // Ensure the button uses HTML navigation instead of JavaScript
            const link = newButton.querySelector('a');
            if (link) {
                // Make sure the link works normally without JavaScript interference
                link.style.pointerEvents = 'auto';
                link.style.cursor = 'pointer';
            }
            
            // Make focusable for accessibility
            newButton.setAttribute('tabindex', '0');
            newButton.setAttribute('role', 'button');
            newButton.setAttribute('aria-label', 'Make a reservation');
        });
    }

    // Email link handling
    function setupEmailLink() {
        const emailElement = document.querySelector('.text-wrapper-8');
        
        if (emailElement) {
            emailElement.style.cursor = 'pointer';
            emailElement.style.textDecoration = 'underline';
            
            emailElement.addEventListener('click', function() {
                window.location.href = 'mailto:info@oceangrace.co';
            });
            
            emailElement.addEventListener('mouseenter', function() {
                this.style.color = '#1a472a';
            });
            
            emailElement.addEventListener('mouseleave', function() {
                this.style.color = '';
            });
        }
    }

    // Keyboard navigation
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', function(e) {
            switch(e.key) {
                case 'Home':
                    e.preventDefault();
                    smoothScrollTo('gallery-intro');
                    break;
                case 'End':
                    e.preventDefault();
                    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'ArrowUp':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    break;
                case 'ArrowDown':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }
                    break;
                case 'Escape':
                    // Close any open modals
                    const openModal = document.querySelector('.modal-overlay.active');
                    if (openModal) {
                        hideImageModal(openModal);
                    }
                    break;
            }
        });
    }

    // Mobile menu toggle (for responsive design)
    function setupMobileMenuToggle() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-toggle';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 10px;
            
            @media (max-width: 768px) {
                display: block;
            }
        `;
        
        navbar.appendChild(mobileMenuBtn);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            navbar.classList.toggle('mobile-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navbar.classList.contains('mobile-open')) {
                navbar.classList.remove('mobile-open');
            }
        });
    }

    // Image gallery navigation with arrow keys
    function setupImageGalleryNavigation() {
        const images = Array.from(document.querySelectorAll('img')).filter(img => !img.src.includes('.svg'));
        let currentImageIndex = -1;
        
        document.addEventListener('keydown', function(e) {
            const openModal = document.querySelector('.modal-overlay.active');
            if (!openModal) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    currentImageIndex = Math.max(0, currentImageIndex - 1);
                    showImageModal(openModal, images[currentImageIndex].src);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    currentImageIndex = Math.min(images.length - 1, currentImageIndex + 1);
                    showImageModal(openModal, images[currentImageIndex].src);
                    break;
            }
        });
        
        // Set current index when opening modal
        images.forEach((img, index) => {
            img.addEventListener('click', function() {
                currentImageIndex = index;
            });
        });
    }

    // Form validation (for future contact forms)
    function setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const inputs = this.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        showFieldError(input, 'This field is required');
                    } else {
                        clearFieldError(input);
                    }
                });
                
                if (isValid) {
                    submitForm(this);
                }
            });
        });
    }

    // Scroll progress indicator
    function setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #243352, #1a472a);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
        });
    }

    // Lazy loading for images
    function setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, { rootMargin: '50px' });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Show reservation modal
    function showReservationModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay reservation-modal';
        modal.innerHTML = `
            <div class="modal-content reservation-content">
                <button class="modal-close" aria-label="Close modal">&times;</button>
                <h2>Make a Reservation</h2>
                <p>Contact us to reserve your table at Ocean Grace</p>
                <div class="reservation-options">
                    <a href="tel:+1234567890" class="reservation-btn">
                        📞 Call Us
                    </a>
                    <a href="mailto:info@oceangrace.co" class="reservation-btn">
                        ✉️ Email Us
                    </a>
                    <a href="https://wa.me/1234567890" class="reservation-btn" target="_blank">
                        💬 WhatsApp
                    </a>
                </div>
            </div>
        `;
        
        // Add modal styles
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .reservation-modal .modal-content {
                background: white;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
                max-width: 400px;
                position: relative;
            }
            
            .modal-close {
                position: absolute;
                top: 15px;
                right: 20px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #666;
            }
            
            .modal-close:hover {
                color: #000;
            }
            
            .reservation-content h2 {
                font-family: "Playfair Display", serif;
                color: #243352;
                margin-bottom: 15px;
            }
            
            .reservation-content p {
                color: #666;
                margin-bottom: 25px;
            }
            
            .reservation-options {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            .reservation-btn {
                display: block;
                padding: 12px 20px;
                background: linear-gradient(135deg, #243352, #1a472a);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                transition: all 0.3s ease;
            }
            
            .reservation-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
        `;
        
        document.head.appendChild(modalStyles);
        document.body.appendChild(modal);
        
        // Show modal
        setTimeout(() => modal.classList.add('active'), 10);
        
        // Close modal events
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => hideReservationModal(modal));
        
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideReservationModal(modal);
            }
        });
    }

    function hideReservationModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }

    // Form helper functions
    function showFieldError(field, message) {
        clearFieldError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #e74c3c;
            font-size: 12px;
            margin-top: 5px;
        `;
        
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#e74c3c';
    }

    function clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.style.borderColor = '';
    }

    function submitForm(form) {
        // Add loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    // Enhanced social media interactions
    function setupSocialAnimations() {
        const socialIcons = document.querySelectorAll('.vector, .group-10, .vector-2, .social-icons, .social-icons-2, .social-icons-3');
        
        socialIcons.forEach(icon => {
            icon.classList.add('hover-effect');
            icon.style.cursor = 'pointer';
            
            // Add click events for social media
            icon.addEventListener('click', function() {
                const iconClass = this.className;
                let url = '';
                
                if (iconClass.includes('instagram') || iconClass.includes('group-10')) {
                    url = 'https://instagram.com/oceangrace';
                } else if (iconClass.includes('facebook') || iconClass.includes('vector-2')) {
                    url = 'https://facebook.com/oceangrace';
                } else if (iconClass.includes('wa') || iconClass.includes('social-icons')) {
                    url = 'https://wa.me/1234567890';
                } else if (iconClass.includes('tiktok') || iconClass.includes('social-icons-2')) {
                    url = 'https://tiktok.com/@oceangrace';
                } else if (iconClass.includes('yt') || iconClass.includes('social-icons-3')) {
                    url = 'https://youtube.com/oceangrace';
                } else if (iconClass.includes('vector') && !iconClass.includes('vector-2')) {
                    // Location icon - show address
                    alert('Ocean Grace Restaurant\n123 Seaside Avenue\nCoastal City, CC 12345');
                    return;
                }
                
                if (url) {
                    window.open(url, '_blank');
                }
            });
            
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(5deg)';
                this.style.filter = 'brightness(1.2)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.filter = 'brightness(1)';
            });
        });
    }

    // Advanced Gallery Features
    function setupAdvancedGalleryFeatures() {
        setupImageMagnifier();
        setupImageRotation();
        setupImageBrightness();
        setupImageTooltips();
        setupImageFavorites();
        setupImageDownload();
        setupImageSlideshow();
        setupImageZoom();
    }

    // Interactive Image Grid
    function setupInteractiveImageGrid() {
        const images = document.querySelectorAll('img:not([src*=".svg"])');
        
        images.forEach((img, index) => {
            // Add image metadata
            img.setAttribute('data-image-id', index);
            img.setAttribute('data-category', getImageCategory(img));
            
            // Double click for fullscreen
            img.addEventListener('dblclick', function() {
                openFullscreenImage(this);
            });
            
            // Right click for context menu
            img.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                showImageContextMenu(e, this);
            });
            
            // Mouse wheel for zoom
            img.addEventListener('wheel', function(e) {
                e.preventDefault();
                const delta = e.deltaY > 0 ? 0.9 : 1.1;
                zoomImage(this, delta);
            });
            
            // Touch events for mobile
            setupTouchEvents(img);
        });
    }

    // Dynamic Image Filters
    function setupDynamicImageFilters() {
        createFilterControls();
        
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                applyImageFilter(filter);
                updateActiveFilter(this);
            });
        });
    }

    // Create Filter Controls
    function createFilterControls() {
        const filtersContainer = document.createElement('div');
        filtersContainer.className = 'image-filters';
        filtersContainer.innerHTML = `
            <div class="filter-controls">
                <h3>🎨 Image Filters</h3>
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="dish">🍽️ Dishes</button>
                <button class="filter-btn" data-filter="moments">📸 Moments</button>
                <button class="filter-btn" data-filter="sunset">🌅 Sunset</button>
                <button class="filter-btn" data-filter="sepia">🟤 Sepia</button>
                <button class="filter-btn" data-filter="bw">⚫ B&W</button>
                <button class="filter-btn" data-filter="vintage">📷 Vintage</button>
            </div>
        `;
        
        // Add filter styles
        const filterStyles = document.createElement('style');
        filterStyles.textContent = `
            .image-filters {
                position: fixed;
                top: 120px;
                left: 20px;
                background: rgba(255, 255, 255, 0.95);
                padding: 20px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 1001;
                backdrop-filter: blur(10px);
                transform: translateX(-120%);
                transition: transform 0.3s ease;
            }
            
            .image-filters.active {
                transform: translateX(0);
            }
            
            .filter-controls h3 {
                margin: 0 0 15px 0;
                color: #1a472a;
                font-size: 16px;
            }
            
            .filter-btn {
                display: block;
                width: 100%;
                margin: 5px 0;
                padding: 8px 12px;
                background: #f8f9fa;
                border: 2px solid transparent;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 14px;
                text-align: left;
            }
            
            .filter-btn:hover {
                background: #e9ecef;
                border-color: #1a472a;
            }
            
            .filter-btn.active {
                background: #1a472a;
                color: white;
            }
        `;
        document.head.appendChild(filterStyles);
        
        document.body.appendChild(filtersContainer);
        
        // Toggle filters with F key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'f' || e.key === 'F') {
                filtersContainer.classList.toggle('active');
            }
        });
    }

    // Image Preloader
    function setupImagePreloader() {
        const images = document.querySelectorAll('img[src*=".jpg"], img[src*=".png"]');
        let loadedCount = 0;
        
        const preloader = document.createElement('div');
        preloader.className = 'image-preloader';
        preloader.innerHTML = `
            <div class="preloader-content">
                <div class="preloader-spinner"></div>
                <div class="preloader-text">Loading Gallery... <span id="load-progress">0</span>%</div>
            </div>
        `;
        
        const preloaderStyles = document.createElement('style');
        preloaderStyles.textContent = `
            .image-preloader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(26, 71, 42, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10001;
                color: white;
                text-align: center;
            }
            
            .preloader-spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255,255,255,0.3);
                border-top: 3px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
        `;
        document.head.appendChild(preloaderStyles);
        document.body.appendChild(preloader);
        
        images.forEach(img => {
            img.addEventListener('load', function() {
                loadedCount++;
                const progress = Math.round((loadedCount / images.length) * 100);
                document.getElementById('load-progress').textContent = progress;
                
                if (loadedCount === images.length) {
                    setTimeout(() => {
                        preloader.style.opacity = '0';
                        setTimeout(() => preloader.remove(), 500);
                    }, 500);
                }
            });
        });
    }

    // Gallery Stats
    function setupGalleryStats() {
        const statsPanel = document.createElement('div');
        statsPanel.className = 'gallery-stats';
        statsPanel.innerHTML = `
            <div class="stats-content">
                <h3>📊 Gallery Stats</h3>
                <div class="stat-item">🖼️ Total Images: <span id="total-images">0</span></div>
                <div class="stat-item">👁️ Views: <span id="view-count">0</span></div>
                <div class="stat-item">❤️ Favorites: <span id="favorite-count">0</span></div>
                <div class="stat-item">⬇️ Downloads: <span id="download-count">0</span></div>
            </div>
        `;
        
        const statsStyles = document.createElement('style');
        statsStyles.textContent = `
            .gallery-stats {
                position: fixed;
                bottom: 100px;
                left: 20px;
                background: rgba(36, 51, 82, 0.95);
                color: white;
                padding: 15px;
                border-radius: 10px;
                font-size: 12px;
                z-index: 1000;
                min-width: 150px;
                backdrop-filter: blur(10px);
            }
            
            .gallery-stats h3 {
                margin: 0 0 10px 0;
                font-size: 14px;
                color: #fff;
            }
            
            .stat-item {
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
            }
        `;
        document.head.appendChild(statsStyles);
        document.body.appendChild(statsPanel);
        
        updateGalleryStats();
    }

    // Image Comments System
    function setupImageComments() {
        const images = document.querySelectorAll('img:not([src*=".svg"])');
        
        images.forEach(img => {
            img.addEventListener('click', function() {
                if (event.shiftKey) {
                    showImageComments(this);
                }
            });
        });
    }

    // Image Share Feature
    function setupImageShare() {
        const shareButton = document.createElement('button');
        shareButton.className = 'share-gallery-btn';
        shareButton.innerHTML = '📤 Share Gallery';
        shareButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 80px;
            background: linear-gradient(135deg, #1a472a, #243352);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        shareButton.addEventListener('click', function() {
            shareGallery();
        });
        
        shareButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });
        
        shareButton.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        document.body.appendChild(shareButton);
    }

    // Fullscreen Gallery
    function setupFullscreenGallery() {
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.className = 'fullscreen-btn';
        fullscreenBtn.innerHTML = '🔍 View Mode';
        fullscreenBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 200px;
            background: rgba(0,0,0,0.7);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        fullscreenBtn.addEventListener('click', function() {
            toggleGalleryMode();
        });
        
        document.body.appendChild(fullscreenBtn);
    }

    // Image Comparison Feature
    function setupImageComparison() {
        let selectedImages = [];
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'c' && e.ctrlKey) {
                e.preventDefault();
                if (selectedImages.length === 2) {
                    compareImages(selectedImages[0], selectedImages[1]);
                } else {
                    showNotification('Select 2 images by Ctrl+clicking them first', 'info');
                }
            }
        });
        
        const images = document.querySelectorAll('img:not([src*=".svg"])');
        images.forEach(img => {
            img.addEventListener('click', function(e) {
                if (e.ctrlKey) {
                    e.preventDefault();
                    selectImageForComparison(this);
                }
            });
        });
    }

    // Gallery Search
    function setupGallerySearch() {
        const searchBox = document.createElement('div');
        searchBox.className = 'gallery-search';
        searchBox.innerHTML = `
            <input type="text" placeholder="🔍 Search images..." class="search-input">
            <div class="search-results"></div>
        `;
        
        const searchStyles = document.createElement('style');
        searchStyles.textContent = `
            .gallery-search {
                position: fixed;
                top: 70px;
                right: 20px;
                width: 250px;
                z-index: 1001;
            }
            
            .search-input {
                width: 100%;
                padding: 10px;
                border: 2px solid #1a472a;
                border-radius: 8px;
                font-size: 14px;
                background: rgba(255,255,255,0.95);
                backdrop-filter: blur(10px);
            }
            
            .search-results {
                max-height: 200px;
                overflow-y: auto;
                background: white;
                border-radius: 8px;
                margin-top: 5px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                display: none;
            }
            
            .search-result-item {
                padding: 10px;
                border-bottom: 1px solid #eee;
                cursor: pointer;
                font-size: 12px;
            }
            
            .search-result-item:hover {
                background: #f8f9fa;
            }
        `;
        document.head.appendChild(searchStyles);
        document.body.appendChild(searchBox);
        
        const searchInput = searchBox.querySelector('.search-input');
        const searchResults = searchBox.querySelector('.search-results');
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query.length > 2) {
                performImageSearch(query, searchResults);
            } else {
                searchResults.style.display = 'none';
            }
        });
    }

    // Helper Functions for Advanced Features
    function getImageCategory(img) {
        const src = img.src.toLowerCase();
        if (src.includes('dish') || src.includes('food')) return 'dish';
        if (src.includes('moment') || src.includes('restaurant')) return 'moments';
        if (src.includes('sunset') || src.includes('sky')) return 'sunset';
        return 'general';
    }

    function setupTouchEvents(img) {
        let touchStartTime = 0;
        let touchCount = 0;
        
        img.addEventListener('touchstart', function() {
            touchStartTime = Date.now();
            touchCount++;
            
            setTimeout(() => {
                if (touchCount === 2) {
                    // Double tap detected
                    toggleImageFavorite(this);
                }
                touchCount = 0;
            }, 300);
        });
    }

    function applyImageFilter(filter) {
        const images = document.querySelectorAll('img:not([src*=".svg"])');
        
        images.forEach(img => {
            switch(filter) {
                case 'all':
                    img.style.filter = '';
                    img.style.display = '';
                    break;
                case 'sepia':
                    img.style.filter = 'sepia(100%)';
                    break;
                case 'bw':
                    img.style.filter = 'grayscale(100%)';
                    break;
                case 'vintage':
                    img.style.filter = 'sepia(50%) contrast(1.2) brightness(1.1)';
                    break;
                case 'dish':
                case 'moments':
                case 'sunset':
                    const category = getImageCategory(img);
                    img.style.display = category === filter ? '' : 'none';
                    break;
            }
        });
    }

    function updateActiveFilter(activeBtn) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    function updateGalleryStats() {
        const totalImages = document.querySelectorAll('img:not([src*=".svg"])').length;
        document.getElementById('total-images').textContent = totalImages;
        document.getElementById('view-count').textContent = Math.floor(Math.random() * 1000) + 500;
        document.getElementById('favorite-count').textContent = Math.floor(Math.random() * 50) + 10;
        document.getElementById('download-count').textContent = Math.floor(Math.random() * 100) + 25;
    }

    function showImageComments(img) {
        const modal = document.createElement('div');
        modal.className = 'comments-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="comments-content">
                <h3>💬 Comments</h3>
                <div class="comments-list">
                    <div class="comment">
                        <strong>Chef Marco:</strong> "Beautiful presentation! 👨‍🍳"
                    </div>
                    <div class="comment">
                        <strong>Food Critic:</strong> "Absolutely stunning visual appeal ⭐⭐⭐⭐⭐"
                    </div>
                </div>
                <div class="add-comment">
                    <input type="text" placeholder="Add a comment..." class="comment-input">
                    <button class="comment-btn">Send</button>
                </div>
                <button class="close-comments">×</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.classList.add('active');
        
        modal.querySelector('.close-comments').addEventListener('click', () => {
            modal.remove();
        });
    }

    function shareGallery() {
        if (navigator.share) {
            navigator.share({
                title: 'Ocean Grace Gallery',
                text: 'Check out this amazing seafood restaurant gallery!',
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Gallery link copied to clipboard! 📋', 'success');
            });
        }
    }

    function toggleGalleryMode() {
        document.body.classList.toggle('gallery-fullscreen-mode');
        
        if (!document.getElementById('fullscreen-mode-styles')) {
            const styles = document.createElement('style');
            styles.id = 'fullscreen-mode-styles';
            styles.textContent = `
                .gallery-fullscreen-mode {
                    background: #000;
                }
                
                .gallery-fullscreen-mode img:not([src*=".svg"]) {
                    border: 3px solid #1a472a;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }
                
                .gallery-fullscreen-mode img:hover {
                    border-color: #fff;
                    box-shadow: 0 0 20px rgba(26, 71, 42, 0.5);
                }
            `;
            document.head.appendChild(styles);
        }
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `gallery-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-size: 14px;
            z-index: 10002;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Start animations
    initializeAnimations();
});
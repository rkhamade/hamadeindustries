// ==================== SHARED JAVASCRIPT ====================
// Navigation, scroll animations, mobile menu functionality

(function() {
  'use strict';

  // ==================== HEADER SCROLL BEHAVIOR ====================
  function initHeaderScroll() {
    const header = document.querySelector('header');

    function handleScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on load
  }

  // ==================== MOBILE MENU TOGGLE ====================
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');

        // Update icon (assuming we have SVG icons)
        const icon = menuToggle.querySelector('svg');
        if (icon) {
          if (mobileMenu.classList.contains('hidden')) {
            icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
          } else {
            icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
          }
        }
      });

      // Close mobile menu when clicking a link
      mobileMenuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          mobileMenu.classList.add('hidden');
        });
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', function(event) {
        const isClickInside = menuToggle.contains(event.target) || mobileMenu.contains(event.target);
        if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      });
    }
  }

  // ==================== ACTIVE NAV LINK ====================
  function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

    navLinks.forEach(function(link) {
      const linkPath = new URL(link.href).pathname;

      // Exact match for home page
      if (currentPath === '/' || currentPath === '/index.html') {
        if (linkPath === '/' || linkPath === '/index.html') {
          link.classList.add('active');
        }
      } else if (linkPath !== '/' && currentPath.includes(linkPath)) {
        link.classList.add('active');
      }
    });
  }

  // ==================== INTERSECTION OBSERVER FOR REVEAL ANIMATIONS ====================
  function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length === 0) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    revealElements.forEach(function(element) {
      observer.observe(element);
    });
  }

  // ==================== NUMBER COUNTER ANIMATION ====================
  function initCounterAnimation() {
    const counterElement = document.querySelector('.why-us-stat-number');

    if (!counterElement) return;

    const targetValue = 94;
    let currentValue = 0;
    let hasAnimated = false;

    const observerOptions = {
      threshold: 0.3
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const section = counterElement.closest('section');
    if (section) {
      observer.observe(section);
    }

    function animateCounter() {
      const duration = 533; // milliseconds
      const increment = targetValue / (duration / 16); // ~60fps

      function updateCounter() {
        currentValue += increment;

        if (currentValue >= targetValue) {
          counterElement.textContent = targetValue + '%';
        } else {
          counterElement.textContent = Math.floor(currentValue) + '%';
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
    }
  }

  // ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Ignore empty hash
        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ==================== MODAL TRIGGER (calls modal.js functions) ====================
  function initModalTriggers() {
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');

    modalTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        if (typeof window.openContactModal === 'function') {
          window.openContactModal();
        }
      });
    });
  }

  // ==================== FORM BUTTON HOVER EFFECTS ====================
  function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary');

    buttons.forEach(function(button) {
      const svg = button.querySelector('svg');
      if (svg) {
        button.addEventListener('mouseenter', function() {
          svg.style.transform = 'translateX(0.25rem)';
        });
        button.addEventListener('mouseleave', function() {
          svg.style.transform = 'translateX(0)';
        });
      }
    });
  }

  // ==================== PREVENT BODY SCROLL WHEN MODAL OPEN ====================
  // This will be called by modal.js
  window.disableBodyScroll = function() {
    document.body.style.overflow = 'hidden';
  };

  window.enableBodyScroll = function() {
    document.body.style.overflow = '';
  };

  // ==================== INITIALIZE ALL ====================
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initAll();
      });
    } else {
      initAll();
    }
  }

  function initAll() {
    initHeaderScroll();
    initMobileMenu();
    initActiveNav();
    initRevealAnimations();
    initCounterAnimation();
    initSmoothScroll();
    initModalTriggers();
    initButtonEffects();
  }

  // Start initialization
  init();

})();

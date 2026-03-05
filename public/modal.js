// ==================== CONTACT MODAL FUNCTIONALITY ====================
// Modal management and Supabase form submission

(function() {
  'use strict';

  // Supabase Configuration
  const SUPABASE_URL = 'https://0ec90b57d6e95fcbda19832f.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw';
  const SUPABASE_ENDPOINT = SUPABASE_URL + '/rest/v1/contact_submissions';

  let modalElement = null;
  let formElement = null;
  let formContainer = null;
  let successContainer = null;

  // ==================== OPEN MODAL ====================
  function openModal() {
    modalElement = document.getElementById('contact-modal');
    if (modalElement) {
      modalElement.classList.remove('hidden');
      if (typeof window.disableBodyScroll === 'function') {
        window.disableBodyScroll();
      }

      // Get form elements
      formElement = document.getElementById('contact-form');
      formContainer = document.getElementById('form-container');
      successContainer = document.getElementById('form-success');
    }
  }

  // ==================== CLOSE MODAL ====================
  function closeModal() {
    if (modalElement) {
      modalElement.classList.add('hidden');
      if (typeof window.enableBodyScroll === 'function') {
        window.enableBodyScroll();
      }

      // Reset form after closing
      setTimeout(function() {
        if (formElement) {
          formElement.reset();
        }
        if (formContainer && successContainer) {
          formContainer.classList.remove('hidden');
          successContainer.classList.add('hidden');
        }
      }, 300);
    }
  }

  // ==================== HANDLE FORM SUBMISSION ====================
  async function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(formElement);
    const data = {
      name: formData.get('name'),
      business_name: formData.get('business_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      submitted_at: new Date().toISOString()
    };

    // Disable submit button
    const submitButton = formElement.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
      // Submit to Supabase
      const response = await fetch(SUPABASE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(data)
      });

      if (response.ok || response.status === 201) {
        // Show success message
        showSuccessMessage();
      } else {
        // Handle error
        const errorData = await response.json().catch(() => ({}));
        console.error('Submission error:', errorData);
        alert('There was an error submitting your message. Please try again or contact us directly at contact@hamadeindustries.com');

        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('There was a network error. Please check your connection and try again, or contact us directly at contact@hamadeindustries.com');

      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  }

  // ==================== SHOW SUCCESS MESSAGE ====================
  function showSuccessMessage() {
    if (formContainer && successContainer) {
      formContainer.classList.add('hidden');
      successContainer.classList.remove('hidden');
    }
  }

  // ==================== RESET TO FORM ====================
  function resetToForm() {
    if (formElement) {
      formElement.reset();
    }
    if (formContainer && successContainer) {
      formContainer.classList.remove('hidden');
      successContainer.classList.add('hidden');
    }
  }

  // ==================== INITIALIZE MODAL ====================
  function initModal() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupModal);
    } else {
      setupModal();
    }
  }

  function setupModal() {
    modalElement = document.getElementById('contact-modal');

    if (!modalElement) return;

    // Get elements
    formElement = document.getElementById('contact-form');
    formContainer = document.getElementById('form-container');
    successContainer = document.getElementById('form-success');

    // Close button
    const closeButton = document.getElementById('modal-close');
    if (closeButton) {
      closeButton.addEventListener('click', closeModal);
    }

    // Backdrop click
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', closeModal);
    }

    // Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modalElement && !modalElement.classList.contains('hidden')) {
        closeModal();
      }
    });

    // Form submission
    if (formElement) {
      formElement.addEventListener('submit', handleFormSubmit);
    }

    // "Send another message" button
    const resetButton = document.getElementById('reset-form');
    if (resetButton) {
      resetButton.addEventListener('click', function(e) {
        e.preventDefault();
        resetToForm();
      });
    }
  }

  // ==================== EXPOSE PUBLIC FUNCTIONS ====================
  window.openContactModal = openModal;
  window.closeContactModal = closeModal;

  // ==================== INITIALIZE ====================
  initModal();

})();

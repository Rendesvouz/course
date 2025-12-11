document.addEventListener("DOMContentLoaded", function() {
    // Add a class to the body to indicate JS is enabled and animations can run.
    document.body.classList.add('js-enabled');

    // --- DYNAMIC COPYRIGHT YEAR ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll(".fade-in");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        animatedElements.forEach(element => {
            element.classList.add("visible");
        });
    }

    // --- NEWSLETTER FORM --- //
    const newsletterForm = document.getElementById('newsletter-form');
    if(newsletterForm) {
        const emailInput = document.getElementById('newsletter-email');
        const submitButton = document.getElementById('newsletter-submit');
        const successMessage = document.getElementById('newsletter-success');
        const errorMessage = document.getElementById('newsletter-error');

        // Load Klaviyo script
        const script = document.createElement('script');
        script.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VqtvXZ';
        script.async = true;
        document.head.appendChild(script);
        window._learnq = window._learnq || [];

        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!emailInput.value) return;

            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            errorMessage.style.display = 'none';
            successMessage.style.display = 'none';

            try {
                // Using Fetch API to submit to Klaviyo is complex due to CORS.
                // Instead, we will rely on the Klaviyo script's built-in functionality.

                // Identify the user and track the subscription event
                window._learnq.push(['identify', { '$email': emailInput.value }]);
                window._learnq.push(['track', 'Newsletter Subscription', {
                    '$email': emailInput.value,
                    'source': 'footer_newsletter',
                    'timestamp': new Date().toISOString()
                }]);

                // Simulate a short delay to allow the tracking event to be sent
                await new Promise(resolve => setTimeout(resolve, 1000));

                successMessage.style.display = 'block';
                emailInput.value = '';

                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);

            } catch (error) {
                errorMessage.style.display = 'block';
                console.error('Subscription error:', error);

                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 5000);
            } finally {
                submitButton.textContent = 'Subscribe';
                submitButton.disabled = false;
            }
        });
    }
});
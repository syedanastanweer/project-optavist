AOS.init({
  duration: 1200,
});

////end AOS animations

window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  const mainContent = document.querySelector('.main-content');

  // Hide the loader and show the main content
  loader.classList.add('hidden');

  // Ensure main content is visible and starts fade-in animation
  mainContent.classList.add('loaded');

  // Trigger animations after the loader disappears
  const elements = document.querySelectorAll('.animate-topToBottom, .animate-leftToRight, .animate-bottomToTop, .animate-zoomIntoZoomOutOne, .animate-zoomIntoZoomOutTwo');

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Reset animation before re-triggering
        entry.target.style.animation = 'none';
        entry.target.offsetHeight; // Trigger reflow (force a reflow to restart the animation)
        
        if (entry.target.classList.contains('animate-topToBottom')) {
          entry.target.style.opacity = 1;
          entry.target.style.animation = 'moveUpDown 1s ease-in-out forwards';
        }

        else if (entry.target.classList.contains('animate-bottomToTop')) {
          entry.target.style.opacity = 1;
          entry.target.style.animation = 'moveBottomTop 1s ease-in-out forwards';
        }

        else if (entry.target.classList.contains('animate-leftToRight')) {
          entry.target.style.opacity = 1;
          entry.target.style.animation = 'moveLeftRight 1s ease-in-out forwards';
        }

        else if (entry.target.classList.contains('animate-zoomIntoZoomOutOne')) {
          entry.target.style.opacity = 1;
          entry.target.style.animation = 'zoomInOutOne 1s ease-in-out forwards';
        }

        else if (entry.target.classList.contains('animate-zoomIntoZoomOutTwo')) {
          entry.target.style.opacity = 1;
          entry.target.style.animation = 'zoomInOutSecond 1s ease-in-out forwards';
        }
      } else {
        // Reset the element to allow animation to trigger again on next intersection
        entry.target.style.opacity = 0;
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  elements.forEach((element) => {
    observer.observe(element); // Continuously observe each element
  });
});

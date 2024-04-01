let lastScrollTop = 0;
        let header = document.querySelector('.header');

        window.addEventListener('scroll', function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop && window.innerWidth <= 430) {
                // Scroll down
                header.style.top = "-100px"; // Adjust this value as needed
            } else {
                // Scroll up or initial position
                header.style.top = "0";
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
        });
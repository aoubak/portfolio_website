// inside a <script> tag at the bottom before </body>
const menu_toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menu_toggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});


const slider = document.querySelector('.cards_slider');
const prevBtn = document.querySelector('.slider_btn.prev');
const nextBtn = document.querySelector('.slider_btn.next');

prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
});



    function initProgressBars() {
        const bars = document.querySelectorAll('.progress');
        bars.forEach(bar => {
            const percent = parseInt(bar.getAttribute('data-progress')) ;
            const text = bar.nextElementSibling; // assumes text is right after bar

            setTimeout(() => {
                bar.style.width = percent + '%';
            }, 1000);

            bar.style.width = percent + '%';
            if (text && text.classList.contains('progress_text')) {
                text.textContent = percent + '%';
            }
        });
    }

    // Run when DOM is ready
    document.addEventListener('DOMContentLoaded', initProgressBars);

    window.addEventListener("scroll", function () {
        const topBtn = document.querySelector(".topUP");
        if (window.scrollY > 100) {
          topBtn.style.display = "block";
        } else {
          topBtn.style.display = "none";
        }
      });
      document.querySelector('.topUP').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
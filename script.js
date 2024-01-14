let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.navigation a');
    const sections = document.querySelectorAll('.content section');
    let scrolling = false;

    window.addEventListener('scroll', function () {
        if (!scrolling) {
            const scrollPosition = window.scrollY + 100; // Adjusted to 100px from the top
            
            sections.forEach(function (section, index) {
                const targetId = section.getAttribute('id');
                const targetSection = document.getElementById(targetId);

                if (targetSection.offsetTop <= scrollPosition && targetSection.offsetTop + targetSection.offsetHeight > scrollPosition) {
                    updateActiveClass(index);
                }
            });
        }
    });

    navItems.forEach(function (navItem, index) {
        navItem.addEventListener('click', function (event) {
            event.preventDefault();
            scrolling = true;

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            setTimeout(function () {
                scrolling = false;
                updateActiveClass(index);
            }, 300); // Adjust the delay duration as needed
        });
    });

    function updateActiveClass(activeIndex) {
        navItems.forEach(function (navItem, index) {
            if (index === activeIndex) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const arrowContainer = document.getElementById('arrow-container');
    let isMouseMoving = false;

    // Show arrow initially
    setTimeout(() => {
        arrowContainer.style.opacity = 1;
    }, 1000);

    // Hide arrow on mouse movement
    document.addEventListener('mousemove', function () {
        if (!isMouseMoving) {
            isMouseMoving = true;
            arrowContainer.style.opacity = 0;
        }
    });

    // Show arrow if user hasn't moved the mouse after scrolling
    window.addEventListener('scroll', function () {
        if (!isMouseMoving) {
            arrowContainer.style.opacity = 1;
        }
    });
});

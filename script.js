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

// document.addEventListener("DOMContentLoaded", function () {
//     const header = document.querySelector('header');
//     const navLinks = document.querySelectorAll('header .navigation a'); // Fix the selector

//     let scrolling = false; // Flag to track if scrolling is in progress
//     const lastSectionId = 'education'; // Change this to the id of the last section you want to scroll to

//     window.addEventListener('scroll', function () {
//         // if (!scrolling) {
//             const scrollPosition = window.scrollY;

//             navLinks.forEach(link => {
//                 const targetId = link.getAttribute('href').substring(1);
//                 const targetSection = document.getElementById(targetId);

//                 if (targetSection.offsetTop <= scrollPosition && targetSection.offsetTop + targetSection.offsetHeight > scrollPosition) {
//                     link.classList.add('active');
//                 } else {
//                     link.classList.remove('active');
//                 }
//             });

//             // const opacity = 1 - scrollPosition / 300;
//             // header.style.background = `linear-gradient(to bottom, rgba(255, 0, 0, 1), rgba(255, 0, 0, ${opacity}))`;

//             // Stop scrolling if the user has reached the last section
//         //     if (lastSectionId && scrollPosition >= document.getElementById(lastSectionId).offsetTop) {
//         //         scrolling = false; // Set scrolling flag to true
//         //     }
//         // }
//     });

//     // Smooth scrolling when a navigation link is clicked
//     navLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             scrolling = true; // Set scrolling flag to true
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: 'smooth'
//             });

//             // Set a timeout to reset the scrolling flag after the scrolling animation completes
//             setTimeout(function () {
//                 scrolling = false;
//             }, 1000); // Adjust the timeout duration as needed
//         });
//     });
// });

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

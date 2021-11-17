/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const list = document.getElementById('navbar__list');
const parts = document.querySelectorAll('section');




/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function menuItem() {
    "use strict";
    
    for (let sec of parts) {
        let secName = sec.getAttribute("data-nav");
        const secPlace = sec.getAttribute("id");
        //create the sections of nav-bar
        const items = document.createElement('li');
        items.innerHTML = `<a href='#${secPlace}' > ${secName} </a>`;
            
                items.addEventListener('click',
        (event) => {
            event.preventDefault();
            sec.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            })
        })
        
    
    ;
    
        //added the content of section
        list.appendChild(items);
        //added section to the nav-bar
    }
};

function calling(intity) {
    "use strict";
    let int;

    for (int of intity)

    {

        if (int.isIntersecting) {
            parts.forEach((item) => {
                if (item.classList.contains('your-active-class')) {
                    item.classList.remove('your-active-class')
                }

            });

            int.target.classList.add("your-active-class");
            let medo = int.target.getAttribute("data-nav");
        }
    }
};


let properties = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.45
};

let view = new IntersectionObserver(calling, properties);
for (part of parts) {
    view.observe(part)
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// it is the code to create button of scrolling





menuItem();





// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

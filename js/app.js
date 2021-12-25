const list = document.getElementById('navbar__list');
const parts = document.querySelectorAll('section');







function menuItem() {
    "use strict";
    for (let sec of parts) 
    {
        let secName = sec.getAttribute("data-nav");
        const secPlace = sec.getAttribute("id");
        //create the sections of nav-bar
        const items = document.createElement('li');
        items.className = "navBarItem";
        items.innerHTML = `<a href='#${secPlace}' > ${secName} </a>`;
        items.addEventListener('click',
            (event) => {
                event.preventDefault();
                let navBarItems = document.getElementsByClassName('navBarItem');
                Array.prototype.forEach.call(navBarItems, (item) => {
                    if (item == event.path[1]) {
                        if (!event.path[1].classList.contains('active'))
                            event.path[1].classList.add('active');
                    } else {
                        if (item.classList.contains('active'))
                            item.classList.remove('active');
                    }
                });
                sec.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest"
                })
            });
        //added the content of section
        list.appendChild(items);
    }
}




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




menuItem();
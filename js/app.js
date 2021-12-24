
const list = document.getElementById('navbar__list');
const parts = document.querySelectorAll('section');





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
                    
                     if(items.classList.contains('active'))

                     
                     {items.classList.remove('active')}                  
                     
                     items.classList.add('active')
                     


                     sec.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                        inline: "nearest"
                    })
                    })

                
            
            
            
          
    
        
    
        //added the content of section
        list.appendChild(items);
        }
    }
   
        //added section to the nav-bar
       
    
;




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






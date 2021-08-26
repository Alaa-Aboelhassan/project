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
//making the navigation bar
// used querySelectorAll to select all the sections not only the first one 

const sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');

//i to determine the index of section
for (let i = 0; i < sections.length; i++) {

    //I know that ul should contain li only but I think the button look nicer

    const li = document.createElement('button');
    li.innerHTML = sections[i].getAttribute("data-nav");


    //adding event listener scroll to the meaning section
    li.addEventListener('click', function () {
        sections[i].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    })
    navBar.appendChild(li);
}
//determnine the active section


window.addEventListener("scroll", function () {
    const lists = document.querySelectorAll("li");
    for (i = 0; i < sections.length; i++) {
        const data = sections[i].getAttribute("data-nav");
        const secTop = sections[i].getBoundingClientRect().top;
        if (secTop >= 0 && secTop <= 400) {
            sections[i].classList.add("your-active-class");
            for (j = 0; j < lists.length; j++) {
                if (list[j].textContent === data) {
                    list[i].classList.add("your-active-class");
                } else {
                    list[i].classList.remove("your-active-class");
                }
            }


        } else {
            sections[i].classList.remove("your-active-class");
        }
    }

})



















let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () =>{
    //changing navbar
    if(window.pageYOffset > 5){
        document.getElementById("navbarNotLoggedIn").style.backgroundColor = "rgba(51, 66, 87, 0.8)";
    } else {
        document.getElementById("navbarNotLoggedIn").style.backgroundColor = "rgba(51, 66, 87, 0)";
    }

    if(window.pageYOffset > 5){
        document.getElementById("navbarLoggedIn").style.backgroundColor = "rgba(51, 66, 87, 0.8)";
    } else {
        document.getElementById("navbarLoggedIn").style.backgroundColor = "rgba(51, 66, 87, 0)";
    }

    //scrollspy
    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
};



let headerLinks = ["Custom Furniture", "Customized Pieces", "Charcuteries Board", "How Pieces are made"];
let linksStr = ""

headerLinks.forEach((link) => {
    linksStr += `<li class="navLink"><a href="#">${link}</a></li>`
})

let header = `
<header id="header">
<div class="navExtra">
    <div class="dropdownSelect">
        <div class="dropdownTitle">More</div>
        <img src="./Content/icons/dropdown.png" class="dropdownIcon"></img>
    </div>
    <ul class="dropdownContents">
        ${linksStr.replace(/navLink/g, "dropdownItem")}
    </ul>
</div>


<a href="#" id="logo">
    <img src="Content/Images/Logo/Client_Logo/mainLogo.png" alt="#" id="mainLogo"></img>
    <h1 id="brandName">Joinery Furniture</h1>
</a>



<nav class="nav">
    <ul class="navLinks">
        <li class="navLink"><a href="index.html">Home</a></li>
        ${linksStr}
    </ul>
    <a href="contact.html"><button id="contactButton">Contact</button></a>
</nav>

</header>`




let headerEl = document.createElement('header');

document.body.insertBefore(headerEl, document.body.firstChild);
headerEl.outerHTML = header;


let footer = `
<footer id="footer">

<div></div>
<img src="Content/Images/Logo/Client_Logo/mainLogo.png" alt="#" id="footerLogo"></img>
<div></div>

</footer>`

let footerEl = document.createElement('footer');

document.body.appendChild(footerEl);
footerEl.outerHTML = footer;



navLinks = document.getElementById("navLinks")
navExtra = document.querySelectorAll(".navExtra")



navExtra.forEach(object => {
    const select = object.querySelector('.dropdownSelect');
    const selected = object.querySelector('.dropdownSelect .dropdownTitle');
    const caret = object.querySelector('.dropdownSelect .dropdownIcon');

    const menu = object.querySelector('.dropdownContents');
    const options = object.querySelectorAll('.dropdownContents .dropdownItem');


    select.addEventListener('click', () => {
        // select.classList.toggle('select')
        caret.classList.toggle('dropdownIcon-active')
        menu.classList.remove('menu-close');
        if (menu.classList.contains('menu-open')) {
            menu.classList.add('menu-close');
        }
        menu.classList.toggle('menu-open')

        options.forEach(option => {
            option.addEventListener('click', () => {
                // select.classList.remove()
                caret.classList.remove('dropdownIcon-active');
                menu.classList.remove('menu-open');
                menu.classList.add('menu-close');

                options.forEach(option => {
                    option.classList.remove('dropdownItem-active')
                })

                option.classList.add('dropdownItem-active')
            })
        })
    })
})




function resize(event) {
    navExtra.forEach(object => {
        const menu = object.querySelector('.dropdownContents');
        menu.classList.remove('menu-open')
        menu.classList.remove('menu-close')
        const caret = object.querySelector('.dropdownSelect .dropdownIcon');
        caret.classList.remove('dropdownIcon-active');

    })

    event = event || false

    if (event) {

    }


}

resize()


window.addEventListener('resize', (event) => {
    resize(event)
});

window.addEventListener('scroll', (event) => { scroll(event) });

function scroll(event) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.background = "rgba(0,0,0,0.5)";
    } else {
        document.getElementById("header").style.background = "rgba(0,0,0,0.8)";
    }
}


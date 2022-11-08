
let companyEmail = "keaton@mfreed.com";


// ["Custom Furniture", "./custom.html"], 
let headerLinks = [["Customized Pieces", "./custom.html"], ["Charcuterie Boards", "./boards.html"], ["How Pieces are made"]];
let linksStr = ""

headerLinks.forEach((link) => {
    linksStr += `<li class="navLink"><a href="${link[1] || "#"}">${link[0]}</a></li>`
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


<a href="index.html" id="logo">
    <img src="Content/Images/Logo/Client_Logo/mainLogo.png" alt="#" id="mainLogo"></img>
    <h1 id="brandName">Joinery Furniture</h1>
</a>



<nav class="nav">
    <ul class="navLinks">
        <li class="navLink"><a href="index.html">Home</a></li>
        ${linksStr}
    </ul>
    <button onclick="document.location = './contact.html'" id="contactButton">Contact</button>
</nav>

</header>`




let headerEl = document.createElement('header');

document.body.insertBefore(headerEl, document.body.firstChild);
headerEl.outerHTML = header;


let footer = `
<footer id="footer">
<img src="Content/Images/Logo/Client_Logo/mainLogo.png" alt="#" id="footerLogo"></img>
<div class="footerContact">
<h1 class="footerTitle">Contact Us!</h1>
<ul class="footerList">
<li class="footerItem">Email: <a style="cursor:pointer" onclick="email(true)">joineryfurnituretest@gmail.com</a></li>
<li class="footerItem">Call: <a style="cursor:pointer" href="tel:9876543210" onclick="">987-654-3210</a></li>
</ul>
</div>
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


function email(popup) {

    popup = popup || false;

    let preFilled = `This is a pre-written email to Joinery Furniture, feel free to remove or change what is here. =Please tell us more about your request below:==Give a brief summary of what you would like:====Please describe the rough dimensions of the item:====How would you like us to contact you?===`

    preFilled = preFilled.replace(/=/g, "%0D")


    window.open(`https://mail.google.com/mail/u/0/?fs=1&to=${companyEmail}&su=Joinery Furniture Request&body=${preFilled}&tf=cm`)

    if (popup && !document.querySelectorAll('#footer .footerItem')[0].innerHTML.includes("Gmail Didn't Work?")) {
        document.querySelectorAll('#footer .footerItem')[0].innerHTML += ` <span style="font-size:0.8em; opacity:0.6;">(Gmail Didn't Work? Try <a href="mailto:${companyEmail}">This</a>!)</span>`
    }

    // if(!(/(.+)@(.+){2,}\.(.+){2,}/.test(userEmail)) || !userText) {
}






let gallerys = document.querySelectorAll('.image--gallery')
document.getElementById('title').textContent = `Thing`;


if (gallerys.length > 0) {
    document.getElementById('title').textContent = `Error 2`;
    gallerys.forEach((gallery) => {
        document.getElementById('title').textContent = `Error 3`;
        // gallery
        let images = [];
        function loadImage(index) {
            index = index || 1;
            let image = new Image();
            document.getElementById('title').textContent = `Error 4`;
            // console.log(image);
            image.onload = (image) => {
                document.getElementById('title').textContent = `Error 5`;
                console.log("Image:", index, "Loaded!");
                // document.getElementById('title').textContent = `Happened`;
                document.getElementById('subtitle').textContent = `${index} good, ${image.path[0]}`;
                newImage = document.createElement("img");
                newImage.src = image.path[0].src
                newImage.style.width = `${newImage.width / 5}px`
                newImage.style.height = `${newImage.height / 5}px`

                newContainer = document.createElement("a");
                newContainer.href = newImage.src;
                newContainer.dataset.pswpWidth = `${newImage.width}`
                newContainer.dataset.pswpHeight = `${newImage.height}`
                newContainer.dataset.cropped = `true`
                newContainer.classList.add('gallery--item')

                newContainer.appendChild(newImage);
                gallery.appendChild(newContainer);
                loadImage(index + 1);
            }
            image.onerror = (image) => {
                document.getElementById('subtitle').textContent = `Image Loop ENDED`;
                console.log("Image Loop Ended")
                document.getElementById('title').textContent = `Error Big`;
            }
            image.src = `./Content/Images/Gallerys/Pieces/img${index}.webp`
            document.getElementById('title').textContent = `Error Other`;
        }

        loadImage();
    })
}


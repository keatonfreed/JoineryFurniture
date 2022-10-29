
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

                option.forEach(option => {
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
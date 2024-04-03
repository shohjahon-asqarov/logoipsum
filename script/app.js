// variables
const btnMonthly = document.querySelector('.btn-monthly');
const btnYearly = document.querySelector('.btn-yearly');
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.link');

// link click 
navLinks[0].classList.add('active-link');
navLinks.forEach(i => {
    i.addEventListener('click', () => {
        navLinks.forEach(i => {
            i.classList.remove('active-link')
        })
        i.classList.add('active-link')
    })
})

// windows scroll active section
window.addEventListener('scroll', () => {
    sections.forEach(i => {
        if (window.scrollY > i.offsetTop - 100) {
            navLinks.forEach(j => {
                j.classList.remove('active-link')
                if (j.href.split('#')[1] == i.id) {
                    j.classList.add('active-link')
                }
            })
        }
    })
})

// toggle monthly
btnMonthly.addEventListener('click', () => {
    btnYearly.classList.remove('active')
    btnMonthly.classList.add('active')
})

// toggle yearly
btnYearly.addEventListener('click', () => {
    btnMonthly.classList.remove('active')
    btnYearly.classList.add('active')
})


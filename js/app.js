let section = 'section'
let main = document.querySelector('main')
let nav = document.querySelector('.navbar__menu #navbar__list')
const p1 =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis fuga dolor dolorem voluptatem explicabo obcaecati eos doloremque tempore quidem ipsam illo omnis rerum illum, officia odio maxime non ducimus.'
const appendNavbar = num => {
    for (let i = 1; i <= num; i++) {
        let li = document.createElement('li')
        li.classList.add('menu__link')
        li.textContent = `${section}${i}`

        li.setAttribute('data-nav', `${section}${i}`)
        nav.appendChild(li)
    }
}
const appendSections = num => {
    for (let i = 1; i <= num; i++) {
        let sections = document.createElement('section')
        let div = document.createElement('div')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let h2 = document.createElement('h2')
        p.textContent = `${p1}`
        p2.textContent = `${p1}`
        h2.textContent = `${section} ${i}`
        div.classList.add('landing__container')
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(p2)
        sections.setAttribute('data-nav', `${section}${i}`)
        sections.appendChild(div)
        sections.id = `${section}${i}`
        if (i % 2 == 0) {
            sections.style.textAlign = 'end'
        }
        main.appendChild(sections)
    }
}

appendSections(4)
appendNavbar(4)
let liToggle = document.querySelectorAll('nav li')
const handelList = liToggle => {
    let sections1 = document.querySelectorAll('section')

    liToggle.forEach(ele => {
        ele.addEventListener('click', () => {
            liToggle.forEach(btn => btn.classList.remove('active'))
            ele.classList.add('active')
            let attr = ele.getAttribute('data-nav')
            console.log(attr)
            sections1.forEach(e => {
                let att = e.getAttribute('data-nav')
                if (attr == att) {
                    let offset = e.offsetTop
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    })
                }
            })
        })
    })
}
handelList(liToggle)

const handelScroll = () => {
    let sections1 = document.querySelectorAll('section')
    sections1.forEach(e => {
        let top = window.scrollY
        let offset = e.offsetTop
        let height = e.offsetHeight

        if (top > offset - 100 && top < offset - 100 + height) {
            let att = e.getAttribute('data-nav')

            liToggle.forEach(ele => {
                let att1 = ele.getAttribute('data-nav')

                if (att == att1) {
                    ele.classList.add('active')
                } else {
                    ele.classList.remove('active')
                }

                sections1.forEach(e => e.classList.remove('your-active-class'))
                e.classList.add('your-active-class')
            })
        } else {
            e.classList.remove('your-active-class')
        }

        if (top <= 100) {
            liToggle[0].classList.remove('active')
            console.log(true)
        }
    })
}

const handelTop = () => {
    let x = document.querySelector('.top')

    window.addEventListener('scroll', () => {
        window.scrollY >= 500 ? x.classList.add('show') : x.classList.remove('show')
    })

    x.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}
window.addEventListener('scroll', handelScroll)
handelTop()
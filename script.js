const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page3Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixedImg = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", () => fixedImg.style.display = "block")
    elemC.addEventListener("mouseleave", () => fixedImg.style.display = "none")

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixedImg.style.backgroundImage = `url(${image})`

        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function menuAnime() {
    var menu = document.querySelector("#nav h3")
    var full = document.querySelector("#full-scr")
    var navImg = document.querySelector("#nav img")
    var navPart2 = document.querySelector("#nav-part2")
    var flag = 0

    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = "0"
            navImg.style.opacity = 0
            navPart2.style.top = "10vh"
            flag = 1
        }
        else {
            full.style.top = "-100%"
            navImg.style.opacity = 1
            navPart2.style.top = "-100vh"
            flag = 0
        }
    })

}

function loaderAnime() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)
}

page3Animation()
swiperAnimation()
menuAnime()
loaderAnime()







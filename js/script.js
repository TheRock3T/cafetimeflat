const animItems = document.querySelectorAll('._anim-items');


if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems [index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
            else {
                if (!animItem.classList.contains('_anim_nh')) {
                    animItem.classList.remove('_active');
                }
                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       return { top: rect.top + scrollTop, left: rect.left + scrollLeft } 
    }
}

$(document).ready(function(){
    $(".header__burg").click(function(event) {
        $(".header__burg,.header__menu").toggleClass("active");
    });
});

$(document).ready(function(){
    $(".menu__link").click(function(event) {
        $(".header__burg,.header__menu").removeClass("active");
    });
});


/*  BTNS */

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elId = $(this).data('scroll');
    let elOffset = $(elId).offset().top;
    

    $("html, body").animate({
        scrollTop: elOffset - 65
    }, 1000);
});


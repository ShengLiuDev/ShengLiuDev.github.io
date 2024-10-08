$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removes the smooth scroll on slide up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", 10);
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Add console logs for debugging
    try {
        var typed = new Typed(".typing", {
            strings: ["Student at UF", "Fullstack Engineer", "Software Engineer", "Data Scientist", "Researcher"],
            typeSpeed: 80,
            backSpeed: 20,
            loop: true
        });
        console.log("Typed instance created successfully.");
    } catch (error) {
        console.error("Error creating Typed instance:", error);
    }
});

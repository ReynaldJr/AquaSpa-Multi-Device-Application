(function ($) {
  "use strict";

  // Mobile Device Detection
  var mobileDevice = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $("html").addClass("mobile");
    mobileDevice = true;
  } else {
    $("html").addClass("no-mobile");
    mobileDevice = false;
  }

  // Navigation
  var wow = new WOW({
    offset: 150,
    mobile: false,
  });

  wow.init();

  var desktopNavigation = $(".desktop-navigation");
  var mobileNavigation = $(".mobile-navigation");

  // Affix
  desktopNavigation.affix({
    offset: {
      top: 200,
    },
  });

  desktopNavigation.on("affix.bs.affix", function () {
    if (!desktopNavigation.hasClass("affix")) {
      desktopNavigation.addClass("animated slideInDown");
    }
  });

  desktopNavigation.on("affix-top.bs.affix", function () {
    desktopNavigation.removeClass("animated slideInDown");
    $(".navbar-collapse").collapse("hide");
  });

  // Nav Mobile
  mobileNavigation.affix({
    offset: {
      top: 1,
    },
  });

  mobileNavigation.on("affix.bs.affix", function () {
    if (!mobileNavigation.hasClass("affix")) {
      mobileNavigation.addClass("animated slideInDown");
    }
  });

  mobileNavigation.on("affixed-top.bs.affix", function () {
    mobileNavigation.removeClass("animated slideInDown");
  });

  $('.navbar-nav-mobile li a[href="#"]').on("click", function () {
    $(this).closest("li").toggleClass("current");
    $(this).closest("li").find("ul").slideToggle(200);
    return false;
  });

  // Nav Collapse
  $(".navbar-collapse").on("show.bs.collapse", function () {
    mobileNavigation.addClass("affix");
  });

  $(".navbar-collapse").on("hidden.bs.collapse", function () {
    if (mobileNavigation.hasClass("affix-top")) {
      mobileNavigation.removeClass("affix");
    }
  });

  mobileNavigation.on("affixed-top.bs.affix", function () {
    if ($(".navbar-collapse").hasClass("in")) {
      mobileNavigation.addClass("affix");
    }
  });

  // Scroll to Up
  $(".top-scroll").on("click", function () {
    var target = $(this.hash);
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top - 100,
        },
        1
      );
      return false;
    }
  });


  // Skill Bar
  if ($(".statistics-bar .statistics-bar-box .fill-bar").length) {
    $(".statistics-bar-box .fill-bar").each(
      function () {
        $(".statistics-bar-box .fill-bar").appear(function () {
          var progressWidth = $(this).attr("data-percent");
          $(this).css("width", progressWidth + "%");
        });
      },
      {
        accY: 0,
      }
    );
  }

  // Testimonial Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: true,
      autoplayTimeout: 10000,
      navText: [
        '<span class="icon-left-arrow"></span>',
        '<span class="icon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });
  }


  // Counter
  if ($(".statistics-bar-box").length) {
    $(".statistics-bar-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate({
            countNum: n,
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(
                Math.floor(this.countNum)
              );
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            },
          });
        }
      }, {
      accY: 0
    }
    );
  }

  // Odometer
  if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }

  // wow Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: true,
      live: true,
    });
    wow.init();
  }

  // Hero Swipe
  function carouselSwipe() {
    const swiperElm = document.querySelectorAll(".hero-main-slider");
    swiperElm.forEach(function (swiperelm) {
      const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
      let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
    });
  }

  carouselSwipe();

})(jQuery);

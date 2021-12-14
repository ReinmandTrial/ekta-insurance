


















const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
// Бургер 
$('.icon-burger').on('click', function () {
   $('.burger').addClass('open');
})
$('.burger__bg,.burger__close,.burger__link').on('click', function () {
   $('.burger').removeClass('open');
})
// Бургер конец

// var galleryImg = [];
// $('.banner-slider img').each(function () {
//    var src = $(this).attr('src');
//    galleryImg.push(src);
// })
// var swiper = new Swiper('.banner-slider', {
//    // навигация, кнопки
//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },
//    effect: "fade",
//    mousewheel: false,
//    slidesPerView: 1,
//    loop: true,
//    // pagination: {
//    //    el: '#swiper-pagination',
//    //    clickable: true,
//    //    renderBullet: function (index, className) {
//    //       return '<div class="' + className + '"><img src="' + galleryImg[index] + '" alt=""></div>';
//    //    },
//    // },

//    // breakpoints: {
//    // 	// 991: {
//    // 	// 	slidesPerView: 4,
//    // 	// },
//    // 	768: {
//    // 		// navigation: true,
//    // 	},
//    // 	// 576: {
//    // 	// 	slidesPerView: 2,
//    // 	// },
//    // 	320: {
//    // 		// navigation: false
//    // 	},
//    // }
// });
$(document).ready(function () {
   $('.hashtag__btn').on('click', function () {
      $(this).closest('.hashtag__body').toggleClass('hashtag__body-open');
      $(this).closest('.hashtag__body').find('.hashtag__btn').toggleClass('off');
   })
   if ($(window).width() > 768) {
      $('.faq__body').append('<div class="faq__body-question faq__body-question--firstline"></div>');
      $('.faq__body').append('<div class="faq__body-content"></div>');
      $('.faq__body').append('<div class="faq__body-question faq__body-question--secondline"></div>');
      let count = 0;
      $($('.faq__body').find('.faq__item')).each(function () {
         $('.faq__body-content').append($(this).find('.faq__answer'));
         count++;
      })
      $($('.faq__body').find('.faq__item')).each(function (index) {
         if (index < count / 2) {
            $('.faq__body-question--firstline').append($(this));
         } else {
            $('.faq__body-question--secondline').append($(this));
         }
      });
      $('.faq__item').on('click', function () {
         if (!$(this).hasClass('open')) {
            let items = $(this).closest('.faq__body').find('.faq__item');
            let blocks = $('.faq__body-content').find('.faq__answer');
            let thisCount = 0;
            $(items).each(function () {
               $(this).removeClass('open');
            })
            $(this).addClass('open');
            $(items).each(function (index) {
               if ($(this).hasClass('open')) {
                  thisCount = index;
               }
            })
            $(blocks).each(function (index) {
               if (index == thisCount) {
                  $(this).show('slow');
               } else {
                  $(this).hide('slow');
               }
            })
         }
      })
   } else {
      $('.faq__question').on('click', function () {
         if (!$(this).parent().hasClass('open')) {
            let items = $('.faq__body').find('.faq__item');
            $(items).each(function () {
               $(this).removeClass('open');
               $(this).find('.faq__answer').hide('slow');
            })
            $(this).parent().addClass('open');
            $(items).each(function () {
               if ($(this).hasClass('open')) {
                  $(this).find('.faq__answer').show('slow');
               }
            })
         } else {
            $(this).parent().removeClass('open');
            $(this).next().hide('slow');
         }
      })
   }
   new Swiper('.review__slider', {
      loop: true,
      breakpoints: {
         991: {
            navigation: {
               nextEl: '.review__slider-btn__next',
               prevEl: '.review__slider-btn__prev',
            },
            slidesPerView: 3,
            spaceBetween: 15,
         }
      }
   })
});




















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
   if ($(window).width() >= 768) {
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
      pagination: {
         el: '.review__pagination',
         type: 'bullets',
      },
      breakpoints: {
         991: {
            navigation: {
               nextEl: '.review__slider-btn__next',
               prevEl: '.review__slider-btn__prev',
            },
            slidesPerView: 3,
            spaceBetween: 15,
         },
         768: {
            spaceBetween: 15,
            slidesPerView: 2,
         },
         0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            centeredSlides: true,
         }
      }
   })
   // Календарь

   function calendar() {
      $('input[name="daterange"], .daterangepicker').on('focus', function () {

         $(this).daterangepicker({
            opens: 'center',
            "linkedCalendars": false,
            "autoApply": true,
            "parentEl": $(this).closest('.js-calendar'),
            "showCustomRangeLabel": false,
            "singleDatePicker": true,
            "locale": {
               "format": "DD.MM.YYYY",
               "separator": " до ",
               "applyLabel": "Apply",
               "cancelLabel": "Cancel",
               "fromLabel": "From",
               "toLabel": "To",
               "customRangeLabel": "Custom",
               "weekLabel": "W",
               "daysOfWeek": [
                  "Пн",
                  "Вт",
                  "Ср",
                  "Чт",
                  "Пт",
                  "Сб",
                  "Нд"
               ],
               "monthNames": [
                  "Січень",
                  "Лютий",
                  "Березень",
                  "Квітень",
                  "Травень",
                  "Червень",
                  "Липень",
                  "Серпень",
                  "Вересень",
                  "Жовтень",
                  "Листопад",
                  "Грудень"
               ],
               "firstDay": 1
            },

         }, function (start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
         },
            function () {
               $('.daterangepicker').css('top', '0');
            }
         );
      });
   }
   calendar();

   // $('input[name="daterange"], .daterangepicker').on('focus', function () {

   //    $(this).daterangepicker({
   //       opens: 'left',
   //       "linkedCalendars": false,
   //       "autoApply": true,
   //       "parentEl": ".js-calendar",
   //       "showCustomRangeLabel": false,
   //       "singleDatePicker": true,
   //       "locale": {
   //          "format": "DD.MM.YYYY",
   //          "separator": " до ",
   //          "applyLabel": "Apply",
   //          "cancelLabel": "Cancel",
   //          "fromLabel": "From",
   //          "toLabel": "To",
   //          "customRangeLabel": "Custom",
   //          "weekLabel": "W",
   //          "daysOfWeek": [
   //             "Пн",
   //             "Вт",
   //             "Ср",
   //             "Чт",
   //             "Пт",
   //             "Сб",
   //             "Нд"
   //          ],
   //          "monthNames": [
   //             "Січень",
   //             "Лютий",
   //             "Березень",
   //             "Квітень",
   //             "Травень",
   //             "Червень",
   //             "Липень",
   //             "Серпень",
   //             "Вересень",
   //             "Жовтень",
   //             "Листопад",
   //             "Грудень"
   //          ],
   //          "firstDay": 1
   //       },
   //    }, function (start, end, label) {
   //       console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
   //    });
   // });

   $('.form-policy__promocode-title').on('click', function () {
      $(this).closest('.form-policy__promocode').toggleClass('open');
   })
   $('.form-policy__btn-to-step-two').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-one').hide();
      $(this).closest('.form-policy').find('.form-policy__step-two').show();
   });
   $('.form-policy__btn-prev-to-step-one').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-two').hide();
      $(this).closest('.form-policy').find('.form-policy__step-one').show();
   });
   $('.form-policy__btn-to-step-three').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-two').hide();
      $(this).closest('.form-policy').find('.form-policy__step-three').show();
   });
   $('.form-policy__btn-prev-to-step-two').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-three').hide();
      $(this).closest('.form-policy').find('.form-policy__step-two').show();
   });
   $('.form-policy__btn-prev-to-step-three').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-four').hide();
      $(this).closest('.form-policy').find('.form-policy__step-three').show();
   });
   $('.form-policy__btn-to-step-four').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-three').hide();
      $(this).closest('.form-policy').find('.form-policy__step-four').css('display', 'flex');
   });

   //new JS
   let items = $('body').find('.select__block');
   $(items).each(function () {
      // let width = $(this).find('.select').width() + 2;
      // let height = $(this).find('.select').height() + 2;
      // $(this).find('.select__block-shadow').css('width', width);
      // $(this).find('.select__block-shadow').css('height', height);
   })
   $('.select__head').on('click', function () {
      $(this).closest('.select__block').toggleClass('open');
   })
   $('.select__item').on('click', function () {
      let text = $(this).html();
      $(this).closest('.select').find('.select__text').html(text);
      $(this).closest('.select__block').removeClass('open');
   })

   $('.form-policy__btn-add-tourist').on('click', function () {
      $('.form-policy__tourist-block').addClass('new');
      $('.form-policy__header').css('border-bottom', 'none');
      $($('.form-policy__tourist-block').find('.form-policy__tourist')).each(function () {
         if (!$(this).hasClass('tourist-clone')) {
            $(this).addClass('ready');
         }
      })


      $('.tourist-clone').clone().appendTo('.form-policy__tourist-block').removeClass('tourist-clone');
      $($('.form-policy__tourist-block').find('.form-policy__tourist')).each(function (index) {
         $(this).find('.form-policy__toutist-num').html('Участник ' + index);
      });
      calendar();
   })
   $('.form-policy__tourist-block').on('click', '.form-policy__btn-check', function () {
      let items = $(this).closest('.form-policy__tourist-block').find('.form-policy__tourist');

      $(items).each(function () {
         if (!$(this).hasClass('tourist-clone')) {
            $(this).addClass('ready');
         }
      })
      $(this).closest('.form-policy__tourist').removeClass('ready');
   })

   $('.js-simple-select').on('click', function () {
      $(this).toggleClass('open');
      // $(this).find('.js-simple-select-body').slideToggle(0);
   })


   $(".form-policy-toggle__item").on('click', function () {
      if (!$(this).hasClass("active")) {//Проверка, если мы не нажимаем на уже нажатую кнопку, то выполняем код:
         let btns = $(this).closest(".form-policy-toggle").find(".form-policy-toggle__item");// здесь так скажем все кнопки
         let count;// Здесь будем хранить индекс кнопки 
         $(btns).each(function () {
            $(this).removeClass("active");//Делаем все кнопки отжатыми
         })

         $(this).addClass("active");//делаем нашу кнопку нажатой
         //ПО особому классу узнаем индекс
         $(btns).each(function (index) {
            if ($(this).hasClass("active")) {//Здесь this выступает в качестве обращения в цикле к элементу, который перебираем
               count = index;//находим порядковый номер
            }
         })

         let blocks = $('.form-policy-toggle__body').find('.form-policy-toggle__item-body');// элементы которые нужно будет открывать и закрывать

         $(blocks).each(function (index) {
            if (index == count) {//Если это нужный нам блок
               $(this).addClass("active");//ткрываем
            } else {//иначе
               $(this).removeClass("active");// скрываем
            }
         })
      }

   })
   if ($(window).width() < 992) {
      $('.policy__btn-arrange--mobile').on('click', function () {
         $('.policy__text').hide();
         $('.policy__form').show();
      })
   }

   $(function () {
      let items = $('.arrange-slider__items').find('.arrange-slider__item');
      let click = false;
      var glowInterval = 2000 // 1000 = 1 sec

      $(items).each(function (index) {
         if (index == 0) {
            $(this).addClass('active');
            $('.arrange-slider__img').find('img').attr('src', $(this).find('img').attr('src'));
            return;
         }
      })

      setInterval(function () {
         if (click === false) {
            let pos;
            //Обработчик кнопок
            $(items).each(function (index) {
               if ($(this).hasClass('active')) {
                  if ($(this).is(':last-child')) {
                     $(this).removeClass('active');
                     $(items).each(function () {
                        if ($(this).is(':first-child')) {
                           $(this).addClass('active');
                           pos = 1;
                        }
                     })
                  } else {
                     $(this).removeClass('active');
                     $(this).next().addClass('active');
                     pos = index + 2;
                     return false;
                  }
               }
            })
            //Обработчки для картинки
            $(items).each(function () {
               if ($(this).hasClass('active')) {
                  $('.arrange-slider__img').find('img').attr('src', $(this).find('img').attr('src'));
                  return;
               }
            })
         }
         click = false;
      }, glowInterval);

      $('.arrange-slider__item').on('click', function () {
         $(items).each(function () {
            $(this).removeClass('active');
         })
         $(this).addClass('active');

         $(items).each(function () {
            if ($(this).hasClass('active')) {
               $('.arrange-slider__img').find('img').attr('src', $(this).find('img').attr('src'));
               return;
            }
         })
         click = true;
      })
   })

   var swiper = new Swiper(".swiper-pagin", {
      spaceBetween: 32,
      slidesPerView: 'auto',
      // simulateTouch: false, 
      watchSlidesProgress: true,

   });
   var swiper2 = new Swiper(".banner-slider", {
      // spaceBetween: 10,
      simulateTouch: false,
      loop: true,
      // effect: "fade",
      // fadeEffect: {
      //    crossFade: true,
      // },
      autoplay: {
         delay: 5000,
         disableOnInteraction: false,
      },
      navigation: {
         nextEl: ".swiper-pagin__btn-next",
      },
      thumbs: {
         swiper: swiper,
      },
      pagination: {
         el: '.banner-slider__pagination',
      },
   });
});

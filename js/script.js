new Swiper ('.swiper', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },

   //Бесконечный слайдер
   loop: true,

   //Автопрокрутка
   autoplay: {
      //Пауза меджу прокруткой
      delay: 9000,
      // Отключить псоле ручного переключения
      disableOnInteraction: true
   },

   //Скорость прокрутки
   speed: 800,

   effect: 'fade',

   fadeEffect: {
      crossFade: true
   },

});
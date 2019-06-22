window.onload = function () {
  init();

  function init() {
    initSwiper();
    eventList();
  }

  // 点击显示隐藏
  function eventList() {
    document.querySelector(".header_menu").onclick = function () {
      document.querySelector(".main_menu").classList.toggle("hidden");
    }
  }
  // 轮播图
  function initSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        disableOnInteraction: false
      }
    })
  }
}
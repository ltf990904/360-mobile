window.onload = function () {
  init();

  function init() {
    eventList();
  }
  
  // 点击显示隐藏
  function eventList() {
    document.querySelector(".header_menu").onclick = function () {
      document.querySelector(".main_menu").classList.toggle("hidden");
    }
  }
}
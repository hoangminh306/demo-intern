$(document).ready(function() {
  if (window.screen.width <= 991) {
    $('.sr-category__dropdown-item').on('click', function (ele) {
      var ele = ele,
        scrWidth = window.screen.width,
        leftEle = ele.target.offsetLeft,
        offLeftTransition = ele.originalEvent.x;
      eleMenu = $(this).find('.dropdown-menu');
      console.log(offLeftTransition)
      setTimeout(function() {
        $(eleMenu).attr('style', $(eleMenu).attr('style') + '; ' + 'left: ' + offLeftTransition + 'px!important;');
      }, 0);
    })
  }
})
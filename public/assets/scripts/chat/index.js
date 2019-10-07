$('document').ready(function () {
  // Click btn expand
  $('#btn-chat--expand').click(function () {
    var sideBar = $('#chat-sidebar');
    var isOpenChat = sideBar.hasClass('collapsed');
    if (isOpenChat) {
      sideBar.removeClass('collapsed');
      sideBar.addClass('expanded');
    } else {
      sideBar.removeClass('expanded');
      sideBar.addClass('collapsed');
    }
  });

  // Click chat
  $('.contact-item').click(function () {
    var name = $(this).find('.contact-item--name')[0].innerHTML;
    $('.chat-popup--item .header--text')[0].innerHTML = name;
    $('#chat-sidebar__pop-up').show();
  })
  $('.chat-popup--close').click(function () {
    $('#chat-sidebar__pop-up').hide();
  })
});
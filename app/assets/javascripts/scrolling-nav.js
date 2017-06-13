var menuSections;

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  sectionActive();
  navHeight();
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  var menuSection;

  $('.navbar-list-menu li:first-child').addClass('underline-menu');

  menuSections = $.map($('.navbar-list-menu a.page-scroll'), function(section) {
    return $(section).attr('href');
  });

  $('header nav li').each(function() {
    menuSection = $(this).find('a').attr('href');
  });

  sectionActive();
  navHeight();

  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    if($('header').hasClass('op')) {
      $('header').removeClass('op');
      closeMenu();
    }
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - $('header nav').data('small')
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

function sectionActive() {
  menuSections.forEach(function(element) {
    if($(window).scrollTop() + $('header nav').height() >= $(element).offset().top) {
      $('.section-active').removeClass('section-active');
      $('header nav').find('[href="' + element + '"]').addClass('section-active');
    }
  });
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('.section-active').removeClass('section-active');
    $('header nav').find('[href="' + menuSections[menuSections.length - 1] + '"]').addClass('section-active');
  }
}

function navHeight() {
  if ($(window).scrollTop() === 0) {
    $('header nav').height($('header nav').data('big') + 'px');
  } else {
    $('header nav').height($('header nav').data('small') + 'px');
  }
}

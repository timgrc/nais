function resizeGallery() {
  $('.photo-gallery-div-page').height($('.photo-gallery-div-page').width());
}

function ForModifyGallery() {
  $("#photo_gallery_has_photo_before_true").on('click', function() {
    $('.photo_gallery_photo_before').show();
    $(".photo_gallery_photo_after label").html("Photo après");
    $('.photo-gallery-after-div').height('194px');
    $('.before-after-flag').removeClass('hidden');
    if ($('.before_thumbnail').css('background-image') !== 'none') {
      $('.before_thumbnail').removeClass('hidden');
    }
  });

  $("#photo_gallery_has_photo_before_false").on('click', function() {
    $('.photo_gallery_photo_before').hide();
    $(".photo_gallery_photo_after label").html("Photo");
    $('.photo-gallery-after-div').height('402px');
    $('.before-after-flag').addClass('hidden');
    $('.before_thumbnail').addClass('hidden');
  });

  $('#new_photo_gallery').find('input[name="photo_gallery[photo_before]"]').on('change', function (e) {
    var files = $(this)[0].files;

    if (files.length > 0) {
      $('.before_thumbnail').removeClass('hidden');
      $('.photo-gallery-form').removeClass('hidden');
      $('.before_thumbnail').css('background', `url("${window.URL.createObjectURL(files[0])}")`);
      $('.before_thumbnail').css('background-size', 'cover');
      $('.before_thumbnail').css('background-repeat', 'no-repeat');
      $('.before_thumbnail').css('background-position', 'center center');
    }
  });

  $('.edit_photo_gallery').find('input[name="photo_gallery[photo_before]"]').on('change', function (e) {
    var files = $(this)[0].files;

    if (files.length > 0) {
      $('.before_thumbnail').removeClass('hidden');
      $('.photo-gallery-form').removeClass('hidden');
      $('.before_thumbnail').css('background', `url("${window.URL.createObjectURL(files[0])}")`);
      $('.before_thumbnail').css('background-size', 'cover');
      $('.before_thumbnail').css('background-repeat', 'no-repeat');
      $('.before_thumbnail').css('background-position', 'center center');
    }
  });

  $('#new_photo_gallery').find('input[name="photo_gallery[photo_after]"]').on('change', function (e) {
    var files = $(this)[0].files;

    if (files.length > 0) {
      $('.after_thumbnail').removeClass('hidden');
      $('.photo-gallery-form').removeClass('hidden');
      $('.after_thumbnail').css('background', `url("${window.URL.createObjectURL(files[0])}")`);
      $('.after_thumbnail').css('background-size', 'cover');
      $('.after_thumbnail').css('background-repeat', 'no-repeat');
      $('.after_thumbnail').css('background-position', 'center center');
    }
  });

  $('.edit_photo_gallery').find('input[name="photo_gallery[photo_after]"]').on('change', function (e) {
    var files = $(this)[0].files;

    if (files.length > 0) {
      $('.after_thumbnail').removeClass('hidden');
      $('.photo-gallery-form').removeClass('hidden');
      $('.after_thumbnail').css('background', `url("${window.URL.createObjectURL(files[0])}")`);
      $('.after_thumbnail').css('background-size', 'cover');
      $('.after_thumbnail').css('background-repeat', 'no-repeat');
      $('.after_thumbnail').css('background-position', 'center center');
    }
  });

  $('.form-photo').on('click', '.before_cancel', function (e) {
    e.preventDefault();
    $('#new_photo_gallery').find('input[name="photo_gallery[photo_before]"]').val('');
    $('.before_thumbnail').addClass('hidden');

    if ($('.after_thumbnail').hasClass('hidden')) {
      $('.photo-gallery-form').addClass('hidden');
    }
  });

  $('.form-photo').on('click', '.after_cancel', function (e) {
    e.preventDefault();
    $('#new_photo_gallery').find('input[name="photo_gallery[photo_after]"]').val('');
    $('.after_thumbnail').addClass('hidden');

    if ($('.before_thumbnail').hasClass('hidden')) {
      $('.photo-gallery-form').addClass('hidden');
    }
  });

  $('.gallery-delete-btn').on('click', function(e) {
    e.preventDefault();
    var photoId = $(this).data('photo');
    swal({
      title: "Es-tu sûr de vouloir supprimer cette photo ?",
      // text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Confirmer",
      cancelButtonText: "Annuler",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        $.ajax({
          url: '/photo_galleries/' + photoId,
          type: 'DELETE',
          success: function(result) {
            swal("Supprimée !", "La photo a été supprimée.", "success");
            window.location.reload();
          }
        });
      } else {
        swal("Annulée !", "Opération annulée.", "error");
      }
    });
  });
}

$(window).resize(function() {
  resizeGallery();
});

$(window).load(function() {
  // $('.photo-gallery-item').removeClass("hidden");
});

$(function() {
  resizeGallery();
  ForModifyGallery();

  $('.bt-menu').on('click', function(){
    if($(this).hasClass('open')){
      closeMenu();
    } else {
      openMenu();
    }
  });

  $('header').on('click', function(event) {
    if ($(event.target).is('header')) {
      closeMenu();
    }
  });

  $('#modal-login').on('click', function() {
    $('#modal').modal('hide');
  });
});

function openMenu(){
  $('header').addClass('op');
  var menu = $('.navbar-list-menu');
  var btMenu = $('.bt-menu');
  var li = menu.find('li');
  li.removeClass('view');
  menu.animate({'left': 0}, 300, 'easeOutQuart', function(){
      var i = 0;
      var menuX = setInterval(function() {
          li.eq(i).addClass('view')
          i++;
          if(i > li.length){
            clearInterval(menuX);
          }
        }, 100);
    });
  $('.bt-menu').toggleClass('open');
}

function closeMenu(){
  $('header').removeClass('op');
  var menu = $('.navbar-list-menu');
  var btMenu = $('.bt-menu');
  var li = menu.find('li');
  li.each(function(index, element) {
    $(this).removeClass('view');
  });
  menu.animate({'left':'-200px'}, 300, 'easeInQuart');
  $('.bt-menu').toggleClass('open');
}

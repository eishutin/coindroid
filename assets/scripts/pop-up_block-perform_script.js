jQuery(function ($) {

  $('.block-perform .slider-perform .slide').on('click', function () {
    let id = $(this).attr('id1');
    let pop_text =$("div[id1=perform-pop-text-"+id+']').html();
    let pop_img = $("div[id1=perform-pop-img-"+id+']').html();
    console.log(id);

    if ($(this).hasClass('active')) {
      $('.perform-info').removeClass('show');
      $(this).removeClass('active');
      return false;
    }


    $('.block-perform .slider-perform .slide').removeClass('active');
    $(this).addClass('active');
    $("#perform-info-text").text(pop_text);
    $("#perform-info-image").attr("src", pop_img);
    $('.perform-info').addClass('show');
     if($('.perform-info').hasClass('show')){
         $(this).removeClass('show');
         return false;
     }

     $('.block-works .item-work').removeClass('show');
     $(this).addClass('open');
     $('.perform-info').addClass('show');
  });
});

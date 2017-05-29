$(function(){

  function setPanelHeight(){
    //Height of embed media player & 4 panel headers. Add 7.5 for additional border 1px on top/bottom panel-headings.
    var mediaRowHeight     = $('.embed-responsive').outerHeight();
    var panelHeadingHeight = ($('.panel-heading').outerHeight() * 4) + 8.25;

    //Available height for panel-body.
    var panelBodyHeight = mediaRowHeight - panelHeadingHeight;

    //The panel-body height is only set to the same height as the video player on desktop or larger screens.
    if($(window).width() > 991){
      $('.panel-body').css('height', panelBodyHeight + 'px');
    }
  };

  //Sets max panel body height onload and on window resize
  setPanelHeight();
  $( window ).resize(function(){
    setPanelHeight(); 
  })

  //Set text between banner slider and services
  var newBtn = `<section class="jquery-add text-center">
                  <button type="button" class="btn btn-default">See my loan options</button>
                </section>`;

  $(newBtn).insertBefore('.services-wrap');


  //Broswer view height
  var windowHeight = $(window).height();
  //Height of services-wrap from document
  var servicesHeight = $('.services-wrap').offset().top;
  //Required height of services-wrap from viewport top before appearing. Currently set to 80%
  var requiredTop = windowHeight * 0.80;
  //How far down viewport has scrolled
  var scrollHeight = servicesHeight - requiredTop;

  function fadeInServices(){
    $('.single-service').each(function(index) {
      $(this).delay(400*index).animate({opacity: 1}, 'fast');
    });
  }

  //Checks to see if service-wrap is within viewport % onload. Fades in if true, otherwise fade in will occur on scroll
  var windowScrollHeight = $(window).scrollTop();
  if(windowScrollHeight >= scrollHeight){
    fadeInServices();
  }

  $(window).scroll(function(){
    //How far the document has scrolled
    var windowScrollHeight = $(window).scrollTop();    
    if(windowScrollHeight >= scrollHeight){
      fadeInServices();
      $(window).off('scroll');
    }
  });


  //Sets active accordion panel
  if ($('#accordion').length) {
    var $panels = $('.panel');

    $panels.first().addClass('active');

    $('.panel-heading a').on('click', function (e) {
      $this = $(this);
      $panel = $this.parents('.panel');
      $panels.not( $panel ).removeClass('active');
      $panel.toggleClass('active');
      });
  }

  //Footer Copyright
  var year = new Date().getFullYear();
  $('.copyright').prepend('&copy;' + year);

  $('footer a').on('click', function(){
    alert('Thanks for visiting');
  })
});
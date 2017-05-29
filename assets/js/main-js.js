$(function(){

  function setPanelHeight(){
    //Height of embed media player & 4 panel headers. Add 8 for additional border 1px on top/bottom panel-headings.
    var mediaRowHeight     = $('.embed-responsive').outerHeight();
    var panelHeadingHeight = ($('.panel-heading').outerHeight() * 4) + 8;

    //Available height for panel-body.
    var panelBodyHeight = mediaRowHeight - panelHeadingHeight;
    $('.panel-body').css('height', panelBodyHeight + 'px');
  };

  setPanelHeight();

  $( window ).resize(function(){
    setPanelHeight(); 
  })

  //Footer Copyright
  var year = new Date().getFullYear();
  $('.copyright').prepend('&copy;' + year);
});
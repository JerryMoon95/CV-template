$(window).load(function(){
  var height;
  calcHeight();
  $("#btn-menu").on("click", function(){
    $("nav").toggleClass("show");
  });
  
	$(window).resize(function(){
    calcHeight();
  });

  $(".bg-photo").click(function(){
    $("#modal").modal();
  });

  function calcHeight(){
    height = $("#main-photo").height();
    $("#empty").height(height + "px");
    // console.log(height);
  }


});
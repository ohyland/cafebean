/******** BEVERAGES page *******/

$(document).ready(function () {
  /****** HAMBURGE MENU ******/
  $.fatNav();
  
  
  //select all the elements with the class '.beverages-carousel', inizialice carousel
  $(".beverages-carousel").slick({
    dots: false,
    infinite: true,
    speed: 200,
    arrows: false,
    Slide: true,
    draggable: false,
    cssEase: "ease-in-out"
  });
  /*select element with class '.item1' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 0.*/
  $(".item1").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 0);
    $(".beverages-description").slick("slickGoTo", 0);
  });

  /*select element with class '.item2' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 1.*/
  $(".item2").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 1);
    $(".beverages-description").slick("slickGoTo", 1);
  });

  /*select element with class '.item3' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 2.*/
  $(".item3").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 2);
    $(".beverages-description").slick("slickGoTo", 2);
  });

	/*select element with class '.item4' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 3.*/
  $(".item4").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 3);
    $(".beverages-description").slick("slickGoTo", 3);
  });

	/*select element with class '.item5' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 4.*/
  $(".item5").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 4);
    $(".beverages-description").slick("slickGoTo", 4);
  });

	/*select element with class '.item6' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 5.*/
  $(".item6").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 5);
    $(".beverages-description").slick("slickGoTo", 5);
  });

	/*select element with class '.item7' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 6.*/
  $(".item7").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 6);
    $(".beverages-description").slick("slickGoTo", 6);
  });

	/*select element with class '.item8' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 7.*/
  $(".item8").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 7);
    $(".beverages-description").slick("slickGoTo", 7);
  });

	/*select element with class '.item9' and add an event, select the element with class '.beverages-description' and class '.beverages-carousel' and tell slick slider to go to position 8.*/
  $(".item9").on("mouseover", function () {
    $(".beverages-carousel").slick("slickGoTo", 8);
    $(".beverages-description").slick("slickGoTo", 8);
  });

	//select all the elements with the class '.beverages-description', inizialice carousel
  $(".beverages-description").slick({
    //apply this configurations to the carousel.
    dots: false,
    infinite: true,
    speed: 350,
    arrows: false,
    Slide: true,
    draggable: false,
    cssEase: "ease-in-out",
  });



  /******* ABOUT page ******/
  
  //select all the elements with the class '.about-carousel', inizialice carousel
  $('.about-carousel').slick({
	//apply this configurations to the carousel.
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

});


  /******* INDEX Page ******/
	//select class of .index-slider 
	$('#index-slider').slick({
		/*Slick Slider Config*/
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay:true,
		autoplaySpeed:2000
	});
			

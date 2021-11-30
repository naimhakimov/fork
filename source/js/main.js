// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя
$(document).ready(function () {
  let hide = false;
  // $('input[type=tel]')
  // 	.inputmask("8 (999) 999 99 99");


  // $('.js-popup-img')
  // 	.magnificPopup({
  // 		type:'image',
  // 		closeOnContentClick: true,
  // 		fixedContentPos: true,
  // 		mainClass: 'mfp-no-margins mfp-with-zoom',
  // 		image: {
  // 			verticalFit: true
  // 		},
  // 		zoom: {
  // 			enabled: true,
  // 			duration: 300
  // 		}
  // 	});


  /* header */

  $('.burger-icon').click(() => {
    hide = !hide;
    if (!hide) {
      $('.burger-icon').css({'backgroundColor': '#77B900'});
      $('.menu-open').addClass('active');
      $('body').css({'overflow': 'hidden'});
    } else {
      $('.burger-icon').css({'backgroundColor': 'black'});
      $('.menu-open').removeClass('active');
      $('body').css({'overflow': 'visible'});
    }
  })

});

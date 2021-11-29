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
  $('.menu-open').css({'display': 'none'});

  $('.burger-icon').click(() => {
    hide = !hide;
    if (!hide) {
      $('.burger-icon').css({'backgroundColor': 'black'});
      $('.menu-open').css({'display': 'none'});
      $('body').css({'overflow': 'visible'});
    } else {
      $('.burger-icon').css({'backgroundColor': '#77B900'});
      $('.menu-open').css({'display': 'flex'});
      $('body').css({'overflow': 'hidden'});
    }
  })

});

$(document).ready(function(){
	$('#learn').click(function(){
		$('html, body').animate({
			scrollTop:$(window).height() - 62
		},300, "swing");
	});



	$(window).scroll(function(){
		var scrl = $(window).scrollTop();

		if(scrl > 75){
			$('header').css({
				'background-color':'rgb(93,145,255)',
				'box-shadow':'0px 3px 3px 1px rgba(10,10,10,0.1)'
			});
		}else{
			$('header').css({
				'background-color':'rgba(256,256,256,0)',
				'box-shadow':'none'
			});			
		}

		if(scrl < $('#p2').offset().top - 160){ 
			$('.menu-item').removeClass('active-menu-item');
			$('#mi1').addClass('active-menu-item');		
		}


		if( scrl >= ($('#p2').offset().top - 160) && (scrl < $('#p3').offset().top - 160)){ 
			$('.menu-item').removeClass('active-menu-item');
			$('#mi2').addClass('active-menu-item');		
		}

		if( scrl >= ($('#p3').offset().top - 160) && (scrl < $('#p4').offset().top - 160)){ 
			$('.menu-item').removeClass('active-menu-item');
			$('#mi3').addClass('active-menu-item');		
		}

		if( (scrl >= $('#p4').offset().top - 160) && (scrl < $('#p5').offset().top - 160)){ 
			$('.menu-item').removeClass('active-menu-item');
			$('#mi4').addClass('active-menu-item');		
		}

		if( (scrl >= $('#p5').offset().top - 160)){ 
			$('.menu-item').removeClass('active-menu-item');
			$('#mi5').addClass('active-menu-item');		
		}


	});

	if(typeof(window.localStorage) !== undefined) {

		if(localStorage.numFb == null || localStorage.numPpl == null){

			localStorage.numFb = 125125164;
			localStorage.numPpl = 243198922;
		
			setInterval(function(){
				$('#stat1').text(parseInt($('#stat1').text())+1);
				$('#stat2').text(parseInt($('#stat2').text())+1);				

				localStorage.numFb = $('#stat1').text();
				localStorage.numPpl = $('#stat2').text();

			}, 800);
		}else{

			$('#stat1').text(localStorage.numFb);
			$('#stat2').text(localStorage.numPpl);

			setInterval(function(){

				$('#stat1').text(parseInt($('#stat1').text())+1);
				$('#stat2').text(parseInt($('#stat2').text())+1);				

				localStorage.numFb = $('#stat1').text();
				localStorage.numPpl = $('#stat2').text();

			}, 800);
		}
	}else{
		setInterval(function(){
			$('#stat1').text(parseInt($('#stat1').text())+1);
			$('#stat2').text(parseInt($('#stat2').text())+1);				
		}, 800);

	}

	$('.menu-item').click(function(e){
		var id = $(this).attr('id').substr(2);
		if(id == 5){
			$('html, body').animate({
				scrollTop:$('#p5').offset().top + 62
			},400, "swing");
			return false;
		}
		$('html, body').animate({
			scrollTop:$('#p'+id).offset().top - 62
		},400, "swing");
	});

});

$(window).load(function(){


		$('#load').css('opacity','0');

		setTimeout(function(){
		$('#mi1').css('opacity','1');

			setTimeout(function(){
				$('#mi2').css('opacity','1');
			}, 200);
			setTimeout(function(){
				$('#mi3').css('opacity','1');
				$('#load').css('display','none');
			}, 400);
			setTimeout(function(){
				$('#mi4').css('opacity','1');
			}, 600);
			setTimeout(function(){
				$('#mi5').css('opacity','1');
			}, 800);

			$('h1').css({
				'margin-top':'-150px',
				'opacity':'1'
			});
	
			$('.main-desc, #learn').css('opacity','1');

		}, 800);

	

});
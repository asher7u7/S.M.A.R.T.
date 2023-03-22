$(document).ready(main);

var contador = 1;

function main(){
	$('#btn').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('.Navegacion').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.Navegacion').animate({
				left: '-100%'
			});
		}
	});
};

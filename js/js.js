$(document).ready(menu);

var contador = 1;

function menu(){
	$('#btn').onclick(function(){ 

		if(contador == 1){
			$('.Navegacion').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador == 1;
			$('.Navegacion').animate({
				left: '-100%'
			});
		}
	});
};


$(document).ready(function(){
	
	$('.fancybox').fancybox({
            padding : 0,
            openEffect  : 'elastic',
            closeBtn: true,
            fitToView: true
      });
	
	 $(".scroll").click(function(event){        
        event.preventDefault();
        if($('#menu').css('position') == 'fixed'){
			 $('html,body').animate({scrollTop:$(this.hash).offset().top - $('#menu').height() + 1}, 500);
		 }else{
			 $('html,body').animate({scrollTop:$(this.hash).offset().top});
		 }
        
	});
	
	
});

window.onload = function(){
	var $grid = $('.grid-portfolio').isotope({	//inicia o plugin e atribui ele à variavel $grid
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});
	    
    $grid.isotope({filter: '.htmlcss'});
	
	$('.filters-options').on( 'click', 'button', function() {	//atribui todos a todos os botoes dentro do elemento de classe '.filter-options' o evento onclick
		var filterValue = $(this).attr('data-filter');	//pega o valor do atributo data-filter do botao clicado
		$grid.isotope({filter: filterValue});	//passa pro plugin o valor que eh pra ser aplicado no filtro(q é o valor q foi pego na linha acima)
		
		$('.filters-options button').removeClass('is-checked');	//remove a classe 'is-checked' de todos os botoes do filtro
		$(this).addClass('is-checked');	//adiciona a classe 'is-checked' somente ao botao q foi clicado
	});
}
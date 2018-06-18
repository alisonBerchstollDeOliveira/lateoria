var a = 0;
var b = 0;
var prision_a=0;
var prision_b=0;
var x = Math.floor((Math.random() * 10) + 1);
var ronda=1;

if (x>=6) {
		$('#prisionero_b').text('Tu amigo decidio cooperar.');
	}else{
		$('#prisionero_b').text('Tu amigo no decidio cooperar.');
	}
function Cooperacion(prisionera_a,prisionero_b) {
	if(prisionera_a=='SI' && prisionero_b=='SI'){
		prision_a+=1;
		prision_b+=1;
		$('#prisionero_a').text('En la última ronda, decidiste cooperar.');
	}else{
		if(prisionera_a=='SI' && prisionero_b=='NO'){
			prision_a+=2;
			prision_b+=3;
			$('#prisionero_a').text('En la última ronda, decidiste cooperar.');
		}else{
			if(prisionera_a=='NO' && prisionero_b=='NO'){
				prision_a+=0;
				prision_b+=0;
				$('#prisionero_a').text('En la última ronda, decidiste no cooperar.');
			}else{
				if(prisionera_a=='NO' && prisionero_b=='SI'){
					prision_a+=4;
					prision_b+=2;
					$('#prisionero_a').text('En la última ronda, decidiste no cooperar.');
				}
			}
		}
	}
	x = Math.floor((Math.random() * 10) + 1);
	if (x>=6) {
		$('#prisionero_b').text('Tu amigo decidio cooperar.');
	}else{
		$('#prisionero_b').text('Tu amigo no decidio cooperar.');
	}
	console.log(prision_b);
	console.log(prision_a);
	ganador();
	$('#ronda').text('Ronda '+ ++ronda);

}

$('#si').click(function(){
	if (x>=6) {
		Cooperacion('SI','SI');	
	}else{
		Cooperacion('SI','NO');
	}
});

$('#no').click(function(){
	if (x>=6) {
		Cooperacion('NO','SI');	
	}else{
		Cooperacion('NO','NO');
	}
});

function ganador(){
	if (ronda==6) {
		$('#principal').html('<div class="col s12 center" style="margin-top: 10%"><div class="row"><h4>Resultado</h4></div><div class="row"><h6 id="tu">Tu: '+prision_a+' años de prisión.</h6></div><div class="row"><h6 id="amigo">Amigo: '+prision_b+' años de prisión.</h6></div></div><div class="col s12" style="margin-top: 50px"><div class="row"><div class="col s6 center"><a id="inicio_session" class="waves-effect waves-light btn" onClick="history.go(0)">Nueva Partida</a></div><div class="col s6 center"><a id="inicio_session" class="waves-effect waves-light btn" href="../">Pagina Principal</a></div></div></div><script type="text/javascript"></script>');
	}
}
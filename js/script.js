var a = 0;
var b = 0;
var orden = ['Orden'];

//						Prisionero a 		Prisionero B
//preguntas 			SI 	NO 				si 	no
var preguntas = [
'Conoces al Prisionero B',
[4,6,4,5,4,6,4,4],
'Usted conoce a Alison',
[2,7,3,3,2,2,7,2]
];
console.log(preguntas);

function selector(argument) {
	if (argument=='SI') {
		a++;
		orden.push('SI');
		console.log(orden);
	}else{
		b++;
		orden.push("NO");
		orden.push(orden);
		console.log(orden);
	}
}

$('#si').click(function(){
	selector('SI');
});

$('#no').click(function(){
	selector('NO');
});
let notasAlunoA = { 'Português': [ 10, 3, 6, 6 ],
		'Matemática': [5.5, 6.0, 6, 5],
		'História': [7.5, 6.5, 10, 8.5]
		};

let calcNote = (materias) => {    
	var calc = materias[ 0 ] + materias[ 1 ] + materias[ 2 ] + materias[ 3 ]
	console.log( "Cauculando notas..." )

	if ( calc >= 22.5 ){
			console.log( "Parabens pirralho foi aprovado!" )
			console.log( 'Pontuação:', calc )
	}else{
			console.log( "Reprovado pivete!  ")
			console.log( 'Pontuação:', calc )
	};
};

calcNote(notasAlunoA.Português)

calcNote(notasAlunoA.Matemática)

calcNote(notasAlunoA.História)

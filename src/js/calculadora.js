var Calculadora = {
	adicionar: function( num1 , num2 ){

		if( isNaN(num1) || isNaN(num2)) { return 0 }
		if( num1 === null || num2 === null ){return 0}
		


		num1 = parseFloat( num1 )
		num2 = parseFloat( num2 )

		return num1 + num2;	
	},
	subtrair: function( num1 , num2 ){
		if( isNaN(num1) || isNaN(num2)) { return 0 }
		
		return num1 - num2;	
	},
	multiplicar: function( num1 , num2 ){
		if( isNaN(num1) || isNaN(num2)) { return 0 }
		
		return num1 * num2;	
	},
	dividir: function( num1 , num2 ){
		if( isNaN(num1) || isNaN(num2)) { return 0 }
		if( num1 === null || num2 === null ){return 0}

		if(num2 === 0){
			return "Erro"
		}
			return -num1 / -num2;	

	}
}


if( typeof module !== 'undefined' && typeof module.exports !== 'undefined')
{
	module.exports = Calculadora
}
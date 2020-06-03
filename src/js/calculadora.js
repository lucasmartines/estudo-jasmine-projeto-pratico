var Calculadora = {

	ADICAO:'+',
	SUBTRACAO:'-',
	DIVISAO:'/',
	MULTIPLICACAO:'*',

	adicionar: function( num1 , num2 ){
		return this.calcular(num1,num2,this.ADICAO)
	},
	subtrair: function( num1 , num2 ){
		return this.calcular(num1,num2,this.SUBTRACAO)
	},
	multiplicar: function( num1 , num2 ){
		return this.calcular(num1,num2,this.MULTIPLICACAO)
	},
	dividir: function( num1 , num2 ){

		if(num2 === 0){
			return "Erro"
		}
		return this.calcular(num1,num2,this.DIVISAO)

	},
	calcular: function( num1,num2,operacao)
	{
		num1 = parseFloat( num1 )
		num2 = parseFloat( num2 )

		
		if( isNaN(num1) || isNaN(num2)) { return 0 }
		if( num1 === null || num2 === null ){return 0}

		switch(operacao){
			case this.SUBTRACAO :
				return num1 - num2
			case this.ADICAO:
				return num1 + num2
			case this.MULTIPLICACAO:
				return num1 * num2
			case this.DIVISAO:
				return num1 / num2
		}
	}
}


if( typeof module !== 'undefined' && typeof module.exports !== 'undefined')
{
	module.exports = Calculadora
}
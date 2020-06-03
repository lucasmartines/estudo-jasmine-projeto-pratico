describe('Suite de testes de adição',function(){
	
	var Calculadora = require('./../../src/js/calculadora.js')	

	it('deve retornar 5 para 2 e 3',function()
	{
		expect( Calculadora.adicionar(2,3)).toEqual(5)
	})

	it('deve retornar 6 para 9 e -3 no formato Texto',function(){
		expect( Calculadora.adicionar('9','-3')).toEqual(6)
	})

	it('deve retornar 4.5 para a soma de 1.5 e 3',function(){
		expect( Calculadora.adicionar(1.5,3)).toEqual(4.5)
	})

	it('deve retornar 0 quando o valor 1 não for numerico',function(){
		expect(Calculadora.adicionar(undefined,5) ).toEqual(0)
	})

	it('deve retornar 0 quando o valor 2 não for numerico',function(){
		expect(Calculadora.adicionar(0,undefined) ).toEqual(0)
	})
})
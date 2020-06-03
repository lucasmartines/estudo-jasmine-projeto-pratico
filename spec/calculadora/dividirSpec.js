describe('Suite de teste de divisão',function(){

    let Calculadora = require('../../src/js/calculadora.js')


    it("deve retornar 4 quando realizar a divisão de 8 / 2 ",function(){

        expect( Calculadora.dividir(8,2) ).toEqual(4)
    })

    it("deve retornar 4 quando realizar a divisão de '8' / '2' ",function(){

        expect( Calculadora.dividir('8','2') ).toEqual(4)
    })

    it("deve retornar 4 quando realizar a divisão de 10 / 2.5 ",function(){

        expect( Calculadora.dividir( 10 , 2.5 ) ).toEqual(4)
    })

    it("deve retornar 4 quando realizar a divisão de 10 / 2.5 ",function(){

        expect( Calculadora.dividir( '10' , '2.5' ) ).toEqual(4)
    })

    it("deve retornar zero se receber parametros undefined",function(){
        
        expect( Calculadora.dividir( undefined , undefined ) ).toEqual(0)
        expect( Calculadora.dividir( undefined , null ) ).toEqual(0)
        expect( Calculadora.dividir( null , null ) ).toEqual(0)
        expect( Calculadora.dividir( null , undefined ) ).toEqual(0)
        expect( Calculadora.dividir( 0 , null ) ).toEqual(0)
    })

    it('deve retornar "erro" para a divisão por 0',function(){
        expect( Calculadora.dividir(5,0)).toEqual("Erro")
    })

    
    
    
})
describe("Suite de teste de subtração",function(){

    let Calculadora = require('../../src/js/calculadora.js')

    it('deve retornar 5 para 8 e 3',function(){
        expect(Calculadora.subtrair(8,3)).toEqual(5)
    })

    it('deve retornar 5 para 8 e 3 em formato de texto',function(){
        expect(Calculadora.subtrair('8','3')).toEqual(5)
    })

    it('deve retornar 4 para 5.5 - 1.5',function(){
        expect(Calculadora.subtrair(5.5,1.5)).toEqual(4)
        expect(Calculadora.subtrair('5.5','1.5')).toEqual(4)
    })
    it('deve retornar 0 se receber o primeiro parametro invalido',function(){
        expect(Calculadora.subtrair(undefined,2)).toEqual(0)
    })
    it('deve retornar 0 se receber o segundo parametro invalido',function(){
        expect(Calculadora.subtrair(0,undefined)).toEqual(0)
    })
})
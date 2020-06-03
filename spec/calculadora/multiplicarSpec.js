describe('Suite de teste para multiplicação',function( ) 
{
    let Calculadora = require('../../src/js/calculadora.js')

    it('Deve retornar 25 para os parametros 5 , 5 ou -5 , -5 ',function()
    {
        expect(Calculadora.multiplicar(5,5)).toEqual(25)
        expect(Calculadora.multiplicar(-5,-5)).toEqual(25)
    })

    it('Deve retornar 25 para os parametros textuais "5" , "5" ',function(){
        expect(Calculadora.multiplicar('5','5')).toEqual(25)
    })
    it('Deve retornar 25 para os parametros textuais "-5" , "-5" ',function(){
        expect(Calculadora.multiplicar('-5','-5')).toEqual(25)
    })

    it("Deve retornar 0 se um dos parametros foram não definidos ou nulos",function(){
        expect(Calculadora.multiplicar(20,undefined)).toEqual(0)
        expect(Calculadora.multiplicar(undefined,20)).toEqual(0)

        expect(Calculadora.multiplicar(undefined,undefined)).toEqual(0)
        expect(Calculadora.multiplicar(null,null)).toEqual(0)
        expect(Calculadora.multiplicar(undefined,null)).toEqual(0)
        expect(Calculadora.multiplicar(null,undefined)).toEqual(0)
        expect(Calculadora.multiplicar(undefined,0)).toEqual(0)

        expect(Calculadora.multiplicar(null,20)).toEqual(0)
        expect(Calculadora.multiplicar(20,null)).toEqual(0)
        
        expect(Calculadora.multiplicar(20,'null')).toEqual(0)
        
    })
})
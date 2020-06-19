const cryptografy = require('../../global/cryptography');
describe('test  encript and decript', () => {
        let encripted;
        const ENCRIPT_VALUE = '12';
    test('encript wait for a token type string', async () => {
        encripted = await cryptografy.encript(ENCRIPT_VALUE);
       expect(typeof await encripted).toBe('string');
     });
   
    test('decript wait for a value type string', async()=>{
    expect(await cryptografy.decript(encripted)).toBe(ENCRIPT_VALUE)
    })  
});



const validation = require('../../global/validation');

test('validation email expect true',()=>{
    let email = 'reginaldo.melo56@gmail.com'
    expect(validation.emailValid(email)).toBe(true);
});

test('minLength string',()=>{
    expect(validation.minLength('a',2)).toEqual(false);
})

test('maxLength string',()=>{
    expect(validation.maxLength('1111',1)).toEqual(false);
})  

test('date_of_birth valid',()=>{
    expect(validation.dateOfBirthValid('1995-08-06')).toEqual(true);
})
test('password and confirmPassword is equal',()=>{
    expect(validation.equalPassword('123456','123456')).toEqual(true);
})
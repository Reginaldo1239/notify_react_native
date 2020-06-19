const Validation = require('../global/validation');

describe('nameSocialNetwork is valid name =youtube || instagram || twitter|| twitch',()=>{
    test('test name youtube',()=>{
        expect(Validation.nameSocialNetwork('youtube')).toEqual(true);
    })
    test('test name instagram',()=>{
        expect(Validation.nameSocialNetwork('instagram')).toEqual(true);
    })
    test('test name twitter',()=>{
        expect(Validation.nameSocialNetwork('twitter')).toEqual(true);
    })
    test('test name twitch',()=>{
        expect(Validation.nameSocialNetwork('twitch')).toEqual(true);
    })
    test('test fake name mySocialNetwork',()=>{
        expect(Validation.nameSocialNetwork('mySocialNetwork')).toEqual(false);
    })
})

describe('isString',()=>{
    test('test if value is a string',()=>{
        expect(Validation.isString('123123213')).toEqual(true);
    })
    test('test if value type boolean return false',()=>{
        expect(Validation.isString(true)).toEqual(false);
    })
    test('test if value type number return false',()=>{
        expect(Validation.isString(123)).toEqual(false);
    } )
})
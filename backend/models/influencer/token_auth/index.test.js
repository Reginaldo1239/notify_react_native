const tokenAuthModel = require('./index');
const Db = require('../../../db')
test('insert new solicit auth 2.0',async ()=>{
    let post = { id_user:123,
    code:'dsfdfd',
    social_network:'youtube',
    status:'init',}
       expect(await tokenAuthModel.initSolicitAuth(post)).toHaveProperty('insertId')
})  

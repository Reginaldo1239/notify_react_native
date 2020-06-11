const request = require('supertest');
const app = require('../../../app');



describe('login user',()=>{
    
    it('login user success',async ()=>{
        let res = await request(app). 
                    post('/login').
                    send({email:'reginaldo@gmail.com',password:'123456'})
                   expect(res.statusCode).toEqual(200);
                    expect(res.body).toHaveProperty('token');
    });

 
    it('login error, password or email incorrect',async ()=>{
        let res =await request(app). 
                            post('/login').
                            send({email:'regiom',password:''})
                            expect(res.statusCode).toEqual(400);
                            expect(res.body).toHaveProperty('msg');
    })
})
const request = require("supertest");
const app = require('../../../app');
describe('POST /users', function() {
    it('responds with json',async function() {
      const res = await request(app)
        .post('/register_user')
        .send({name: 'reginaldo',email:'reginaldo.melo56@gmail.com',date_of_birth:'1995-06-08',country:'brazil',password:'123456',confirm_password:'123456'})
        .set('Accept', 'application/json')
        expect(res.statusCode).toBe(200);
    
  
    });
  }); 
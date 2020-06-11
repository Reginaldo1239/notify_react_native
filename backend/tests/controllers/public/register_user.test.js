const request = require("supertest");
const app = require('../../../app');
describe('register new use', () => {
  it('register new user', async () => {
      let now = new Date();
      now = now.getFullYear()+now.getMilliseconds()
    const res = await request(app)
      .post('/register_user')
      .send(
        {name: 'reginaldo',email:'ax12x30szd'+now+'d116@gmil.com',date_of_birth:'1995-06-08',country:'brazil',password:'123456',confirm_password:'123456'}
      )

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('affectedRows')
   
  })
  it('register new user', async () => { 
    const res = await request(app)
      .post('/register_user')
      .send(
        {name: 'reginaldo',email:'ax12x30szdd116@gmil.com',date_of_birth:'1995-06-08',country:'brazil',password:'123456',confirm_password:'123456'}
      )
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('msg')
      
 
  })
})
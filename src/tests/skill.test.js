import chai from 'chai'

import chaiHttp from 'chai-http'
import request from 'supertest'
import app from '../../index.js'

import {newsletterModel, articlesModel} from '../modules/models.js'

chai.use(chaiHttp)

describe('Skills', function(){
     
    it('it should GET all the Skills', (done) => {
        chai.request(app)
            .get('/api/skills/view')
            .end((err, res) => {
                if(err) done(err)
                chai.expect(res).have.status(200);
                chai.expect(res.body).length(res.body.length).greaterThan(0);
                done();
            })
    },10000);
    it("should return 403 if no Authorization", (done)=>{
        chai.request(app)
        .post("/api/skills/add")
        .send(
            {"title":"json"},
            {"skill_image":"skills.png"},
        )
        .then((res) =>{
            chai.expect(res).to.have.status(403)
            done()
        })
        .catch((err) =>{
            done(err)
        })
            
    },5000)
})

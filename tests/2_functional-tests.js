const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    test('nomer1',()=>{
        chai.request(server)
            .post('/api/solve')
            .send({puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'})
            .end((err,res)=>{
                assert.equal(res.status, 200)
                console.log(res.body)
            })
    })

});


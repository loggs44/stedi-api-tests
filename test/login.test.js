import assert from 'assert';
import login from '../utils/login.mjs'

it("Login API should return a valid login token", async() => { 

    const loginToken = await login({userName:'tom.tester3@hotmail.com', password:'P@ssw0rd'})
 
    assert.equal(loginToken.length,36);
 } 
 );
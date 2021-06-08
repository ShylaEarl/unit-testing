let app = require('../server');
let testServer = require('supertest');

describe('Test user router, root path GET', () => {
    test('when not logged in we get a 403 status', async () => {
        const response = await testServer(app).get('/api/user');
        expect(response.statusCode).toBe(403);
    })

    test('when logged in, we get back the logged in user & 200 status', async () => {
        let agent = testServer.agent(app);

        const response = await agent.post('/api/user/login')
            .send( {username: 'BruisedViolet', password: 'bruisedviolet'} );
        expect( response.statusCode ).toBe(200);

        const userResponse = await agent.get('/api/user/');
        expect( userResponse.statusCode ).toBe(200);
        expect( userResponse.body.username ).toBe('BruisedViolet');
    })
})

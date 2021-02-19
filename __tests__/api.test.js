const { app } = require('../app.js');
const { jewelry } = require('../data.js');
const supertest = require('supertest');
const { it, expect } = require('@jest/globals');
const request = supertest(app);

it('should respond with all jewelry items',

    async (done) => {
        const expectation = {
            results: jewelry
        };

        const response = await request.get('/jewelry');

        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();

    });

it('should respond with one specific jewelry item',

    async (done) => {
        const expectation = {
            results: {
                id: 3,
                name: 'constantine',
                description: 'turquoise set in sterling silver on silver band',
                price: 75,
                image: 't.png',
                size: '7.5',
                weight: '8 grams',
                stone: 'turquise',
                necklace: false,
            }
        };

        const response = await request.get('/jewelry/3');

        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();

    });



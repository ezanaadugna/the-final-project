const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const request = require('supertest');
const app = require('../app'); 
const BuildingController = require('../controllers/buildingController');

const mock = new MockAdapter(axios);

describe('BuildingController - getBuildingsInArea', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should return buildings in the area', async () => {
    const latitude = 51.5182;
    const longitude = -0.1525;
    const mockResponse = {
     
        results: [
          {
            name: 'Building 1',
            vicinity: 'Address 1',
            geometry: {
              location: { lng: -0.1525, lat: 51.5182 },
            },
          },
        ],
      
    };
    mock
    .onGet(/maps.googleapis.com\/maps\/api\/place\/nearbysearch\/json/)      // .onGet('https://google.com')
      .reply(200, mockResponse);

    const response = await request(app).get(
      `/buildings?latitude=${latitude}&longitude=${longitude}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        name: 'Building 1',
        description: 'Address 1',
        location: {
          type: 'Point',
          coordinates: [-0.1525, 51.5182],
        },
      },
    ]);
  });
});

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const request = require('supertest');
const app = require('../app'); 
const BuildingController = require('../controllers/buildingController'); 

const mock = new MockAdapter(axios);

describe('BuildingController', () => {
  afterEach(() => {
    mock.reset(); 
  });

  it('should return buildings in the area', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;
    const mockResponse = {
      data: {
        results: [
          {
            name: 'Building 1',
            vicinity: 'Address 1',
            geometry: {
              location: { lng: -122.4194, lat: 37.7749 },
            },
          },
        ],
      },
    };
    mock.onGet(/maps.googleapis.com\/maps\/api\/place\/nearbysearch\/json/).reply(200, mockResponse);


    const response = await request(app).get(`/buildings?latitude=${latitude}&longitude=${longitude}`);


    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        name: 'Building 1',
        description: 'Address 1',
        location: {
          type: 'Point',
          coordinates: [-122.4194, 37.7749],
        },
      },
 
    ]);
  });

  it('should handle errors and return an error response', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;
    mock.onGet(/maps.googleapis.com\/maps\/api\/place\/nearbysearch\/json/).reply(500, { error: 'Server error' });

   
    const response = await request(app).get(`/buildings?latitude=${latitude}&longitude=${longitude}`);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal server error' });
  });

});

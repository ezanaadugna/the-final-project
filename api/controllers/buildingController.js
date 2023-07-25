const axios = require('axios'); 
const app = require('../app');


const BuildingController = {

    getBuildingsInArea: async (req, res) => {
        try {
          const { latitude, longitude } = req.query; 
    
          const apiKey = 'AIzaSyA9ZlYjSDRTLzli0m0ZZw09kXzq7pkN98w';
          const radius = 5000; 
          const placeType = 'museum|art_gallery|tourist_attraction|point_of_interest|historical_site|church|cathedral|synagogue|mosque|historical_monument|landmark|archaeological_site'; 
    
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${placeType}&key=${AIzaSyA9ZlYjSDRTLzli0m0ZZw09kXzq7pkN98wy}`
          );
        
          const buildings = response.data.results.map((result) => ({
            name: result.name,
            description: result.vicinity,
            location: {
              type: 'Point',
              coordinates: [result.geometry.location.lng, result.geometry.location.lat],
            },

          }));
    
          return res.json(buildings);
        } catch (err) {
          console.error('Error fetching buildings:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
      },
    
      getBuildingDetails: async (req, res) => {
        try {
          const placeId = req.params.id; 
    
          const apiKey = 'AIzaSyA9ZlYjSDRTLzli0m0ZZw09kXzq7pkN98w';
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
          );
    

          const building = {
            name: response.data.result.name,
            description: response.data.result.vicinity,
            location: {
              type: 'Point',
              coordinates: [
                response.data.result.geometry.location.lng,
                response.data.result.geometry.location.lat,
              ],
            },
          };
    
          return res.json(building);
        } catch (err) {
          console.error('Error fetching building details:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
      },
    };

module.exports = BuildingController;
const axios = require('axios'); 
const app = require('../app');


const BuildingController = {

    getBuildingsInArea: async (req, res) => {
        try {
          const { latitude, longitude } = req.query; 
    
          const apiKey = process.env.GOOGLE_MAPS_API_KEY; 
          const radius = 5000; 
          const placeType = 'museum|tourist_attraction|point_of_interest|historical_site|church|cathedral|synagogue|mosque|historical_monument|landmark|archaeological_site';
    
          const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${placeType}&key=${apiKey}`;
          // const apiUrl = `https://google.com`;
          console.log('API URL:', apiUrl);

         
          const response = await axios.get(apiUrl);
          console.log('Response from Google Maps API:', response.data.results[0]);

         const results = response.data.results;
          if (!results || results.length === 0) {
            return res.status(404).json({ message: 'No buildings found in the area' });
          }

          const buildings = response.data.results.map((result) => ({
            name: result.name,
            description: result.vicinity,
            location: {
              type: 'Point',
              coordinates: [result.geometry.location.lng, result.geometry.location.lat],
            },
            placeId: result.place_id,

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
    
          const apiKey = process.env.GOOGLE_MAPS_API_KEY; ;
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
          );
    
          const photos = response.data.result.photos.slice(0, 3).map((photo) => ({
            url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photo.width}&photoreference=${photo.photo_reference}&key=${apiKey}`,
            attribution: photo.html_attributions[0],
          }));

          const building = {
            name: response.data.result.name,
            description: response.data.result.vicinity,
          /*  location: {
              type: 'Point',
              coordinates: [
                response.data.result.geometry.location.lng,
                response.data.result.geometry.location.lat,
              ],
             },
          */   
            photos: photos,
            address: response.data.result.formatted_address
          };
    
          return res.json(building);
        } catch (err) {
          console.error('Error fetching building details:', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
      },
    };

module.exports = BuildingController;
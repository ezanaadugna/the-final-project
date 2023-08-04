# MapChat
MapChat is a React Native app built with Expo that allows architecture enthusiasts to explore buildings around them and generate pick up lines based on those buildings.
![Image Alt Text](mapchat.png)
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)
### Tech Stack
<p align="left">
 <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
 <img src="https://img.shields.io/badge/jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
 <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
 <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
 <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
 <img src="https://img.shields.io/badge/cypress-%23172F2E.svg?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress" />
</p>
## About<br>
- Users can search for nearby architectural buildings on a map
- They can select a building to see photos and details
- An AI bot generates tailored pick up lines about the building
- Pick up lines can be shared and copied
<br>
## MapChat uses:<br>
- React Native and Expo for the frontend
- Google Maps API for map data
- OpenAI for generating building-related pick up lines
- React Navigation for routing between screens
 <br>
## Getting Started<br>
### Prerequisites<br>
- Node.js and npm
- Expo CLI - npm install -g expo-cli
- Expo Go app on your mobile device<br>
### Installation<br>
npm install
#For Testing
npm install @testing-library/react-native babel-jest @babel/preset-env jest-expo react-test-renderer axios-mock-adapter expo-clipboard --save-dev
#Start the dev server
npm start & npx expo
Open the Expo Go app and scan the QR code to run the app
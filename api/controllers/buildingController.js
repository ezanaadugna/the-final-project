require("dotenv").config();
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const GenerateChat = require("../models/building");



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const building = req.body.building || '';
  if (building.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid building",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(building),
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

// updated from here to end

function generatePrompt(building) {
  const capitalizedbuilding =
    building[0].toUpperCase() + building.slice(1).toLowerCase();
  return `suggest a romantic fact that can be used by architecture lovers as a pick up line, based on the building.

Building: Buckingham Palace, London
Names: Like Buckingham Palace, you reign over my heart with elegance and grace, and I hope to be your loyal subject in the kingdom of love.
Building: Guggenheim, New York
Names: Did you know that the Guggenheim was designed to be an 'uninterrupted ribbon of space'? Just like the seamless flow of its curves, I hope our connection can be an uninterrupted journey of love and passion.
Building: Dancing House, Prague
Names: Much like the Dancing House in Prague, when I'm with you, my heart can't help but sway to the rhythm of love. Let's dance through life together and create a beautiful symphony of affection.
Building: ${capitalizedbuilding}
Names:`;
}


// purpose of this code, is to pull in the buildingName as variable, from frontend.
// then create the prompt, that gets sent to open ai. 
// open ai fetch request, is in the building controller file. 

//const userinput = "Guggenheim, New York"

class PromptBuilder {
  constructPrompt(userinput) {

    const systemContent = [
      {role: "user",
      content:`You should suggest a romantic fact that can be used by lovers of architecture as a pick-up line, based on the user input. Please follow the following instructions:
      - Provide a romantic and funny chat that can be used by architecture lovers as a pick-up line based on the following building ${userinput}. Please include emojis. It should be romantic and witty, and funny. It should be around 2 lines long. It must be new.`}
    ];


    const prompt = systemContent;
    console.log(prompt);
    return prompt;
  }
}
    //[{ role: "user", content: "Hello chatgpt, Can you give me an example of a pick up line based on the eiffel tower"}]
module.exports = PromptBuilder;
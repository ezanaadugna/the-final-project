// purpose of this code, is to pull in the buildingName as variable, from frontend.
// then create the prompt, that gets sent to open ai. 
// open ai fetch request, is in the building controller file. 

//const userinput = "Guggenheim, New York"

class PromptBuilder {
  constructPrompt(userinput) {

    const systemContent = [
      {"role": "system", "content": "You are a helpful assistant."},
      {role: "user",
      content:`Your purpose is to be a pick-up line generator. You should suggest a romantic fact or facts that can be used by architecture lovers as a pick-up line, based on the user input. Please follow the following instructions: 
    - Provide a romantic fact that can be used by architecture lovers as a pick-up line based on the following building ${userinput}. It should be romantic and witty, and can include useful facts. It should be around 3 lines long`}
    ];


    const prompt = systemContent;
    console.log(prompt);
    return prompt;
  }
}
    //[{ role: "user", content: "Hello chatgpt, Can you give me an example of a pick up line based on the eiffel tower"}]
module.exports = PromptBuilder;
// purpose of this code, is to pull in the buildingName as variable, from frontend.
// then create the prompt, that gets sent to open ai. 
// open ai fetch request, is in the building controller file. 


class PromptBuilder {
  constructPrompt(name, description) {
    if (!name || !description) {
      throw new Error("Please provide a building name.");
    }

    const systemContent = `Your purpose is to be a pick-up line generator. You should suggest a romantic fact or facts that can be used by architecture lovers as a pick-up line, based on the building name provided. Please follow the following instructions: 
    - Provide a romantic fact that can be used by architecture lovers as a pick-up line using the building name '${name} ${description}'. This should be up to 3 lines long. Don't put it in quotations.`;

    const prompt = systemContent;
    console.log(prompt);
    return prompt;
  }
}

module.exports = PromptBuilder;
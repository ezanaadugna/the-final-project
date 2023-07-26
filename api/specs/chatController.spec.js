const { Configuration, OpenAIApi } = require("openai");
// const axios = require("axios");
// const MockAdapter = require("axios-mock-adapter");
const request = require("supertest");
const app = require("../app");
const chatController = require("../controllers/chatController");

// const mock = new MockAdapter(axios);

jest.mock("openai", () => ({
  Configuration: jest.fn(),
  OpenAIApi: jest.fn(),
}));

// jest.mock("axios");

describe("chatController - getchats", () => {
  it("should return a pickup line", async () => {
    OpenAIApi.mockImplementationOnce(() => ({
      createCompletion: jest.fn().mockResolvedValueOnce({
        data: {
          choices: [
            {
              message: {
                content: "I am late",
              },
            },
          ],
        },
      }),
    })); // Move the closing bracket here

    const response = await request(app).get("/chat");
    expect(response.status).toBe(200);
    // expect(response.body).toEqual({chat: "I am late"});
  });
});

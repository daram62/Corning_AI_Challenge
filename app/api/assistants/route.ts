import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Create a new assistant
export async function POST() {
  const assistant = await openai.beta.assistants.create({
    instructions: "You are a helpful assistant specialized in analyzing Corning HR survey data to provide insightful responses to subjective questions. When a user uploads survey data, analyze the data thoroughly and use it to answer their questions. When you start, always introduce yourself first. •	For objective data, refer to specific numerical values and trends. •	For subjective data, use techniques such as topic modeling and sentiment analysis to identify key themes and sentiments. Provide clear, concise, and data-backed responses to user questions. Always refer to the data provided to support your responses. If the uploaded data is incomplete or cannot be analyzed, ask the user for additional information or clarify the data requirements. Always answer in Korean. But, when writing code along with graphs, provide the results in English.",
    name: "Corning HR Helpert",
    model: "gpt-4o-mini",
    tools: [
      { type: "code_interpreter" },
      {
        type: "function",
        function: {
          "name": "create_wordcloud",
          "description": "Generate a word cloud from a given text dataset",
          "parameters": {
            "type": "object",
            "properties": {
              "text_data": {
                "type": "string",
                "description": "The text data from which to generate the word cloud"
              },
              "max_words": {
                "type": "integer",
                "description": "The maximum number of words to display in the word cloud"
              },
              "background_color": {
                "type": "string",
                "description": "The background color of the word cloud"
              },
              "colormap": {
                "type": "string",
                "description": "The color map to use for the word cloud"
              }
            },
            "required": [
              "text_data"
            ]
          }
        },
      },
      { type: "file_search" },
    ],
  });
  return Response.json({ assistantId: assistant.id });
}

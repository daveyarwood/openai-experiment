import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI();

async function oneOffChatResponse(prompt: string): Promise<string> {
  console.error("Sending request...");

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo-16k",
  });

  if (completion.choices.length == 0) {
    return Promise.reject("No completion choices");
  }

  const firstChoice = completion.choices[0];

  if (!firstChoice.message.content) {
    return Promise.reject(`Unexpected choice: ${firstChoice}`);
  }

  return firstChoice.message.content;
}

function meetingPrompt(transcript: string): string {
  return `Please review the following meeting transcript and provide a short
  bullet list of topics that were discussed.

  ${transcript}`;
}

const transcript = fs.readFileSync(
  "transcripts/Durham City Council Work Session July 20, 2023.txt",
  // Too big
  // "transcripts/Durham City Council Work Session Nov. 21, 2023.txt",
  "utf-8",
);

console.log(await oneOffChatResponse(meetingPrompt(transcript)));

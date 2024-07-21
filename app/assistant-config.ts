export let assistantId = "asst_zS8OHI8XhBU4OyOX7faUMTz8"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

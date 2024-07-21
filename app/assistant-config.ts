export let assistantId = "asst_ma8pYhkAsYRrYVVUNCpwVAW0"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

export let assistantId = "asst_lODAYULRvKKagqKNplujGEhD"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

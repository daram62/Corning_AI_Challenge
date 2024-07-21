export let assistantId = "asst_DqhSLGMU79k23sZjTFk8uvcC"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

<!-- Simple chatbot powered by OpenAI -->
<script>
async function askGPT(question) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: question }]
    })
  });
  const data = await res.json();
  alert(data.choices[0].message.content);
}
</script>

<button onclick="askGPT('Explain the Tableau dashboard insights')">
  🤖 Ask AI About This Portfolio
</button>

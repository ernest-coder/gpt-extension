export async function sendOpenAiRequest(inputText, pageContent) {

    const prompt = `
    Where can the user find the element he is looking for on the Page content? Only answer the necessary information.
    User input: ${inputText}\n\nPage Content: ${pageContent} `;
    console.log("PROMPTTTTTTT", prompt)
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003', // You can change the model as needed
            prompt: prompt,
            max_tokens: 1000
        })
    });

    if (!response.ok) {
        throw new Error('Failed to connect to OpenAI API');
    }

    const data = await response.json();
    console.log(data)
    return data.choices[0].text.trim(); // Extract the API response text
}
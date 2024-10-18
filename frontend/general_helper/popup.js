document.addEventListener('DOMContentLoaded', () => {
    const retrieveButton = document.getElementById('retrieve-dom-btn');
    const inputField = document.getElementById('input-field');

    if (retrieveButton) {
        retrieveButton.addEventListener('click', async() => {
            // Store the content of the input field
            const InputContent = inputField.value.trim();

            // Check if the input is filled
            if (!InputContent) {
                console.log("Input field is empty. Please enter some text.");
                const statusElement = document.getElementById('status');
                statusElement.textContent = 'Input field cannot be empty!';
                return; // Exit the function if the input is empty
            }

            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            // Send a message to the content script and wait for the response
            const elementsData = await new Promise((resolve, reject) => {
                chrome.tabs.sendMessage(tab.id, { action: 'retrieveDOM' }, (response) => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(response);
                    }
                });
            });

            if (elementsData && elementsData.data) {
                const pageContent = elementsData.data;
                console.log('Structured Page Content:', pageContent);


                // Convert each object in elementsData to a string format
                const pageContentString = pageContent.map(item => {
                    if (item.tag === 'A') {
                        // For anchor (a) tags, include the href as well
                        return `Tag: ${item.tag}, Text: "${item.text}", Href: ${item.href}`;
                    } else {
                        // For other tags, only include the tag and text
                        return `Tag: ${item.tag}, Text: "${item.text}"`;
                    }
                }).join('\n'); // Join each string with a newline for better readability

                // Call the OpenAI API with InputContent and pageContent
                const apiResponse = await callOpenAIAPI(InputContent, pageContentString);

                // Optionally, update the popup status
                const statusElement = document.getElementById('status');
                statusElement.textContent = apiResponse;

                chrome.tabs.sendMessage(tab.id, { action: 'selectDOM', textToSelect: apiResponse }, (response) => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(response);
                    }
                });

            } else {
                console.log("No response received or data is empty.");
            }

        });
    }
});

async function callOpenAIAPI(inputContent, pageContent) {

    const prompt = `
        Where can the user find the element they are looking for on the Page content? Only answer with the text of the tag.
    User input: ${inputContent}\n\nPage Content: ${pageContent}`;
    console.log(prompt)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            'model': 'gpt-4o-mini',
            'messages': [{
                    'role': 'system',
                    'content': 'You are a helpful assistant.'
                },
                {
                    'role': 'user',
                    'content': prompt
                }
            ]
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;

}
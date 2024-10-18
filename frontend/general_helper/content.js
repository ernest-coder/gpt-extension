chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'retrieveDOM') {

        const elementsData = [];

        // Get all H1, H2 elements
        document.querySelectorAll('h1, h2').forEach(element => {
            const text = element.innerText.trim();
            if (text) { // Only add if text is not empty
                elementsData.push({ tag: element.tagName, text });
            }
        });

        // Get all button elements
        document.querySelectorAll('button').forEach(element => {
            const text = element.innerText.trim() || element.value.trim();
            if (text) { // Only add if text is not empty
                elementsData.push({ tag: 'BUTTON', text });
            }
        });

        // Get all anchor (a) tags
        document.querySelectorAll('a').forEach(element => {
            const text = element.innerText.trim();
            if (text) { // Only add if text is not empty
                elementsData.push({ tag: 'A', href: element.href, text });
            }
        });

        // Send the data back to the popup
        sendResponse({ data: elementsData });

        return true; // Indicates that the response will be sent asynchronously
    }

    if (message.action === 'selectDOM') {

        document.querySelectorAll('a').forEach(element => {
            const text = element.innerText.trim();
            console.log("TEXT", text)
            if (text === message.textToSelect) {
                console.log("ENTER IF")
                element.style.border = "2px solid red";
                element.style.borderRadius = "8px";
                element.style.padding = "4px";
            }
            console.log("DOESNT IF")
        });

        sendResponse()
        return true;
    }
});
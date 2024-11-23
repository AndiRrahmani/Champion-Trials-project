function searchDestination() {
    const query = document.getElementById("search").value;
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert("Please enter a search term.");
    }
}

function sendMessage() {
    const chatWindow = document.getElementById("chatbotWindow");
    const userInput = document.getElementById("chatInput").value;

    if (userInput) {
        const userMessage = document.createElement("div");
        userMessage.textContent = `You: ${userInput}`;
        chatWindow.appendChild(userMessage);

        // Simulate AI response
        const botMessage = document.createElement("div");
        botMessage.textContent = `AI Bot: That's a great question! Let me help you with that.`;
        botMessage.style.color = "blue";
        setTimeout(() => chatWindow.appendChild(botMessage), 1000);

        // Clear input
        document.getElementById("chatInput").value = "";
    } else {
        alert("Please type a message.");
    }
}
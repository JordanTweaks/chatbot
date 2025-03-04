function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    
    if (userInput.trim() !== "") {
        // Felhasználói üzenet hozzáadása
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.innerText = userInput;
        document.getElementById("chat-box").appendChild(userMessage);
        
        // Szerver válaszának hozzáadása
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.innerText = "Sajnálom, még nem tudok válaszolni erre!"; // Itt lehet egy valós API hívás is!
        document.getElementById("chat-box").appendChild(botMessage);
        
        // Szövegmező ürítése
        document.getElementById("user-input").value = "";

        // Görgetés a legújabb üzenethez
        document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
    }
}

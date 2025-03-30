document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit");

    const chatContainer = document.querySelector(".chat-container");
    const add = document.querySelector(".add");
    submitBtn.addEventListener("click", function () {
        add.style.display = "none";
        const source = document.getElementById("source").value.trim();
        const destination = document.getElementById("destination").value.trim();
        const date = document.getElementById("date").value.trim();

        if (!source || !destination || !date) {
            alert("Please fill all fields.");   
            return;
        }

        // User chat box visible
        const userChatBox = document.createElement("div");
        userChatBox.classList.add("user-chat-box");
        // userChatBox.style.visibility = "visible"; 
        userChatBox.style.display = "block";

        const userImg = document.createElement("img");
        userImg.src = "user.png";
        userImg.width = 50;
        userImg.id = "userImage";

        const userChatArea = document.createElement("div");
        userChatArea.classList.add("user-chat-area");
        userChatArea.textContent = `📍 Source: ${source} ➝ Destination: ${destination} 📅 Date: ${date}`;

        userChatBox.appendChild(userImg);
        userChatBox.appendChild(userChatArea);
        chatContainer.appendChild(userChatBox);

        let found = false;

        for (let i = 0; i < flightData.length; i++) {
            if (flightData[i].source === source && flightData[i].destination === destination && flightData[i].date === date) {
                found = true;

                setTimeout(() => {
                    const aiChatBox = document.createElement("div");
                    aiChatBox.classList.add("ai-chat-box");
                    // aiChatBox.style.visibility = "visible"; 
                    aiChatBox.style.display = "block";

                    const aiImg = document.createElement("img");
                    aiImg.src = "ai.png";
                    aiImg.width = 50;
                    aiImg.id = "aiImage";

                    const aiChatArea = document.createElement("div");
                    aiChatArea.classList.add("ai-chat-area");
                    aiChatArea.innerHTML = `🛫 Source: ${flightData[i].source} 
                        🏢 Airport: ${flightData[i].source_airport} 
                        🛬 Destination: ${flightData[i].destination} 
                        🏢 Airport: ${flightData[i].destination_airport} 
                        📅 Date: ${flightData[i].date}
                        💰 Price: ₹${flightData[i].price}`;

                    aiChatBox.appendChild(aiImg);
                    aiChatBox.appendChild(aiChatArea);
                    chatContainer.appendChild(aiChatBox);
                }, 2000);
            }
        }

        if (!found) {
            setTimeout(() => {
                const aiChatBox = document.createElement("div");
                aiChatBox.classList.add("ai-chat-box");
                // aiChatBox.style.visibility = "visible";
                aiChatBox.style.display = "block"; 

                const aiImg = document.createElement("img");
                aiImg.src = "ai.png";
                aiImg.width = 50;
                aiImg.id = "aiImage";

                const aiChatArea = document.createElement("div");
                aiChatArea.classList.add("ai-chat-area");
                aiChatArea.textContent = "🚫 No flights found for the given details.";

                aiChatBox.appendChild(aiImg);
                aiChatBox.appendChild(aiChatArea);
                chatContainer.appendChild(aiChatBox);
            }, 2000);
        }

        document.getElementById("source").value = "";
        document.getElementById("destination").value = "";
        document.getElementById("date").value = "";
    });
});


console.log("AI Bridge : content script chargé !");


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.action === "GET_LAST_RESPONSE") {

        // Récupérer la dernière réponse
        
        const messages = document.querySelectorAll(
            '[data-dil-source-message-id]'
        );
        const dernierMessage = messages[messages.length - 1];
        const texte = dernierMessage?.innerText || "";
        // Renvoyer son texte avec sendResponse()
        sendResponse({ texte: texte });
    }

});

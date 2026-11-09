
const bouton = document.getElementById("detectTabs");
const tabsInfo = document.getElementById("tabsInfo");

const boutonResponse = document.getElementById("getResponse");
const responseInfo = document.getElementById("responseInfo");

// Vérifier qu'un onglet correspond à un site
function estSite(tab, domaine) {
    try {
        const url = new URL(tab.url);
        return url.hostname === domaine;
    } catch {
        return false;
    }
}

// Détecter les onglets ChatGPT et Claude
bouton.addEventListener("click", () => {

    chrome.tabs.query({}, (tabs) => {

        const chatgptTab = tabs.find(tab =>
            estSite(tab, "chatgpt.com")
        );

        const claudeTab = tabs.find(tab =>
            estSite(tab, "claude.ai")
        );

        const chatgptStatut = chatgptTab
            ? "ChatGPT détecté"
            : "ChatGPT non détecté";

        const claudeStatut = claudeTab
            ? "Claude détecté"
            : "Claude non détecté";

        tabsInfo.textContent =
            `${chatgptStatut} et ${claudeStatut}`;

    });

    console.log("Bouton de détection cliqué !");
});

// Récupérer la dernière réponse de ChatGPT
boutonResponse.addEventListener("click", () => {

    console.log("Demande de récupération !");

    responseInfo.textContent = "Récupération en cours...";

    chrome.tabs.query({}, (tabs) => {

        const chatgptTab = tabs.find(tab =>
            estSite(tab, "chatgpt.com")
        );

        // Vérifier si ChatGPT est ouvert
        if (!chatgptTab) {
            responseInfo.textContent = "ChatGPT n'est pas ouvert.";
            return;
        }

        // Envoyer une demande au content script
        chrome.tabs.sendMessage(
            chatgptTab.id,
            { action: "GET_LAST_RESPONSE" },
            (response) => {

                // Vérifier les erreurs de communication
                if (chrome.runtime.lastError) {
                    responseInfo.textContent =
                        "Erreur : impossible de communiquer avec ChatGPT.";
                    console.error(chrome.runtime.lastError.message);
                    return;
                }

                // Afficher la réponse reçue
                if (response && response.texte) {
                    responseInfo.textContent =
                        `Dernière réponse : ${response.texte}`;
                } else {
                    responseInfo.textContent =
                        "Aucune réponse trouvée.";
                }

            }
        );

    });

});

const bouton = document.getElementById("detectTabs");
const tabsInfo = document.getElementById("tabsInfo");
bouton.addEventListener("click", () => {
    if (chrome.tabs) {
        chrome.tabs.query({}, (tabs) => {
            const chatgptTab = tabs.find(tab =>
                tab.url?.includes("chatgpt.com")
            );
            const claudeTab = tabs.find(tab =>
                tab.url?.includes("claude.ai")
            );
            if (chatgptTab) {
                tabsInfo.textContent = "ChatGPT détecté";
            } else {
                tabsInfo.textContent = "ChatGPT non détecté";
            }
            if (claudeTab) {
                tabsInfo.textContent = tabsInfo.textContent ? `${tabsInfo.textContent} et Claude détecté` : "Claude détecté";
            } else {
                tabsInfo.textContent = tabsInfo.textContent ? `${tabsInfo.textContent} et Claude non détecté` : "Claude non détecté";
            }
        });
    }
    
    console.log("Bouton cliqué !");
});

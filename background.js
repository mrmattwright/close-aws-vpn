const closeAWSVPN = () => {

    chrome.tabs.query({}, function (tabs) {
        for (let tab of tabs) {
            console.log(tab.url);
            if (tab.url === "http://127.0.0.1:35001/") {
                console.log("Closing this tab because AWS VPN");
                console.log(tab.id);
                console.log(tab.url);
                chrome.tabs.remove(tab.id);
            }
        }
    });
}

// toolbar button event listener
chrome.action.onClicked.addListener(function (thisTab) {
    closeAWSVPN();
});

// it will listen key board shortcut
chrome.commands.onCommand.addListener((command) => {
    closeAWSVPN();
});
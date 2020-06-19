window.onload = () => {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, (selection) => {
        chrome.runtime.sendMessage({selection: selection[0]}, 
            (response) => {
                document.getElementById("output").innerHTML = null;
            });
    });
};
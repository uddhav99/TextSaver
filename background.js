chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let clippings = [];
    chrome.storage.async.get("list", (result) => {
        if (request.selection && result.list) {
            clippings = [...result.list, request.selection];
        } else if (result.list) {
            clippings = [...result.list];
        } else {
            clippings = [result.selection];
        }
        sendResponse({clips: clippings});
        chrome.storage.sync.set({
            list: clippings,
        });
    });
    return true;
});
chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "Menu1",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.create({
    title: "StackOverflow",
    id: "SubMenu1",
    parentId: "Menu1",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.create({
    title: "Figma",
    id: "SubMenu2",
    parentId: "Menu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    chrome.tabs.create({
      url: `https://stackoverflow.com/search?q=${event.selectionText}`,
    });
  });
});

export const getCurrentlySelectedReplayTab = () => {
  const activeTab = document.querySelector('.c-tab[data-is-selected="true"]');
  return activeTab ? activeTab.textContent : "";
};

export const getCurrentlySelectedReplayTabSessionId = () => {
  const activeTab = document.querySelector('.c-tab[data-is-selected="true"]');
  return activeTab ? activeTab.getAttribute("data-session-id") : "";
};

export const sendCurrentReplayTab = () => {
  const sendButton = document.querySelector(".c-send-request-button button");
  if (sendButton instanceof HTMLElement) {
    sendButton.click();
  } else {
    console.error("Send request button not found");
  }
};

export const switchToReplayTab = (sessionId: string) => {
  const targetTab = document.querySelector(
    `[data-session-id="${sessionId}"] .c-tree-item__item`,
  );
  if (targetTab instanceof HTMLElement) {
    targetTab.dispatchEvent(new MouseEvent("mousedown"));
  } else {
    console.error(`Tab with session ID "${sessionId}" not found`);
  }
};

export const switchToReplayTabByName = (name: string) => {
  const allTabs = document.querySelectorAll(".c-tree-session");
  for (const tab of allTabs) {
    const labelElement = tab.querySelector(".c-label__label");
    if (labelElement && labelElement.textContent === name) {
      const clickableItem = tab.querySelector(".c-tree-item__item");
      if (clickableItem instanceof HTMLElement) {
        clickableItem.dispatchEvent(new MouseEvent("mousedown"));
        return;
      }
    }
  }
  console.error(`Tab with name "${name}" not found`);
};

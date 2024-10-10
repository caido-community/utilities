export const getCurrentSidebarTab = () => {
  const activeTab = document.querySelector(
    '.c-sidebar-item[data-is-active="true"]',
  );
  return activeTab ? activeTab.textContent : "";
};

export const navigateToSidebarTab = (tabName: string) => {
  const tab = Array.from(
    document.querySelectorAll(".c-sidebar-item:has(.c-sidebar__label)"),
  ).filter((a) => a.querySelector(".c-sidebar__label")?.textContent == tabName);
  if (tab.length == 0) {
    console.error(`Tab with name "${tabName}" not found`);
    return;
  }
  if (tab[0] instanceof HTMLElement) {
    tab[0].dispatchEvent(new MouseEvent("mousedown"));
  }
};

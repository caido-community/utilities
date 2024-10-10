export const getCurrentScope = () => {
  const scope = document.querySelector(
    ".c-scope-dropdown .p-select-label span",
  )?.textContent;
  return scope || "";
};

import type { EditorElement } from "./editors";

export const setHttpqlBar = (text: string) => {
  const view = document.querySelector<EditorElement>(
    ".c-search-query-editor__editor .cm-content",
  )?.cmView?.view;
  const line = document.querySelector(
    ".c-search-query-editor__editor .cm-line",
  );
  if (line && view) {
    line.textContent = text;
    const enterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13, // 13 is the Enter key code
      charCode: 13,
      which: 13,
      bubbles: true, // Make sure the event bubbles up
    });
    view.contentDOM.dispatchEvent(enterEvent);
  }
};

export const getHttpqlBar = (text: string) => {
  const view = document.querySelector<EditorElement>(
    ".c-search-query-editor__editor .cm-content",
  )?.cmView?.view;
  return view?.state.doc.toString();
};

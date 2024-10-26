import type { EditorView } from "@codemirror/view";

import {
  getCurrentlySelectedReplayTab,
  getCurrentlySelectedReplayTabSessionId,
} from "./replay";

export interface EditorElement extends Element {
  cmView?: {
    view: EditorView;
  };
}

const getSelectedText = (editor?: EditorView) => {
  if (editor) {
    const { from, to } = editor.state.selection.main;
    return editor.state.sliceDoc(from, to);
  }
  return undefined;
};

export const getCurrentReplayEditors = () => {
  if (window.location.hash.split("?")[0] !== "#/http-history") {
    return {
      requestEditor: undefined,
      responseEditor: undefined,
      request: undefined,
      response: undefined,
      requestSelectedText: undefined,
      responseSelectedText: undefined,
      focused: undefined,
      currentlySelectedReplayTab: "",
      currentlySelectedReplayTabSessionId: "",
    };
  }

  const requestEditor = document.querySelector<EditorElement>(
    ".c-request__body .cm-content",
  )?.cmView?.view;
  const responseEditor = document.querySelector<EditorElement>(
    ".c-response__body .cm-content",
  )?.cmView?.view;
  const focusedEditor = document.querySelector<EditorElement>(
    ".cm-editor.cm-focused .cm-content",
  )?.cmView?.view;
  let focused = undefined;
  if (focusedEditor === requestEditor) {
    focused = "request";
  } else if (focusedEditor === responseEditor) {
    focused = "response";
  }

  return {
    requestEditor,
    responseEditor,
    request: requestEditor?.state.doc.toString(),
    response: responseEditor?.state.doc.toString(),
    requestSelectedText: getSelectedText(requestEditor),
    responseSelectedText: getSelectedText(responseEditor),
    focused,
    currentlySelectedReplayTab: getCurrentlySelectedReplayTab(),
    currentlySelectedReplayTabSessionId:
      getCurrentlySelectedReplayTabSessionId(),
  };
};

export const getCurrentHttpHistoryEditors = () => {
  if (window.location.hash.split("?")[0] !== "#/intercept") {
    return {
      requestEditor: undefined,
      responseEditor: undefined,
      request: undefined,
      response: undefined,
      requestSelectedText: undefined,
      responseSelectedText: undefined,
      focused: undefined,
    };
  }

  const requestEditor = document.querySelector<EditorElement>(
    ".c-request .cm-content",
  )?.cmView?.view;
  const responseEditor = document.querySelector<EditorElement>(
    ".c-response .cm-content",
  )?.cmView?.view;
  const focusedEditor = document.querySelector<EditorElement>(
    ".cm-editor.cm-focused .cm-content",
  )?.cmView?.view;
  let focused = undefined;
  if (focusedEditor === requestEditor) {
    focused = "request";
  } else if (focusedEditor === responseEditor) {
    focused = "response";
  }

  return {
    requestEditor,
    responseEditor,
    request: requestEditor?.state.doc.toString(),
    response: responseEditor?.state.doc.toString(),
    requestSelectedText: getSelectedText(requestEditor),
    responseSelectedText: getSelectedText(responseEditor),
    focused,
    focusedEditorSelectedText: getSelectedText(focusedEditor),
  };
};

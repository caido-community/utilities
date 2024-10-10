import type { Caido } from "@caido/sdk-frontend";

import {
  getCurrentReplayEditors,
  getCurrentHttpHistoryEditors,
} from "./editors";
import { getHttpHistoryCurrentRow } from "./http_history";
import { getHttpqlBar, setHttpqlBar } from "./httpql";
import { getCurrentSidebarTab, navigateToSidebarTab } from "./navigation";
import {
  getCurrentlySelectedReplayTab,
  getCurrentlySelectedReplayTabSessionId,
  sendCurrentReplayTab,
  switchToReplayTab,
  switchToReplayTabByName,
} from "./replay";
import { getCurrentScope } from "./scope";

export function utils(sdk: Caido) {
  return {
    getCurrentReplayEditors,
    getCurrentHttpHistoryEditors,
    getHttpHistoryCurrentRow,
    setHttpqlBar,
    getHttpqlBar,
    getCurrentSidebarTab,
    navigateToSidebarTab,
    getCurrentlySelectedReplayTab,
    getCurrentlySelectedReplayTabSessionId,
    sendCurrentReplayTab,
    switchToReplayTab,
    switchToReplayTabByName,
    getCurrentScope,
  };
}

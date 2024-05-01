/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Field test.
 */

import { BlocklyOptions, Workspace, inject } from "blockly";
import { generateFieldTestBlocks, createPlayground } from "@blockly/dev-tools";
import "../src/index";

const toolbox = generateFieldTestBlocks("color_wheel", [
  {
    args: {
      color: "#FF00FF",
      width: 140,
      options: {
        layoutDirection: "vertical",
      },
    },
  },
]);

/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {BlocklyOptions} options The Blockly options.
 * @return {WorkspaceSvg} The created workspace.
 */
function createWorkspace(blocklyDiv, options) {
  return inject(blocklyDiv, options);
}

document.addEventListener("DOMContentLoaded", function () {
  const defaultOptions = {
    toolbox,
  };
  createPlayground(
    document.getElementById("root"),
    createWorkspace,
    defaultOptions
  );
});

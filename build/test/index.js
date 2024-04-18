"use strict";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileoverview Field test.
 */
var Blockly = require("blockly");
var dev_tools_1 = require("@blockly/dev-tools");
require("../src/index");
var toolbox = (0, dev_tools_1.generateFieldTestBlocks)('color_wheel', [
    {
        args: {
            color: '#FF00FF',
            width: 140,
            options: {
                layoutDirection: 'vertical',
            },
        },
    },
]);
/**
 * Create a workspace.
 * @param {HTMLElement} blocklyDiv The blockly container div.
 * @param {!Blockly.BlocklyOptions} options The Blockly options.
 * @return {!Blockly.WorkspaceSvg} The created workspace.
 */
function createWorkspace(blocklyDiv, options) {
    var workspace = Blockly.inject(blocklyDiv, options);
    return workspace;
}
document.addEventListener('DOMContentLoaded', function () {
    var defaultOptions = {
        toolbox: toolbox,
    };
    (0, dev_tools_1.createPlayground)(document.getElementById('root'), createWorkspace, defaultOptions);
});
//# sourceMappingURL=index.js.map
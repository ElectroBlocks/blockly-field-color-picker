"use strict";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileoverview This color picker / wheel.
 */
var core_1 = require("blockly/core");
var iro_1 = require("@jaames/iro");
/**
 * This is the class for the color wheel.
 */
var ColorWheelField = /** @class */ (function (_super) {
    __extends(ColorWheelField, _super);
    /**
     * Class for the color picker.
     *
     * @param {string} color The starting color for the color.
     *  It's a hex value, #ff00ff.
     * @param {number} width Width of the color picker.
     * @param {ColorPickerProps} options The iro color wheel options.
     */
    function ColorWheelField(color, width, options) {
        if (width === void 0) { width = 150; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.options = options;
        return _this;
    }
    /**
     * Constructs a ColorWheelField from a JSON arg object.
     * @param {!Object} options A JSON object with options.
     * @return {!ColorWheelField} The new field instance.
     * @package
     * @nocollapse
     */
    ColorWheelField.fromJson = function (options) {
        return new ColorWheelField(options);
    };
    /**
     * Over rides colour picker to show the popup.
     */
    ColorWheelField.prototype.showEditor_ = function () {
        var _this = this;
        var editor = document.createElement("div");
        // Appends to the content div
        core_1.DropDownDiv.getContentDiv().appendChild(editor);
        // Add class so it can be styled easily
        editor.classList.add("blockly-color-wheel-container");
        // Will position the content.  The last argument is a
        // callback that used for cleanup.
        // eslint-disable-next-line new-cap
        var colorPicker = iro_1.default.ColorPicker(editor, __assign({ width: this.width, color: this.getValue() }, this.options));
        // Callback when the color picker changes
        colorPicker.on("color:change", function (color) {
            _this.setValue(color.hexString);
        });
        core_1.DropDownDiv.showPositionedByField(this, function () { return editor.remove(); });
    };
    return ColorWheelField;
}(core_1.FieldColour));
exports.default = ColorWheelField;
core_1.fieldRegistry.register("color_wheel", ColorWheelField);
//# sourceMappingURL=index.js.map
# Blockly Color Wheel Field [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

This is a blockly color picker / wheel that uses the [IRO Color Picker](https://github.com/jaames/iro.js).  This field will return a hex value.

![example 1](https://github.com/ElectroBlocks/blockly-field-color-wheel/raw/main/docs/demo1.png)

![example 2](https://github.com/ElectroBlocks/blockly-field-color-wheel/raw/main/docs/demo2.png)

## Installation

### Yarn
```
yarn add blockly-field-color-wheel
```

### npm
```
npm install blockly-field-color-wheel --save
```

## Usage

For the options you don't have to pass anything in.  It will default to 
#FF00FF for the color and 150 for the width.

You can control the starting color by passing in the a hex value.  You can control the width by passing in a number for the second value.   You can over ride any of the default options by passing in a ColorPickerProps.  Read [IRO Color Pickers Docs](https://github.com/jaames/iro.js?ref=devawesome.io#color-picker-options) to learn more. 

The container of the color picker has the 'blockly-color-wheel-container' class attached to the HTML.  Allowing you to style it.

### JavaScript
```js
import * as Blockly from 'blockly';
import {ColorPickerField} from 'blockly-field-color-wheel';
Blockly.Blocks["color_wheel_picker"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Color: ")
      .appendField(new ColorPickerField("#00FF00", 150, {
        layoutDirection: 'horizontal',
      }), "COLOR")
  }
};
```
### JSON

```js
import * as Blockly from 'blockly';
import 'blockly-field-color-wheel';
Blockly.defineBlocksWithJsonArray([
    {
        "type": "color_wheel_picker",
        "message0": "Color: %1",
        "args0": [
            {
                "type": "field_template",
                "name": "COLOR",
                "color": "#FF00FF",
                "width" : 150,
                "options":{
                    layoutDirection: 'horizontal',
                }
            }
        ]
    }]);
```

## License

Apache 2.0

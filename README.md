# Carbox Date-Picker
A tiny zero-dependency date-picker made with vanilla javascript and CSS.
![screenshot](screenshot.png)

## Getting Started
### Importing
If a bundler (such as webpack, etc.) is in use, you can import carbox-date-picker as a module.

**ES6 modules**
```
import picker from 'carbox-date-picker'
```
**CommonJS modules**
```
require('carbox-date-picker')
```

Alternatively, you may download and use the bundled script directly in your html as follows:
```
<script src={path to script}></script>
```

### Usage
To use carbox date picker, assign the class `carbox-picker` to an input field.
```
<input type="text" class="carbox-picker" />
```

## Features
- Carbox-date-picker will appear on clicking the host input field.
- Clicking outside of date-picker's container and its host input will cause it to disappear.
- The arrow buttons at the top changes the selected month forward or backward.
- Clicking on one of the calendar days will change the value of the input field to the corresponding date in `mm/dd/yyyy` format.

## Future Work
- Improve positioning
- Configurability of styling
- Configurability of the date-picker's output
- Improve default styling
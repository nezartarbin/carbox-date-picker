# Carbox Date-Picker
A tiny zero-dependency and framework-agnostic date-picker web component made with vanilla javascript and CSS.
![screenshot](screenshot.png)

## Features

- carbox-picker is a **Web Component**, which means you can simply import the JS bundle and use the tag `<carbox-picker></carbox-picker>` and you're all set!
- **Zero Dependencies**
- **Extremely Lightweight**: The webpack bundle is only 4kb even before zipping
- **Frontend Framework Agnostic**
- Can be interfaced just like a regular `<input>` which allows easy integration with forms, refs, etc.

## Getting Started
### Importing
If a bundler (such as webpack, etc.) is in use, you can import carbox-picker as a module.

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

## Future Work
- Configurability of styling
- Configurability of the date-picker's output
- Improve default styling
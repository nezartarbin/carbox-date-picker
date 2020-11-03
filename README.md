# Carbox Date-Picker
A tiny zero-dependency and framework-agnostic date picker that is incredibly easy to use!
![screenshot](screenshot.png)

## Features

- carbox-picker is a **Web Component**, which means you can simply import the JS bundle and use the tag `<carbox-picker></carbox-picker>` and you're all set!
- **Zero Dependencies**: This was completely written with vanilla JS without any frameworks or dependencies!
- **Extremely Lightweight**: The webpack bundle is only 4kb even before zipping.
- **Frontend Framework Agnostic**: This is not made for a specific UI framework. In fact, it can be used without a framework at all!
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
To use carbox date picker, simply use the `<carbox-picker>` tag in your HTML.
```
<carbox-picker></carbox-picker>
```

## Future Work
- Configurability of styling
- Configurability of the date-picker's output
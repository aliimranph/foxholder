# Foxholder v.2.0.1
Pack of 15 unique placeholder animations. Just pick the demo you like most and install on your website in 1 minute!

## View Demo

[Foxholder Demo](http://foxholder.fox-hover.co.uk/)

## List of Features

1. Smooth and professional-looking CSS3 animations for placeholder
2. 15 unique effects
3. Easy to install
4. Crossbrowser Effects (IE 10+, Safari 9+, FF, Opera, Chrome, Edge)

## How to Use

- Put basic HTML markup:
```html
<form class="your-class">
  .... your inputs and textareas and your submit button (use only <button> tag for it)
</form>
```

- Use **placeholder attribute** and **id attribute** for inputs and textareas. **_Note! Use only `<button>` tag for submit buttons_**

```html
<form class="your-class">
    <input id="your-id-1" type="text" placeholder="My Input" />
    <textarea id="your-id-2" placeholder="My Textarea"></textarea>
    <button type="submit">Submit</button>
</form>
```
- Add foxholder-styles.css (from the **src** folder) in your `<head>`

```html
<link rel="stylesheet" href="css/foxholder-styles.css" />
```

- Add foxholder.min.js from **src** folder (or foxholder.js if you need a developer version) before closing `<body>` tag after jQuery init:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="scripts/foxholder.js"></script>
```

- Initialize your Foxholder in your script file or an inline script tag

```js
 jQuery('.your-class').foxholder({
    demo: 1 //or other number of demo (1-15) you want to use
  });
```

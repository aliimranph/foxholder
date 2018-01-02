# Foxholder v.3.0.0

- Placeholder Animations (input and textareas) - 15 unique demos!
- Button animations **NEW! - 6 nice demos!**

## View Demo

[Foxholder Demo](http://foxholder.fox-hover.co.uk/)

## List of Features

1. Smooth and professional-looking CSS3 animations for placeholder
2. 15 unique placeholder effects
3. 6 button hover effects
4. Easy to install
5. Crossbrowser Effects (IE 10+, Safari 9+, FF, Opera, Chrome, Edge)

## How to Use

- Put basic HTML markup:
```html
<form class="your-class">
  .... your inputs and textareas and your submit button (use only <button> tag for it)
</form>
```

- Use **placeholder attribute** and **id attribute** for inputs and textareas. **_Also you can use input with type="submit" as a button_**

```html
<form class="your-class">
    <input id="your-id-1" type="text" placeholder="My Input" />
    <textarea id="your-id-2" placeholder="My Textarea"></textarea>
    <button type="submit">Submit</button>
</form>
```
- Customize your button with data-attributes:

  - use **data-size attribute** to customize a button size (by default it's **middle**):
  
    - **data-size="sm"** - a small button
    - **data-size="md"** - a middle button
    - **data-size="bg"** - a big button
    
  - use **data-filled="filled" attribute** to create a filled button (it's of 'empty' style by default)
  
  - use **data-direction attribute** to add an effect direction **_(Only for #2 and #3 Button Demo)_**:
  
  Button Demo #2 data-direction attributes
  ------------ | -------------
  **data-direction="left"** or no data-direction attribute | Button Demo #2 **Left** effect
  
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

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
    placeholderDemo: 1, // for placeholder demo (1 - 15)
    buttonDemo: 1 //for button demos (1 - 6), if you need a button effect
  });
```

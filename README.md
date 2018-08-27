# Foxholder v.3.2.0

- Placeholder Animations (input and textareas) - 15 unique demos!
- Button animations - 8 demos (**2 new demos added in 3.2.0**)

## View Demo

[Foxholder Demo](http://foxholder.fox-hover.co.uk/)

## List of Features

1. Smooth and professional-looking CSS3 animations for placeholder
2. 15 unique placeholder effects
3. 8 button hover effects
4. Easy to install
5. Crossbrowser Effects (IE 10+, Safari 9+, FF, Opera, Chrome, Edge)

## How to Use

- Put basic HTML markup:
```html
<form class="your-class">
  .... your inputs and textareas and your submit button
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
  
  - use **data-effect-parameter** attribute to add an attribute for effect like direction (**only for demos with multiple variants, like Demo #2**). Proper **data-effect-parameter** you can find in the parentheses near the demo variant name. If you don't specify **data-effect-parameter**, the default variant will be applied.
 
 **Helps to create small button with a Horizontal and Vertical direction of Button Demo #3:**
 ```html
<form class="your-class">
  <button type="submit" data-size="sm" data-effect-parameter="horzVert">Submit<button>
</form>
```

- Add foxholder.min.css (from the **src** folder) in your `<head>`

```html
<link rel="stylesheet" href="css/foxholder.min.css" />
```

- Add foxholder.min.js from **src** folder (or foxholder.js if you need a developer version) before closing `<body>` tag after jQuery init:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="scripts/foxholder.min.js"></script>
```

- Initialize your Foxholder in your script file or an inline script tag

```js
 jQuery('.your-class').foxholder({
    placeholderDemo: 1, // for placeholder demo (1 - 15)
    buttonDemo: 1 //for button demos (1 - 8), if you need a button effect
  });
```

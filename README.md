# Job Application Tracker - JavaScript Questions

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**getElementById** finds a single element by its ID attribute. It returns one element or null if not found.

**getElementsByClassName** finds all elements with a specific class name. It returns a live HTML collection that updates automatically when the DOM changes.

**querySelector** finds the first element that matches a CSS selector. You can use any CSS selector like classes, IDs, or complex patterns.

**querySelectorAll** finds all elements that match a CSS selector. It returns a static NodeList that doesn't update when the DOM changes.

The main difference is that querySelector methods are more flexible because they accept any CSS selector, while the others only work with IDs or class names.

## 2. How do you create and insert a new element into the DOM?

First, create an element using `document.createElement('tagname')`. Then, set its properties like className, textContent, or attributes. Finally, insert it into the DOM using methods like `appendChild()`, `append()`, or `insertBefore()`.

Example:
```javascript
const newDiv = document.createElement('div');
newDiv.className = 'my-class';
newDiv.textContent = 'Hello';
document.body.appendChild(newDiv);
```

## 3. What is Event Bubbling? And how does it work?

Event bubbling is when an event starts at the target element and then bubbles up through its parent elements all the way to the document root.

For example, if you click a button inside a div, the click event fires on the button first, then on the div, then on the body, and so on up the DOM tree. Each parent element gets a chance to handle the event as it bubbles up.

This happens automatically for most events unless you stop it.

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element instead of adding listeners to many child elements. You use `event.target` to figure out which child was actually clicked.

It's useful because:
- You only need one listener instead of many, which is better for performance
- It works automatically for elements added to the page later
- It's easier to manage and requires less code

For example, instead of adding a click listener to 100 buttons, you add one listener to their parent container and check which button was clicked.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

**preventDefault()** stops the browser's default action for an event. For example, it prevents a form from submitting or a link from navigating to a new page.

**stopPropagation()** stops the event from bubbling up to parent elements. The event handler runs on the current element but won't trigger handlers on parent elements.

They do different things and can be used together if needed.

# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Solution URL here](https://github.com/hectorlil48/faq-accordion-main)
- Live Site URL: [Live site URL here](https://hectorlil48.github.io/faq-accordion-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

What I Learned
In this project, I gained hands-on experience with ARIA attributes like aria-expanded and aria-controls, which are essential for improving web accessibility. Specifically, I learned:

aria-expanded: This attribute helps manage whether a section of content is expanded or collapsed. It allows screen readers and other assistive technologies to convey the state of the element to users. I used this to dynamically change the state of the accordion (expand or collapse) when a button is clicked.

aria-controls: This attribute links a button to the content it controls, helping assistive technology understand the relationship between them. In the accordion, it links each question button to its corresponding answer section, allowing for a smooth interaction.

By targeting these attributes in JavaScript, I was able to create an interactive accordion that allows users to toggle between the expanded and collapsed states of each section. This approach not only improves the usability of the interface but also enhances accessibility for users who rely on screen readers.

```html
<button
  class="accordion-question flex"
  aria-expanded="false"
  aria-controls="answer2"
></button>
```

```js
const isExpanded = button.getAttribute("aria-expanded") === "true";
button.setAttribute("aria-expanded", !isExpanded);
```

### Continued development

As I continue to develop my skills, I'll focus on the following areas:

Improved Accessibility: I’ll explore other ARIA attributes and JavaScript methods to ensure my websites are accessible to a broader audience, particularly those with disabilities.

User Experience Enhancements: I’ll work on adding animations or transitions to the accordion's expand/collapse actions, improving the visual experience for users.

Mobile Responsiveness: I’ll ensure the accordion works well on mobile devices by using media queries to adjust the layout and interactions.

JavaScript Event Handling: I want to further understand how to manage different event listeners for better performance, such as avoiding unnecessary reflows when elements are toggled.

### Useful resources

- [ChatGPT](https://chatgpt.com/) - This tool was invaluable for brainstorming ideas, refining technical descriptions, and troubleshooting code efficiently. I appreciated how it provided clear examples and explanations tailored to my projects.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - I relied on MDN for JavaScript references, especially when working with event listeners, array methods, and handling user inputs in my logic.

## Author

- GitHub - [Hector Ramirez](https://github.com/hectorlil48)
- Frontend Mentor - [@hectorlil48](https://www.frontendmentor.io/profile/hectorlil48)
- LinkedIn - [@linkedin.com/in/hector-ramirez-6a6509170](https://www.linkedin.com/in/hector-ramirez-6a6509170/)

# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: https://github.com/JimTK16/intro-component-with-sign-up-form
- Live Site URL: https://intro-component-by-jim.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- Select the next sibling element with .nextElementSibling
- Animation the slide down of the content with maxHeight in JS:
  . Set the initial maxHeight to 0.
  . When the element is clicked set the maxHeight = element.scrollHeight + 'px'
  . On the content's transition property to max-height 0.2s ease

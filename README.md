# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![desktop screenshot](./images/FAQ-Accordion-Card-desktop.png.jpg)

![mobile screenshot](./images/FAQ-Accordion-Card-mobile.png.jpg)

### Links

- Solution URL: [Solution](https://github.com/jamesaking02/faq-accordion)
- Live Site URL: [Live Site](https://jamesaking02.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

It was a struggle learning how to code the accordion properly. I learned how to loop over a classList. One thing that took a while to get working was to get the text of the button to go back to normal font-weight after clicking the button again, not just after clicking another button.

```js
if (this.classList.contains('acc__button--active')){
      this.classList.remove('acc__button--active')
      this.classList.add('acc__button--inactive')
    } else {
      this.classList.remove('acc__button--inactive')
      this.classList.toggle('acc__button--active')

    }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I'm still a newbie at Javascript. I know that is a big part of a reason I struggled so hard, but I will continue to learn it and get better at implementing it in the web.

### Useful resources

- [getCSSscan](https://getcssscan.com/css-box-shadow-examples) - This was a great resource for some beautiful box-shadow styles.

## Author

- Frontend Mentor - [@jamesaking02](https://www.frontendmentor.io/profile/jamesaking02)


## Acknowledgments

I would like to thank [@visualdennis](https://www.frontendmentor.io/profile/visualdenniss). He doesn't know that he helped me, but he did. I struggled with how best to add the box image to the faq card, and thankfully Dennis already did the project so I was able to learn by looking at his. If you read this Dennis, thank you!

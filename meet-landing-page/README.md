<h1 align="center">Frontend Mentor - Meet landing page solution</h1>

<div align="center">This is a solution to the <a href="https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR">Meet landing page challenge</a> on <a href="https://www.frontendmentor.io">Frontend Mentor</a></div>

<div align="center">
  <h3>
    <a href="https://meet-landing-page-srishti.onrender.com/">
      Live Site
    </a>
    <span> | </span>
    <a href="https://github.com/itsmesrishti/fmresponsivelayouts/edit/main/meet-landing-page/">
      Solution
    </a>
  </h3>
</div>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS

### What I learned

I learned about some background properties like background-blend-mode. And I learned how to use background-position for multiple images. I also tried to separate the scss code into different files.

```css
.banner-img {
    background-image: url("/images/desktop/image-hero-left.png"), url("/images/desktop/image-hero-right.png");
    background-repeat: no-repeat;
    background-position: left -1.5rem top calc(50% + 1.5rem), right -1.5rem top calc(50% + 4rem);
}
```

### Useful resources

- [Background position property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) -

## Acknowledgments

- [Render](https://render.com/) for hosting
- [Google Fonts](https://fonts.google.com/) for the fonts
- [Frontend Mentor](https://www.frontendmentor.io/) for the challenge

## Author

- Website: [itsmesrishti.github.io](https://{itsmesrishti.github.io/})
- GitHub: [@itsmesrishti](https://{github.com/itsmesrishti})
- Frontend Mentor - [@itsmesrishti](https://www.frontendmentor.io/profile/itsmesrishti)
- LinkedIn: [Srishti Chaudhary](https://{https://www.linkedin.com/in/srishtichaudhary/})

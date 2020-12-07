### BEM (Block, Element & Modifier) Methodology

`Concept`: Block, Element and Modifier -> provide a modular structure to your CSS project, also provide relationship between CSS and HTML.


Example 1:

```html
  <a class="btn btn--big btn--orange" href="https://css-tricks.com">
    <span class="btn__price">$9.99</span>
    <span class="btn__text">Subscribe</span>
  </a>
```

Example 2:

```html
  <figure class="photo">
    <img class="photo__img" src="me.jpg">
    <figcaption class="photo__caption">
      <blockquote class="photo__quote">
        Look at me!
      </blockquote>
    </figcaption>
  </figure>

  <style>
    .photo { }
    .photo__img { }
    .photo__caption { }
    .photo__quote { }
  </style>
```

References: 
1. <a href="https://seesparkbox.com/foundry/bem_by_example" target="_blank">Reference 1</a>
2. <a href="https://css-tricks.com/bem-101/" target="_blank">Reference 2</a>

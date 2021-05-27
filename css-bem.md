### BEM (Block, Element & Modifier) Methodology

`Concept`: Block, Element and Modifier -> provide a modular structure to your CSS project, also provide relationship between CSS and HTML.

<strong>Format: [Block]__[Element]--[Modifier]</strong>

The common knowledge so far:

- `Block`: refers to the DOM element, eg: `div`, `p` etc 
- `Element`: refers to sub-element, eg: product__image, product__title can be element for product (as block), is using double underscore (`__`)
- `Modifier`: refers to the element or sub-element's attribute, eg: product--background product__title--large, is using double dash (`--`)


Example 1: `Block--Modifier`

```html
  <a class="btn btn--big btn--orange" href="https://css-tricks.com">
    $9.99
  </a>
```

Example 2: `Block__Element`

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

Example 3: `Block__Element--Modifier`

```html
<figure class="photo photo--highlighted">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">Look at me!</figcaption>
</figure>

<style>
  .photo--highlighted .photo__img { }
  .photo--highlighted .photo__caption { }
</style>
```


References:

1. <a href="https://seesparkbox.com/foundry/bem_by_example" target="_blank">Reference 1</a>
2. <a href="https://css-tricks.com/bem-101/" target="_blank">Reference 2</a>

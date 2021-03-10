### CSS General recalls

1. inline block vs block vs inline

inline block:
  - respect `top bottom left right` margin and paddings

inline:
  - respect `right and left` margins and paddings, <b>not</b> allow top and bottom margins
  - not allow to set width and height

block:
  - respect `top bottom left right` margin and paddings
  - force line break
  - acquires full width if width is not defined

Visual comparison:

![inline vs inline block vs block](https://res.cloudinary.com/dameng/image/upload/v1612006266/tipify/block_inline-block_inline.png)

2. CSS Grid layout Examples

<i>Example 1:</i>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid Layout Example 1</title>
  <style>
    .container {
      display: grid;
      grid-gap: 20px;
      height: 100vh;
      grid-template-columns: 100px 200px auto auto;
    }

    .grid-item {
      background-color: skyblue;
    }

    .grid-item:nth-of-type(2) {
      grid-row-start: span 2; /* extended 2 rows */
    }

    .grid-item:nth-of-type(6) {
      /* grid-column-start: 3; */
      /* grid-column-end: 5; */ /* first version */
      /* grid-column-end: span 2; */

      grid-column: 3 / span 2; /* shortcut expression */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>
```

<i>Example 2</i>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid Layout Example 2</title>
  <style>
    .container {
      display: grid;
      grid-gap: 5px;
      grid-template-areas:
        "header"
        "section"
        "aside-1"
        "aside-2"
        "footer";
    }

    .container > * {
      background-color: mediumseagreen;
      font-size: 80px;
    }

    header {
      grid-area: header;
    }

    section {
      grid-area: section;
    }

    aside:nth-of-type(1) {
      grid-area: aside-1;
    }

    aside:nth-of-type(2) {
      grid-area: aside-2;
    }

    footer {
      grid-area: footer;
    }

    /* for larger screens */
    @media (min-width: 700px) {
      .container {
        grid-template-areas:
          "header header header"
          "aside-1 section aside-2"
          "footer footer footer";
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      Header
    </header>
    <aside>
      Aside 1
    </aside>
    <section>
      Section
    </section>
    <aside>
      Aside 2
    </aside>
    <footer>
      Footer
    </footer>
  </div>
</body>
</html>
```

3. CSS Position recalls

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Position Recall</title>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    .parent {
      padding: 5px;
      background-color: #00AAFF;
    }

    .child {
      padding: 5px;
    }

    .child-one {
      background-color: rgb(116, 255, 116);
    }

    .child-two {
      background-color: rgb(248, 117, 117);
    }

    .child-three {
      background-color: rgb(255, 116, 232);
    }

    .parent {
      position: relative;
      height: 100%;
    }

    .child {
      
    }

    .child-one {
      width: 20%;
      position: fixed;
      right: 0;
    }

    .child-two {
      position: absolute;
      width: 70%;
      top: 50%;
    }

    .child-three {
      width: 200px;
      position: sticky;
      top: 100%;
      bottom: 0;
      left: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
</head>
<body>
  <div class="parent">
    Parent
    <div class="child-one child">
      One
    </div>
    <div class="child-two child">
      Two
    </div>
    <div class="child-three child">
      Three
    </div>
    <!-- static: default position -->
    <!-- 
      relative: very similar with static positioning
      diff between static and relative position:
      relative allows developer to change top left bottom and right element, static no allowed
     -->
     <!-- absolute:
      you want to set element into specific position, and never want other elements to change any position (stay where they are)
      Common usage: set parent as relative element, and child as absolute element, so define element position specifically
    -->
    <!-- fixed: 
      always fixed the element based on entire HTML DOM (webpage screen), nothing to do with parents or children
      fixed position, after scroll, element stays where it was, if using absolute, then position will be moving based on parent element 
    -->
    <!-- sticky:
      (relative + fixed = sticky) position
      example: sticky footer, when scroll, always make footer at bottom without changing position
    -->
  </div>
</body>
</html>
```

4. 

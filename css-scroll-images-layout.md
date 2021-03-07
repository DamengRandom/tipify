### CSS Practical Example: CSS scroll images effect

Demo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Tricks Examples 04 - dynamic size elements</title>
    <style>
      /* this is another way to make element centered !!!! */
      /* .Box {
        height: 50vh;
        width: 50vw; 
        margin: 25vh 25vw;
        background-color: slategray;
      }

      body {
        margin: 0;
        padding: 0;
      }

      p {
        padding: 2rem 0 0 2rem;
        font-family: monospace;
        font-size: 2rem;
        color: antiquewhite;
      } */

      /* Custom CSS making dynamic element size !!! */
      body {
        margin: 0;
        font-family: monospace;
      }

      p {
        margin: 0;
        font-size: 2rem;
        padding: 0 5rem;
        text-shadow: 1px 1px #333;
        color: white;
      }

      section {
        width: 100vw;
        height: 100vh;

        /* layout for: content inside */
        display: flex;
        justify-content: center;
        align-items: center;

        /* adding some background images: colorful one */
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed; /* background-attachment: used for setting whether a background image scrolls with the rest of the page, or is fixed */
      }

      section:nth-of-type(1) {
        background-image: url('https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g');
      }
      section:nth-of-type(2) {
        background-image: url('https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY');
      }
      section:nth-of-type(3) {
        background-image: url('https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII');
      }
      section:nth-of-type(4) {
        background-image: url('https://i.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ');
      }

    </style>
  </head>

  <body>
    <!-- <div class="Box">
      <p>This is my content</p>
    </div> -->
    <section>
      <p>This is the first paragraph, here is the text as you can see which is shown up now !!!!</p>
    </section>

    <section>
      <p>This example is for making scroll-able background text and you can scroll each section</p>
    </section>

    <section>
      <p>After scrolled, you will see different background images and photos and also texts, woohooo</p>
    </section>

    <section>
      <p>The last paragraph and pleas remember how to do this next time then ~~~~~</p>
    </section>
  </body>
</html>
```
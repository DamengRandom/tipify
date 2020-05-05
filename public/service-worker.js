/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "427a079b562fe54c48cfadf9ad9fdc30"
  },
  {
    "url": "assets/css/1.styles.521b6668.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.55f0a6ba.css",
    "revision": "564bb139f1f8cd379110c4e18ebe970a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.521b6668.js",
    "revision": "cff9b72dda86ab63b86d82233d9611db"
  },
  {
    "url": "assets/js/2.6b925212.js",
    "revision": "9a644f34b34281058797c9980c909b03"
  },
  {
    "url": "assets/js/3.19f4150e.js",
    "revision": "1d0570a3456e011e45a559912cef7345"
  },
  {
    "url": "assets/js/4.d3e1284f.js",
    "revision": "cb70767aa5e624e059041885893d249e"
  },
  {
    "url": "assets/js/5.2a0afed8.js",
    "revision": "4e2f8ea3b56039472a290dcf14ed1594"
  },
  {
    "url": "assets/js/6.909b9b8b.js",
    "revision": "b78d5cb841107f3d6067282112352ffb"
  },
  {
    "url": "assets/js/app.55f0a6ba.js",
    "revision": "7b661bec45b2e36814387fee500d1495"
  },
  {
    "url": "git-tips-one.html",
    "revision": "e07d5da99f2f0ad19239f51827464c90"
  },
  {
    "url": "index.html",
    "revision": "b10539ad2bf638e3374a800e86dec07d"
  },
  {
    "url": "react-tips-one.html",
    "revision": "b997d224f83e5e3e332bac006d580db1"
  },
  {
    "url": "thanks.html",
    "revision": "02eeb4f23a61357e8a0bdbda57490166"
  },
  {
    "url": "tipify.html",
    "revision": "ef1e8bbcb2692cc075ec9b9d6f67b9dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

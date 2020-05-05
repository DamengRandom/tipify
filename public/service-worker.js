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
    "revision": "95dba6ae2a23bf68aa709dea10771149"
  },
  {
    "url": "assets/css/1.styles.521b6668.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.2d5f8983.css",
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
    "url": "assets/js/2.c8388a35.js",
    "revision": "80cbdb74a2d39c91497b8ebbd1d53a11"
  },
  {
    "url": "assets/js/3.08076886.js",
    "revision": "50a944d266526037e06f2983af4a879c"
  },
  {
    "url": "assets/js/4.0212a3cd.js",
    "revision": "52d1de93ae7dc8a86ffb5d7512b53879"
  },
  {
    "url": "assets/js/5.6156ed4f.js",
    "revision": "4b3e361976c5f219da51d735f63ad2bc"
  },
  {
    "url": "assets/js/app.2d5f8983.js",
    "revision": "f5a5a80463e5e6e5a2e07654a8f36e53"
  },
  {
    "url": "git-tips-one.html",
    "revision": "339e3cfb4d4df04d45edd3bdf992234e"
  },
  {
    "url": "index.html",
    "revision": "f522bd29d91021c7aa4adfe2fc9fd7f2"
  },
  {
    "url": "thanks.html",
    "revision": "c7e4f74cc9493a0fe3eb0eaddba109d2"
  },
  {
    "url": "tipify.html",
    "revision": "1b9f0cdaa87a3806476d1f061383f269"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

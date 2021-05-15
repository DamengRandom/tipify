### Problems/Issues I have resolved during working (Recall only)

<b>1.</b> How to display `base64` pdf data for IOS mobile devices (Year 2021)

Technically, it would be possible for IOS mobile devices (iPhone, iPad) to read base64 pdf data as `blob` format.

Thus, we need to convert `base64` data to `blob` data.

```js
// Part 1: Mobile device detector helper function [filename: pdf.js]

const mobileDeviceDetector = () => {
  return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);
};

// reference: https://gist.github.com/dalethedeveloper/1503252

const isIOSDevice = () => {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod",
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  || mobileDeviceDetector();
};

// reference: https://stackoverflow.com/questions/9038625/detect-if-device-is-ios

export default {
  isIOSDevice,
};

// Part 2: Generate the blob data functions [filename: pdfGenerator.js]
import { isIOSDevice } from "./utils/pdf";

const getFileBlob = (href) => {
  const byteCharacters = atob(href);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: "application/pdf" });
};

const downloadFile = (href, filename, deviceDetector) => {
  if (isIOSDevice()) {
    const blob = getFileBlob(href);
    const blobUrl = URL.createObjectURL(blob);

    window.location = blobUrl;
    // window.open(blobUrl, "_blank"); // request apple users to unblock popup settings for safari
  } else {
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
};
```


<b>2.</b>

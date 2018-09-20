# Bookmarklets

- [Bookmarklets](#bookmarklets)
  - [Convert NIS to Dollar / Euro](#convert-nis-to-dollar--euro)
  - [Adds the image info to the image title](#adds-the-image-info-to-the-image-title)
  - [Google Timer](#google-timer)
  - [Google Timer - Title](#google-timer---title)
  - [Decode URL](#decode-url)

## Convert NIS to Dollar / Euro

> [convertToNisFromDollarAndEuro.js](./convertToNisFromDollarAndEuro.js)

This bookmarlet open a new google search window tab with the search praise, like this example:

Let say we want to check how much 2 dollars is? The new tab URL will be:

`https://www.google.co.il/search?q=2+dollar+to+nis'`

Features:

- Select numbers in the pages and then hit the bookmark will convert those numbers.
- If the selected text doesn't contain **$**, **£** or **EUR**, it will automatically convert it dollars.
- If there is no selected text a prompt window will be a popup with the option to insert a value to convert to dollars.

<!--TODO: Add images to the bullet points  -->

---

## Adds the image info to the image title

> [addInfoToImgTitle.js](./addInfoToImgTitle.js)

For any image in the current page adding its info to the title for more convenient dev works.

---

## Google Timer

> [googleTimer.js](./googleTimer.js)

- Open a dialog to insert the amount of time for the timer (30 minutes is the default).
- Open a new tab to "_Google Search_" and start counting.

## Google Timer - Title

> [setGoogleTimerAsTitle.js](./setGoogleTimerAsTitle.js)

Update the tab title with the current time.

<!-- TODO: Try to combine both of them together https://stackoverflow.com/questions/32357312/running-javascript-in-new-window-open -->

---

## Decode URL

> [decodeURL.js](./decodeURL.js)

- Open a dialog to insert a URL to decode (by default is the current tab URL).
- Copied the decoded URL to the _clipboard_.

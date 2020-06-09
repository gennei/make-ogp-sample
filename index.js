const puppeteer = require("puppeteer");

const img1 = "https://m.media-amazon.com/images/I/41ncKIL-yRL.jpg";
const img2 = "https://m.media-amazon.com/images/I/51qWOy7aplL.jpg";
const img3 = "https://m.media-amazon.com/images/I/51AxOZRGdrL.jpg";

const html = `
<body>
    <div id="img" style="display: flex; justify-content: space-evenly; width: 500px; padding:16px; background-color: #4ea6cc;">
        <img src="${img1}" style="display: inline-block; object-fit: cover;"
            width="150px">
        <img src="${img2}" style="display: inline-block; object-fit: cover;"
            width="150px">
        <img src="${img3}" style="display: inline-block; object-fit: cover;"
            width="150px">
    </div>
</body>
`;

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setContent(html);
  let foo = await page.$("#img");
  await foo.screenshot({ path: "screenshot.png" });
  await browser.close();
})();

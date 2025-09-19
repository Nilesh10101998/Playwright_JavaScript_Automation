import { test, expect } from "@playwright/test"

test("Page Screenshot", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");
    // await page.waitForTimeout(4000);
    await page.screenshot({ path: 'tests/screenshots/HomePage.png' });
});


test("Full Page Screenshot", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'Full_Homepage_Screenshot.png', fullPage: true });
});


test("Element Screenshot", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");
    await page.locator("img[alt='First slide']").screenshot({ path: 'tests/screenshots/' + Date.now() + 'Product_First_Slide.png' })
})
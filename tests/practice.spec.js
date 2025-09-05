import { test, expect } from '@playwright/test'

test('Practice Test', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    // const pageTitle = await page.title();
    // console.log('The page title is:' + pageTitle);

    // await expect(page).toHaveTitle("STORE");

    // const pageUrl = page.url();
    // console.log('The page url is' + pageUrl);

    // await expect(page).toHaveURL("https://demoblaze.com/index.html");

    // await page.close();

    const links = await page.$$('a');

    for (const link of links) {
        
        const linktext = await link.textContent();
        console.log("All link texts are:" + linktext);
    }

})
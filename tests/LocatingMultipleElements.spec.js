import { test, expect } from '@playwright/test'

test('LocatingMultipleElements', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    // Locating the multiple webelements
    // const links = await page.$$('a')

    // for (const link of links) {

    //     const linktext = await link.textContent();
    //     console.log("all links text are:" + linktext);
    // }

    await page.waitForSelector("//div[@id='tbodyid']//div//h4//a");   //Use this command to wait for the selector

    const products = await page.$$("//div[@id='tbodyid']//div//h4//a");

    for (const product of products) {

        const productnames = await product.textContent();
        console.log(productnames);
    }

})
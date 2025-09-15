import {test, expect} from "@playwright/test"

test("Mouse right Click", async ({page}) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button = await page.locator("//span[normalize-space()='right click me']");

    //Right click action
    await button.click({button: 'right'});  //clicking the right button

    
    await page.waitForTimeout(5_000);

})
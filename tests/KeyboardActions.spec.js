import { test, expect } from "@playwright/test"

test("Keyboard Actions", async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare");

    await page.locator("textarea[name='text1']").fill("welcome to automation");

    //ctrl + A => Select the text
    await page.keyboard.press('Control+A');

    //ctrl + C => Copy the text
    await page.keyboard.press('Control+C');

    //Tab => press the tab key
    await page.keyboard.down('Tab');  //press the tab key
    await page.keyboard.up('Tab');  //release the tab key

    //ctrl + V => paste the text
    await page.keyboard.press('Control+V');


    await page.waitForTimeout(5_000);

})
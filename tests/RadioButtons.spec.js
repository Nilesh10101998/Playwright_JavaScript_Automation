import {test, expect} from "@playwright/test"

test("Handle Radiobuttons", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Handling radiobuttons
    await page.locator("//input[@id='male']").check();

    // await page.check("//input[@id='male']");  //another approach to check the radiobutton

    await expect(await page.locator("//input[@id='male']")).toBeChecked();  //verify that checkbox is checked or not
    await expect(await page.locator("//input[@id='female']")).toBeChecked();

    await page.waitForTimeout(5_000);
})
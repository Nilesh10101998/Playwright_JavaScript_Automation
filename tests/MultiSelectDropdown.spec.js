import { test, expect } from "@playwright/test"

test("Multi Select Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Select multiple options from the multi select dropdown
    // await page.locator("#colors").selectOption(["Blue", "Yellow", "Red"]);

    //Assertions
    //1]Check number of options in the dropdown
    // const options = await page.locator("#colors option");
    // await expect(options).toHaveCount(7);

    //2]Check number of options in dropdown by using the JavaScript array
    // const options2 = await page.$$("#colors option");
    // console.log("Number of options:" + options2.length);
    // await expect(options2.length).toBe(7);

    //3] Check presence of options in the dropdown
    const content = await page.locator("#colors").textContent();
    await expect(content.includes("Blue")).toBeTruthy();
    await expect(content.includes("Black")).toBeFalsy();

    await page.waitForTimeout(5_000);

})
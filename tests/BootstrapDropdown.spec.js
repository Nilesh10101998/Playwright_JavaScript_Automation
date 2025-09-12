import { test, expect } from "@playwright/test"

test("Bootstrap Dropdown", async ({ page }) => {

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator('.multiselect').click();

    //1] Check the count of dropdown options
    // const options = await page.locator("ul>li label input");
    // await expect(options).toHaveCount(11);

    //2] another approach to check the count of the dropdown options
    // const options2 = await page.$$("ul>li label input");
    // await expect(options2.length).toBe(11);

    //3] Select multiple options from the dropdown
    const options2 = await page.$$("ul>li label");

    for (let option of options2) {
        const value = await option.textContent();   //getting the text of the dropdown options
        // console.log("Value is:" + value);
        if (value.includes('Angular') || value.includes('Java')) {

            await option.click();
        }

    }


    await page.waitForTimeout(5_000);

})
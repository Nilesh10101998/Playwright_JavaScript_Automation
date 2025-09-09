import { test, expect } from "@playwright/test"

test("Handling Dropdowns", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple ways to select option from the dropdown
    // await page.locator("#country").selectOption({label: "India"});  //select by using label => we use to select option with visible text
    // await page.locator("#country").selectOption("India"); //select by using the visible text
    // await page.locator("#country").selectOption({ value: "uk" });  //select by using the value attribute
    // await page.locator("#country").selectOption({index: 1}); //select by using the index
    // await page.selectOption("#country", "India"); //Directly select the option by passing two parameters (selecting using the text)

    //Assertions

    //1]Check number of options in dropdown
    // const options = await page.locator("#country option");
    // await expect(options).toHaveCount(10);  //asserting the number of the options


    //2]Check presence of value in dropdown (Approach - 1)
    // const content = await page.locator("#country").textContent();
    // await expect(content.includes("India")).toBeTruthy();
    // await expect(content.includes("xyz")).toBeTruthy();

    // //3]Check presence of value in the dropdown by using looping (Approach - 2)
    // const options = await page.$$("#country option");
    // let status = false;
    // for (const option of options) {

    //     // console.log(await option.textContent());  //printing all the dropdown options

    //     let value = await option.textContent();
    //     if (value.includes("France")) {           //asserting the value in the dropdown
    //         status = true;
    //         break;
    //     }
    // }
    // await expect(status).toBeTruthy();

    //4]Select option from dropdown using loop
    const options = await page.$$("#country option");

    for (const option of options) {

        let value = await option.textContent();
        if (value.includes("France")) {

            const valeuAttr = await option.getAttribute("value");
            await page.selectOption("#country", valeuAttr);
            break;
        }
    }

    await page.waitForTimeout(5_000);

})
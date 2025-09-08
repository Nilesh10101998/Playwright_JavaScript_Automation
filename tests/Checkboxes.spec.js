import { test, expect } from "@playwright/test"

test("Handling Checkboxes", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Handling single-checkbox
    await page.locator("//input[@type='checkbox' and @value='sunday']").check();

    await expect(page.locator("//input[@type='checkbox' and @value='sunday']")).toBeChecked();
    await expect(page.locator("//input[@type='checkbox' and @value='sunday']").isChecked()).toBeTruthy();
    // await expect(page.locator("//input[@type='checkbox' and @value='monday']").isChecked()).toBeFalsy();

    //Handling multiple checkboxes
    const checkboxLocators = ["//input[@type='checkbox' and @value='sunday']",
        "//input[@type='checkbox' and @value='monday']",
        "//input[@type='checkbox' and @value='saturday']"
    ]

    for (const locators of checkboxLocators) {
        await page.locator(locators).check();     //Selecting the multiple checkboxes
    }

    await page.waitForTimeout(5000);

    for (const locators of checkboxLocators) {

        if (await page.locator(locators).isChecked()) {
            await page.locator(locators).uncheck();   //Deselect the multiple checkboxes
        }

    }

    await page.waitForTimeout(5000);

})
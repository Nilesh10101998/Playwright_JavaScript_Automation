import { test, expect } from "@playwright/test"

test("Mouse Double Click Action", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const copyButton = await page.locator("//button[normalize-space()='Copy Text']");

    //Double click
    await copyButton.dblclick();  //Double clicking on the webelement (button)

    const inputBox = await page.locator("#field2");

    await expect(inputBox).toHaveValue("Hello World!");  //Validating the field after double click on it


    await page.waitForTimeout(5_000);
})
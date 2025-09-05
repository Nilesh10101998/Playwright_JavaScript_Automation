import { test, expect } from "@playwright/test"

test("Handle Input Box", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //To verify the Input-box availability
    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();

    await page.locator("//input[@id='name']").fill("Nilesh Kasane");
    // await page.locator("//input[@id='email']").fill("nileshkasane15@gmail.com");

    // await page.waitForTimeout(5_000);

})
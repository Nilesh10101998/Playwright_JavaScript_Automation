import { test, expect } from '@playwright/test'

test('Soft Assertions', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    //Hard Assertions
    await expect(page).toHaveTitle("STORE123");
    await expect(page).toHaveURL("https://demoblaze.com/index.html");
    await expect(page.locator("#nava")).toBeVisible();

    //Soft Assertions
    await expect.soft(page).toHaveTitle("STORE123");
    await expect(page).toHaveURL("https://demoblaze.com/index.html");
    await expect(page.locator("#nava")).toBeVisible();

});
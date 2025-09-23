import { test, expect } from "@playwright/test"

test("Test1", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");
    await expect(page).toHaveTitle("STORE");
})


test("Test2", async ({ page }) => {

    await page.goto("https://www.opencart.com/");
    await expect(page).toHaveTitle("OpenCart - Open Source Shopping Cart Solution");
})

test("Test3", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/");
    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
})
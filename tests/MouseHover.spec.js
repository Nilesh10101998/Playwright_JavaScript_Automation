import { test, expect } from "@playwright/test"

test("Mouser Hover", async ({ page }) => {

    await page.goto("https://demo.opencart.com/");

    const desktops = await page.locator("//a[normalize-space()='Desktops']")
    const macbook = await page.locator("//a[normalize-space()='Mac (1)']");

    //mouse hover
    await desktops.hover();   //mouse hovering action on the element
    await macbook.hover();

    await page.waitForTimeout(5_000);

})
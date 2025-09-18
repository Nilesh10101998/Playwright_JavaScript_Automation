import { test, expect } from "@playwright/test"

test("Home Page Test", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("Nilesh Kasane");
    await page.locator("#loginpassword").fill("Practice@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    //Home page
    const products = await page.$$(".hrefch");
    await expect(products).toHaveLength(9);

    //Logout
    await page.locator("#logout2").click();

    await page.waitForTimeout(5000);

})

test("Add Product to the cart Test", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("Nilesh Kasane");
    await page.locator("#loginpassword").fill("Practice@123");
    await page.locator("//button[normalize-space()='Log in']").click();

    //Add Product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[@onClick='addToCart(1)']").click();

    page.on('dialog', async dialog => {            //Handling alert (dialog in Playwright)

        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();

    })

    //Logout
    await page.locator("#logout2").click();

    await page.waitForTimeout(5000);
})
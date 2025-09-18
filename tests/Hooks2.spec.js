import { test, expect } from "@playwright/test"

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://demoblaze.com/index.html");

    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("Nilesh Kasane");
    await page.locator("#loginpassword").fill("Practice@123");
    await page.locator("//button[normalize-space()='Log in']").click();

})

test.afterEach(async () => {
    //Logout
    await page.locator("#logout2").click();

})

test("Home Page Test", async () => {

    //Home page
    const products = await page.$$(".hrefch");
    await expect(products).toHaveLength(9);

})

test("Add Product to the cart Test", async () => {

    //Add Product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[@onClick='addToCart(1)']").click();

    page.on('dialog', async dialog => {            //Handling alert (dialog in Playwright)

        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();

    })

})
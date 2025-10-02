import { test, expect, chromium } from "@playwright/test"

test("Handling Page/Windows", async () => {

    const browser = await chromium.launch(); //browser contains contexts and context contains multiple pages
    const context = await browser.newContext(); //created context from the browser

    const page1 = await context.newPage();  //created page from the context
    const page2 = await context.newPage();

    const allPages = await context.pages();
    console.log("No of pages created: " + allPages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");   //this is separate page
    await expect(page1).toHaveTitle("OrangeHRM");

    await page2.goto("https://www.orangehrm.com/");  //this is also separate page
    await expect(page2).toHaveTitle("OrangeHRM");

})


test.only("Handling Multiple Page/Windows", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");   //this is separate page
    await expect(page1).toHaveTitle("OrangeHRM");

    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);
})
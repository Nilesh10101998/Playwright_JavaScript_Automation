import {test, expect} from "@playwright/test"

test("General Screenshot Test", async ({page}) => {

    await page.goto("https://demoblaze.com/index.html");
    
    //Login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("Nilesh Kasane");
    await page.locator("#loginpassword").fill("Practice@123");
    await page.locator("//button[normalize-space()='Log in']").click();

})
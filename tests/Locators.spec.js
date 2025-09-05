import { test, expect } from '@playwright/test'

test('Locators test', async ({ page }) => {

    //launch the url
    await page.goto("https://demoblaze.com/index.html");

    //click on the login button
    // await page.locator('id=login2').click();

    await page.click('id=login2');  //This is anotehr approach to click on the login button

    //enter username - CSS selector 
    // await page.locator('#loginusername').fill('Nilesh'); 
    await page.fill('#loginusername', 'Nilesh Kasane');  //This is another approach to enter the username

    //enter password - CSS Selector
    await page.fill("input[id='loginpassword']", 'Practice@123');

    //click on login button - XPath
    await page.click("//button[@onclick='logIn()']");

    //verify the logout link presence - XPath
    const logoutLink = await page.locator("//a[@id='logout2']");

    await expect(logoutLink).toBeVisible();

    await page.close();


})
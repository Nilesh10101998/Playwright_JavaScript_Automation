import { test, expect } from '@playwright/test'

test('Assertions Test', async ({ page }) => {
    //open app url
    await page.goto("https://demo.nopcommerce.com/register");

    //Verify the page URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    // await expect(page).not.toHaveURL("https://demo.nopcommerce.com/register");  //negative assertion to not have url

    //Verify title of the page
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    //Check the visibility of the webelements
    const logoElement = await page.locator(".header-logo");
    await expect(logoElement).toBeVisible();

    //Check the element is enable or not
    const searchbox = await page.locator("input[placeholder='Search store']");
    await expect(searchbox).toBeEnabled();

    //Check the element is disable or not
    const searchbox2 = await page.locator("input[placeholder='Search store']");
    await expect(searchbox2).toBeDisabled();

    //to verify radiobutton is checked or not
    const maleRadioButton = await page.locator("#gender-male");
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    //to verify Checkbox is checked or not
    const newsLetterCheckbox = await page.locator("#Newsletter");
    await expect(newsLetterCheckbox).toBeChecked();


    //To verify that element is having particual attribute or not
    const registerButton = await page.locator("#register-button");
    await expect(registerButton).toHaveAttribute('type', 'submit');

    //To verify that element is having text or not
    const registerText = await page.locator('.page-title');
    await expect(registerText).toHaveText("Register");   //this will check the all text

    //To verify that element is contains that text or not
    const registerText2 = await page.locator('.page-title');
    await expect(registerText2).toContainText("Reg");   //this will check part of the text

    //To verify that element is having a value or not
    const emailInput = await page.locator("#Email");
    await emailInput.fill("nileshkasane15@gamil.com");
    await expect(emailInput).toHaveValue("nileshkasane15@gamil.com");


})
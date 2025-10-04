import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import { credentials } from "../TestData/userdata";
import { generateRandomName } from "../utils/dataGeneratot";

test("POM Test", async ({ page }) => {

    //Login 
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(credentials.qaUser.username, credentials.qaUser.password);
    await page.waitForTimeout(5_000);


    //HomePage 
    const homePage = new HomePage(page);
    await homePage.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await homePage.goToCart();

    //CartPage
    const cartPage = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cartPage.checkProductInCart("Nexus 6");

    expect(await status).toBe(true);

})
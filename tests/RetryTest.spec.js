import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

test("Retry Test", async ({ page }) => {

    //Login
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login("Nilesh Kasane", "Practice@123");
    await page.waitForTimeout(5000);

    //Home
    const homePage = new HomePage(page);

    await homePage.addProductToCart("Nexus 6");
    await page.waitForTimeout(5000);
    await homePage.goToCart();

    //Cart
    const cartPage = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cartPage.checkProductInCart("Nexus 6");
    await expect(status).toBe(true);

});
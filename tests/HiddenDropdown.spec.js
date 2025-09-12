import { test, expect } from "@playwright/test"

test("Hidden Dropdown", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click({ force: true }); //Click on the PIM section

    await page.locator("(//div[@class='oxd-select-text--after'])[3]").click(); //Click on the dropdown option
    await page.waitForTimeout(3_000);

    const options = await page.$$("//div[@role='listbox']//span"); //store all options of the dropdown

    for (let option of options) {

        const jobTitle = await option.textContent();
        console.log(jobTitle);

        if (jobTitle.includes("QA Engineer")) {

            await option.click();
            break;
        }
    }


    await page.waitForTimeout(5_000);

})
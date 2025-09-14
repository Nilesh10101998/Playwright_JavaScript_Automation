import { test, expect } from "@playwright/test"

test.skip("Alert with OK", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling => Dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert');   //to check the type of the alert
        expect(dialog.message()).toContain('I am an alert box!'); //to verify the alert text
        await dialog.accept();
    })

    await page.locator("button[onclick='myFunctionAlert()']").click();

    await page.waitForTimeout(5_000);

})


test.skip("Confirmation dialog - Alert with OK and Cancel", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm');  //to check the type of the alert
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();
        // await dialog.dismiss();  

    })

    await page.locator("button[onClick='myFunctionConfirm()']").click();
    const confirmText = page.locator("p[id='demo']");
    await expect(confirmText).toHaveText("You pressed OK!")  //Validating the text after accepting the confirm alert

    await page.waitForTimeout(5_000);

})


test("Prompt dialog", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt');  //to check the type of the alert
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");  //Validating the default value of the prompt alert input box
        await dialog.accept('Nilesh');  //Passing value to the prompt alert input box
        // await dialog.dismiss();  

    })

    await page.locator("button[onclick='myFunctionPrompt()']").click();
    const confirmText = page.locator("p[id='demo']");
    await expect(confirmText).toHaveText("Hello Nilesh! How are you today?")  //Validating the text after accepting the confirm alert

    await page.waitForTimeout(5_000);

})

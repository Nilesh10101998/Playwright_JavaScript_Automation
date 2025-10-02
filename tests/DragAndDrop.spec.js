import { test, expect } from "@playwright/test"

test("Drag and Drop Action", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dragElement = await page.locator('//div[@class="ui-widget-content ui-draggable ui-draggable-handle"]');

    const dropElement = await page.locator('//div[@class="ui-widget-header ui-droppable"]');

    // Approach 1
    await dragElement.hover();
    await page.mouse.down();  //Click and and hold the mouse button

    await dropElement.hover();
    await page.mouse.up();  //Releasing the mouse 


    //Approach 2
    await dragElement.dragTo(dropElement);  //simple apprach to do this 


    await page.waitForTimeout(4000);

})
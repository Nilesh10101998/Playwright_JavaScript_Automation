import { test, expect } from "@playwright/test"

test("Handle Inner Frame", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    
    const frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });  //Capture the parent frame
    // await frame3.locator("input[name='mytext3']").fill("Welcome to the QA World");

    //Handling inner or nested frame
    const childFrames = await frame3.childFrames();
    await childFrames[0].locator("//*[@id='i6']/div[3]/div").check();  //We can access the nested frame by using the array



    await page.waitForTimeout(5_000);

})
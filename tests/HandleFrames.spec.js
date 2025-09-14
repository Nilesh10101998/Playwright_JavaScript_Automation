import { test, expect } from "@playwright/test"

test("Frames", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //Count total frames
    const allFrames = await page.frames(); //to check th total number of frames
    console.log("Number of frames:" + allFrames.length);

    //1]approach 1: by using name or url
    // const frameName1 = await page.frame("Frame Test Page");  //If name is present of the iframe

    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });  //by using the frame url

    // await frame1.locator("input[name='mytext1']").fill("Hello QA World"); //passing the value in the frame element

    // await page.waitForTimeout(5_000);


    //2]approach 2: by using frame locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");

    await inputbox.fill("Ram Ram");

    await page.waitForTimeout(5_000);

})
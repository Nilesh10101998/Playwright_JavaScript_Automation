import { test, expect } from "@playwright/test"

//only => It will execute only this test
test.only("Test1", async ({ page }) => {

    console.log("This is the test1....");
})


//skip => It will skip the test from execution (it mark as skipped in the test report)
test.skip("Test2", async ({ page }) => {

    console.log("This is the test2....");
})

//Conditional skip statement
test("Test3", async ({ page, browserName }) => {

    console.log("This is the test3....");

    if (browserName === "chromium") {   //if browser name is matching then it will skip the test
        test.skip();
    }
})

//fixme => it will skip the test and consider it as broken, incomplete and under development test
test.fixme("Test4", async ({ page }) => {

    // test.fixme();     //this will skip the test
    console.log("This is the test4....");

})

//Fail => intentionaly fail the test
test("Test5", async ({ page }) => {

    test.fail();  //expected
    console.log("This is the test5....");
    expect(1).toBe(2); //actual    //If both actual and expected are failed then test will passed (this is kind of negative testing)

})

//Fail => intentionaly fail the test by using the browser
test("Test6", async ({ page, browserName }) => {

    console.log("This is the test6....");

    if (browserName === "chromium") {

        test.fail(); //this will fail when we execute it in chromium but it will pass if we execute it in the firefox (it's useful for the negative testing)
    }

})

//slow
test("Test7", async ({ page }) => {

    test.slow();  //this will triple the default timeout
    test.setTimeout(5000); //setting the time for the test
    console.log("This is the test7....");
    await page.goto("https://demoblaze.com/index.html");

})
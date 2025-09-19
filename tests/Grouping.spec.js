import { test, expect } from "@playwright/test"
import { describe } from "node:test";

test.beforeAll(async () => {

    console.log("this is the beforeAll hook....");
})

test.afterAll(async () => {

    console.log("this is the afterAll hook....");
})

test.beforeEach(async () => {

    console.log("this is the beforeEach hook....");
})

test.afterEach(async () => {

    console.log("this is the afterEach hook....");
})

test.describe("Group 1", () => {

    test("Test 1", async ({ page }) => {

        console.log("this is test 1..");
    })

    test("Test 2", async ({ page }) => {

        console.log("this is test 2..");
    })

})

test.describe.skip("Group 2", () => {

    test("Test 3", async ({ page }) => {

        console.log("this is test 3..");
    })

    test("Test 4", async ({ page }) => {

        console.log("this is test 4..");
    })

})


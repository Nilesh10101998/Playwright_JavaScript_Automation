import { test, expect } from "@playwright/test"

test("Test1@sanity", async ({ page }) => {

    console.log("this is my test1....");
})


test("Test2@sanity", async ({ page }) => {

    console.log("this is my test2....");
})


test("Test3@regression", async ({ page }) => {

    console.log("this is my test3....");
})


test("Test4@regression", async ({ page }) => {

    console.log("this is my test4....");
})


test("Test5@sanity@regression", async ({ page }) => {

    console.log("this is my test5....");
})
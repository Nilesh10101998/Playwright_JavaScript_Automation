import { test, expect } from "@playwright/test"


test("Upload Single File", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.waitForSelector("#singleFileInput");  //wait for the locator

    await page.locator("#singleFileInput").setInputFiles("tests/UploadFiles/API Testing Notes.pdf");  //upload the single file


    await page.waitForTimeout(5000);
})


test.only("Upload Multiple Files", async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    // await page.waitForSelector("#filesToUpload"); //wait for the selector

    await page.locator("#filesToUpload")
        .setInputFiles(["tests/UploadFiles/API Testing Notes.pdf",
                          "tests/UploadFiles/Nilesh_Kasane_Info.pdf"]);  //upload multiple files


    //verify the uploaded file texts
    await expect(page.locator("#fileList > li:nth-child(1)")).toHaveText("API Testing Notes.pdf"); 
    await expect(page.locator("#fileList > li:nth-child(2)")).toHaveText("Nilesh_Kasane_Info.pdf");


    await page.waitForTimeout(4000);

    //Removing files
    await page.locator("#filesToUpload").setInputFiles([]);

    //verify the removed file texts
    await expect(page.locator("#fileList > li:nth-child(1)")).toHaveText("No Files Selected");

    await page.waitForTimeout(4000);
})
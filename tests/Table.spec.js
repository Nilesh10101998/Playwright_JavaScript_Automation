import { test, expect } from "@playwright/test"

test("Handling  Table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    //1] Total number of rows and column
    const columns = await table.locator('thead tr th');
    console.log("Number of columns:" + await columns.count());  //To count the number of columns
    expect(await columns.count()).toBe(4);   //validate the number of columns


    const rows = await table.locator('tbody tr');
    console.log("Number of rows:" + await rows.count());  //To count the number of rows
    expect(await rows.count()).toBe(5);  //validate the number of rows


    //2] Select checkbox for the fourth product in the table => Selecting the specific product

    const matchedRow = rows.filter({     //Filtering inside the row

        has: page.locator('td'),   //take the locator for specific row
        hasText: "Smartwatch"
    })

    matchedRow.locator("input[type='checkbox']").check();  //select the checkbox for the specific product


    // 3]Select multiple products by using re-usable function

    await selectProduct(rows, page, "Smartphone");
    await selectProduct(rows, page, "Laptop");
    await selectProduct(rows, page, "Tablet ");


    await page.waitForTimeout(5_000);

})

async function selectProduct(rows, page, name) {    //Declared reusable function

    const matchedRow = rows.filter({     //Filtering inside the row

        has: page.locator('td'),   //take the locator for specific row
        hasText: name
    })

    await matchedRow.locator("input[type='checkbox']").check();  //select the checkbox for the specific product

}
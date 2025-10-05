import { test, expect } from '@playwright/test';

test.describe.configure({retries: 2});

test('Homepage test', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");   //to lauch the url

    const pageTitle = await page.title() //storing the page title
    console.log('Page title is:', pageTitle); //printing the page title

    await expect(page).toHaveTitle('STORE');  //Verify the title fo the page

    const pageURL = page.url(); //storing the page url
    console.log('Page url is:', pageURL) //printing the page url

    await expect(page).toHaveURL('https://demoblaze.com/index.html');  //Verify the url of the page

    await page.close();

}) 
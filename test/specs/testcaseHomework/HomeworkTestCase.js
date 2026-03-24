import { browser, expect } from "@wdio/globals";

// I changed the color of the logs to green so they would stand out from the rest 
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";   

describe("My Test Suite from video 19", () => {
    it("С46", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        await expect(browser).toHaveUrl("https://github.com/");
        console.log(`${GREEN}Successfully verified the URL of the page ${RESET}`);
        
        const searchInputButton = await browser.$('//*[contains(text(), "Search or jump to")]');
        await browser.pause(2000);
        await searchInputButton.click();
        await browser.pause(2000);
        const searchInput = await browser.$('#query-builder-test');
        await browser.pause(2000);
        await searchInput.addValue("CVladislav96/HomeLibrary");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed the search query ${RESET}`);

        await browser.keys("Enter");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully submitted the search query ${RESET}`);

        const repositoryTab = await browser.$('#_r_5_--label');
        await browser.pause(2000);
        await repositoryTab.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the repository tab ${RESET}`);

        await browser.saveScreenshot("./C46.png");
        console.log(`${GREEN}Successfully saved the screenshot ${RESET}`);

        const bodyText = await browser.$("body").getText();
        await browser.pause(2000);
        await expect(bodyText).toContain("CVladislav96/HomeLibrary");
        console.log(`${GREEN}Successfully verified the presence of the repository ${RESET}`);

    

    });

    it ("С47", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        await expect(browser).toHaveUrl("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully verified the URL of the page ${RESET}`);

        const searchInputButton = await browser.$('//*[contains(text(), "Search or jump to")]');
        await browser.pause(2000);
        await searchInputButton.click();
        await browser.pause(2000);
        const searchInput = await browser.$('#query-builder-test');
        await browser.pause(2000);
        await searchInput.addValue("k8s-at-home/library-charts");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed the search query ${RESET}`);

        await browser.keys("Enter");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully submitted the search query ${RESET}`);

        const repositoryTab = await browser.$('#_r_5_--label');
        await browser.pause(2000);
        await repositoryTab.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the repository tab ${RESET}`);

        await browser.saveScreenshot("./C47.png");
        console.log(`${GREEN}Successfully saved the screenshot ${RESET}`);

        const bodyText = await browser.$("body").getText();
        await expect(bodyText).toContain("k8s-at-home/library-charts");
        console.log(`${GREEN}Successfully verified the presence of the repository ${RESET}`);
    
    });    

    it ("С48", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        await expect(browser).toHaveUrl("https://github.com/");
        console.log(`${GREEN}Successfully verified the URL of the page ${RESET}`);

        const searchInputButton = await browser.$('//*[contains(text(), "Search or jump to")]');
        await browser.pause(2000);
        await searchInputButton.click();
        await browser.pause(2000);
        const searchInput = await browser.$('#query-builder-test');
        await browser.pause(2000);
        await searchInput.addValue("CVladislav96/Shortify.Project.");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed the search query ${RESET}`);

        await browser.keys("Enter");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully submitted the search query ${RESET}`);

        const repositoryTab = await browser.$('#_R_9sraqdb_--label');
        await browser.pause(2000);
        await repositoryTab.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the repository tab ${RESET}`);

        await browser.saveScreenshot("./C48.png");
        console.log(`${GREEN}Successfully saved the screenshot ${RESET}`);

        const bodyText = await browser.$("body").getText();
        await expect(bodyText).toContain("CVladislav96/Shortify.Project.");
        console.log(`${GREEN}Successfully verified the presence of the repository ${RESET}`);
    
        
    }); 
    
    it ("С49", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        await expect(browser).toHaveUrl("https://github.com/");
        console.log(`${GREEN}Successfully verified the URL of the page ${RESET}`);

        const searchInputButton = await browser.$('//*[contains(text(), "Search or jump to")]');
        await browser.pause(2000);
        await searchInputButton.click();
        await browser.pause(2000);
        const searchInput = await browser.$('#query-builder-test');
        await browser.pause(2000);
        await searchInput.addValue("bsivko/nodejs2023Q2-service");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed the search query ${RESET}`);

        await browser.keys("Enter");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully submitted the search query ${RESET}`);

        const repositoryTab = await browser.$('#_r_5_--label');
        await browser.pause(2000);
        await repositoryTab.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the repository tab ${RESET}`);

        await browser.saveScreenshot("./C49.png");
        console.log(`${GREEN}Successfully saved the screenshot ${RESET}`);

        const bodyText = await browser.$("body").getText();
        await expect(bodyText).toContain("bsivko/nodejs2023Q2-service");
        console.log(`${GREEN}Successfully verified the presence of the repository ${RESET}`);
    
        
    }); 

    it ("С50", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        await expect(browser).toHaveUrl("https://github.com/");
        console.log(`${GREEN}Successfully verified the URL of the page ${RESET}`);

        const searchInputButton = await browser.$('//*[contains(text(), "Search or jump to")]');
        await browser.pause(2000);
        await searchInputButton.click();
        await browser.pause(2000);
        const searchInput = await browser.$('#query-builder-test');
        await browser.pause(2000);
        await searchInput.addValue("cvladislav96/homelibrary");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed the search query ${RESET}`);

        await browser.keys("Enter");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully submitted the search query ${RESET}`);

        const repositoryTab = await browser.$('#_r_5_--label');
        await browser.pause(2000);
        await repositoryTab.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the repository tab ${RESET}`);

        await browser.saveScreenshot("./C50.png");
        console.log(`${GREEN}Successfully saved the screenshot ${RESET}`);

        const bodyText = await browser.$("body").getText();
        await expect(bodyText).toContain("CVladislav96/HomeLibrary");
        console.log(`${GREEN}Successfully verified the presence of the repository ${RESET}`);
      
    }); 

    it ("С51", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        await expect(browser).toHaveUrl("https://github.com/");
        console.log(`${GREEN}Successfully verified the URL of the page ${RESET}`);

        const searchInputButton = await browser.$('//*[contains(text(), "Search or jump to")]');
        await browser.pause(2000);
        await searchInputButton.click();
        await browser.pause(2000);
        const searchInput = await browser.$('#query-builder-test');
        await browser.pause(2000);
        await searchInput.addValue("CVladislav96 / HomeLibrary");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed the search query ${RESET}`);

        await browser.keys("Enter");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully submitted the search query ${RESET}`);

        const repositoryTab = await browser.$('#_R_9sraqdb_--label');
        await browser.pause(2000);
        await repositoryTab.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the repository tab ${RESET}`);

        await browser.saveScreenshot("./C51.png");
        console.log(`${GREEN}Successfully saved the screenshot ${RESET}`);

        const bodyText = await browser.$("body").getText();
        await expect(bodyText).toContain("CVladislav96/HomeLibrary");
        console.log(`${GREEN}Successfully verified the presence of the repository ${RESET}`);
    
    }); 

    it ("С52", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        await expect(browser).toHaveUrl("https://github.com/");
        console.log(`${GREEN}Successfully verified the URL of the page ${RESET}`);

        const searchInputButton = await browser.$('//*[contains(text(), "Search or jump to")]');
        await browser.pause(2000);
        await searchInputButton.click();
        await browser.pause(2000);
        const searchInput = await browser.$('#query-builder-test');
        await browser.pause(2000);
        await searchInput.addValue("CVladislav96/404_Not_Found");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed the search query ${RESET}`);

        await browser.keys("Enter");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully submitted the search query ${RESET}`);

        const repositoryTab = await browser.$('#_R_9sraqdb_--label');
        await browser.pause(2000);
        await repositoryTab.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the repository tab ${RESET}`);

        await browser.saveScreenshot("./C52.png");
        console.log(`${GREEN}Successfully saved the screenshot ${RESET}`);

        const bodyText = await browser.$("body").getText();
        await expect(bodyText).toContain("Your search did not match any repositories");
        console.log(`${GREEN}Successfully verified the presence of the repository ${RESET}`);
    
        
    }); 

    it ("С53", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        await expect(browser).toHaveUrl("https://github.com/");
        console.log(`${GREEN}Successfully verified the URL of the page ${RESET}`);

        const searchInputButton = await browser.$('//*[contains(text(), "Search or jump to")]');
        await browser.pause(2000);
        await searchInputButton.click();
        await browser.pause(2000);
        const searchInput = await browser.$('#query-builder-test');
        await browser.pause(2000);
        await searchInput.addValue("user_does_not_exist/HomeLibrary");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed the search query ${RESET}`);

        await browser.keys("Enter");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully submitted the search query ${RESET}`);

        const repositoryTab = await browser.$('#_R_9sraqdb_--label');
        await browser.pause(2000);
        await repositoryTab.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the repository tab ${RESET}`);

        await browser.saveScreenshot("./C53.png");
        console.log(`${GREEN}Successfully saved the screenshot ${RESET}`);

        const bodyText = await browser.$("body").getText();
        await expect(bodyText).toContain("Your search did not match any repositories");
        console.log(`${GREEN}Successfully verified the presence of the repository ${RESET}`);
        await expect(bodyText).toContain("0 results");
        
    }); 
    
});    
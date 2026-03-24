import { browser, expect } from "@wdio/globals";

// I changed the color of the logs to green so they would stand out from the rest 
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";   


describe("Homework from video 8", () => {
    it("Clicking a link and verifying the linked page", async () => {
        await browser.url("https://webdriver.io/");
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);
        
        const APILink = await browser.$('//a[@href="/docs/api"]');
        await browser.pause(2000);
        await APILink.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the API link ${RESET}`);

        await expect(browser).toHaveUrl("https://webdriver.io/docs/api");
        console.log(`${GREEN}Successfully verified the URL of the linked page ${RESET}`);

    });

    it("Check the title", async () => {
        const title = await browser.getTitle();
        await expect(browser).toHaveTitle("Introduction | WebdriverIO");
        console.log(`${GREEN}The title of the page is: ${title} ${RESET}`);
    });


    it("Checking the H1 heading and breadcrumbs", async () => {
        const heading = await browser.$("h1");
        await browser.pause(2000);
        await expect(heading).toHaveText("Introduction");
        console.log(`${GREEN}Successfully verified the H1 heading text ${RESET}`);

        const breadcrumbs = await browser.$(".breadcrumbs");
        await browser.pause(2000);
        await expect(breadcrumbs).toHaveText("Introduction");
        console.log(`${GREEN}Successfully verified the breadcrumbs text ${RESET}`);
    
    });

    it("We check that the WebDriver element has a link attribute", async () => {
        const webDriverElement = await browser.$('//a[@href="/docs/api/webdriver"]');
        await browser.pause(2000);

        let linkAttribute = await webDriverElement.getAttribute("href");
        console .log(`${GREEN}The WebDriver element has the following link attribute: ${linkAttribute}${RESET}`);

        await expect(webDriverElement).toHaveAttribute("href", "/docs/api/webdriver");
        console.log(`${GREEN}Successfully verified that the WebDriver element has the correct link attribute: ${linkAttribute}${RESET}`);
    });

    it("Click on the search button, type in “all is done,” and click the X", async () => {
        const searchButton = await browser.$('//button[contains(@class, "DocSearch")]');
        await browser.pause(2000);
        await searchButton.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the search button ${RESET}`);

        const searchInput = await browser.$(".DocSearch-Input");
        
        await searchInput.setValue("all is done");
        await browser.pause(2000);
        await expect(searchInput).toHaveValue("all is done");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed "all is done" into the search input ${RESET}`);

        await searchInput.addValue(", now let's try addValue");
        await expect(searchInput).toHaveValue("all is done, now let's try addValue");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully typed "all is done, now let's try addValue ${RESET}`);

        const closeButton = await browser.$(".DocSearch-Reset");
        await browser.pause(2000);
        await closeButton.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the close button to clear the search input ${RESET}`);

    });    
});

describe("Homework from video 13", () => {
    it("Go to the website and click on “API”", async () => {
        await browser.url("https://webdriver.io/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully redirected to the website ${RESET}`);

        const APILink = await browser.$('nav a[href="/docs/api"]');
        await browser.pause(2000);
        await APILink.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the API link ${RESET}`);
    });

    it("Scroll down to the footer and check if the “Blog” button is visible", async () => {
        const BlogButton = await browser.$('footer a[href="/blog"]');
        await browser.pause(2000);
        await BlogButton.scrollIntoView();
        await browser.pause(2000);

        const isBlogButtonVisible = await BlogButton.isDisplayed();
        console.log(`${GREEN}Is the Blog button visible in the footer? - ${isBlogButtonVisible} ${RESET}`);
    });

    it("Check the “Protocol Commands” button and click it", async () => {
        const protocolCommandsButton = await browser.$('main a[href="/docs/api/protocols"]');
        await browser.pause(2000);

        const isProtocolCommandsButtonVisible = await protocolCommandsButton.isDisplayed();
        console.log(`${GREEN}Is the Protocol Commands button visible? - ${isProtocolCommandsButtonVisible} ${RESET}`);
        await browser.pause(2000);

        const isProtocolCommandsButtonEnabled = await protocolCommandsButton.isEnabled();
        console.log(`${GREEN}Is the Protocol Commands button enabled? - ${isProtocolCommandsButtonEnabled} ${RESET}`);
        await browser.pause(2000);

        const isProtocolCommandsButtonClickable = await protocolCommandsButton.isClickable();
        console.log(`${GREEN}Is the Protocol Commands button clickable? - ${isProtocolCommandsButtonClickable} ${RESET}`);
        await browser.pause(2000);

        const getOuterHtmlProtocolCommandsButton = await protocolCommandsButton.getHTML();
        console.log(`${GREEN}HTML of the Protocol Commands button: ${getOuterHtmlProtocolCommandsButton} ${RESET}`);
        await browser.pause(2000);

        const getInnerHtmlProtocolCommandsButton = await protocolCommandsButton.getHTML(false);
        console.log(`${GREEN}HTML of the Protocol Commands button: ${getInnerHtmlProtocolCommandsButton} ${RESET}`);
        await browser.pause(2000);

        protocolCommandsButton.click();
        await browser.pause(2000);
        console.log(`${GREEN}Successfully clicked the Protocol Commands button ${RESET}`);
    });

    it("Check if the WebDriver Protocol header has loaded", async () => {
        const webDriverProtocolHeader = await browser.$('//*[@id="webdriver-protocol"]');
        await browser.pause(2000);

        await browser.waitUntil(async () => {
            return $('//*[@id="webdriver-protocol"]').isDisplayed();
        }, 5000, `${GREEN} button is not displayed${RESET}`);

    })

    it("Take a screenshot of the header", async () => {
        const webDriverProtocolHeader = await browser.$('//*[@id="webdriver-protocol"]');
        await browser.pause(2000);
        await webDriverProtocolHeader.saveScreenshot('webdriver-protocol-header.png');
        console.log(`${GREEN}The WebDriver Protocol header is displayed and a screenshot has been saved ${RESET}`)
    });   
    
    it("Open a new tab and switch to it", async () => {
        await browser.newWindow("https://www.google.com/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully opened a new tab with Google ${RESET}`);

        await browser.switchWindow("https://webdriver.io/");
        await browser.pause(2000);
        console.log(`${GREEN}Successfully switched back to the WebDriverIO tab ${RESET}`);
    });
}); 
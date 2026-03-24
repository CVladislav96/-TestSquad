import { browser, $, expect } from '@wdio/globals';

class TestCase2 {

get title() { return $("//h2[text()='Millions of developers and businesses call GitHub home']")}
get startTrial() { return $("#cta > div > section > div > div > div > a > span > span")}
get titleTryTrial() { return $("//*[@class='text-center']")}
get tryNowButton() { return $("//*[text()='Try now']")}



#logGreen(message) {
        const greenColor = '\x1b[32m';
        const resetColor = '\x1b[0m';
        console.log(`${greenColor}${message}${resetColor}`);
    }

    async openGitHubPage() {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://github.com/");
        this.#logGreen('Opened the Get Quote page');
        await browser.pause(2000);
    }

    async checkTitle() {
        await this.title.scrollIntoView();
        await expect(this.title).toHaveText('Millions of developers and businesses call GitHub home');
        await browser.pause(2000);
        this.#logGreen("Title corect");
    }

    async clickStartTrial() {
        const isDisplayedStartTrial = await this.startTrial.isDisplayed();
        this.#logGreen(`href SrartTrial ${isDisplayedStartTrial}`);
        await this.startTrial.click();
        await browser.pause(2000);
        this.#logGreen('click startTrial');
    }

    async checkTryTrialTitle() {
        await expect(this.titleTryTrial).toHaveText("Try Copilot Pro for 30 days free");
        this.#logGreen("Title corect");
    }

    async clickTryNowButton() {
        const isClickable = await this.tryNowButton.isClickable();
        this.#logGreen(`Button is clicable: ${isClickable}`);
        await this.tryNowButton.click();
        this.#logGreen('Button click');
    } 

}

export default new TestCase2()
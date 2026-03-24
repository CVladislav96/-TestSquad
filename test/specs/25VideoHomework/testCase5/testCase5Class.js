import { browser, $, expect } from '@wdio/globals';

class TestCase5 {
    
    get pricingLink() { return $('[href="https://github.com/pricing"]')}
    get title() { return $('//*[text()="Try the Copilot-powered platform"]')}
    get compareFeatures() { return $('[href="#compare-features"]')}
    get compareFeaturesTitle() { return $('//*[text()="Compare features"]')}


    #logGreen(message) {
        const greenColor = '\x1b[32m';
        const resetColor = '\x1b[0m';
        console.log(`${greenColor}${message}${resetColor}`);
    }

    async openGitHubPage() {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://github.com/");
        this.#logGreen('Opened the GitHub page');
        await browser.pause(2000);
    }

    async clickPricingLink() {
        await this.pricingLink.click();
        this.#logGreen('Pricing link clicked');
        await browser.pause(2000);
    }

    async checkTitle() {
        await expect(this.title).toHaveText('Try the Copilot-powered platform');
        this.#logGreen('Title correct')
    }

    async clickCompareFeatures() {
        await this.compareFeatures.click();
        this.#logGreen('Compare features clicked');
    }

    async checkCompareFeaturesTitle() {
        await expect(this.compareFeaturesTitle).toHaveText('Compare features');
        this.#logGreen('Title correct');
    }

}    

export default new TestCase5()
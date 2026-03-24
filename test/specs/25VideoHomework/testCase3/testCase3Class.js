import { browser, $, expect } from '@wdio/globals';

class TestCase3 {

    get subscribeButton() { return $('[href="https://github.com/newsletter"]')}
    get title() { return $('//h1[text()="Get our developer newsletter"]')}
    get emailInput() { return $('input[id="form-field-emailAddress"]')}
    get selectCounty() { return $('select[id="form-field-country"]')}
    selectCheckBoxField() { return $('[class="Primer_Brand__Checkbox-module__Checkbox-checkmark___atiwt"]')}

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

    async clickSubscribeButton() {
        await this.subscribeButton.scrollIntoView();
        await browser.pause(2000);
        const isClickable = await this.subscribeButton.isClickable();
        this.#logGreen(`Button is clicable: ${isClickable}`);
        await browser.pause(2000);
        await this.subscribeButton.click();
        this.#logGreen("Button click");
        await browser.pause(2000);
    }

    async checkURL() {
        await expect(browser).toHaveUrl("https://github.com/newsletter");
        this.#logGreen('Opened the GitHub/newsletter page');
        await browser.pause(2000);
    }

    async checkTitle() {
        await expect(this.title).toHaveText('Get our developer newsletter');
        this.#logGreen('Title corect');
        await browser.pause(2000);
    }

    async enterEmail(email) {
        await this.emailInput.setValue(email);
        await browser.pause(2000);
    }

    async selectCountryName(type) {
        await this.selectCounty.selectByVisibleText(type);
        this.#logGreen(`Selected "${type}" country`);
        await browser.pause(2000);
    }   

    async selectCheckBox() {
        const checkbox = await this.selectCheckBoxField();
        await checkbox.click();
        const checkBox = await browser.$('input[id="_R_e9b9b_"]');
        this.#logGreen('Selected checkBox');
        await expect(checkBox).toBeChecked();
        await browser.pause(2000);
    }  

}

export default new TestCase3()
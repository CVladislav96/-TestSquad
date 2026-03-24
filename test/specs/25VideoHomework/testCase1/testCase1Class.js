import { browser, $, expect } from '@wdio/globals';

class TestCase1 {
    get signUpButton() { return $("a[href='/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home']")}
    get emailInput() { return $("input[id='email']")}
    get passwordInput() { return $("input[id='password']")}
    get usernameInput() { return $("input[id='login']")}
    get regionSelect() { return $("button[id='country-dropdown-panel-button']")}
    get regionInput() { return $("input[id='country-dropdown-panel-filter']")}
    emailPreferencesCheckBox() { return $("input[data-target='signups-marketing-consent-fields.marketingConsentCheckbox']")}    

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

    async clickSignUpButton() {
        await this.signUpButton.click();
        await browser.pause(2000);
        this.#logGreen('Clicked the "SignUp" button')
    }

    async setEmailInput(email) {
        await this.emailInput.setValue(email);
        await browser.pause(2000);
        this.#logGreen('Entered in the "email" field');
        await expect(this.emailInput).toHaveValue(email);
    }

    async setPasswordInput(password) {
        await this.passwordInput.setValue(password);
        await browser.pause(2000);
        this.#logGreen('Entered in the "password" field')
        await expect(this.passwordInput).toHaveValue(password)
    }

    async setUsernameInput(username) {
        await this.usernameInput.setValue(username);
        await browser.pause(2000);
        this.#logGreen('Entered in the "password" field')
        await expect(this.usernameInput).toHaveValue(username)
    }

    async selectRegion(region) {
        await this.regionSelect.click();
        await browser.pause(2000);
        await this.regionInput.setValue(region);
        await browser.pause(2000);
        await browser.keys('Enter');
        await browser.pause(2000);
        this.#logGreen('Entered Coutry');
    }
    async selectCheckBox() {
        const checkbox = await this.emailPreferencesCheckBox();
        await checkbox.click();
        this.#logGreen('Selected checkBox');
        await expect(checkbox).toBeSelected();
        await browser.pause(2000);
    }
}



export default new TestCase1()
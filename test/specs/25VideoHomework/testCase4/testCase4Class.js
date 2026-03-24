import { browser, $, expect } from '@wdio/globals';

class TestCase4 {

    get searchInputButton() { return $('//*[contains(text(), "Search or jump to")]')}
    get searchInput() { return $('#query-builder-test')}
    get firstRepositoryTitle() { return $('[href="/blueimp/wdio"]')}

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

    async useSearch(value) {
        await this.searchInputButton.click();
        this.#logGreen('Clicked searh button');
        await browser.pause(2000);
        await this.searchInput.setValue(value);
        await browser.pause(2000);
        await browser.keys('Enter');
    }

    async checkFirstTitle(value) {
        await expect(this.firstRepositoryTitle).toHaveText(expect.stringContaining(value));
        this.#logGreen('The title contains the correct text')
    }

}

export default new TestCase4()
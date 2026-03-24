import testCase3Class from "./testCase3Class";

describe('TestCase3', () => {
    it('Open page', async () => {
        await testCase3Class.openGitHubPage();
    });

    it('Check and click button', async () => {
        await testCase3Class.clickSubscribeButton();
    });

    it('Check url and title', async () => {
        await testCase3Class.checkURL();
        await testCase3Class.checkTitle();
    });

    it('Enter email', async () => {
        await testCase3Class.enterEmail('example123@gmail.com');
    });

    it('Select country', async () => {
        await testCase3Class.selectCountryName('Moldova');
    });

    it('Select chekBox', async () => {
        await testCase3Class.selectCheckBox();
    });

});
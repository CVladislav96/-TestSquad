import testCase1 from './testCase1Class.js'

describe('TestCase1', () => {
    it('Go to the GitHub page and click "SignUp" button', async () => {
        await testCase1.openGitHubPage();
        await testCase1.clickSignUpButton();
    });

    it('Set email input', async () => {
        await testCase1.setEmailInput('vlad@example.com')
    });

    it('Set password input', async () => {
        await testCase1.setPasswordInput('superpassword2026');
    });

    it('Set username input', async () => {
        await testCase1.setUsernameInput('Vladislav')
    });

    it('Select region', async () => {
        await testCase1.selectRegion('Moldova');
    });

    it('Select checkBox', async () =>{
        await testCase1.selectCheckBox();
    });

});
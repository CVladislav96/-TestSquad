import testCase2Class from "./testCase2Class";

describe('Test Case 2', () => {
    it('Open GitHub page and check title', async () => {
        await testCase2Class.openGitHubPage();
        await testCase2Class.checkTitle();
    });

    it('Check href and click startTrial', async () => {
        await testCase2Class.clickStartTrial();
    });

    it('Check title and clik tryTrial', async () => {
        await testCase2Class.checkTryTrialTitle();
        await testCase2Class.clickTryNowButton();
    });
    
});

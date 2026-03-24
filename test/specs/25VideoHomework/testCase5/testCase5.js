import testCase5Class from "./testCase5Class";

describe('TestCase5', () => {
    it('Open page', async () => {
        await testCase5Class.openGitHubPage();
    });

    it('Clicked pricing link', async () => {
        await testCase5Class.clickPricingLink();
    });

    it('Check title', async () => {
        await testCase5Class.checkTitle();
    });

    it('Cliked CompareFeatures link', async () => {
        await testCase5Class.clickCompareFeatures();
    })

    it('Check Compare Features title', async () => {
        await testCase5Class.checkCompareFeaturesTitle();
    })

});
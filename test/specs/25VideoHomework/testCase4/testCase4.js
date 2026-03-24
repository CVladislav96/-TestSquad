
import testCase4Class from "./testCase4Class";

describe('TestCase4', () => {
    it('Open page', async () => {
        await testCase4Class.openGitHubPage();
    });

    it('Used search input', async () => {
        await testCase4Class.useSearch('wdio');
    });

    it('Check first title', async () =>{
        await testCase4Class.checkFirstTitle('wdio');
    });
});            
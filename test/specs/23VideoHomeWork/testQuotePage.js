import getQuotePage from './getQuotePageClass.js'

 

describe('Test Get Quote Page', () => {
    it('Go to the page and click the "Jump to form" button', async () => {
       await getQuotePage.openGetQuotePage();
       await getQuotePage.clickJumpToFormButton();
    });

    it('Check the "name" title and enter your name', async () => {
       await getQuotePage.checkContactInformationTitle();
       await getQuotePage.checkNameTitle();
       await getQuotePage.enterName("Vlad");
    });    

    it('Check the "email" title and enter your email', async () => {
        await getQuotePage.checkEmailTitle();
        await getQuotePage.enterEmail("vlad@example.com");
    });

    it('Check the "project name" title and enter your project name', async () => {
        await getQuotePage.checkProjectOverviewTitle();
        await getQuotePage.checkProjectNameTitle();
        await getQuotePage.enterProjectName("Hocu robotu u Test Squad");
    });

    it('Check the "type of product" title and select a type of product', async () => {
        await getQuotePage.checkTypeOfProductTitle();
        await getQuotePage.selectTypeOfProduct("API");
    });

    it('Check the "platform(s) to test" title and select platforms to test', async () => {
        await getQuotePage.checkPlatformsToTestTitle();
        await getQuotePage.selectPlatformToTest('Web'); 
        await getQuotePage.selectPlatformToTest('iOS');  
        await getQuotePage.selectPlatformToTest('Android');  
        await getQuotePage.selectPlatformToTest('Desktop');
    });

    it('Check the "stage of development" title and select a stage of development', async () => {
        await getQuotePage.checkStageOfDevelopmentTitle();
        await getQuotePage.selectStageOfDevelopment('Live in production');
    });

    it('Check the "current testing status" title and select a current testing status', async () => {
        await getQuotePage.checkCurrentTestingStatusTitle();
        await getQuotePage.selectCurrentTestingStatus('In-house QA only');
    });

    it('Check the "QA services you need" title and select QA services you need', async () => {
        await getQuotePage.checkQAServicesYouNeedTitle();
        await getQuotePage.checkWhatQAServicesDoYouNeedTitle();
        await getQuotePage.selectQAService('Manual Testing');
        await getQuotePage.selectQAService('Automation (UI/API)');
        await getQuotePage.selectQAService('Performance Testing');
        await getQuotePage.selectQAService('Security Testing');
        await getQuotePage.selectQAService('Mobile Testing');
        await getQuotePage.selectQAService('Regression Testing');
        await getQuotePage.selectQAService('Accessibility Testing');
        await getQuotePage.selectQAService('CI/CD Integration');
    });


    it('Check the "Preferred Automation Tools" heading and fill in the field', async () => {
        await getQuotePage.checkPreferredAutomationToolsTitle();
        await getQuotePage.enterPreferredAutomationTools("WebDriverIO");
    });

    it('Check "Test Environments You Provide" title and select test environments you provide', async () => {
        await getQuotePage.checkTestEnvironmentsYouProvideTitle();
        await getQuotePage.selectTestEnvironment('Staging');
        await getQuotePage.selectTestEnvironment('Beta');
        await getQuotePage.selectTestEnvironment('Sandbox');
        await getQuotePage.selectTestEnvironment('Production');
        await getQuotePage.selectTestEnvironment('Test Devices');
    });

    it('Check "Any Tools/Processes Already in Place?" title and select an answer', async () => {
        await getQuotePage.checkAnyToolsProcessesAlreadyInPlaceTitle();
        await getQuotePage.enterAnyToolsProcessesAlreadyInPlace('No tools/processes in place');
    });

    it('Check the "Project Schedule and Budget" and "Project Start Date" headings, then enter the date', async () => {
        await getQuotePage.checkProjectTimelineAndBudgetTitle();
        await getQuotePage.checkProjectKickoffDateTitle();
        await getQuotePage.enterProjectKickoffDate("22-06-2026");
    });

    it('Check "Estimated Duration" title and select an estimated duration of testing', async () => {
        await getQuotePage.checkEstimatedDurationTitle();
        await getQuotePage.selectEstimatedDuration('3–6 months');
    });

    it('Check "Availability" title and select an Availability', async () =>{
        await getQuotePage.checkAvailabilityTitle();
        await getQuotePage.selectAvailability('Part-time');
    });

    it('Check "Budget Range" title and select an Budget Range', async () => {
        await getQuotePage.checkBudgetRangeTitle();
        await getQuotePage.selectBudgetRange('$50k+');
    });
    
    it('Check the "Additional Notes / Attachments" and "Project Description" fields and enter a description', async () => {
        await getQuotePage.checkAdditionalNotesAttachmentsTitle();
        await getQuotePage.checkProjectDescriptionTitle();
        await getQuotePage.enterProjectDescription('A very good project');
    });

    it('Check "How did you hear about us?" title and select an How did you hear about us?', async () => {
        await getQuotePage.checkHowDidYouHearAboutUsTitle();
        await getQuotePage.selectHowDidYouHearAboutUs('LinkedIn');
    });

    it('Check the "Attach files" title and check that the button is switched on', async () => {
        await getQuotePage.checkAttachFilesTitle();
        await getQuotePage.attachFilesInputIsEnabled();
    });

    /*it('Click the "Request a quote" button', async () => {
        await getQuotePage.clickRequestMyQuoteButton();
    }) I have commented out this test so as not to clutter up your database */ 


});
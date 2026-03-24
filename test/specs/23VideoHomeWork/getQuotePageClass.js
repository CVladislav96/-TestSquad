class GetQuotePage {

    
    get jumpToFormButton() { return $("//a[@class='automation-btn']") }
    get contactInformationTitle() { return $("//h3[@class='form-title'][text()='Contact Information']") }
    get nameTitle() { return $("label[for='your-name']") }
    get nameInput() { return $("input[name='your-name']") }
    get emailTitle() { return $("label[for='your-email']") }
    get emailInput() { return $("input[name='your-email']") }
    get projectOverview() { return $("//h3[@class='form-title'][text()='Project Overview']") }
    get projectNameTitle() { return $("label[for='project-name']") }
    get projectNameInput() { return $("input[name='project-name']") }
    get typeOfProductTitle() { return $("label[for='type-of-product-dd']") }
    get typeOfProductSelect() { return $("select[name='type-of-product-dd']") }
    get platformsToTestTitle() { return $("label[for='platform-check-boxes']") }
    platformsToTestCheckbox(platformValue) { return $(`input[name='platform-check-boxes[]'][value='${platformValue}']`); }
    get stageOfDevelopmentTitle() { return $("label[for='stage-dev-dd']") }
    get stageOfDevelopmentSelect() { return $("select[name='stage-dev-dd']") }
    get currentTestingStatusTitle() { return $("label[for='testing-status-dd']") }
    get currentTestingStatusSelect() { return $("select[name='testing-status-dd']") }
    get qaServicesYouNeed() { return $("//h3[@class='form-title'][text()='QA Services You Need']") }
    get whatQAServicesDoYouNeed() { return $("label[for='qa-serv-checkboxes']") }
    qaServicesCheckbox(serviceValue) { return $(`input[name='qa-serv-checkboxes[]'][value='${serviceValue}']`); }
    get preferredAutomationToolsTitle() { return $("label[for='preferred-tools']") }
    get preferredAutomationToolsInput() { return $("input[name='preferred-tools']") }
    get testEnvironmentsYouProvideTitle() { return $("label[for='test-environments-check-boxes']") }
    testEnvironmentsYouProvideCheckbox(environmentValue) { return $(`input[name='test-environments-check-boxes[]'][value='${environmentValue}']`); }
    get anytoolsProcessesAlreadyInPlaceTitle() { return $("label[for='tools-in-place']") }
    get anytoolsProcessesAlreadyInPlaceInput() { return $("input[name='tools-in-place']") }
    get projectTimelineAndBudget() { return $("//h3[@class='form-title'][text()='Project Timeline & Budget']") }
    get projectKickoffDateTitle() { return $("label[for='date-start']") }
    get projectKickoffDateInput() { return $("input[name='date-start']") }
    get estimatedDurationTitle() { return $("label[for='estimate-dur-dd']") }
    get estimatedDurationSelect() { return $("select[name='estimate-dur-dd']") }
    get availabilityTitle() { return $("label[for='estimate-d-availabil-dd']") }
    get availabilitySelect() { return $("select[name='estimate-d-availabil-dd']") }
    get budgetRange() { return $("label[for='estimate-d-budget-dd']")} 
    get budgetRangeSelect() { return $("select[name='estimate-d-budget-dd']") }
    get additionalNotesAttachments() { return $("//h3[@class='form-title'][text()='Additional Notes / Attachments']")}
    get projectDescriptionTitle() { return $("label[for='textarea-description']") }
    get projectDescriptionInput() { return $("textarea[name='textarea-description']") }
    get howDidYouHearAboutUsTitle() { return $("label[for='notes-dd']") }
    get howDidYouHearAboutUsSelect() { return $("select[name='notes-dd']") }
    get attachFilesTitle() { return $("label[for='file-attach']") }
    get attachFilesInput() { return $("input[name='file-attach']") }
    get requestMyQuoteButton() { return $("//input[@class='wpcf7-form-control wpcf7-submit has-spinner btn-3']") }

    #logGreen(message) {
        const greenColor = '\x1b[32m';
        const resetColor = '\x1b[0m';
        console.log(`${greenColor}${message}${resetColor}`);
    }


    async openGetQuotePage() {
        await browser.url("https://www.test-squad.com/get-quote/");
        await browser.pause(2000);
        await expect(browser).toHaveUrl("https://www.test-squad.com/get-quote/");
        this.#logGreen('Opened the Get Quote page');
        await browser.pause(2000);
    }

    async clickJumpToFormButton() {
        await this.jumpToFormButton.click();
        await browser.pause(2000);
        this.#logGreen('Clicked the "Jump to form" button');
    }

    async checkContactInformationTitle() {
        await expect(this.contactInformationTitle).toHaveText("Contact Information");
        this.#logGreen('Checked the "Contact Information" title');
        await browser.pause(2000);
    }

    async checkNameTitle() {
        await expect(this.nameTitle).toHaveText("Your name");
        this.#logGreen('Checked the "name" title');
        await browser.pause(2000);

    }
    async enterName(name) {
        await this.nameInput.setValue(name);
        this.#logGreen('Entered name in the "name" field');
        await expect(this.nameInput).toHaveValue(name);
        this.#logGreen('Checked that the name is entered in the "name" field');
        await browser.pause(2000);
    }

    async checkEmailTitle() {
        await expect(this.emailTitle).toHaveText("Your email");
        this.#logGreen('Checked the "email" title');
        await browser.pause(2000);
    }

    async enterEmail(email) {
        await this.emailInput.setValue(email);
        this.#logGreen('Entered email in the "email" field');
        await expect(this.emailInput).toHaveValue(email);
        this.#logGreen('Checked that the email is entered in the "email" field');
        await browser.pause(2000);
    }

    async checkProjectOverviewTitle() {
        await expect(this.projectOverview).toHaveText("Project Overview");
        this.#logGreen('Checked the "Project Overview" title');
        await browser.pause(2000);
    }

    async checkProjectNameTitle() {
        await expect(this.projectNameTitle).toHaveText("Project name");
        this.#logGreen('Checked the "project name" title');
        await browser.pause(2000);
    }

    async enterProjectName(projectName) {
        await this.projectNameInput.setValue(projectName);
        this.#logGreen('Entered project name in the "project name" field');
        await expect(this.projectNameInput).toHaveValue(projectName);
        this.#logGreen('Checked that the project name is entered in the "project name" field');
        await browser.pause(2000);
    }

    async checkTypeOfProductTitle() {
        await expect(this.typeOfProductTitle).toHaveText("Type of Product");
        this.#logGreen('Checked the "type of product" title');
        await browser.pause(2000);
    }

    async selectTypeOfProduct(type) {
        await this.typeOfProductSelect.selectByVisibleText(type);
        this.#logGreen(`Selected "${type}" in the "type of product" field`);
        await expect(this.typeOfProductSelect).toHaveValue(type);
        this.#logGreen(`Checked that "${type}" is selected in the "type of product" field`);
        await browser.pause(2000);
    }

    async checkPlatformsToTestTitle() {
        await expect(this.platformsToTestTitle).toHaveText("Platform(s) to Test");
        this.#logGreen('Checked the "platform(s) to test" title');
        await browser.pause(2000);
    }

    async selectPlatformToTest(platform) {
        await this.platformsToTestTitle.scrollIntoView();
        const checkbox = await this.platformsToTestCheckbox(platform);
        await checkbox.click();
        this.#logGreen(`Selected "${platform}" in the "platform(s) to test" field`);
        await expect(checkbox).toBeSelected();
        this.#logGreen(`Checked that "${platform}" is selected in the "platform(s) to test" field`);
        await browser.pause(2000);
    }

    async checkStageOfDevelopmentTitle() {
        await expect(this.stageOfDevelopmentTitle).toHaveText("Stage of Development");
        this.#logGreen('Checked the "stage of development" title');
        await browser.pause(2000);
    }

    async selectStageOfDevelopment(stage) {
        await this.stageOfDevelopmentSelect.selectByVisibleText(stage);
        this.#logGreen(`Selected "${stage}" in the "stage of development" field`);
        await expect(this.stageOfDevelopmentSelect).toHaveValue(stage);
        this.#logGreen(`Checked that "${stage}" is selected in the "stage of development" field`);
        await browser.pause(2000);
    }

    async checkCurrentTestingStatusTitle() {
        await expect(this.currentTestingStatusTitle).toHaveText("Current Testing Status");
        this.#logGreen('Checked the "current testing status" title');
        await browser.pause(2000);
    }

    async selectCurrentTestingStatus(status) {
        await this.currentTestingStatusSelect.selectByVisibleText(status);
        this.#logGreen(`Selected "${status}" in the "current testing status" field`);
        await expect(this.currentTestingStatusSelect).toHaveValue(status);
        this.#logGreen(`Checked that "${status}" is selected in the "current testing status" field`);
        await browser.pause(2000);
    }

    async checkQAServicesYouNeedTitle() {
        await expect(this.qaServicesYouNeed).toHaveText("QA Services You Need");
        this.#logGreen('Checked the "QA Services You Need" title');
        await browser.pause(2000);
    }

    async checkWhatQAServicesDoYouNeedTitle() {
        await expect(this.whatQAServicesDoYouNeed).toHaveText("What QA services do you need?");
        this.#logGreen('Checked the "What QA services do you need?" title');
        await browser.pause(2000);
    }

    async selectQAService(service) {
        const checkbox = await this.qaServicesCheckbox(service);
        await checkbox.click();
        this.#logGreen(`Selected "${service}" in the "What QA services do you need?" field`);
        await expect(checkbox).toBeSelected();
        this.#logGreen(`Checked that "${service}" is selected in the "What QA services do you need?" field`);
        await browser.pause(2000);
    }

    async checkPreferredAutomationToolsTitle() {
        await expect(this.preferredAutomationToolsTitle).toHaveText("Preferred Automation Tools");
        this.#logGreen('Checked the "Preferred Automation Tools" title');
        await browser.pause(2000);
    }

    async enterPreferredAutomationTools(tools) {
        await this.preferredAutomationToolsInput.setValue(tools);
        this.#logGreen('Entered preferred automation tools in the "Preferred Automation Tools" field');
        await expect(this.preferredAutomationToolsInput).toHaveValue(tools);
        this.#logGreen('Checked that the preferred automation tools are entered in the "Preferred Automation Tools" field');
        await browser.pause(2000);
    }

    async checkTestEnvironmentsYouProvideTitle() { 
        await expect(this.testEnvironmentsYouProvideTitle).toHaveText("Test Environments You Provide");
        this.#logGreen('Checked the "Test Environments You Provide" title');
        await browser.pause(2000);
    }

    async selectTestEnvironment(environment) {
        const checkbox = await this.testEnvironmentsYouProvideCheckbox(environment);
        await checkbox.click();
        this.#logGreen(`Selected "${environment}" in the "Test Environments You Provide" field`);
        await expect(checkbox).toBeSelected();
        this.#logGreen(`Checked that "${environment}" is selected in the "Test Environments You Provide" field`);
        await browser.pause(1000);
    }

    async checkAnyToolsProcessesAlreadyInPlaceTitle() {
        await expect(this.anytoolsProcessesAlreadyInPlaceTitle).toHaveText("Any tools/processes already in place?");
        this.#logGreen('Checked the "Any tools/processes already in place?" title');
        await browser.pause(2000);
    }

    async enterAnyToolsProcessesAlreadyInPlace(toolsProcesses) {
        await this.anytoolsProcessesAlreadyInPlaceInput.setValue(toolsProcesses);
        this.#logGreen('Entered tools/processes already in place in the "Any tools/processes already in place?" field');
        await expect(this.anytoolsProcessesAlreadyInPlaceInput).toHaveValue(toolsProcesses);
        this.#logGreen('Checked that the tools/processes already in place are entered in the "Any tools/processes already in place?" field');
        await browser.pause(2000);
    }

    async checkProjectTimelineAndBudgetTitle() {
        await expect(this.projectTimelineAndBudget).toHaveText("Project Timeline & Budget");
        this.#logGreen('Checked the "Project Timeline & Budget" title');
        await browser.pause(2000);
    }

    async checkProjectKickoffDateTitle() {
        await expect(this.projectKickoffDateTitle).toHaveText("Project Kickoff Date");
        this.#logGreen('Checked the "Project Kickoff Date" title');
        await browser.pause(2000);
    }

    async enterProjectKickoffDate(date) {
        await this.projectKickoffDateInput.setValue(date);
        this.#logGreen('Entered project kickoff date in the "Project Kickoff Date" field');
        await browser.pause(2000);
    }
    
    async checkEstimatedDurationTitle() {
        await expect(this.estimatedDurationTitle).toHaveText("Estimated Duration");
        this.#logGreen('Checked the "Estimated Duration" title');
        await browser.pause(2000);
    }

    async selectEstimatedDuration(duration) {
        await this.estimatedDurationSelect.selectByVisibleText(duration);
        this.#logGreen(`Selected "${duration}" in the "Estimated Duration" field`);
        await expect(this.estimatedDurationSelect).toHaveValue(duration);
        this.#logGreen(`Checked that "${duration}" is selected in the "Estimated Duration" field`);
        await browser.pause(2000);
    }

    async checkAvailabilityTitle() {
        await expect(this.availabilityTitle).toHaveText("Availability");
        this.#logGreen('Checked the "Availability" title');
        await browser.pause(2000);
    }

    async selectAvailability(value) {
        await this.availabilitySelect.selectByVisibleText(value);
        this.#logGreen(`Selected "${value}" in the "Availability" field`);
        await expect(this.availabilitySelect).toHaveValue(value);
        this.#logGreen(`Checked that "${value}" is selected in the "Availability`);
        await browser.pause(2000)
    }

    async checkBudgetRangeTitle() {
        await expect(this.budgetRange).toHaveText("Budget Range");
        this.#logGreen('Checked the "Budget Range" title');
        await browser.pause(2000);
    }

    async selectBudgetRange(range) {
        await this.budgetRangeSelect.selectByVisibleText(range);
        this.#logGreen(`Selected "${range}" in the "BudgetRange" field`);
        await expect(this.budgetRangeSelect).toHaveValue(range);
        this.#logGreen(`Checked that "${range}" is selected in the "BudgetRange`);
        await browser.pause(2000)
    }

    async checkAdditionalNotesAttachmentsTitle() {
        await expect(this.additionalNotesAttachments).toHaveText('Additional Notes / Attachments');
        this.#logGreen('Checked the "Additional Notes / Attachments"');
        await browser.pause(2000);
    }

    async checkProjectDescriptionTitle() {
        await expect(this.projectDescriptionTitle).toHaveText('Project Description');
        this.#logGreen('Checked the "Project Description"');
        await browser.pause(2000);
    }

    async enterProjectDescription(text) {
        await this.projectDescriptionInput.setValue(text);
        this.#logGreen('Entered Project Description in the "ProjectDescription" field');
        await expect(this.projectDescriptionInput).toHaveValue(text);
        this.#logGreen('Checked that the Project Description in the "Project Description" field');
        await browser.pause(2000);
    }

    async checkHowDidYouHearAboutUsTitle() {
        await expect(this.howDidYouHearAboutUsTitle).toHaveText('How did you hear about us?');
        this.#logGreen('Checked the "How did you hear about us?"');
        await browser.pause(2000);
    }

    async selectHowDidYouHearAboutUs(value) {
        await this.howDidYouHearAboutUsSelect.selectByVisibleText(value);
        this.#logGreen(`Selected "${value}" in the "How did you hear about us?" field`);
        await expect(this.howDidYouHearAboutUsSelect).toHaveValue(value);
        this.#logGreen(`Checked that "${value}" is selected in the "How did you hear about us?`)
        await browser.pause(2000);
    }

    async checkAttachFilesTitle() {
        await expect(this.attachFilesTitle).toHaveText('Attach files');
        this.#logGreen('Checked the "Attach files"');
        await browser.pause(2000);
    }

    async attachFilesInputIsEnabled() {
        await expect(this.attachFilesInput).toBeEnabled();
        this.#logGreen("Button is enabled")
    }

    async clickRequestMyQuoteButton() {
        await this.requestMyQuoteButton.click();
        await browser.pause(2000);
        this.#logGreen('Clicked the "Request My Quote button');
    }

}

export default new GetQuotePage()
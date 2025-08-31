const {Common} = require('../utils/common');

export class LoginPage{

    constructor(page){
        this.page=page;
        this.commonPage = new Common(page);
        this.email='#username';
        this.password='#password';
        this.loginbutton=page.getByTestId('login-submit-button');
        this.CompanyName='#companyname';
        this.loginErrorMessage='//*[@id="root"]/div[1]/ol/li/div/div[2]';
        this.forgotPasswordLink=page.getByTestId('forgot-password-link');
        this.forgotPasswordPageHeader='//*[@id="root"]/div[2]/div[2]/div[2]/div[1]/h3';
    }

    async login(username,password){
        await this.commonPage.type(this.email,username);
        await this.commonPage.type(this.password,password);
        await this.commonPage.clickbutton(this.loginbutton);
    }

    async verifyCompanyName(text){
        await this.commonPage.verifyText(this.CompanyName,text);
    }

    async VerifyInvalidLoginErrorMsg(text){
        await this.commonPage.verifyText(this.loginErrorMessage,text);
    }

    async clickForgotPasswordLink(){
        await this.commonPage.clickbutton(this.forgotPasswordLink);
    }

    async verifyResetPasswordPage(text){
        await this.commonPage.verifyText(this.forgotPasswordPageHeader,text);
    }
}

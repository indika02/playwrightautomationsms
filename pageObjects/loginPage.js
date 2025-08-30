const {Common} = require('../utils/common');

export class LoginPage{

    constructor(page){
        this.page=page;
        this.commonPage = new Common(page);
        this.email='#username';
        this.password='#password';
        this.loginbutton='//*[@id="root"]/div[2]/div[2]/div/div[2]/div[2]/form/button';
        this.CompanyName='//*[@id="root"]/div[2]/div[2]/div/div[1]/h1';
        this.loginErrorMessage='//*[@id="root"]/div[1]/ol/li/div/div[2]';
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
}

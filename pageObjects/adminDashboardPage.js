const {Common} = require('../utils/common');

export class adminDashboardPage{

    constructor(page){
        this.page=page;
        this.commonPage = new Common(page);
        this.dashboardHeader='//*[@id="root"]/div[2]/div/main/div/div/h1';
        this.usernamedropdown='//*[@id="root"]/div[2]/div/header/div[2]/div[1]/div[2]';
        this.logoutbtn='//*[@id="root"]/div[2]/div/header/div[2]/div[2]/button';
    }

    async verifyHeader(text){
        await this.commonPage.verifyText(this.dashboardHeader,text);
    }

    async clickUsernameDropdown(){
        await this.commonPage.clickbutton(this.usernamedropdown);
}
    async clickLogout(){
        await this.commonPage.clickbutton(this.logoutbtn);
    }

}
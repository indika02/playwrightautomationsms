const testData = require('../config/config.json');
const { expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

export class Common{


    constructor(page){
        this.page=page;
        this.testData=testData;
    }

    async goto(){
        await this.page.goto(this.testData.urls.loginUrl);
    }

    async clearTextBox(locator){
       if (typeof locator === 'string') {
        await this.page.fill(locator, '');   
    } else {
        await locator.fill('');            
    }
    }

    async type(locator,text){
       if (typeof locator === 'string') {
        await this.page.fill(locator,text);   
    } else {
        await locator.fill(text);            
    }
    }

    async hoverbtn(locator){
        if (typeof locator === 'string') {
        await this.page.hover(locator);   
    } else {
        await locator.hover();            
    }
    }
    
    async clickbutton(locator){
    if (typeof locator === 'string') {
        await this.page.click(locator);   
    } else {
        await locator.click();            
    }
}

    async verifyText(locator,text){
    if (typeof locator === 'string') {
        await expect(this.page.locator(locator)).toHaveText(text);   
    }else {
        await expect(locator).toHaveText(text);            
    }
}

    async selectitem(locator,item){
        if (typeof locator === 'string') {
        await this.page.selectOption(locator,item);   
    } else {
        await locator.selectOption(item);            
    }
}

    async uploadFile(locator,item){
       if (typeof locator === 'string') {
        await this.page.setInputFiles(locator,item);   
    } else {
        await locator.setInputFiles(item);            
    }
}

}

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
        await this.page.locator(locator).fill('');
    }

    async type(locator,text){
        await this.page.type(locator,text);
    }

    async keyboardtype(locator,text){
        const divLocator = this.page.locator(locator);
        await divLocator.click(); 
        await this.page.keyboard.type(text);
    }

    async hoverbtn(locator){
        await this.page.hover(locator);
    }
    async clickbutton(locator){
        await this.page.click(locator);
    }

    async verifyText(locator,text){
        await expect(this.page.locator(locator)).toHaveText(text);
    }
    
    async verifyThroughAltText(locator){
        await expect(this.page.getByAltText(locator)).toBeVisible({ timeout: 90000 });
    }

    async enterTexthroughLabel(labelname,text){
        await this.page.getByLabel(labelname).fill(text);
    }

    async selectitem(locator,item){
        await this.page.locator(locator).selectOption(item);
    }

    async uploadFile(locator,item){
        await this.page.locator(locator).setInputFiles(item);
    }

    async enterTextthroughPlaceholder(locator,text){
        await this.page.getByPlaceholder(locator).fill(text);
    }

}

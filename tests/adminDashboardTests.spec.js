const {test,expect}=require('@playwright/test');
import {LoginPage} from '../pageObjects/loginPage';
import { adminDashboardPage } from '../pageObjects/adminDashboardPage';
const testData=require('../config/config.json');
import { Common } from '../utils/common';

test.describe('Admin dashboard page Test Cases',()=>{

    let page; 
    let commonPage;
    let loginPage;
    let dashBoard;

    test.beforeAll(async ({ browser }) => {
      
        const context = await browser.newContext();
        page = await context.newPage();
        
        commonPage = new Common(page);
        loginPage = new LoginPage(page);
        dashBoard = new adminDashboardPage(page);
    });

    test.describe.configure({ mode: 'serial' });

test('Verify that Grade distribution progress bars available in admin dashboard',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials["admin"].username,testData.validCredentials["admin"].password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyHeader('Dashboard');
        })

        await test.step('Verify that grade distribution progress bar is available',async()=>{
            await dashBoard.verifygradeDistributionProgressBar('Grade Distribution');
        })
        await test.step('Logout from the system',async()=>{
            await dashBoard.clickLogout();
        })
    })

});   
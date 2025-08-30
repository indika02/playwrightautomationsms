const {test,expect}=require('@playwright/test');
import {LoginPage} from '../pageObjects/loginPage';
import { adminDashboardPage } from '../pageObjects/adminDashboardPage';
const testData=require('../config/config.json');
import { Common } from '../utils/common';

test.describe('Login page',()=>{

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

test('Admin can login to the system by using valid user credentials',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Login to the user account by using valid credentials',async()=>{
            await loginPage.login(testData.validCredentials["admin"].username,testData.validCredentials["admin"].password);
        })

        await test.step('Verify the successful login',async()=>{
            await dashBoard.verifyHeader('Dashboard');
        })

        await test.step('Click the username icon in navigation bar',async()=>{
            await dashBoard.clickUsernameDropdown();
        })
        await test.step('Logout from the system',async()=>{
            await dashBoard.clickLogout();
        })
    })

test('Verify that Company name is correct',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })

        await test.step('Verify the company name as EduManage Pro',async()=>{
            await loginPage.verifyCompanyName('EduManage Pro');
        })
    })

test('Verify that user is not able to login with invalid credentials',async()=>{

        await test.step('Naviagate to the loginpage',async()=>{
            await commonPage.goto();
        })  
        
        await test.step('Login to the user account by using invalid credentials',async()=>{
            await loginPage.login(testData.invalidCredentials.username,testData.invalidCredentials.password);
        })

        await test.step('Verify the error message for invalid credentials',async()=>{
            await loginPage.VerifyInvalidLoginErrorMsg('Invalid username or password');
        })
    })
});
  
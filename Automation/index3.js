const {Builder, By, Key, util} = require("selenium-webdriver");

async function test1()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/signup");
    await driver.findElement(By.name("email")).sendKeys("nnegrete@pytime.tk",Key.RETURN);
    await driver.findElement(By.name("username")).sendKeys("TESTUSERNAME",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("PAS$W0RD!",Key.RETURN);
    await driver.findElement(By.name("confirmpassword")).sendKeys("PAS$W0RD!",Key.RETURN);
}
test1();
const {Builder, By, Key, util} = require("selenium-webdriver");

async function test1()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys("TEST-USERNAME",Key.RETURN);
    console.log("TEST");
    await driver.findElement(By.name("password")).sendKeys("PAS$W0RD!",Key.RETURN);

}
test1();
const {Builder, By, Key, util} = require("selenium-webdriver");

async function test1()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/home");
    await driver.findElement(By.xpath("//input[@placeholder='Search games or tags']")).sendKeys("Test",Key.RETURN);
    
}
test1();
const {Builder, By, Key, util} = require("selenium-webdriver");

async function test1()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/recommendations");
    await driver.findElement(By.linkText("Tell us your game preferences...")).sendKeys("Test",Keys.RETURN);
}
test1();
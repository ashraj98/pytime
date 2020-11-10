const {Builder, By, Key, util} = require("selenium-webdriver");

async function test1()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys("TEST-USERNAME",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("PAS$W0RD!",Key.RETURN);

}
async function test2()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys("",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("PAS$W0RD!",Key.RETURN);

}
async function test3()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys("US3R",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("",Key.RETURN);

}
async function test4()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys("",Key.RETURN);
    console.log("TEST");
    await driver.findElement(By.name("password")).sendKeys("",Key.RETURN);

}
async function test5()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys(null,Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("DATA",Key.RETURN);

}
test1();
test2();
test3();
test4();
test5();
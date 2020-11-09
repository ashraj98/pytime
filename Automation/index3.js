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
async function test2()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/signup");
    await driver.findElement(By.name("email")).sendKeys("nnegrete@gmail.com",Key.RETURN);
    await driver.findElement(By.name("username")).sendKeys("TESTUSERNAME",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("PAS$W0RD!",Key.RETURN);
    await driver.findElement(By.name("confirmpassword")).sendKeys("PAS$W0RD!",Key.RETURN);
}
async function test3()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/signup");
    await driver.findElement(By.name("email")).sendKeys("nnegrete@gmail.com",Key.RETURN);
    await driver.findElement(By.name("username")).sendKeys("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("PAS$W0RD!",Key.RETURN);
    await driver.findElement(By.name("confirmpassword")).sendKeys("PAS$W0RD!",Key.RETURN);
}
async function test4()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/signup");
    await driver.findElement(By.name("email")).sendKeys("nnegrete@gmail.com",Key.RETURN);
    await driver.findElement(By.name("username")).sendKeys("u$3r",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("PAS$!",Key.RETURN);
    await driver.findElement(By.name("confirmpassword")).sendKeys("PAS$W0RD!",Key.RETURN);
}
async function test5()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/signup");
    await driver.findElement(By.name("email")).sendKeys("nnegrete@gmail.com",Key.RETURN);
    await driver.findElement(By.name("username")).sendKeys("u$3r",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys(null,Key.RETURN);
    await driver.findElement(By.name("confirmpassword")).sendKeys("PAS$W0RD!",Key.RETURN);
}
async function test6()
{
    
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/signup");
    await driver.findElement(By.name("email")).sendKeys("nnegrete@gmail.com",Key.RETURN);
    await driver.findElement(By.name("username")).sendKeys("u$3r",Key.RETURN);
    await driver.findElement(By.name("password")).sendKeys("P",Key.RETURN);
    await driver.findElement(By.name("confirmpassword")).sendKeys(null,Key.RETURN);
}
test1();
test2();
test3();
test4();
test5();
test6();
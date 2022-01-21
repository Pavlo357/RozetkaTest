const { Builder, By, Key } = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://rozetka.com.ua/");
    await driver.findElement(By.name("search")).sendKeys("RTX 3090", Key.RETURN);
    await driver.wait(driver.findElements(By.className("catalog-grid")).then(function(elements) {
        elements.forEach(function(element) {
            element.getText().then(function(text) {
                console.log(text);
            });
        });
    }), 2000)
};

example();
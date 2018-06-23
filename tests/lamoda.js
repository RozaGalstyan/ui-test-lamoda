module.exports = {
  'Test lamoda.ru': function(browser) {

    browser
      .url('https://www.lamoda.ru/women-home/', () => {
        console.log('Loading lamoda.ru...');
      })
	  .useCss()
      .waitForElementVisible('body', 5000)
	  .useXpath()
	  .click("//*[@id='menu-wrapper']/div/div[2]/a[3]", function(result) {
        this.assert.strictEqual(result.status, 0);
      })
	  .useCss()
	  .waitForElementVisible('body', 5000)
	  .useXpath()
	  .click("/html/body/div[1]/div[7]/div[2]/div[2]/div/div/div[2]/div/div/div[4]", function(result) {
	    this.assert.strictEqual(result.status, 0);
	  })
	  .useCss()
	  .click('input[value=39]')
	  .useXpath()
	  .click("//div[@class='multifilter multifilter_price']")
	  .clearValue('/html/body/div[1]/div[7]/div[2]/div[2]/div/div/div/div[2]/div/div/div[6]/div/div/div[1]/div/div/input[1]')
	  .setValue('/html/body/div[1]/div[7]/div[2]/div[2]/div/div/div/div[2]/div/div/div[6]/div/div/div[1]/div/div/input[1]', '1000')
	  .clearValue('/html/body/div[1]/div[7]/div[2]/div[2]/div/div/div/div[2]/div/div/div[6]/div/div/div[1]/div/div/input[2]')
	  .setValue('/html/body/div[1]/div[7]/div[2]/div[2]/div/div/div/div[2]/div/div/div[6]/div/div/div[1]/div/div/input[2]', '4000')
	  .click("//div[contains(@class, 'Применить')]", function(result) {
		this.asset.containsText("//a[@class='products-list-item__size-item link']", "39")  
	  })
      .end();
  }
};
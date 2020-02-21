const puppeteer = require('puppeteer');
var time = 550
var counter =0 
async function vote() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1000, height: 500})
  await page.goto('https://rhestrategico.typeform.com/to/DLMTE1');
  await page.waitFor(1500);
  await pressButton(page, 'Enter')
  await pressButton(page, 'A')
  await pressButton(page, 'Enter')
  await pressButton(page, 'Enter')
  await page.screenshot({path: `./puppet/final${counter}.png`});
  await browser.close();
}

async function pressButton(page, button){
  await page.keyboard.press(button);
  await page.waitFor(time);
}

//unfixedFooter > div > div > div > div > div > div > div > button > div > div > div

const forLoop = async (limit) => {
  console.log('Start')

  for (let index = 1; index <= limit; index++) {
    await vote()
    console.log("Foi " + index);
    counter++
  }

  console.log('End')
}

forLoop(5)
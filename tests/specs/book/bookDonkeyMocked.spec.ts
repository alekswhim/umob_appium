import { execSync } from 'child_process';
import PageObjects from "../../pageobjects/umobPageObjects.page.js";
import submitTestRun from '../../helpers/SendResults.js';


describe('Donkey Bike Booking Test', () => {

    before(async () => {
  
        // Find and click LOG IN button
        const logInBtn = await driver.$('-android uiautomator:new UiSelector().text("LOG IN")');
        await logInBtn.isClickable();    
        await driver.pause(5000);
        await logInBtn.click();
  
        await PageObjects.login({ username:'4bigfoot+10@gmail.com', password: '123Qwerty!' });
  
  
    });

  beforeEach(async () => {
    await driver.activateApp("com.umob.umob");
  });

  it('Book Donkey UMOB Bike 20', async () => {

    const testId = "4421c5ee-46d9-40d9-867c-0ea5c0a5ddce"
// Send results
let testStatus = "Pass";
    let screenshotPath = "";
    let testDetails = ""
    let error = null;

    try {

    // Set initial location
    execSync(
      `adb shell am startservice -e longitude 4.4744301 -e latitude 51.9155956 io.appium.settings/.LocationService`
    );
    await driver.pause(5000);

    // Get screen dimensions for click positioning
    const { width, height } = await driver.getWindowSize();
    const centerX = Math.round(width / 2);
    
    // Center screen click
    await driver
      .action("pointer")
      .move({ x: centerX, y: Math.round(height / 2) })
      .down()
      .up()
      .perform();

    // Click UMOB Bike 20 button
    const umob20Button = await driver.$('-android uiautomator:new UiSelector().text("UMOB Bike 2 0")');
    await umob20Button.click();

    //const selectUmob = await driver.$('-android uiautomator:new UiSelector().text("SELECT UMOB BIKE 2 0")');
    //await selectUmob.click();

    /* Click 2cm above bottom edge
    await driver
      .action("pointer")
      .move({ x: centerX, y: height - 20 })
      .down()
      .up()
      .perform(); */

    // Click continue button
    await driver.pause(5000);
    const continueButton = await driver.$('android=new UiSelector().text("CONTINUE")');
    await expect (continueButton).toBeDisplayed();
    await expect (continueButton).toBeEnabled();

    await continueButton.click();

          // Handle permissions
          const allowPermissionBtn = await driver.$("id:com.android.permissioncontroller:id/permission_allow_button");
          await expect(allowPermissionBtn).toBeDisplayed();
          await allowPermissionBtn.click();


    await driver.pause(5000);
    //Scroll to bottom
    await driver.executeScript('mobile: scrollGesture', [{
      left: 100,
      top: 1500,
      width: 200,
      height: 100,
      direction: 'down',
      percent: 100
    }]); 

    /*const screen = await driver.getWindowRect();
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    
    await driver.executeScript('mobile: scrollGesture', [{
      left: screenWidth / 2,  // горизонтальная середина экрана
      top: screenHeight * 0.65,  // точка начала скролла в нижней части экрана
      width: screenWidth / 2,  // ширина области для скролла
      height: screenHeight * 0.15,  // высота области для скролла
      direction: 'down',  // направление скролла
      percent: 100  // полное прокручивание
    }]); */


    // Click 5cm above bottom
    /*await driver
      .action("pointer")
      .move({ x: centerX, y: height - 50 })
      .down()
      .up()
      .perform();*/

    await driver.pause(5000);

    const umob20Button1 = await driver.$('-android uiautomator:new UiSelector().text("START TRIP")');
    await umob20Button1.click();

    const umob20Button2 = await driver.$('-android uiautomator:new UiSelector().text("UNLOCK BIKE")');
    await umob20Button2.click();

    const umob20Button3 = await driver.$('-android uiautomator:new UiSelector().text("CONFIRM")');
    await umob20Button3.click();

    // Click end trip button
    const endTripButton = await driver.$("accessibility id:endTrip-text");
    await endTripButton.click();

    await driver.pause(5000);

    // Click close button
    const closeButton = await driver.$("accessibility id:closeButton-text");
    await closeButton.click();

  } catch (e) {
    error = e;
    console.error("Test failed:", error);
    testStatus = "Fail";
    testDetails = e.message;

    console.log("TEST 123")

    // Capture screenshot on failure
    screenshotPath = "./screenshots/"+ testId+".png";
    await driver.saveScreenshot(screenshotPath);
    // execSync(
    //   `adb exec-out screencap -p > ${screenshotPath}`
    // );
    
  } finally {
    // Submit test run result
    try {
        console.log("TEST 456")

      await submitTestRun(testId, testStatus, testDetails, screenshotPath);
      console.log("Test run submitted successfully");
    } catch (submitError) {
      console.error("Failed to submit test run:", submitError);
    }

    // If there was an error in the main try block, throw it here to fail the test
    if (error) {
      throw error;
    }
  }
  });

  afterEach(async () => {
    await driver.terminateApp("com.umob.umob");
  });
});
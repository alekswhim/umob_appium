import PageObjects from "../../pageobjects/umobPageObjects.page.js";
import AppiumHelpers from "../../helpers/AppiumHelpers.js";
import { getCredentials, executeTest } from "../../helpers/TestHelpers.js";

describe("Donkey Bike Booking Test with Welcome voucher for the New User", () => {
    before(async () => {
        const credentials = getCredentials("test", "newUser");
        await PageObjects.login({
            username: credentials.username,
            password: credentials.password,
        });

        const longitude = 4.47443;
        const latitude = 51.9155956;

        await AppiumHelpers.setLocationAndRestartApp(longitude, latitude);
        await driver.pause(3000);
    });

    beforeEach(async () => {
        await driver.activateApp("com.umob.umob");
    });

    it("Book Donkey UMOB Bike 20 with Welcome voucher for the New User", async () => {
        const testId = "594c7a95-242a-48f6-9fbf-6a6d29911fc5";

        await executeTest(testId, async () => {
            await AppiumHelpers.setLocationAndRestartApp(4.4744301, 51.9155956);
            await driver.pause(5000);

            const { width, height } = await driver.getWindowSize();

            await AppiumHelpers.clickCenterOfScreen();

            const umob20Button = await driver.$(
                '-android uiautomator:new UiSelector().text("UMOB Bike 2 1")',
            );
            await umob20Button.click();

            const voucher = await driver.$(
                '-android uiautomator:new UiSelector().textContains("New User Donkey")',
            );
            await expect(voucher).toBeDisplayed();

            const selectPayment = await driver.$(
                '-android uiautomator:new UiSelector().text("**** **** 1115")',
            );
            await expect(selectPayment).toBeDisplayed();

            // INDIVIDUAL SCROLL (DO NOT MODIFY)
            await driver.performActions([
                {
                    type: "pointer",
                    id: "finger1",
                    parameters: { pointerType: "touch" },
                    actions: [
                        {
                            type: "pointerMove",
                            duration: 0,
                            x: width / 2,
                            y: height * 0.95,
                        },
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 100 },
                        {
                            type: "pointerMove",
                            duration: 1000,
                            x: width / 2,
                            y: height * 0.1,
                        },
                        { type: "pointerUp", button: 0 },
                    ],
                },
            ]);
            await driver.pause(3000);

            await PageObjects.startTripButton.waitForEnabled();
            await driver.pause(2000);
            await PageObjects.startTripButton.click();
            await driver.pause(2000);

            await expect(PageObjects.androidPermissionButton).toBeDisplayed();
            await PageObjects.androidPermissionButton.click();
            await driver.pause(3000);

            // INDIVIDUAL SCROLL (DO NOT MODIFY)
            await driver.performActions([
                {
                    type: "pointer",
                    id: "finger1",
                    parameters: { pointerType: "touch" },
                    actions: [
                        {
                            type: "pointerMove",
                            duration: 0,
                            x: width / 2,
                            y: height * 0.7,
                        },
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 100 },
                        {
                            type: "pointerMove",
                            duration: 1000,
                            x: width / 2,
                            y: height * 0.2,
                        },
                        { type: "pointerUp", button: 0 },
                    ],
                },
            ]);
            await driver.pause(4000);

            await expect(PageObjects.donkeyStartButton2).toBeDisplayed();
            await PageObjects.donkeyStartButton2.click();

            await expect(PageObjects.donkeyLockText1).toBeDisplayed();

            await expect(PageObjects.donkeyLockText2).toBeDisplayed();

            // INDIVIDUAL SCROLL (DO NOT MODIFY)
            await driver.performActions([
                {
                    type: "pointer",
                    id: "finger6",
                    parameters: { pointerType: "touch" },
                    actions: [
                        {
                            type: "pointerMove",
                            duration: 0,
                            x: width / 2,
                            y: height * 0.7,
                        },
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 100 },
                        {
                            type: "pointerMove",
                            duration: 1000,
                            x: width / 2,
                            y: height * 0.2,
                        },
                        { type: "pointerUp", button: 0 },
                    ],
                },
            ]);
            await driver.pause(2000);

            await expect(PageObjects.continueButton).toBeDisplayed();
            await PageObjects.continueButton.click();

            await driver.pause(8000);

            await expect(PageObjects.endTripText).toBeDisplayed();
            await PageObjects.endTripText.click();
            await driver.pause(3000);

            const multiVoucher1 = await driver.$(
                '-android uiautomator:new UiSelector().textContains("New User")',
            );
            await expect(multiVoucher1).toBeDisplayed();

            // INDIVIDUAL SCROLL (DO NOT MODIFY)
            await driver.executeScript("mobile: scrollGesture", [
                {
                    left: 100,
                    top: 1500,
                    width: 200,
                    height: 100,
                    direction: "down",
                    percent: 100,
                },
            ]);

            // INDIVIDUAL SCROLL (DO NOT MODIFY)
            await driver.performActions([
                {
                    type: "pointer",
                    id: "finger1",
                    parameters: { pointerType: "touch" },
                    actions: [
                        {
                            type: "pointerMove",
                            duration: 0,
                            x: width / 2,
                            y: height * 0.7,
                        },
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 100 },
                        {
                            type: "pointerMove",
                            duration: 1000,
                            x: width / 2,
                            y: height * 0.2,
                        },
                        { type: "pointerUp", button: 0 },
                    ],
                },
            ]);

            await PageObjects.gotItButton.waitForDisplayed();
            await PageObjects.gotItButton.click();

            await PageObjects.clickAccountButton();
            await driver.pause(2000);

            await expect(PageObjects.myRidesButton).toBeDisplayed();
            await PageObjects.myRidesButton.click();

            const lastRide1 = await driver.$(
                '-android uiautomator:new UiSelector().textContains("€0")',
            );
            await expect(lastRide1).toBeDisplayed();
        });
    });

    afterEach(async () => {
        await driver.terminateApp("com.umob.umob");
    });
});

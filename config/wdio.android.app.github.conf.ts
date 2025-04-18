import { join } from "node:path";
import { config as baseConfig } from "./wdio.shared.local.appium.conf.js";

export const config: WebdriverIO.Config = {
    ...baseConfig,

    specs: [
        "../tests/specs/account/*.spec.ts",
        "../tests/specs/login/*.spec.ts",
        "../tests/specs/notLoggedTests/*.spec.ts",
        "../tests/specs/book/failedPaymentNoBooking.spec.ts",
        // "../tests/specs/book/bookDonkeyMocked.spec.ts",
        // "../tests/specs/book/bookUmobBike.spec.ts",
        // "../tests/specs/book/bookUmobMoped.spec.ts",
        // "../tests/specs/book/bookUmobScooter.spec.ts"
    ],

    // specs: ["../tests/specs/account/*.spec.ts",
    //     "../tests/specs/login/*.spec.ts",
    //     "tests/specs/account/addAdress.spec.ts"
    // ],
    //specs: ["c:/dev/umob_appium/tests/specs/newUserVoucher/vCombinedLoggedTest.spec.ts"],
    capabilities: [
        {
            platformName: "Android",
            "appium:automationName": "UiAutomator2",
            "appium:deviceName": "Android_GithubActions",
            "appium:appPackage": "com.umob.umob",
            "appium:appActivity": "com.umob.umob.MainActivity",
            "appium:newCommandTimeout": 100,
            //"appium:autoGrantPermissions": true
            //"appium:noReset": true,
          },
    ],
    maxInstances: 1
};
       
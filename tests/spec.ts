import {yandexMain} from "../pages/yandexMain";
import {browser} from "protractor";
import {describe, it} from "selenium-webdriver/testing";

browser.ignoreSynchronization = true;
//let yandex = new yandexMain();

describe('first test',function () {
    it('Compare "more" menu with London as location and Paris as location', async function () {

        await yandexMain.getYandex();
        await yandex.changeLocation();
        await yandex.removeLocationCheckbox();
        await yandex.inputLocation('Лондон');
        await yandex.confirmLocation();
        await yandex.getTabsMore();
        let londonResult = await yandex.checkTabsMore.getText();
        await yandex.changeLocation();
        await yandex.removeLocationCheckbox();
        await yandex.inputLocation('Париж');
        await yandex.confirmLocation();
        await yandex.getTabsMore();
        let parisResult = await yandex.checkTabsMore.getText();
        await expect(londonResult).toEqual(parisResult);
    });
})

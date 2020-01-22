import {browser, element, by, ExpectedConditions} from 'protractor';
let EX = ExpectedConditions;

export class yandexMain {

    getYandex() {
        browser.get('https://yandex.by/');
    }

    changeLocation() {
        browser.wait(EX.presenceOf(element(by.className('geolink__reg'))));
        element(by.className('geolink__reg')).click();
    }

    removeLocationCheckbox() {
        browser.wait(EX.presenceOf(element(by.className('checkbox__control'))));
        element(by.className('checkbox__control')).click();
    }

    inputLocation(place) {
        element(by.id('city__front-input')).clear().then(function () {
            element(by.id('city__front-input')).sendKeys(place);
        })
    }

    confirmLocation() {
        browser.wait(EX.presenceOf(element(by.css('.popup__content ul li'))));
        element(by.css('.popup__content ul li')).click();
    }

    getTabsMore() {
        browser.wait(EX.presenceOf(element(by.css('div .home-tabs__more-switcher'))));
        element(by.css('div .home-tabs__more-switcher')).click();
    }

    checkTabsMore = element(by.className('home-tabs__more-top'));
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var EX = protractor_1.ExpectedConditions;
var yandexMain = /** @class */ (function () {
    function yandexMain() {
        this.checkTabsMore = protractor_1.element(protractor_1.by.className('home-tabs__more-top'));
    }
    yandexMain.prototype.getYandex = function () {
        protractor_1.browser.get('https://yandex.by/');
    };
    yandexMain.prototype.changeLocation = function () {
        protractor_1.browser.wait(EX.presenceOf(protractor_1.element(protractor_1.by.className('geolink__reg'))));
        protractor_1.element(protractor_1.by.className('geolink__reg')).click();
    };
    yandexMain.prototype.removeLocationCheckbox = function () {
        protractor_1.browser.wait(EX.presenceOf(protractor_1.element(protractor_1.by.className('checkbox__control'))));
        protractor_1.element(protractor_1.by.className('checkbox__control')).click();
    };
    yandexMain.prototype.inputLocation = function (place) {
        protractor_1.element(protractor_1.by.id('city__front-input')).clear().then(function () {
            protractor_1.element(protractor_1.by.id('city__front-input')).sendKeys(place);
        });
    };
    yandexMain.prototype.confirmLocation = function () {
        protractor_1.browser.wait(EX.presenceOf(protractor_1.element(protractor_1.by.css('.popup__content ul li'))));
        protractor_1.element(protractor_1.by.css('.popup__content ul li')).click();
    };
    yandexMain.prototype.getTabsMore = function () {
        protractor_1.browser.wait(EX.presenceOf(protractor_1.element(protractor_1.by.css('div .home-tabs__more-switcher'))));
        protractor_1.element(protractor_1.by.css('div .home-tabs__more-switcher')).click();
    };
    return yandexMain;
}());
exports.yandexMain = yandexMain;

/**
 * Created by khjan on 2017-04-04.
 */
import {browser, element, by} from 'protractor';

export class B2CoinWebAdminUI{

    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

}

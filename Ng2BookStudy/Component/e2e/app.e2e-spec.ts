/**
 * Created by khjan on 2017-04-04.
 */
import { B2CoinWebAdminUI } from './app.po';

describe('B2CoinWebAdmin UI Test App', () => {
    let page : B2CoinWebAdminUI;

    beforeEach(() => {
        page = new B2CoinWebAdminUI();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });

});



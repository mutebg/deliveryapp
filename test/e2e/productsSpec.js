ddescribe('Products page:', function() {

    var productName = 'test' + Math.random();

    
    beforeEach(function() {
        browser.get('http://localhost/deliveryapp/#/products');
    });

    afterEach(function() {
        browser.manage().logs().get('browser').then(function(browserLog) {
            expect(browserLog.length).toEqual(0);
        });
    });

    it('add product', function() {
        
        var addBtn = element( by.id('tab-btn-1') );

        expect( addBtn ).not.toBeUndefined();

        addBtn.click().then( function(){
            browser.waitForAngular();

            element( by.model('formAdd.name') ).sendKeys( productName );
            element( by.model('formAdd.qty') ).sendKeys('1');
            element( by.model('formAdd.price') ).sendKeys('10');
            element( by.id('btn-add-product') ).click().then( function(){
                browser.waitForAngular();
                expect( element.all( by.css('.cg-notify-message--error') ).count() ).toBe(0);
            });
        });
    });

    it('filter & edit product', function(){
        element( by.model('search') ).sendKeys( productName );
        browser.waitForAngular();
        var productRow = element( by.repeater('product in products') );

        //check name, qty and price
        expect( productRow.element( by.css('td.name') ).getText() ).toContain( productName );
        expect( productRow.element( by.css('td.qty') ).getText() ).toBe('1');
        expect( productRow.element( by.css('td.price') ).getText() ).toBe('10');

        //update product name
        productRow.element( by.css('.btn--success') ).click().then( function(){
            element( by.css('.edit-name') ).sendKeys('test');
            element( by.css('.edit-qty') ).sendKeys('0');
            element( by.css('.edit-price') ).sendKeys('0');
            element( by.id('btn-edit-product') ).click().then( function() {
                browser.waitForAngular();
                expect( element.all( by.css('.cg-notify-message--error') ).count() ).toBe(0);
            });
        });
    });

    it('check edited product and delete it', function() {
        element( by.model('search') ).sendKeys( productName + 'test');
        browser.waitForAngular();
        var productRow = element( by.repeater('product in products') );
        //check name, qty and price
        expect( productRow.element( by.css('td.name') ).getText() ).toContain( productName + 'test');
        expect( productRow.element( by.css('td.qty') ).getText() ).toBe('10');
        expect( productRow.element( by.css('td.price') ).getText() ).toBe('100');

        //delete product
        productRow.element( by.css('.btn--danger') ).click().then( function(){
            browser.switchTo().alert().accept().then( function(){
                expect( element.all( by.css('.cg-notify-message') ).count() ).toBe(1);
            });
        });
    });
});
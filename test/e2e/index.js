describe('homepage:', function() {
    
    beforeEach(function() {
        browser.get('http://localhost/deliveryapp/#/');
    });

    it('success login', function() {
        // Load the AngularJS homepage.
        element(by.model('user')).sendKeys('demo');
        element(by.model('pass')).sendKeys('demo');
        element(by.css('.btn')).click().then( function(){
            browser.waitForAngular();
            expect( browser.getLocationAbsUrl() ).toContain('/home');
        });
    });

    it('fail login', function() {
        element( by.model('user') ).sendKeys('none');
        element( by.model('pass') ).sendKeys('none');
        element( by.css('.btn') ).click().then( function(){
            browser.waitForAngular();
            expect( element.all( by.css('.alert') ).count() ).toBe(1);
        });
    });
});
describe("Given I input 'abc' into the search box", function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('should display search results', function() {
    var todoListItems = element.all(by.repeater('item in list'));
    expect(todoListItems.count()).toBe(3);
  });
});
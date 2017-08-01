describe('Given I am posting a new comment', function() {
  describe('When I push the submit button', function() {
    beforeEach(function() {
      browser.get('/');
      var commentInput = $('input');
      commentInput.sendKeys('a comment');
      var submitButton = element.all(by.buttonText('Submit').click());
    });
    it('Should then add a comment', function() {
      var comment = element(by.repeater('comment in comments')).first();
      expect(comment.getText()).toBe('a comment');
    });
  });
})
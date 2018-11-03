it('creates a screenshot of the skills page', function() {
  return this.browser
    .url('/skills')
    .assertView('Whole page', '#root')
});

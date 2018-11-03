# What is it?
Hermione.js is a “browser test runner based on mocha and wdio”.
It opens a desired browser and performs actions defined in the test suites.
Tests run in parallel so the waiting process is short.
Hermione has very feature-rich API to cover all your needs.

But what’s most important for us - we may take a reference screenshot of a page and then compare this screenshot each time we make a change in UI to make sure that we touched only what was intended.

# A quick demo

Original reference view:
![alt text](https://raw.githubusercontent.com/meph1k/Hermione-CSS-Regression-Testing-Example/master/my/hermione-reports)

Changed view:
![alt text](https://raw.githubusercontent.com/meph1k/Hermione-CSS-Regression-Testing-Example/master/my/hermione-reports)

Diff view:
![alt text](https://raw.githubusercontent.com/meph1k/Hermione-CSS-Regression-Testing-Example/master/my/hermione-reports)

# Blog post with tutorial
Coming soon!

# How to run the project

1. npm i
2. npm i -g hermione
3. Install https://www.npmjs.com/package/selenium-standalone
4. selenium-standalone start
5. npm install -g hermione
6. npm install html-reporter
7. Update ref images with "npm run hermione-update-refs"
8. Run tests with "npm run hermione"

# Have fun!

import { Selector, ClientFunction } from 'testcafe';

fixture `Fixture1`
    .page('https://www.whatshouldireadnext.com/');
   
test('Page redirection after button click', async t => {
    const bookLocation = ClientFunction(() => document.location.href)
    const sciFiButton = Selector('a').withAttribute('href', "/subject/science+fiction");
    await t
        .expect(sciFiButton.with({visibilityCheck: true}).exists).ok()
        .click(sciFiButton)
        .expect(bookLocation()).contains('https://www.whatshouldireadnext.com/subject/science+fiction')
});

test('User input data into a field', async t => {
    const inputField = Selector('div').withAttribute('id', 'home-search-box').child(1)
    const inputResults = Selector('div').withAttribute('id', 'home-search-box-results')
    await t
        .typeText(inputField, 'Brad Meltzer')
        .expect(inputField.value).eql('Brad Meltzer')
        .expect(inputResults.with({visibilityCheck: true}).exists).ok()
});


//this one test meets all the requirements of the challenge. button click, input data, page navigation
test('User input data into a field and redirection', async t => {
    const inputField = Selector('div').withAttribute('id', 'home-search-box').child(1)
    const inputResults = Selector('div').withAttribute('id', 'home-search-box-results')
    const bookSelect = Selector('div').withAttribute('id', 'home-search-box-results').child().child().child()
    const bookSelectLocation = ClientFunction(() => document.location.href)
    await t
        .typeText(inputField, 'Brad Meltzer')
        .expect(inputField.value).eql('Brad Meltzer')
        .expect(inputResults.with({visibilityCheck: true}).exists).ok()
        .click(bookSelect)
        .expect(bookSelectLocation()).contains('https://www.whatshouldireadnext.com/isbn/044661212X')
});
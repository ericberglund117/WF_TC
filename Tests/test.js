import { Selector, ClientFunction } from 'testcafe';

fixture `Fixture1`
    .page('https://www.whatshouldireadnext.com/');
    const sciFiButton = Selector('a').withAttribute('href', "/subject/science+fiction");

test('User button click', async t => {
        await t 
            .expect(sciFiButton.with({visibilityCheck: true}).exists).ok()
            .click(sciFiButton)
    });

test('Page redirection after button click', async t => {
    let bookLocation = ClientFunction(() => document.location.href)
    await t
        .click(sciFiButton)
        .expect(bookLocation()).contains('https://www.whatshouldireadnext.com/subject/science+fiction')
});
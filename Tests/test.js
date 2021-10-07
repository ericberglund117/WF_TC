import { Selector } from 'testcafe';

fixture `Fixture1`
    .page('https://www.whatshouldireadnext.com/');

test('User button click', async t => {
        const sciFiButton = Selector('a').withAttribute('href', "/subject/science+fiction")
        await t 
            .expect(sciFiButton.with({visibilityCheck: true}).exists).ok();
    });
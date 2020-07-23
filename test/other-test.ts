import * as requests from '../src/model/requests/requests';
import uuidv4 from 'uuid/v4';
import * as models from '../src/model/model';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";

describe('Other tests', function() {
    let td = suiteBase(this);

    it('Discover email config #pipeline', async function () {
        const configs = await td.api().discoverEmailConfig(new requests.DiscoverEmailConfigRequest(
            'example@gmail.com', true));
        expect(configs.body.value.length).to.be.at.least(2);
        const smtp = configs.body.value.filter(item => item.protocolType == 'SMTP')[0];
        expect(smtp.host).to.be.equal('smtp.gmail.com');
    });

    it('Check disposable email #pipeline', async function () {
        const disposable = await td.api().isEmailAddressDisposable(
            new requests.IsEmailAddressDisposableRequest('example@mailcatch.com'));
        expect(disposable.body.value).to.be.ok;
        const regular = await td.api().isEmailAddressDisposable(
            new requests.IsEmailAddressDisposableRequest('example@gmail.com'));
        expect(regular.body.value).to.not.be.ok;
    });

    it('Check EmailClientAccount #pipeline', async function () {
        const accountCredentials =
            new models.EmailClientAccountPasswordCredentials(
                'example@gmail.com', undefined, 'password');
        const account = new models.EmailClientAccount('pop.gmail.com', 995, 'SSLAuto', 'POP3',
            accountCredentials,
            new models.StorageFileLocation(td.storage(), td.folder(), 'account.cache'));
        const fileName = uuidv4() + '.account';
        await td.api().saveEmailClientAccount(new requests.SaveEmailClientAccountRequest(
            new models.StorageFileRqOfEmailClientAccount(
                account, new models.StorageFileLocation(td.storage(), td.folder(), fileName))));
        const result = await td.api().getEmailClientAccount(new requests.GetEmailClientAccountRequest(
            fileName, td.folder(), td.storage()));
        expect(result.body.credentials.discriminator).to.be.equal(account.credentials.discriminator);
        const resultCredentials = result.body.credentials as models.EmailClientAccountPasswordCredentials;
        expect(resultCredentials.password).to.be.equal(accountCredentials.password);
        expect(result.body.host).to.be.equal(account.host);
    });

    it('Check EmailClientMultiAccount #pipeline', async function () {
        // Create multi account object
        const multiAccount = new models.EmailClientMultiAccount(
            [new models.EmailClientAccount('imap.gmail.com', 993, 'SSLAuto', 'IMAP',
                new models.EmailClientAccountPasswordCredentials(
                    'example@gmail.com', undefined, 'password')),
                new models.EmailClientAccount('exchange.outlook.com', 443, 'SSLAuto', 'EWS',
                    new models.EmailClientAccountOauthCredentials(
                        'example@gmail.com', undefined, 'clientId', 'clientSecret', 'refreshToken'))],
            new models.EmailClientAccount('smtp.gmail.com', 465, 'SSLAuto', 'SMTP',
                new models.EmailClientAccountPasswordCredentials(
                    'example@gmail.com', undefined, 'password')));
        const fileName = uuidv4() + '.multi.account';
        // Save multi account
        await td.api().saveEmailClientMultiAccount(new requests.SaveEmailClientMultiAccountRequest(
            new models.StorageFileRqOfEmailClientMultiAccount(
                multiAccount,
                new models.StorageFileLocation(td.storage(), td.folder(), fileName))));
        // Get multi account object from td.storage()
        const multiAccountFromStorage = await td.api().getEmailClientMultiAccount(
            new requests.GetEmailClientMultiAccountRequest(
                fileName, td.folder(), td.storage()));

        expect(multiAccountFromStorage.body.receiveAccounts.length).to.be.equal(2);
        expect(multiAccountFromStorage.body.sendAccount.credentials.discriminator)
            .to.be.equal(multiAccount.sendAccount.credentials.discriminator);
    });
});
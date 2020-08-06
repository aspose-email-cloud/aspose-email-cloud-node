import uuidv4 from 'uuid/v4';
import 'mocha';
import {expect} from 'chai';
import {suiteBase} from "./suite-base";
import {
    ClientAccountGetMultiRequest,
    ClientAccountGetRequest,
    ClientAccountSaveMultiRequest,
    ClientAccountSaveRequest,
    DisposableEmailIsDisposableRequest,
    EmailClientAccount,
    EmailClientAccountOauthCredentials,
    EmailClientAccountPasswordCredentials,
    EmailClientMultiAccount,
    EmailConfigDiscoverRequest,
    StorageFileLocation
} from "..";

describe('Other tests', function () {
    let td = suiteBase(this);

    it('Discover email config #pipeline', async function () {
        const configs = await td.api().emailConfig.discover(new EmailConfigDiscoverRequest('example@gmail.com', true));
        expect(configs.value.length).to.be.at.least(2);
        const smtp = configs.value.filter(item => item.protocolType == 'SMTP')[0];
        expect(smtp.host).to.be.equal('smtp.gmail.com');
    });

    it('Check disposable email #pipeline', async function () {
        const disposable = await td.api().disposableEmail.isDisposable(
            new DisposableEmailIsDisposableRequest('example@mailcatch.com'));
        expect(disposable.value).to.be.ok;
        const regular = await td.api().disposableEmail.isDisposable(
            new DisposableEmailIsDisposableRequest('example@gmail.com'));
        expect(regular.value).to.not.be.ok;
    });

    it('Check EmailClientAccount #pipeline', async function () {
        const accountCredentials =
            new EmailClientAccountPasswordCredentials(
                'example@gmail.com', 'password');
        const account = new EmailClientAccount('pop.gmail.com', 995, 'SSLAuto', 'POP3',
            accountCredentials,
            new StorageFileLocation(td.storage(), td.folder(), 'account.cache'));
        const fileName = uuidv4() + '.account';
        await td.api().client.account.save(
            new ClientAccountSaveRequest(new StorageFileLocation(td.storage(), td.folder(), fileName), account));
        const result = await td.api().client.account.get(
            new ClientAccountGetRequest(fileName, td.folder(), td.storage()));
        expect(result.credentials.discriminator).to.be.equal(account.credentials.discriminator);
        const resultCredentials = result.credentials as EmailClientAccountPasswordCredentials;
        expect(resultCredentials.password).to.be.equal(accountCredentials.password);
        expect(result.host).to.be.equal(account.host);
    });

    it('Check EmailClientMultiAccount #pipeline', async function () {
        // Create multi account object
        const multiAccount = new EmailClientMultiAccount(
            [new EmailClientAccount('imap.gmail.com', 993, 'SSLAuto', 'IMAP',
                new EmailClientAccountPasswordCredentials(
                    'example@gmail.com', 'password')),
                new EmailClientAccount('exchange.outlook.com', 443, 'SSLAuto', 'EWS',
                    new EmailClientAccountOauthCredentials(
                        'example@gmail.com', undefined, 'clientId', 'clientSecret', 'refreshToken'))],
            new EmailClientAccount('smtp.gmail.com', 465, 'SSLAuto', 'SMTP',
                new EmailClientAccountPasswordCredentials(
                    'example@gmail.com', 'password')));
        const fileName = uuidv4() + '.multi.account';
        // Save multi account
        await td.api().client.account.saveMulti(
            new ClientAccountSaveMultiRequest(new StorageFileLocation(td.storage(), td.folder(), fileName),
                multiAccount));
        // Get multi account object from td.storage()
        const multiAccountFromStorage = await td.api().client.account.getMulti(
            new ClientAccountGetMultiRequest(fileName, td.folder(), td.storage()));

        expect(multiAccountFromStorage.receiveAccounts.length).to.be.equal(2);
        expect(multiAccountFromStorage.sendAccount.credentials.discriminator)
            .to.be.equal(multiAccount.sendAccount.credentials.discriminator);
    });
});
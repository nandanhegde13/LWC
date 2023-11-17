import { LightningElement } from 'lwc';
import NameField from '@salesforce/schema/Account.Name';
import PhoneField from '@salesforce/schema/Account.Phone';
import WebsiteField from '@salesforce/schema/Account.Website';

export default class AccountRecordForm extends LightningElement {

    recordId;
    fieldArray = [NameField,PhoneField,WebsiteField];

successHandler(event)
{
    this.recordId = event.detail.id;
}

}
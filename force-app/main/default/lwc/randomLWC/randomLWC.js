import { LightningElement, api } from 'lwc';
import getDevName from '@salesforce/apex/RandomLWCHandler.getDevName';

export default class RandomLWC extends LightningElement {
  @api recordId;
  developerName;

  async connectedCallback() {
    this.developerName = await getDevName({recordId: this.recordId});
  }
}
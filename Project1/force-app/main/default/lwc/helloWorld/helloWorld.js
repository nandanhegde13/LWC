import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track dynamicContent ='World';
    @track displayDiv= false;
    @track cityList =["Ayodhya","Mathura","Maya","Kashi","Kanchi","Avantika","Puri","Dwaravathi"];
    handleChange(event)
    {
        this.dynamicContent = event.target.value; 
    }

    handleChange(event)
    {
           this.displayDiv = event.target.checked;
    }
}
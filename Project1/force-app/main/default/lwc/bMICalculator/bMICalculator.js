import { LightningElement } from 'lwc';

export default class BMICalculator extends LightningElement {

    weight;
    height;
    result=0;

    weightHandler(event)
    {
       this.weight = event.target.value; 
    }

    
    heightHandler(event)
    {
       this.height = event.target.value; 
    }

    clickHandler(event)
    {
        this.result = this.weight/(this.height*this.height);
    }   
    
    get BMIValue()
    {
        return this.result;
    }

}

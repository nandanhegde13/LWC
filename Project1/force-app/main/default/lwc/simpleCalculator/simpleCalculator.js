import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
@track currentResult;


firstNumber;
secondNumber;

numberChangeHandler(event)
{
    if(event.target.name==="firstNumber")
    {
        this.firstNumber = event.target.value;
    }

    else if(event.target.name==="secondNumber")
    {
        this.secondNumber = event.target.value;
    }
}

addHandler()
{
    var first = parseInt(this.firstNumber);
    var second  = parseInt(this.secondNumber);
       
    this.currentResult = first+second;
    console.log(this.currentResult);
}
subHandler()
{
    var first = parseInt(this.firstNumber);
    var second  = parseInt(this.secondNumber);
       
    this.currentResult = first-second;
}
mulHandler()
{
    var first = parseInt(this.firstNumber);
    var second  = parseInt(this.secondNumber);
       
    this.currentResult = first*second;
}
divHandler()
{
    var first = parseInt(this.firstNumber);
    var second  = parseInt(this.secondNumber);
       
    this.currentResult = first/second;
}

}
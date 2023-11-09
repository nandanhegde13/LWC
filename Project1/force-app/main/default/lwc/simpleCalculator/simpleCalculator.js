import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
@track currentResult;
@track previousResult=[];
@track condition = false;

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
    this.previousResult.push(this.currentResult);
    console.log(this.previousResult);
}
subHandler()
{
    var first = parseInt(this.firstNumber);
    var second  = parseInt(this.secondNumber);
    this.currentResult = first-second;
    this.previousResult.push(this.currentResult);
     
   
    console.log(this.previousResult);
}
mulHandler()
{
    var first = parseInt(this.firstNumber);
    var second  = parseInt(this.secondNumber);
    this.currentResult = first*second;
    this.previousResult.push(this.currentResult);
    
    console.log(this.previousResult); 
  
}
divHandler()
{
    var first = parseInt(this.firstNumber);
    var second  = parseInt(this.secondNumber);
    this.currentResult = first/second;
    this.previousResult.push(this.currentResult);

    console.log(this.previousResult);
   
}
         
checkboxHandler(event)
{
  
        this.condition = event.target.checked;
 
}
}
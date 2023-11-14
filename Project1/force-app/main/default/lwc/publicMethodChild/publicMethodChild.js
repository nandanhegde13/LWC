import { LightningElement, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {

    value = ['red'];

     options= {
       [
            { label: 'Red Marker', value: 'red' },
            { label: 'Blue Marker', value: 'blue' },
            {label: 'Green Marker',value:'Green'},
            {label:'White Marker', value:'White'}
        ]
    }

 
    @api   selectCheckbox(checkBoxValue)
    {

    }
}
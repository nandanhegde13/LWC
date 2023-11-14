import { LightningElement,api } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo;
    
    tileClickHandler()
    {
          const tileClicked = new CustomEvent('tileclick',{detail:this.meetingRoomInfo});
          this.dispatchEvent(tileClicked);
    }
}
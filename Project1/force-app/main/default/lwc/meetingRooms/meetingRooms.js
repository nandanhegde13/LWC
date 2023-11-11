import { LightningElement,api } from 'lwc';

export default class MeetingRooms extends LightningElement {
@api meetingRoomInfo = [
   {roomName:'A01',roomCapacity:'12'},
   {roomName:'A02',roomCapacity:'13'},
   {roomName:'A03',roomCapacity:'14'},
   {roomName:'A04',roomCapacity:'15'}

];

}
import {IParticipant} from '../interfaces/party.interface';

export class Party {
  id: number;
  partyId: number;
  dateCreated: string;
  participants: {
    [key: string]: IParticipant
  };
  totalParticipants: number;

  constructor(partyData) {
    this.id = partyData._id;
    this.partyId = partyData.partyId;
    this.dateCreated = partyData.dateCreated;
    this.participants = partyData.participants;
    this.totalParticipants = partyData.participants.length;
  }
}

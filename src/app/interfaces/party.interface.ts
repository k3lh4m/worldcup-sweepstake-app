interface ICountriesAllocated {
  country: string;
  countryFlag: string;
}

interface IParticipant {
  name: string;
  teamsAllocated: number;
  countriesAllocated: {
    [key: string]: ICountriesAllocated
  };
}

export interface IParty {
  _id: number;
  partyId: number;
  dateCreated: string;
  totalParticipants: number;
  participants: {
    [key: string]: IParticipant
  };
}

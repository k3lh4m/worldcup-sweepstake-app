export interface ICountriesAllocated {
  country: string;
  countryFlag: string;
}

export interface IParticipant {
  name: string;
  teamsAllocated: number;
  countriesAllocated: {
    [key: string]: ICountriesAllocated
  };
}

export interface IParty {
  id: number;
  partyId: number;
  dateCreated: string;
  totalParticipants: number;
  participants: {
    [key: string]: IParticipant
  };
}

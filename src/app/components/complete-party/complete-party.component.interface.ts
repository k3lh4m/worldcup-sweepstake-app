export interface ICompletePartyButton {
  label: string;
  isCompleted: boolean;
  action: void;
}

export interface ICompleteParty {
  appCompletePartyConfig: ICompletePartyButton;
}

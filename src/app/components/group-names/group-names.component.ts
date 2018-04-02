import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-group-names',
  templateUrl: './group-names.component.html',
  styleUrls: ['./group-names.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupNamesComponent implements OnInit {
  @Input()
  appGroupNamesParticipants;

  @Input()
  appGroupNamesNumberParticipants: number;

  constructor() { }

  ngOnInit() {
  }

  public canAddNewName(): boolean {
    return this.appGroupNamesNumberParticipants <= 31;
  }

}

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

  constructor() { }

  ngOnInit() {

  }

}

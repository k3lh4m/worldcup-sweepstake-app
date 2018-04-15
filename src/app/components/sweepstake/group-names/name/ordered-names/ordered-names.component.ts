import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IOrderedNames} from './ordered-names.component.interface';

@Component({
  selector: 'app-ordered-names',
  templateUrl: './ordered-names.component.html',
  styleUrls: ['./ordered-names.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderedNamesComponent implements IOrderedNames {
  @Input()
  public appOrderedNamesName: boolean;

  constructor() { }
}

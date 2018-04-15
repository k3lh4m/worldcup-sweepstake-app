import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../../../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../../services/data-service/data.service';
import {IName} from './name.component.interface';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NameComponent implements IName {
  @Input()
  public appNameName: string;

  @Input()
  public appNameId: string;

  @Input()
  public appNameIsEditable?: boolean;

  @Input()
  public appNameCanEdit: boolean;

  constructor() {
  }
}

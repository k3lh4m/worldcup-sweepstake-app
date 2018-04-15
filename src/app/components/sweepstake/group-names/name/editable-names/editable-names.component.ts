import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../../../../services/api/api.service';
import {DataService} from '../../../../../services/data-service/data.service';
import {ActivatedRoute} from '@angular/router';
import {IEditableNames} from './editable-names.component.interface';

@Component({
  selector: 'app-editable-names',
  templateUrl: './editable-names.component.html',
  styleUrls: ['./editable-names.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditableNamesComponent implements IEditableNames {
  @Input()
  public appEditableNamesName: string;

  @Input()
  public appEditableNamesId: string;

  @Input()
  public appEditableNamesIsEditable?: boolean;

  public showClearButton: boolean;
  private apiService: ApiService;
  private router: ActivatedRoute;
  private paramsId: number;
  private link: string;
  private dataService: DataService;

  constructor(apiService: ApiService, router: ActivatedRoute, dataService: DataService) {
    this.apiService = apiService;
    this.router = router;
    this.dataService = dataService;
  }

  public clear(): void {
    const routerParams = this.router.params;
    routerParams.subscribe((params) => {
      this.paramsId = params.id;
      this.link = '/api/party/' + this.paramsId + '/participants/' + this.appEditableNamesId;
    });

    this.apiService.removeParticipant(this.link).subscribe(() => {
      this.dataService.refreshData();
    });
  }

  public showButton(): void {
    this.appEditableNamesIsEditable ? this.showClearButton = false : this.showClearButton = !this.showClearButton;
  }
}

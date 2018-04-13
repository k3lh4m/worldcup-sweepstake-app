import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data-service/data.service';
import {IName} from './name.component.interface';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NameComponent implements IName{
  @Input()
  public appNameName: string;

  @Input()
  public appNameId: string;

  @Input()
  public appNameIsEditable: boolean;

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
      this.link = '/api/party/' + this.paramsId + '/participants/' + this.appNameId;
    });

    this.apiService.removeParticipant(this.link).subscribe(() => {
      this.dataService.refreshData();
    });
  }

  public showButton(): void {
    this.appNameIsEditable ? this.showClearButton = false : this.showClearButton = !this.showClearButton;
  }
}

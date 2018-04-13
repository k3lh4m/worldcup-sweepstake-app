import {Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../../services/data-service/data.service';

@Component({
  selector: 'app-add-new-name',
  templateUrl: './add-new-name.component.html',
  styleUrls: ['./add-new-name.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddNewNameComponent {
  @ViewChild('addNewName') input: ElementRef;

  public showForm: boolean;
  private apiService: ApiService;
  private dataService: DataService;
  private paramsId: number;
  private router: ActivatedRoute;
  private apiLink: string;

  constructor(apiService: ApiService, router: ActivatedRoute, dataService: DataService) {
    this.apiService = apiService;
    this.dataService = dataService;
    this.router = router;
  }

  public showNameForm(): void {
    this.showForm = !this.showForm;
  }

  public addNameToParty(): void {
    const routerParams = this.router.params;
    const nameToBeAdded = this.input.nativeElement.value;

    routerParams.subscribe((params: Params) => {
      this.paramsId = params.id;
      this.apiLink = '/api/party/' + this.paramsId + '/participants';
    });

    const requestPayload = {
      name: nameToBeAdded,
    };

    this.apiService.addParticipant(this.apiLink, requestPayload)
      .subscribe(() => {
        this.dataService.refreshData();
        this.input.nativeElement.value = '';
      });
  }
}

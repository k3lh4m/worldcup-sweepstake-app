import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data-service/data.service';

@Component({
  selector: 'app-add-new-name',
  templateUrl: './add-new-name.component.html',
  styleUrls: ['./add-new-name.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddNewNameComponent implements OnInit {
  @ViewChild('addNewName') input: ElementRef;

  public showForm: boolean;
  private apiService: ApiService;
  private router: ActivatedRoute;
  private link: string;
  private dataService: DataService;
  private paramsId: number;

  constructor(apiService: ApiService, router: ActivatedRoute, dataService: DataService) {
    this.apiService = apiService;
    this.dataService = dataService;
    this.router = router;
  }

  ngOnInit() {
  }

  public showNameForm(): void {
    this.showForm = !this.showForm;
  }

  public addNameToParty(): void {
    const routerParams = this.router.params;
    const nameToBeAdded = this.input.nativeElement.value;

    routerParams.subscribe((params) => {
      this.paramsId = params.id;
      this.link = '/api/party/' + this.paramsId + '/participants';
    });

    this.apiService.addParticipant(this.link, { name: nameToBeAdded })
      .subscribe(() => {
        this.getUpdatedData();
        this.input.nativeElement.value = '';
      });
  }

  private getUpdatedData(): void {
    this.apiService.findParty('/api/party', this.paramsId).subscribe((partyData) => {
      this.dataService.sendData(partyData);
    });
  }
}

import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SetSecondaryBarMessageService} from '../../services/set-secondary-bar-message/set-secondary-bar-message.service';

@Component({
  selector: 'app-secondary-bar',
  templateUrl: './secondary-bar.component.html',
  styleUrls: ['./secondary-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondaryBarComponent implements OnDestroy {
  private subscription: Subscription;
  public message: string;

  constructor(private setSecondaryBar: SetSecondaryBarMessageService) {
    this.subscription = this.setSecondaryBar.getMessage().subscribe(message => {
      this.message = message.text.error;
    });
  }

  public hideMessageBar(): void {
    this.message = '';
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-full-width-button',
  templateUrl: './full-width-button.component.html',
  styleUrls: ['./full-width-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullWidthButtonComponent {
  @Input()
  public appFullWidthButtonConfig;

  @Output()
  public appFullWidthButtonTriggered: EventEmitter<void> = new EventEmitter<void>();

  public triggerOutput(): void {
    this.appFullWidthButtonTriggered.emit();
  }
}

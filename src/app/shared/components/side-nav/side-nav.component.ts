import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent implements OnInit {
  @Output() themeChange = new EventEmitter<string>();

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  theme: any = [
    {
      name: 'Default',
      value: '',
    },
    {
      name: 'Dark',
      value: 'dark',
    },
    {
      name: 'Green',
      value: 'green',
    },
    {
      name: 'Yellow',
      value: 'yellow',
    },
  ];
  selectedTheme: string = 'Default';

  selectedThemeControl = new FormControl(this.theme);

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {}
}

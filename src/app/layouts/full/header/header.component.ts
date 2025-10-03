import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { environment } from 'src/environments/environment';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatBadgeModule } from '@angular/material/badge';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    MaterialModule,
    MatBadgeModule,
    TranslatePipe, TranslateDirective
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();

  translate: any;
  name = 'DMB';
  public baseHref = environment.baseHref;

  constructor() {
    this.translate = inject(TranslateService);
  }

  toggleLanguage() {
    // this.name = this.name === 'DMB' ? 'Angular' : 'DMB2';
    if (this.translate.getCurrentLang() === 'es') {
      this.translate.use('en');
      this.changePrimaryColor('#ff0000ff');
    } else {
      this.translate.use('es');
      this.changePrimaryColor('#00ff2aff');
    }
  }

  changePrimaryColor(color: string) {
    // document.documentElement.style.setProperty('--mat-sys-primary', color);
    // document.documentElement.style.setProperty('--mat-sys-primary', '#e91e63'); // rosa
    // document.documentElement.style.setProperty('--mat-sys-primary-fixed-dim', 'rgba(233, 30, 99, 0.15)');
    document.documentElement.classList.remove('blue-theme');
    document.documentElement.classList.add('orange-theme');


  }
}
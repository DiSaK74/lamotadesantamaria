import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, MatCardModule,
    MatListModule, MaterialModule, TablerIconsModule,
    TranslatePipe, TranslateDirective
  ],
})
export class AppLandingPageComponent implements OnInit {

  public baseHref = environment.baseHref;

  ngOnInit(): void {}

  hidden = false;

}
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { AppTarjeta1Component } from 'src/app/components/tarjeta-1/tarjeta1.component';
import { AppTarjeta2Component } from 'src/app/components/tarjeta-2/tarjeta2.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, MatCardModule,
    MatListModule, MaterialModule, TablerIconsModule,
    TranslatePipe, TranslateDirective, AppTarjeta1Component, AppTarjeta2Component
  ],
})
export class AppAboutComponent implements OnInit {

  ngOnInit(): void {}

  hidden = false;

}
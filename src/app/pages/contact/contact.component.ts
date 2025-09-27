import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
// import { MatFormFieldModule } from '@angular/material/form-field-module.d';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, MatCardModule,
    MatListModule, MaterialModule, TablerIconsModule,
    TranslatePipe, TranslateDirective, MatFormFieldModule, FormsModule, MatInputModule
  ],
})
export class AppContactComponent implements OnInit {

  ngOnInit(): void {}

  hidden = false;

}
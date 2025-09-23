import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule, MatCardModule,
    MatListModule, MaterialModule
  ],
})
export class AppAboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
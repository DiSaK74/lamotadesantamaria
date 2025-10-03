import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
    selector: 'app-topstrip',
    imports: [TablerIconsModule, MatButtonModule, MatMenuModule,
        RouterLink, RouterOutlet
    ],
    templateUrl: './topstrip.component.html',
})
export class AppTopstripComponent {
    public baseHref = environment.baseHref;
    constructor() { }

}

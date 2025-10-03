import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-branding',
  imports: [RouterModule],
  template: `
    <a [routerLink]="['/']">
      <img
        [src]="baseHref + '/assets/images/logo/logo_resized.png'"
        class="align-middle m-2"
        alt="logo"
      />
    </a>
  `,
})
export class BrandingComponent {
  public baseHref = environment.baseHref;
  options = this.settings.getOptions();
  constructor(private settings: CoreService) {} 
}

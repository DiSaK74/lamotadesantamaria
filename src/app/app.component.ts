import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    TranslatePipe, TranslateDirective
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private readonly translate = inject(TranslateService);
  title = 'Modernize Angular Admin Tempplate';

  constructor() {
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang('es');
    this.translate.use('es');
  }
}

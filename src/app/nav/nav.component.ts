import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private scroller: ViewportScroller, private router: Router) {
    iconRegistry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl("assets/images/logo.svg"));
    iconRegistry.addSvgIcon('france-flag', sanitizer.bypassSecurityTrustResourceUrl("assets/images/france_flag.svg"));
    iconRegistry.addSvgIcon('english-flag', sanitizer.bypassSecurityTrustResourceUrl("assets/images/english_flag.svg"));
  }

  goToExperiences(): void {
    this.router.navigate(["/home"]);
    setTimeout(() => {
      this.scroller.scrollToAnchor("experiences");
    }, 100);
  }

}

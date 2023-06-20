import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('odelim', sanitizer.bypassSecurityTrustResourceUrl("assets/images/odelim_logo.svg"));
    iconRegistry.addSvgIcon('robot', sanitizer.bypassSecurityTrustResourceUrl("assets/images/robot.svg"));
    iconRegistry.addSvgIcon('brain', sanitizer.bypassSecurityTrustResourceUrl("assets/images/brain.svg"));
    iconRegistry.addSvgIcon('sciences', sanitizer.bypassSecurityTrustResourceUrl("assets/images/sciences.svg"));
    iconRegistry.addSvgIcon('cell', sanitizer.bypassSecurityTrustResourceUrl("assets/images/cells.svg"));
    iconRegistry.addSvgIcon('glimps', sanitizer.bypassSecurityTrustResourceUrl("assets/images/glimps_logo.svg"));
    iconRegistry.addSvgIcon('comete', sanitizer.bypassSecurityTrustResourceUrl("assets/images/comete_logo.svg"));
  }
}

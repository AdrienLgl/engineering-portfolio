import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private scroller: ViewportScroller) {
    iconRegistry.addSvgIcon('cell', sanitizer.bypassSecurityTrustResourceUrl("assets/images/cells.svg"));
    this.scroller.setOffset([0, 64]); // Adjust the scroll offset if needed
  }

  explore(): void {
    this.scroller.scrollToAnchor("start")
  }

}

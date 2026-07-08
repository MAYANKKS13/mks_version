import { Component, ElementRef, ViewChild } from '@angular/core';

declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('navbarCollapse')
  navbarCollapse!: ElementRef;

  title = 'musicapp';

  closeNavbar() {
    const navbar = this.navbarCollapse.nativeElement;
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
    bsCollapse.hide();
  }
}

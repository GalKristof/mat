import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.scss']
})
export class SubpageComponent implements AfterViewInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  // Map routes to components
  private routeComponentMap: { [key: string]: any } = {
    gallery: GalleryComponent,
    aboutus: AboutUsComponent,
    contact: ContactComponent,
    // Add more components as needed
  };

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.url.subscribe(urlSegments => {
      const routePath = urlSegments[0]?.path; // Get the first path segment
      this.loadComponent(routePath);
    });
  }

  loadComponent(routePath: string): void {
    this.viewContainerRef.clear();
    const componentToLoad = this.routeComponentMap[routePath];
    if (componentToLoad) {
      this.viewContainerRef.createComponent(componentToLoad);
    } else {
      console.error(`No component found for route: ${routePath}`);
    }
  }
}

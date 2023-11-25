import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    AboutMeComponent,
    ProjectsSectionComponent,
  ],
})
export class AppComponent {}

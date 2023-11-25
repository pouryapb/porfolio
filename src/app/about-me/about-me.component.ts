import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AboutMePanelComponent } from './about-me-panel/about-me-panel.component';
import { AboutMeSkilsComponent } from './about-me-skils/about-me-skils.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, AboutMePanelComponent, AboutMeSkilsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {}

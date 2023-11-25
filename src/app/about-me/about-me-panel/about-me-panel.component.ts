import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faCakeCandles, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faNext, faFlutter } from '../../customIcons';

@Component({
  selector: 'app-about-me-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about-me-panel.component.html',
  styleUrl: './about-me-panel.component.css',
})
export class AboutMePanelComponent {
  faAngular = faAngular;
  faNext = faNext;
  faFlutter = faFlutter;
  faCakeCandles = faCakeCandles;
  faTelegram = faTelegram;
  faEnvelope = faEnvelope;
  age: number = new Date().getFullYear() - 1998;
}

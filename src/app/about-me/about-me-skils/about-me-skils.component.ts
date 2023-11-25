import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IconDefinition,
  faAngular,
  faReact,
  faSquareGit,
} from '@fortawesome/free-brands-svg-icons';

import { faFlutter, faNext } from '../../customIcons';
import { MainSkillBarComponent } from './main-skill-bar/main-skill-bar.component';
import { OtherSkillsComponent } from './other-skills/other-skills.component';

export interface MainSkillDefinition {
  name: string;
  icon: IconDefinition;
  brandColor: string;
  level: number;
}

@Component({
  selector: 'app-about-me-skils',
  standalone: true,
  imports: [CommonModule, MainSkillBarComponent, OtherSkillsComponent],
  templateUrl: './about-me-skils.component.html',
  styleUrl: './about-me-skils.component.css',
  host: { class: 'grow' },
})
export class AboutMeSkilsComponent {
  mainSkils: MainSkillDefinition[] = [
    {
      name: 'React.Js',
      icon: faReact,
      brandColor: 'text-cyan-500',
      level: 0.8,
    },
    {
      name: 'Next.Js',
      icon: faNext,
      brandColor: '',
      level: 0.8,
    },
    {
      name: 'Git',
      icon: faSquareGit,
      brandColor: 'text-orange-700',
      level: 0.8,
    },
    {
      name: 'Flutter',
      icon: faFlutter,
      brandColor: 'text-cyan-600',
      level: 0.6,
    },
    {
      name: 'Angular',
      icon: faAngular,
      brandColor: 'text-red-600',
      level: 0.4,
    },
  ];
}

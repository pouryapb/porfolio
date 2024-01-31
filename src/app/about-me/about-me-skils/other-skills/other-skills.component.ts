import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

import { faCS, faRedux, faTs } from '../../../customIcons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-other-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './other-skills.component.html',
  styleUrl: './other-skills.component.css',
})
export class OtherSkillsComponent {
  faHtml = faHtml5;
  faCss = faCss3;
  faJs = faJs;
  faTs = faTs;
  faNode = faNodeJs;
  faCS = faCS;
  faRedux = faRedux;
}

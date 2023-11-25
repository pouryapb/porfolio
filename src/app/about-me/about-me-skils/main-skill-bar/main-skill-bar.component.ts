import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainSkillDefinition } from '../about-me-skils.component';

@Component({
  selector: 'app-main-skill-bar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './main-skill-bar.component.html',
  styleUrl: './main-skill-bar.component.css',
})
export class MainSkillBarComponent {
  @Input({ required: true }) skillDef!: MainSkillDefinition;
}

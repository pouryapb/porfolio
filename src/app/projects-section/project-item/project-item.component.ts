import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faJava, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import { Endpoints } from '@octokit/types';

import { faTs } from '../../customIcons';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  @Input({ required: true })
  repo!: Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
  faGithub = faGithub;
  faJava = faJava;
  faJs = faJs;
  faStar = faStar;
  faFork = faCodeFork;
  faTs = faTs;
}

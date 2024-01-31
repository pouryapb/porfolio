import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Endpoints } from '@octokit/types';
import { take } from 'rxjs';

import { GithubApiService } from '../github-api.service';
import { ProjectItemComponent } from './project-item/project-item.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectItemComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent implements OnInit {
  repos: Endpoints['GET /repos/{owner}/{repo}']['response']['data'][] = [];

  constructor(private githubApi: GithubApiService) {}

  ngOnInit(): void {
    this.githubApi.projectsList.forEach((project) => {
      project.pipe(take(1)).subscribe((data) => {
        this.repos.push(data);
      });
    });
  }
}

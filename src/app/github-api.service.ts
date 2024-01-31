import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '@octokit/types';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  projectsList;

  constructor(http: HttpClient) {
    this.projectsList = [
      http.get<Endpoints['GET /repos/{owner}/{repo}']['response']['data']>(
        'https://api.github.com/repos/pouryapb/faceact',
      ),
      http.get<Endpoints['GET /repos/{owner}/{repo}']['response']['data']>(
        'https://api.github.com/repos/pouryapb/Definitioner-bot',
      ),
      http.get<Endpoints['GET /repos/{owner}/{repo}']['response']['data']>(
        'https://api.github.com/repos/pouryapb/bomberman',
      ),
      http.get<Endpoints['GET /repos/{owner}/{repo}']['response']['data']>(
        'https://api.github.com/repos/pouryapb/portfolio',
      ),
    ];
  }
}

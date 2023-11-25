import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '@octokit/types';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  faceAct;
  faceActBack;
  bomberman;
  portfolio;

  constructor(http: HttpClient) {
    this.faceAct = http.get<
      Endpoints['GET /repos/{owner}/{repo}']['response']['data']
    >('https://api.github.com/repos/pouryapb/faceact');
    this.faceActBack = http.get<
      Endpoints['GET /repos/{owner}/{repo}']['response']['data']
    >('https://api.github.com/repos/pouryapb/faceact-backend');
    this.bomberman = http.get<
      Endpoints['GET /repos/{owner}/{repo}']['response']['data']
    >('https://api.github.com/repos/pouryapb/bomberman');
    this.portfolio = http.get<
      Endpoints['GET /repos/{owner}/{repo}']['response']['data']
    >('https://api.github.com/repos/pouryapb/portfolio');
  }
}

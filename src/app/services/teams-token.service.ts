import { Injectable } from '@angular/core';
import { app, authentication } from '@microsoft/teams-js';

@Injectable({
  providedIn: 'root',
})

export class TeamsTokenService {
  constructor() {
    this.initializeTeamsApp();
  }

  initializeTeamsApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const getOriginsParam = urlParams.has('origins') && urlParams.get('origins') ? urlParams.get('origins') : '';
    const validMessageOrigins: string[] | undefined = getOriginsParam ? getOriginsParam.split(',') : undefined;

    if (!urlParams.has('customInit') || !urlParams.get('customInit')) {
      app.initialize(validMessageOrigins);
    }

  }

  async getIdToken() {
    try {
     const token = await authentication.getAuthToken();
      return token;
    } catch (error) {
      console.error('Failed to get token', error);
      return null;
    }
  }
}
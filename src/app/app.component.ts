import { Component } from '@angular/core';
import { TeamsTokenService } from './services/teams-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token?: string = '';
  error?: string = '';
  constructor(private teamsTokenService: TeamsTokenService) {}

  async ngOnInit() {
    try {
      this.token = (await this.teamsTokenService.getIdToken()) ?? '';
    } catch (error) {
      this.error = 'Error fetching user info';
    }
  }
}

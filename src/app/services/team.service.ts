import { Team } from './../shared/model/team.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UiService } from '../shared/services/ui.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient, private router: Router, private uiService: UiService) { }

  addTeam(team: any) {
    this.http.post<{ status: boolean }>('api/team/add', team)
      .subscribe((responseData) => {
        const response = responseData;
        this.router.navigate(['/marker']);
      });
  }
}

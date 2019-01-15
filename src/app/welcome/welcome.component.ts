import { Team } from './../shared/model/team.model';
import { TeamService } from './../services/team.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from '../shared/services/ui.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  welcomeForm: FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;

  constructor(private teamservice: TeamService, private uiService: UiService) { }

  ngOnInit() {

    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });

    this.welcomeForm = new FormGroup({
      teamone: new FormControl('', { validators: [ Validators.required, Validators.minLength(10), Validators.maxLength(30) ] }),
      teamtwo: new FormControl('', { validators: [ Validators.required, Validators.minLength(10), Validators.maxLength(30) ] })
    });

  }

  get f() { return this.welcomeForm.controls; }


  onSubmit() {

    this.uiService.loadingStateChanged.next(true);

    const teamList: Team[] = [];

    teamList.push(
      { name: this.welcomeForm.value.teamone },
      { name: this.welcomeForm.value.teamtwo }
    );

    for (const team of teamList) {
      this.teamservice.addTeam(team);
    }

  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }

}

import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { JobListComponent } from "../job-list/job-list.component";
import { Job } from '../job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fav',
  standalone: true,
  imports: [JobListComponent,CommonModule],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})
export class FavComponent {
  favJobList: Job[] = [];
  constructor(private jobService: JobService) {
    this.jobService.getFavJobs().subscribe((joblist: Job[]) => {
      this.favJobList = joblist;
    });
  }
}

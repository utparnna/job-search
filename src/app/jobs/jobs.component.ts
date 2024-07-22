import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { JobListComponent } from "../job-list/job-list.component";
import { Job } from '../job.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobListComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobList: Job[] = [];
  constructor(private jobService: JobService) {
    this.jobService.getAllJobs().subscribe((joblist: Job[]) => {
      this.jobList = joblist;
    });
  }
  addToFav(job: Job): void {
    this.jobService.toggleFav(job);
  }
}

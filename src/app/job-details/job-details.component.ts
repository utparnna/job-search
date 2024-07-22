import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobService } from '../job.service';
import { JobDetails } from '../job.model';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  jobDetails: JobDetails | any;
  constructor(private activatedRoute: ActivatedRoute, private jobService: JobService) {
    let jobID = this.activatedRoute.snapshot.params['jobId'];
    this.jobService.getJobDetailsById(jobID).subscribe((jobDetails: any) => {
      this.jobDetails = jobDetails;
    });
  }
  formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }
}

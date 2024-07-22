import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Job, JobDetails } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private favJobIds: number[] = [];
  private sessionKey = 'job-search-favs';
  constructor(private http: HttpClient) {
    this.updateFavJobIdFromSessionStorage();
  }
  toggleFav(job: Job): void {
    if (job.fav) {
      this.favJobIds.splice(this.favJobIds.indexOf(job.id), 1);
    }
    else {
      this.favJobIds.push(job.id);
    }
    job.fav = !job.fav;
    // Update to Session Storage to Persist Favorite Data
    this.addToSession();
  }
  getFavJobs(): Observable<Job[]> {
    return this.getAllJobs().pipe(map((jobList: Job[]) => {
      return jobList.filter(job => job.fav);
    }))
  }
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs').pipe(map((response: Job[]) => {
      let jobList: Job[] = [];
      response.forEach((job: Job) => {
        jobList.push({
          ...job,
          fav: this.favJobIds.indexOf(job.id) > -1
        })
      });
      return jobList;
    }));
  }
  getJobDetailsById(id: number): Observable<JobDetails> {
    return this.http.get<JobDetails>('/jobs/' + id);
  }
  addToSession(): void {
    sessionStorage.setItem(this.sessionKey, this.favJobIds.join());
  }
  updateFavJobIdFromSessionStorage(): void {
    let favJobIds = sessionStorage.getItem(this.sessionKey);
    if (favJobIds) {
      this.favJobIds = favJobIds.split(',').map(i => parseInt(i))
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  @Input() job: Job | any;
  @Input() showFavIcon: boolean = true;
  @Output() onFavClick = new EventEmitter<Job>();
  public favClick(): void {
    this.onFavClick.emit(this.job);
  }
}

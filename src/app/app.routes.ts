import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { FavComponent } from './fav/fav.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const routes: Routes = [
    {
        path: 'jobs',
        component: JobsComponent
    },
    {
        path: 'fav',
        component: FavComponent
    },
    {
        path: 'jobs/:jobId',
        component: JobDetailsComponent
    }
];

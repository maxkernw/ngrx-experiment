import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from '../components/overview/overview.component';
import { SightingComponent } from '../components/sighting/sighting.component';

export const ROUTES: Routes = [
	{
		path: '',
		component: OverviewComponent,
	},
	{
		path: ':id',
		component: SightingComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class OverviewRoutingModule { }

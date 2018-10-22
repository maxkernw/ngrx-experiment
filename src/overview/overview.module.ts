import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store';
import { SightingComponent } from './components/sighting/sighting.component';
import { OverviewComponent } from './components/overview/overview.component';
import { Routes } from '@angular/router';
import { OverviewRoutingModule } from './routing/overview-routing.module';

export const ROUTES: Routes = [
	{
		path: '',
		component: OverviewComponent,
	}
];

@NgModule({
	declarations: [SightingComponent, OverviewComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
		OverviewRoutingModule,
		StoreModule.forFeature('overview', reducers),
	],
})
export class OverviewModule { }

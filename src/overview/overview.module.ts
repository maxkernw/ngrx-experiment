import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { SightingComponent } from './components/sighting/sighting.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OverviewRoutingModule } from './routing/overview-routing.module';
import { OVERVIEW_STORE_NAME } from './store/consts/overview.consts';


@NgModule({
	declarations: [SightingComponent, OverviewComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
		OverviewRoutingModule,
		StoreModule.forFeature(OVERVIEW_STORE_NAME, reducers),
		EffectsModule.forFeature(effects)
	],
})
export class OverviewModule { }

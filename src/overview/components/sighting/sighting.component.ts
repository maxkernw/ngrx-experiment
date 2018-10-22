import { Component, OnInit, Input } from '@angular/core';
import { Sighting } from 'src/overview/model/sighting.model';

@Component({
	selector: 'app-sighting',
	templateUrl: './sighting.component.html',
	styleUrls: ['./sighting.component.css']
})
export class SightingComponent implements OnInit {

	@Input() sighting: Sighting;

	constructor() { }

	ngOnInit() {
	}

}

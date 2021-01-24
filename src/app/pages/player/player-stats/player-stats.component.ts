import { IPlayerStats } from './../../../interfaces/IPlayerStats';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent implements OnInit {

  @Input() stats: IPlayerStats;

  constructor() { }

  ngOnInit() { }

}

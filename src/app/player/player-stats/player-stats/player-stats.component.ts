import { Component, Input, OnInit } from '@angular/core';
import { PlayerStats } from 'src/app/interfaces/player-stats.interface';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent implements OnInit {

  @Input() stats!: PlayerStats;

  constructor() { }

  ngOnInit() { }

}

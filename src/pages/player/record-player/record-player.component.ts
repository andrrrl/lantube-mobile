import { Component, Input, OnInit } from '@angular/core';
import { IPlayerStats } from 'src/app/interfaces/IPlayerStats';

@Component({
  selector: 'app-record-player',
  templateUrl: './record-player.component.html',
  styleUrls: ['./record-player.component.scss'],
})
export class RecordPlayerComponent implements OnInit {

  @Input() stats: IPlayerStats;

  constructor() { }

  ngOnInit() {}

}

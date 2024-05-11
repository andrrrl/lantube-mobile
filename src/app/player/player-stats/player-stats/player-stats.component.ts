import { Component, Input, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { PlayerStats } from 'src/app/interfaces/player-stats.interface';
import { Video } from 'src/app/interfaces/video.interface';
import { PlayerService } from 'src/app/services/player.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent implements OnInit {

  @Input() stats!: PlayerStats;
  currentVideo: any;
  subscription!: Subscription;

  constructor(private playerService: PlayerService, private videosService: VideosService) { }

  ngOnInit() {
    this.subscription = this.videosService.get({}).pipe(
      tap((videos) => {
        this.currentVideo = videos.find((video: Video) => video.videoId === this.stats.videoId);
        console.log(videos, this.currentVideo, this.stats.videoId);
        
      })
    ).subscribe()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

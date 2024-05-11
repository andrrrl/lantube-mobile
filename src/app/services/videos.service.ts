import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, scan } from 'rxjs';
import { ConfigService } from './config.service';
import { Socket, io } from 'socket.io-client';
import { Video } from '../interfaces/video.interface';

@Injectable({ providedIn: 'root' })
export class VideosService {
  private API: string;
  private socket!: Socket;
  private videosSubject: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>([]);
  videos$: Observable<Video[]> = this.videosSubject.asObservable();

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.API = this.configService.getAPIEndpoint();
    this.socket = io(this.API, { upgrade: false, transports: ['websocket'] });
  }

  extractData(res: Response) {
    return res.json();
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('VIDEOS_MESSAGE', { message: msg });
  }

  // HANDLER
  onNewMessage() {
    return new Observable<any>((observer) => {
      this.socket.on('VIDEOS_MESSAGE', (msg) => {
        observer.next(msg);
        console.log(msg);
        
      });
      this.socket.off('VIDEOS_MESSAGE', this.onNewMessage);
      this.socket.on('disconnect', () => {
        this.socket.removeAllListeners();
      });
    });
  }

  get(params: any): Observable<any> {
    return this.http.get(this.API + '/api/videos', params).pipe(
        scan((videos) => {
            this.videosSubject.next(videos)
        }
    ));
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.API + '/api/videos/' + id);
  }

  add(videoId: string): Observable<any> {
    return this.http.get(this.API + '/api/videos/add/' + videoId);
  }

  put(video: any): Observable<any> {
    return video;
  }

  delete(videoId: string): Observable<any> {
    return this.http.delete(this.API + '/api/videos/delete/' + videoId);
  }

  reorder(videoId: string, swap: boolean): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(this.API + '/api/', swap, options);
  }

  extractVideoId(videoURL: string) {
    return videoURL.replace(
      /http(s?):\/\/(w{3})?(\.?)youtube\.com\/watch\?v=/,
      ''
    );
  }
}

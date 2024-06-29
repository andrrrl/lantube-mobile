import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, scan } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { Video } from '../interfaces/video.interface';

@Injectable({ providedIn: 'root' })
export class VideosService {
  private socket!: Socket;
  private videosSubject: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>([]);
  videos$: Observable<Video[]> = this.videosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.socket = io('/', { upgrade: false, transports: ['websocket'] });
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
    return this.http.get('/api/videos', params).pipe(
        scan((videos) => {
            this.videosSubject.next(videos)
        }
    ));
  }

  getById(id: string): Observable<any> {
    return this.http.get('/api/videos/' + id);
  }

  add(videoId: string): Observable<any> {
    return this.http.get('/api/videos/add/' + videoId);
  }

  put(video: any): Observable<any> {
    return video;
  }

  patch(videoId: string, key: string, value: any): Observable<any> {
    return this.http.patch('/api/videos/' + videoId + '/edit', {key, value});
  }

  delete(videoId: string): Observable<Object> {
    return this.http.delete('/api/videos/delete/' + videoId);
  }

  reorder(videoId: string, swap: boolean): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post('/api/', swap, options);
  }

  extractVideoId(videoURL: string) {
    return videoURL.replace(
      /http(s?):\/\/(w{3})?(\.?)youtube\.com\/watch\?v=/,
      ''
    );
  }
}

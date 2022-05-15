import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { MessageService } from './services/messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  media$: Observable<MediaChange[]>;

  constructor(media: MediaObserver,
              private messageService: MessageService) {
    this.media$ = media.asObservable();
  }

  title = 'alexapp';
  showBar: boolean = true;

  ngOnInit() {
    this.messageService.onMessage().subscribe(() => { this.showBar = false })
  }

  ngAfterViewInit() {
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


    longText: string = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;

  ngOnDestroy() {
  }

}

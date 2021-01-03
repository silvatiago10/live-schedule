import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/service/live.service';
import { Live } from 'src/app/shared/model/live.model';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesNext: Live[] | undefined;
  livesPrevious: Live[] | undefined;
  


  constructor(
    public LiveService: LiveService,
    
  ) { }

  ngOnInit(): void {
   this.getLives();
  }

  getLives(){
    this.LiveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
     
    });

    this.LiveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
     
    });
  }

}
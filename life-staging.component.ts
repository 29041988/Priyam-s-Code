import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifestaging',
  templateUrl: './life-staging.component.html',
  styleUrls: ['./life-staging.component.less']
})
export class LifestagingComponent implements OnInit {

  lifestagingdata: any;
  constructor() {
    this.lifestagingdata = [{"fundid":"fn1","hrfname":"Old Mutual Edge 28 Life Fund ","hrlink":"../../../readme.txt.txt","lrfname":"Old Mutual Stable Growth Fund","lrlink":"../../../readme.txt.txt","invopt":"Single Manager"},{"fundid":"fn2","hrfname":"Old Mutual Multi-Manager Balanced Aggressive Fund of Funds","hrlink":"../../../readme.txt.txt","lrfname":"Old Mutual Multi-Manager Cautious Fund of Funds","lrlink":"../../../readme.txt.txt","invopt":"Multi-Manager"},{"fundid":"fn3","hrfname":"Old Mutual Absolute Smooth Growth Portfolio","hrlink":"../../../readme.txt.txt","lrfname":"Old Mutual Absolute Stable Growth Portfolio","lrlink":"../../../readme.txt.txt","invopt":"Protection"},{"fundid":"fn4","hrfname":"Old Mutual Balance Tracker Life Fund","hrlink":"../../../readme.txt.txt","lrfname":"Old Mutual Defensive Tracker Life Fund","lrlink":"../../../readme.txt.txt","invopt":"Passive"}];
  }


  ngOnInit() {
  }

}

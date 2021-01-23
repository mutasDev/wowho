import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/Player';
import { PlayerData } from 'src/app/model/PlayerData';
import { Realm } from 'src/app/model/Realm';
import { Region } from 'src/app/model/Region';
import { RIO } from 'src/app/model/RIO';
import { WLOGS } from 'src/app/model/WLOGS';
import { RIOService } from 'src/app/services/rio.service';
import { WLogsService } from 'src/app/services/wlogs.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  public term: string = 'asdasd';
  private players: Player[] = [];
  constructor(private rio: RIOService, private wlogs: WLogsService, private cd: ChangeDetectorRef) {}


  displayedColumns: string[] = ['class', 'name', 'rio'];

  public finished: PlayerData[] = [];
  public rioRes: RIO = {};
  public wlogsRes: WLOGS = {};

  executeSearch(): void {
    let player: Player = {
      name: 'markus',
      realm: Realm.THRALL,
      region: Region.EU,
    };
    /*
    this.players.forEach(player => {

    })
    */
    this.rio.executeSearch(player).subscribe((res: RIO) => {
      this.rioRes = res;
      console.log(this.rioRes);
    });

    this.wlogs.executeSearch(player).subscribe((res: WLOGS) => {
      this.wlogsRes = res;
      console.log(this.wlogsRes);
    });
  }

  updateTable(): void {
    let result: PlayerData = {};
    result.name = this.rioRes.name;
    result.class = this.rioRes.class;
    if (this.rioRes.mythic_plus_scores_by_season) {
      result.rio = this.rioRes.mythic_plus_scores_by_season[0].scores?.all;
    } else {
      result.rio = undefined;
    }
    this.finished.push(result);

    this.cd.detectChanges();
    console.log(this.finished);
  }

  ngOnInit(): void {}
}

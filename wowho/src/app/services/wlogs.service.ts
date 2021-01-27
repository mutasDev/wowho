import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Player } from '../model/Player';

@Injectable({
  providedIn: 'root'
})
export class WLogsService {

  private API: string = "https://www.warcraftlogs.com:443/v1/parses/character/" //Markus/Thrall/EU?api_key=243307f30e3e2a9f69985e91b75e4fb3"

  constructor(private http: HttpClient) {}

  executeSearch(player: Player) {

  //  return this.http.get("https://www.warcraftlogs.com:443/v1/parses/character/Markus/Thrall/EU?api_key=243307f30e3e2a9f69985e91b75e4fb3");

    return this.http.get(
      this.API +
      player.name + "/" +
      player.realm + "/" +
      player.region + "?api_key=" + environment.wlogsToken
    );
  }



}

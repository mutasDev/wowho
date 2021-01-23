import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../model/Player';
@Injectable({
  providedIn: 'root',
})
export class RIOService {
  private API: string = 'https://raider.io/api/v1/characters/profile?region=';

  constructor(private http: HttpClient) {}

  executeSearch(player: Player) {
    return this.http.get(
      this.API +
        player.region +
        '&realm=' +
        player.realm +
        '&name=' +
        player.name +
        '&fields=covenant%2Cmythic_plus_scores_by_season%3Acurrent'
    );
  }
}

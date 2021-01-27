import { Injectable } from '@angular/core';
import { Player } from '../model/Player';
import { Realm } from '../model/Realm';
import { Region } from '../model/Region';

@Injectable({
  providedIn: 'root',
})
export class ParserService {
  constructor() {}

  parse(input: string): Player[] {
    let inputList: string[] = input.split(' ');

    let playerList: Player[] = [];
    console.log(inputList);
    let playerRealm: Realm = inputList[0] as Realm;

    inputList = inputList.slice(1);
    console.log(playerRealm);
    console.log(inputList);

    inputList.forEach((name: string) => {
      if (name.includes('-')) {
        let data: string[] = name.split('-');
        let playerName: string = data[0];
        let dataRealm: Realm = data[1] as Realm;
        playerList.push({
          name: playerName,
          realm: dataRealm,
          region: Region.EU,
        });
      } else {
        playerList.push({ name: name, realm: playerRealm, region: Region.EU });
      }
    });

    return playerList;
  }
}

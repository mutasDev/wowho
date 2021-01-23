import { Realm } from "./Realm";
import { Region } from "./Region";

export interface Player {
  region?: Region;
  realm?: Realm;
  name?: string;
}

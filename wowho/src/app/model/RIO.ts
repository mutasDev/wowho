export interface Covenant {
  id?: number;
  name?: string;
  renown_level?: number;
}

export interface Scores {
  all?: number;
  dps?: number;
  healer?: number;
  tank?: number;
  spec_0?: number;
  spec_1?: number;
  spec_2?: number;
  spec_3?: number;
}

export interface MythicPlusScoresBySeason {
  season?: string;
  scores?: Scores;
}

export interface RIO {
  name?: string;
  race?: string;
  class?: string;
  active_spec_name?: string;
  active_spec_role?: string;
  gender?: string;
  faction?: string;
  achievement_points?: number;
  honorable_kills?: number;
  thumbnail_url?: string;
  region?: string;
  realm?: string;
  last_crawled_at?: Date;
  profile_url?: string;
  profile_banner?: string;
  covenant?: Covenant;
  mythic_plus_scores_by_season?: MythicPlusScoresBySeason[];
}

export interface Explore {
  img: string;
  location: string;
  distance: string;
}

export interface Card {
  img: string;
  title: string;
}

export interface SectionData {
  explores: Explore[];
  cards: Card[];
}

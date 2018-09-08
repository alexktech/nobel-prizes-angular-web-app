export type PrizeCategory = 'chemistry' | 'economics' | 'literature' | 'medicine' | 'peace' | 'physics';

export interface Affiliation {
  name: string;
  city: string;
  country: string;
}

export class Prize {
  constructor(
    public year: string,
    public category: PrizeCategory,
    public share: number,
    public motivation: string,
    public affiliations: Affiliation[]
  ) { }
}

import { Prize } from './prize.model';


export type Gender = 'female' | 'male';

export class Laureate {
  constructor(
    public id: number,
    public firstname: string,
    public surname: string,
    public born: string,
    public died: string,
    public bornCountry: string,
    public bornCountryCode: string,
    public bornCity: string,
    public diedCountry: string,
    public diedCountryCode: string,
    public diedCity: string,
    public gender: Gender,
    public prizes: Prize[]
  ) { }
}

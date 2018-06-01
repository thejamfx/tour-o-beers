import { Beer as _Beer } from '../beer.types'

export class Beer implements _Beer {
    public id: string;
    public name: string;
    public brewery: string;
}

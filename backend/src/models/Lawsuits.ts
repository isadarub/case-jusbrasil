export enum COURTS {
  TJAC = 'TJAC',
  TJAL = 'TJAL',
  TJAP = 'TJAP',
  TJAM = 'TJAM',
  TJBA = 'TJBA',
  TJCE = 'TJCE',
  TJDF = 'TJDF',
  TJES = 'TJES',
  TJGO = 'TJGO',
  TJMA = 'TJMA',
  TJMT = 'TJMT',
  TJMS = 'TJMS',
  TJMG = 'TJMG',
  TJPA = 'TJPA',
  TJPB = 'TJPB',
  TJPE = 'TJPE',
  TJPI = 'TJPI',
  TJPR = 'TJPR',
  TJRJ = 'TJRJ',
  TJRN = 'TJRN',
  TJRS = 'TJRS',
  TJRO = 'TJRO',
  TJRR = 'TJRR',
  TJSC = 'TJSC',
  TJSP = 'TJSP',
  TJSE = 'TJSE',
  TJTO = 'TJTO',
}

export interface IMovements {
  id: string;
  date: Date;
  description: string;
  lawsuit_id: string;
}

export interface ILawsuit {
  id: string;
  cns: string;
  concerned_parties: string;
  original_court: COURTS;
  start_date: Date;
}

export class Lawsuit {
  constructor(
    public id: string,
    public cns: string,
    public concerned_parties: string,
    public original_court: COURTS,
    public start_date: Date,
    public movements: string[] = []
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getCns(): string {
    return this.cns;
  }

  public setCns(cns: string): void {
    this.cns = cns;
  }

  public getConcerned_parties(): string {
    return this.concerned_parties;
  }

  public setConcerned_parties(concerned_parties: string): void {
    this.concerned_parties = concerned_parties;
  }

  public getOriginal_court(): string {
    return this.original_court;
  }

  public setOriginal_court(original_court: COURTS): void {
    this.original_court = original_court;
  }

  public getStart_date(): Date {
    return this.start_date;
  }

  public setStart_date(start_date: Date): void {
    this.start_date = start_date;
  }

  public getMovements(): string[] {
    return this.movements;
  }

  public setMovements(movements: string[]): void {
    this.movements = movements;
  }
}

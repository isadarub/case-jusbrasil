import { Request, Response } from 'express';
import { LawsuitsDatabase } from '../database/LawsuitsDatabase';
import { Lawsuit } from '../models/Lawsuits';

export class LawsuitsController {
  public getLawsuits = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const search = req.query.search as string;

      const lawsuitsDatabase = new LawsuitsDatabase();

      const lawsuitsDB = await lawsuitsDatabase.getAllLawsuits();

      const lawsuits = lawsuitsDB.map(lawsuitDB => {
        return new Lawsuit(
          lawsuitDB.id,
          lawsuitDB.cns,
          lawsuitDB.concerned_parties,
          lawsuitDB.original_court,
          lawsuitDB.start_date
        );
      });

      const result = lawsuits.map(lawsuit => {
        return {
          id: lawsuit.getId(),
          cns: lawsuit.getCns(),
          concerned_parties: lawsuit.getConcerned_parties(),
          original_court: lawsuit.getOriginal_court(),
          start_date: lawsuit.getStart_date(),
        };
      });

      res.status(200).send({ lawsuits: result });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  };
}

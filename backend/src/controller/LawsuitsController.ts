import { Request, Response } from 'express';
import { LawsuitsDatabase } from '../database/LawsuitsDatabase';
import { MovementsDatabase } from '../database/MovementsDatabase';
import { Lawsuit } from '../models/Lawsuits';

export class LawsuitsController {
  public getLawsuits = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
      const search = req.query.search as string;

      const lawsuitsDatabase = new LawsuitsDatabase();
      const movementsDatabase = new MovementsDatabase();

      if (search) {
        const lawsuitsDB = await lawsuitsDatabase.searchLawsuit(search);

        if (typeof search !== 'string') {
          throw new Error("Parâmetro 'search' deve ser uma string");
        }

        const lawsuits = lawsuitsDB.map(lawsuitDB => {
          return new Lawsuit(
            lawsuitDB.id,
            lawsuitDB.cns,
            lawsuitDB.concerned_parties,
            lawsuitDB.original_court,
            lawsuitDB.start_date
          );
        });

        for (let lawsuit of lawsuits) {
          const movementsDB: any = await movementsDatabase.getMovements(
            lawsuit.getId()
          );

          const movements = movementsDB?.map((mov: any) => mov);

          lawsuit.setMovements(movements);
        }

        const result = lawsuits.map(lawsuit => {
          return {
            id: lawsuit.getId(),
            cns: lawsuit.getCns(),
            concerned_parties: lawsuit.getConcerned_parties(),
            original_court: lawsuit.getOriginal_court(),
            movements: lawsuit.getMovements(),
          };
        });

        res.status(200).send({ lawsuits: result });
      } else {
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

        for (let lawsuit of lawsuits) {
          const movementsDB: any = await movementsDatabase.getMovements(
            lawsuit.getId()
          );

          const movements = movementsDB?.map((mov: any) => mov);

          lawsuit.setMovements(movements);
        }

        const result = lawsuits.map(lawsuit => {
          return {
            id: lawsuit.getId(),
            cns: lawsuit.getCns(),
            concerned_parties: lawsuit.getConcerned_parties(),
            original_court: lawsuit.getOriginal_court(),
            movements: lawsuit.getMovements(),
          };
        });

        res.status(200).send({ lawsuits: result });
      }
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const lawsuitsDatabase = new LawsuitsDatabase();
      const movementsDatabase = new MovementsDatabase();

      const lawsuitsDB = await lawsuitsDatabase.getById(id);

      const lawsuits = lawsuitsDB.map(lawsuitDB => {
        return new Lawsuit(
          lawsuitDB.id,
          lawsuitDB.cns,
          lawsuitDB.concerned_parties,
          lawsuitDB.original_court,
          lawsuitDB.start_date
        );
      });

      for (let lawsuit of lawsuits) {
        const movementsDB: any = await movementsDatabase.getMovements(
          lawsuit.getId()
        );

        const movements = movementsDB?.map((mov: any) => mov);

        lawsuit.setMovements(movements);
      }

      const result = lawsuits.map(lawsuit => {
        return {
          id: lawsuit.getId(),
          cns: lawsuit.getCns(),
          concerned_parties: lawsuit.getConcerned_parties(),
          original_court: lawsuit.getOriginal_court(),
          movements: lawsuit.getMovements(),
        };
      });
      res.status(200).send({ lawsuits: result });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  };
}

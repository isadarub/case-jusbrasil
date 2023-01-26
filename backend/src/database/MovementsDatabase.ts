import { IMovements } from '../models/Lawsuits';
import { BaseDatabase } from './BaseDatabase';

export class MovementsDatabase extends BaseDatabase {
  public static TABLE_MOVEMENTS = 'Lawsuit_Movements';

  public getMovements = async (
    id: string
  ): Promise<IMovements[] | undefined> => {
    const [result] = await BaseDatabase.connection.raw(`
        SELECT Lawsuit_Movements.id, Lawsuit_Movements.date, Lawsuit_Movements.description 
        FROM Lawsuit_Movements
        JOIN Jus_Lawsuits
        ON Lawsuit_Movements.lawsuit_id = Jus_Lawsuits.id
        WHERE Lawsuit_Movements.lawsuit_id = "${id}";
      `);

    return result;
  };
}

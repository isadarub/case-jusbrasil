import { ILawsuit, IMovements } from '../models/Lawsuits';
import { BaseDatabase } from './BaseDatabase';

export class LawsuitsDatabase extends BaseDatabase {
  public static TABLE_LAWSUITS = 'Jus_Lawsuits';

  public searchLawsuit = async (search: string) => {
    const result: ILawsuit[] = await BaseDatabase.connection(
      LawsuitsDatabase.TABLE_LAWSUITS
    )
      .select()
      .where('cns', 'LIKE', `%${search}%`)
      .orWhere('concerned_parties', 'LIKE', `%${search}%`);

    return result;
  };

  public getAllLawsuits = async () => {
    const result: ILawsuit[] = await BaseDatabase.connection(
      LawsuitsDatabase.TABLE_LAWSUITS
    ).select();

    return result;
  };

  public getById = async (id: string) => {
    const result: ILawsuit[] = await BaseDatabase.connection(
      LawsuitsDatabase.TABLE_LAWSUITS
    )
      .select()
      .where('id', 'LIKE', `${id}`);

    return result;
  };
}

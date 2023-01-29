import { BaseDatabase } from '../../src/database/BaseDatabase';
import { IMovements } from '../../src/models/Lawsuits';

export class MovementsDatabaseMock extends BaseDatabase {
  public static TABLE_MOVEMENTS = 'Lawsuit_Movements';

  public getMovements = async (
    id: string
  ): Promise<IMovements[] | undefined> => {
    const result = [
      {
        id: '201mock',
        date: '10/23/2020',
        description: 'mock mock mock',
        lawsuit_id: 'id-mock1',
      },
    ];

    switch (id) {
      case 'id-mock1':
        return result;
      default:
        return undefined;
    }
  };
}

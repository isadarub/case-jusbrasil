import { BaseDatabase } from '../../src/database/BaseDatabase';
import { COURTS, ILawsuit } from '../../src/models/Lawsuits';

export class LawsuitDatabaseMock extends BaseDatabase {
  public static TABLE_LAWSUITS = 'Jus_Lawsuits';

  public searchLawsuit = async (
    search: string
  ): Promise<ILawsuit[] | undefined> => {
    const result: ILawsuit[] = [
      {
        id: 'id-mock1',
        cns: '2614372-66.2023.8.13.0932',
        concerned_parties: 'mock1, mock2',
        original_court: COURTS.TJBA,
        start_date: '10/01/2023',
      },
    ];

    switch (search) {
      case 'mock1':
        return result;
      default:
        return undefined;
    }
  };

  public getAllLawsuits = async (): Promise<ILawsuit[] | undefined> => {
    const result: ILawsuit[] = [
      {
        id: 'id-mock1',
        cns: '2614372-66.2023.8.13.0932',
        concerned_parties: 'mock1, mock2',
        original_court: COURTS.TJBA,
        start_date: '10/01/2023',
      },
      {
        id: 'id-mock2',
        cns: '3217654-99.1997.8.15.3425',
        concerned_parties: 'mock3, mock4',
        original_court: COURTS.TJPR,
        start_date: '20/10/1997',
      },
    ];

    return result;
  };

  public getById = async (id: string): Promise<ILawsuit[] | undefined> => {
    const firstId: ILawsuit[] = [
      {
        id: 'id-mock1',
        cns: '2614372-66.2023.8.13.0932',
        concerned_parties: 'mock1, mock2',
        original_court: COURTS.TJBA,
        start_date: '10/01/2023',
      },
    ];
    const secondId: ILawsuit[] = [
      {
        id: 'id-mock2',
        cns: '3217654-99.1997.8.15.3425',
        concerned_parties: 'mock3, mock4',
        original_court: COURTS.TJPR,
        start_date: '20/10/1997',
      },
    ];

    switch (id) {
      case 'id-mock1':
        return firstId;
      case 'id-mock2':
        return secondId;
      default:
        return undefined;
    }
  };
}

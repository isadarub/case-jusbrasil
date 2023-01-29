import { LawsuitDatabaseMock } from '../mocks/LawsuitDatabaseMock';

describe('testing LawsuitDatabase response', () => {
  const lawsuitDatabase = new LawsuitDatabaseMock();

  test('should get all lawsuits', async () => {
    const response = await lawsuitDatabase.getAllLawsuits();
    expect(response.length).toEqual(2);
  });

  test('should get mocked lawsuits', async () => {
    const response = await lawsuitDatabase.getAllLawsuits();
    expect(response[1].id).toEqual('id-mock2');
  });

  test('should get lawsuit by search', async () => {
    const response = await lawsuitDatabase.searchLawsuit('mock1');
    expect(response[0].concerned_parties).toEqual('mock1, mock2');
  });

  test('should get lawsuit by id', async () => {
    const response = await lawsuitDatabase.getById('id-mock1');
    expect(response[0].id).toEqual('id-mock1');
  });
});

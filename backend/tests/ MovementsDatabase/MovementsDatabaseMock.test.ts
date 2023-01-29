import { MovementsDatabaseMock } from '../mocks/MovementsDatabaseMock';

describe('testing movements database response', () => {
  const movementsDatabase = new MovementsDatabaseMock();
  test('should get all movements by lawsuit id', async () => {
    const response = await movementsDatabase.getMovements('id-mock1');
    expect(response.length).toEqual(1);
  });
});

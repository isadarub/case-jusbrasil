import { BaseDatabase } from '../BaseDatabase';
import { LawsuitsDatabase } from '../LawsuitsDatabase';
import { MovementsDatabase } from '../MovementsDatabase';
import { lawsuits, movements } from './data';

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log('Creating tables...');
      await this.createTables();
      console.log('Tables created successfully.');

      console.log('Populating tables...');
      await this.insertData();
      console.log('Tables populated successfully.');

      console.log('Migrations completed.');
    } catch (error) {
      console.log('FAILED! Error in migrations...');
      console.log(error.message);
    } finally {
      console.log('Ending connection...');
      BaseDatabase.connection.destroy();
      console.log('Connection closed graciously.');
    }
  };

  createTables = async () => {
    await BaseDatabase.connection.raw(`
      DROP TABLE IF EXISTS ${MovementsDatabase.TABLE_MOVEMENTS};  
      DROP TABLE IF EXISTS ${LawsuitsDatabase.TABLE_LAWSUITS};
            
      CREATE TABLE IF NOT EXISTS ${LawsuitsDatabase.TABLE_LAWSUITS}(
          id VARCHAR(255) PRIMARY KEY,
          cns VARCHAR(255) NOT NULL,
          concerned_parties VARCHAR(255) NOT NULL,
          original_court ENUM("TJAC","TJAL","TJAP","TJAM","TJBA","TJCE","TJDF","TJES","TJGO","TJMA","TJMT","TJMS","TJMG","TJPA","TJPB","TJPE","TJPI","TJPR","TJRJ","TJRN","TJRS","TJRO","TJRR","TJSC","TJSP","TJSE","TJTO"),
          start_date DATE NOT NULL
      );

      CREATE TABLE IF NOT EXISTS ${MovementsDatabase.TABLE_MOVEMENTS}(
          id VARCHAR(255) PRIMARY KEY,
          date DATE NOT NULL,
          description VARCHAR(4000) NOT NULL,
          lawsuit_id VARCHAR(255) NOT NULL,
          FOREIGN KEY (lawsuit_id) REFERENCES ${LawsuitsDatabase.TABLE_LAWSUITS}(id)
      );
      `);
  };

  insertData = async () => {
    await BaseDatabase.connection(LawsuitsDatabase.TABLE_LAWSUITS).insert(
      lawsuits
    );

    await BaseDatabase.connection(MovementsDatabase.TABLE_MOVEMENTS).insert(
      movements
    );
  };
}

const migrations = new Migrations();
migrations.execute();

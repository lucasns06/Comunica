import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('mydatabase.db');

export const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT,
        );
      `);
    });
};

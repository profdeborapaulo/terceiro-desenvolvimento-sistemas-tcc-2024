import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('users.db');
// Função para inicializar o banco de dados e criar a tabela de usuários
export const init = () => {
 db.transaction(tx => {
   tx.executeSql(
     `CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY NOT NULL,
       email TEXT NOT NULL,
       password TEXT NOT NULL
     );`,
     [],
     () => console.log('Tabela de usuários criada com sucesso'),
     (_, err) => console.log('Erro ao criar a tabela', err)
   );
 });
};
// Função para inserir um novo usuário
export const insertUser = (email, password) => {
 db.transaction(tx => {
   tx.executeSql(
     `INSERT INTO users (email, password) VALUES (?, ?);`,
     [email, password],
     (_, result) => console.log('Usuário inserido com sucesso', result),
     (_, err) => console.log('Erro ao inserir usuário', err)
   );
 });
};
// Função para verificar as credenciais de login
export const checkLogin = (email, password, callback) => {
 db.transaction(tx => {
   tx.executeSql(
     `SELECT * FROM users WHERE email = ? AND password = ?;`,
     [email, password],
     (_, { rows: { _array } }) => {
       if (_array.length > 0) {
         callback(true);
       } else {
         callback(false);
       }
     },
     (_, err) => console.log('Erro ao verificar login', err)
   );
 });
};
import {sql} from './database-connect.js';

export class Database {
    //retornar todos os usuários do banco
    async getUsers() {
        const users = await sql`select * from users`;
        return users;
    }

    async updatePassword(email, password) {
        await sql `update users set password = ${password} where email = ${email}`;
    }
}
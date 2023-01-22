import { Repository } from 'typeorm';
export declare class Users {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class UsersRepository extends Repository<Users> {
}

export class User {
    id: number;
    name: string;
    lastName: string;
    username: string;
    email: string;
    emailConfirmed: boolean;
    enabled: boolean;
    passwordHash: string;
    securityStamp: string;
}

export class CreateUserCommand {
    name: string;
    lastName: string;
    username: string;
    email: string;
    enabled: boolean;
}

export class UpdateUserCommand {
    name: string;
    lastName: string;
    username: string;
    email: string;
    enabled: boolean;
}
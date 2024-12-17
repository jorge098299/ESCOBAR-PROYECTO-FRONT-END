import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { User } from "../interfaces/user.interface";

export class LoginAuthDto implements User{
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
    
}
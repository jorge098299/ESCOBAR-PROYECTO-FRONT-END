import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNotEmpty } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";

export class RegisterAuthDto extends PartialType(LoginAuthDto){
    @IsNotEmpty()
    name:string;
    @IsEmail()
    email:string;
    pasword:string
}
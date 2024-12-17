import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';
import { ConfigService } from 'src/config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            inject:[ConfigService],
            useFactory:(config:ConfigService)=>({
                type:'postgres',
                host:config.get('HOST'),
                port:+config.get('PORT_DB'),
                username:config.get('USERNAME'),
                password:config.get('PASSWORD_DB'),
                database:config.get('DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                //synchronize: true,
                //logging:true,
            })
        })
    ],
    providers:[...databaseProvider, ConfigService],
    exports:[...databaseProvider]
})
export class DatabaseModule {}

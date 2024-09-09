import { Module } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { Course } from '../courses/entities/courses.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

export const dataSourceOptions: DataSourceOptions = {
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'postgres',
   password: 'docker',
   database: 'learningnest',
   entities: [Course],
   synchronize: true,
}

@Module({
   imports: [
      TypeOrmModule.forRootAsync({
         useFactory: async () => {
            return {
               ...dataSourceOptions
            }
         }
      })
   ]

})
export class DatabaseModule { }

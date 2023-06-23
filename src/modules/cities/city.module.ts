import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Module({
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
  imports: [TypeOrmModule.forFeature([CityEntity])],
})
export class CityModule {}

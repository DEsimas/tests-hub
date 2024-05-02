import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccentTesterController } from './AccentTester.controller';
import { AccentTesterService } from './AccentTester.service';
import { CollectionSchema } from './AccentTester.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'collections', schema: CollectionSchema }], 'accent')],
  controllers: [AccentTesterController],
  providers: [AccentTesterService],
})
export class AccentTesterModule { }

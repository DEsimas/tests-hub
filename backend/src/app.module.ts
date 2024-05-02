import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccentTesterModule } from './AccentTester/AccentTester.module';
import { TypingTesterModule } from './TypingTester/TypingTester.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.ACCENT_TESTER_DB_URI, {
      connectionName: 'accent'
    }),
    MongooseModule.forRoot(process.env.TYPING_TESTER_DB_URI, {
      connectionName: 'typing',
    }),
    AccentTesterModule,
    TypingTesterModule
  ],
})
export class AppModule { }

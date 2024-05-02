import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TypingTesterController } from "./TypingTester.controller";
import { TypingTester, TypingTesterSchema } from "./TypingTester.schema";
import { TypingTesterService } from "./TypingTester.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'texts', schema: TypingTesterSchema }], 'typing')],
    controllers: [TypingTesterController],
    providers: [TypingTesterService]
})
export class TypingTesterModule { }
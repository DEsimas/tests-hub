import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TypingTester, TypingTesterDocument } from "./TypingTester.schema";

@Injectable()
export class TypingTesterService {
    constructor(@InjectModel('texts', 'typing') private TextsModel: Model<TypingTester>) { }

    async findAll(): Promise<{ texts: { title: string, text: string }[] }> {
        const texts = await this.TextsModel.find().exec();
        return { texts: texts };
    }
}
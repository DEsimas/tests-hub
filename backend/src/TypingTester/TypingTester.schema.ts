import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TypingTesterDocument = TypingTester & Document;

@Schema()
export class TypingTester {
    @Prop()
    title: string;

    @Prop()
    text: string;
}

export const TypingTesterSchema = SchemaFactory.createForClass(TypingTester);
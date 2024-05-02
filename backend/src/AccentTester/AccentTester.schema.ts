import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type WordDocument = Word & Document;

@Schema()
export class Word {
    @Prop()
    word: string;
}

export const AccentTesterSchema = SchemaFactory.createForClass(Word);

export type CollectionsDocument = Collection & Document;

@Schema()
export class Collection {
    @Prop()
    name: string;
    alias: string;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);
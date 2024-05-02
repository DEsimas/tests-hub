import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import * as crypto from 'crypto';
import { Connection, Model, Schema } from 'mongoose';
import { Collection, Word } from './AccentTester.schema';

const models = new Map();

@Injectable()
export class AccentTesterService {
  constructor(@InjectModel('collections', 'accent') private CollectionsModel: Model<Collection>, @InjectConnection('accent') private connection: Connection) { }
  private readonly algorithm = 'aes-256-ctr';

  private encrypt(text: string) {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(this.algorithm, process.env.ACCENT_TESTER_ENCODING_KEY, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString('hex'),
      content: encrypted.toString('hex')
    };
  }

  async getWords(collection: string): Promise<{ word: string }[]> {
    const collections = await this.CollectionsModel.find().exec();
    collections.forEach(data => {
      const c = JSON.parse(JSON.stringify(data));
      if (c.alias == collection) {
        collection = c.name;
      }
    });
    let model;
    if (models.has(collection))
      model = models.get(collection);
    else {
      model = await this.connection.model(collection, new Schema({ name: String }));
      models.set(collection, model);
    }
    const words = await model.find();
    return words;
  }

  async getCollections(): Promise<string[]> {
    const collections = await this.CollectionsModel.find().exec();
    return collections.map((collection) => (JSON.parse(JSON.stringify(collection)).alias));
  }
}
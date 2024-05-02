import { Controller, Get } from "@nestjs/common";
import { TypingTesterService } from "./TypingTester.service";

@Controller('/TypingTester')
export class TypingTesterController {
    constructor(private readonly TypingTesterService: TypingTesterService) { }

    @Get()
    async findAll(): Promise<string> {
        return JSON.stringify(await this.TypingTesterService.findAll());
    }
}
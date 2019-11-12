import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger'
import { from } from 'rxjs';
// import { AppService } from './app.service';

@Controller()
@ApiUseTags('默认')

export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Get()
  index(): string {
    return 'nest...';
  }
}

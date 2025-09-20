import { Controller, Post, Body } from '@nestjs/common';
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
  constructor(private tripsService: TripsService) {}

  @Post('generate')
  async generateTrip(@Body() body: { prompt: string }) {
    const guide = await this.tripsService.generateTrip(body.prompt);
    return { guide };
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkResponseDto } from './dto/get-link-response.dto';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  createLink(@Body() { value }: CreateLinkDto): { link: string } {
    const link = this.linksService.createLink(value);
    return { link };
  }

  @Get(':id')
  getValue(@Param('id') id: string): GetLinkResponseDto {
    const value = this.linksService.getValue(id);

    return { value };
  }
}

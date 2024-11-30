import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { LinksRepository } from './links.repository';

@Injectable()
export class LinksService {
  constructor(private readonly linksRepository: LinksRepository) {}

  createLink(value: string): string {
    const id = uuidv4();
    this.linksRepository.create(id, value);
    return id;
  }

  getValue(id: string): string {
    const link = this.linksRepository.findById(id);

    if (!link) {
      throw new NotFoundException('Link not found');
    }

    if (!link.active) {
      throw new NotFoundException('Link already used');
    }

    this.linksRepository.updateActiveStatus(id, false);
    return link.value;
  }
}

import { Injectable } from '@nestjs/common';

export interface Link {
  value: string;
  active: boolean;
}

@Injectable()
export class LinksRepository {
  private readonly store = new Map<string, Link>();

  create(id: string, value: string): void {
    this.store.set(id, { value, active: true });
  }

  findById(id: string): Link | null {
    return this.store.get(id) || null;
  }

  updateActiveStatus(id: string, active: boolean): void {
    const link = this.store.get(id);
    if (link) {
      link.active = active;
      this.store.set(id, link);
    }
  }
}

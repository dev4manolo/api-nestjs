import { randomUUID } from 'node:crypto';

import { IUUIDGenerator } from './contracts/uuid.contract';

export class UUIDGenerator implements IUUIDGenerator {
  generate(): string {
    throw new Error('Method not implemented.');
  }
  genetate(): string {
    return randomUUID();
  }
}

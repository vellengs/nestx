import { createCipher, createDecipher } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CryptoService {
  private readonly algorithm = 'aes-256-ctr';
  private readonly key = 'nest-workshop';

  hash(text: string): string {
    const cipher = createCipher(this.algorithm, this.key);
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  }

  compare(text: string, hash: string): boolean {
    const decipher = createDecipher(this.algorithm, this.key);
    const decoded =
      decipher.update(hash, 'hex', 'utf8') + decipher.final('utf8');
    return decoded === text;
  }
}

import { BaseDTO } from '../dtos/baseDTO';

export class Util {
  protected static parseContent<T>(dto: BaseDTO): T {
    return JSON.parse(dto.contents);
  }
}

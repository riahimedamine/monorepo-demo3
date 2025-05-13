import { Injectable } from '@nestjs/common';
import { shared } from '@app/shared';

@Injectable()
export class AppService {
    getHello(): string {
        return shared;
    }
}

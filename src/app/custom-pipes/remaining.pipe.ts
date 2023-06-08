import { Pipe, PipeTransform } from '@angular/core';
import { max } from 'rxjs';

@Pipe({
  name: 'remaining', // Pure,
  pure: false,
})
export class RemainingPipe implements PipeTransform {
  transform(input: string, maxChar?: any): number {
    console.log('remaining pipe called...');
    maxChar = maxChar || 100;
    return maxChar - input.length;
  }
}

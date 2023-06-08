import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort', // pure
  pure: false
})
export class MysortPipe implements PipeTransform {
  transform(arr: any): any {
    return arr.sort((a: any, b: any) => a - b);
  }
}

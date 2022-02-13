import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'update'
})
export class UpdatePipe implements PipeTransform {

  transform(value: any): string{
    return moment(value).fromNow();
  }

}

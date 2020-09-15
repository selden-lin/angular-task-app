import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenDate',
    pure: true
})

export class ShortenDate implements PipeTransform {
    transform (date) {
        return `${date.getMonth() + 1}/${date.getUTCDate()}/${date.getFullYear()}`;
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenDate',
    pure: true
})

export class ShortenDate implements PipeTransform {
    transform (date) {
        return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenDate',
    pure: true
})

export class ShortenDate implements PipeTransform {
    transform (date) {
        if (typeof date === "object") {
            return `${date.getMonth() + 1}/${date.getUTCDate()}/${date.getFullYear()}`;
        } 
        return "No due date";
    }
}

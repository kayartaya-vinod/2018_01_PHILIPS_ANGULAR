import { Pipe, PipeTransform } from '@angular/core';

//  usage: {{ contact.gender | title }}
@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {

    transform(gender: string) {
        if(!gender) return '';

        switch(gender.toLowerCase()) {
            case 'male':
            case 'm':
                return 'Mr.';
            case 'female':
            case 'f':
                return 'Ms.';
        }
        return '';
    }

}
import { PipeTransform, Pipe } from '@angular/core';


// usage: *ngFor="let c1 of (contacts | filter: keyword: ['first_name', 'last_name', 'city'])" 
// usage: *ngFor="let c1 of (contacts | filter: keyword: ['first_name'])" 

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(list: Array<any>, keyword: string, field_list: Array<string>) {
        if (!list) return [];
        return list.filter(obj => shouldInclude(obj, keyword, field_list));
    }

}

function shouldInclude(obj: Object, keyword: string, field_list: Array<string>) {
    let re = new RegExp(keyword, 'i');
    if (field_list && field_list.length > 0) {
        for (let i = 0; i < field_list.length; i++) {
            let key = field_list[i];
            if (re.test(obj[key])) return true;
        }
    }
    else {
        for (let key in obj) {
            if (re.test(obj[key])) return true;
        }
    }
    return false;
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(value: any): any {
    if (value.length === 0) return value;
    return value.sort((el1, el2) => {
      const name1 = el1.name.toLowerCase();
      const name2 = el2.name.toLowerCase();
      return name1 < name2 ? -1 : name1 > name2 ? 1 : 0;
    });
  }
}

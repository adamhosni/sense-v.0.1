import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any, term: any, prop: string): any {
    if (!term || !prop) return items;

    return items.filter((item) =>
        item[prop].toString().toLowerCase().includes(term.toLowerCase()));
  }
}
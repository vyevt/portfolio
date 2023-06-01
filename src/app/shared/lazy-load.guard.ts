import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // Операції завантаження лінивих модулів (перевірка умови, наприклад, наявності потрібних даних)
    // Повернути true, якщо лінійний модуль може завантажитись, або false, якщо не може

    // У прикладі повертаємо просто true
    return true;
  }
}

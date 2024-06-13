import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fabio';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Meliza';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = [
    'Maria',
    'Meliza',
    'Fernando',
    'David',
    'Erick',
    'Natalia',
    'Frida'
  ];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deletedClient():void {
    this.clients.shift();
 }

 // KeyValue Pipe
 public person = {
  name: 'Fabio',
  age: 24,
  addres: 'Jalisco, Mexico'
 }

 // Async Pipe
 public myObservableTimer: Observable<number> = interval (2000).pipe(
  tap(value => console.log('tap', value))
 );

 public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve( 'Tenemos data en la promesa.')
  }, 3500);
 })

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'fabio';
  public nameUpper: string = 'FABIO';
  public fullName: string = 'fAbIO tRUjiLlo';

  public customDate: Date = new Date();

}

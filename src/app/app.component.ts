import { Component } from '@angular/core';
<<<<<<< HEAD
import { PrimeNGConfig } from 'primeng/api'
=======
>>>>>>> 61494afc361acc77612e4fd263cbfd51de71bbc1

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
      this.primengConfig.ripple = true;
    }

=======
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countryApp';
>>>>>>> 61494afc361acc77612e4fd263cbfd51de71bbc1
}

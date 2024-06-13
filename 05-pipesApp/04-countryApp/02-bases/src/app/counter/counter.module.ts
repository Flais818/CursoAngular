import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/count/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}

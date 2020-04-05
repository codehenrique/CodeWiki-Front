import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],
  imports: [BrowserModule, CommonModule, RouterModule],
  exports: [NavbarComponent, BrowserModule, RouterModule]
})
export class CoreModule {}

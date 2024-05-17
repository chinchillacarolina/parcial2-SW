import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AnimeListComponent],
 declarations: [AnimeListComponent]
  
})
export class AnimeModule { }

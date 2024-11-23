import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})


export class ListComponent {

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteCharacter(index: number): void {
    console.log({index});
    
    // TODO: Emitir el ID del personaje

    this.onDelete.emit(index);
    
  }

  
}

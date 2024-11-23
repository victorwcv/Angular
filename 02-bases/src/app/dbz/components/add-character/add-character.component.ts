import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: "",
    power: 0
  }

  emitCharacter() {
    console.log(this.character);

    if (this.character.name.length < 2) return;

    this.onNewCharacter.emit({...this.character});
    
    // reset
    this.character.name = "";
    this.character.power = 0;

  }
  
}
 
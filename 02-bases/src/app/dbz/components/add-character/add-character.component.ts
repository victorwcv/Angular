import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  public character: Character = {
    name: "",
    power: 0
  }

  emitCharacter() {
    console.log(this.character);
  }
  
}
 
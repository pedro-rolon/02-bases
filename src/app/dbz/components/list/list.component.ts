import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

import {v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter;

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'trunks',
      power: 10,
    }
  ];

  onDeleteCharacter(id: string): void {
    // TODO: Emitir el ID del personaje
    this.onDeleteID.emit(id);
  }
}

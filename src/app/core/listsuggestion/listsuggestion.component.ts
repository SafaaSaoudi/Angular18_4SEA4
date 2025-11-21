import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-listsuggestion',
  templateUrl: './listsuggestion.component.html',
  styleUrl: './listsuggestion.component.css'
})
export class ListsuggestionComponent {

  sugg: Suggestion = {
    id: 1, 
    title: 'Organiser une journée team building', 
    description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.', 
    category: 'Événements', 
    date: new Date('2025-01-20'), 
    status: 'acceptee' ,
    nbrLikes: 1
  }

  likeSuggestion(id: number) {
    this.sugg.nbrLikes += 1;
  }
}

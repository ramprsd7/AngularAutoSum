import { Component, OnInit } from '@angular/core';

export class Quicknotes {
  title: String;
  content: String;
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  titleModel: String;
  contentModel: String;
  quicknotes: Quicknotes[];
  constructor() { 
  this.titleModel = '';
  this.contentModel = '';
  const defaultQuicknotes: Quicknotes = {
    title: 'My Notes',
    content: 'This is default note',
  };

  this.quicknotes = [defaultQuicknotes];
}
  ngOnInit(): void {
  }
  createQuicknotes() {
    const newQuicknotes: Quicknotes = {
      title: this.titleModel,
      content: this.contentModel,
    };
 
    
    this.quicknotes.push(newQuicknotes);
 
    // set the model values to '' again
    this.titleModel = this.contentModel = '';
  }
}

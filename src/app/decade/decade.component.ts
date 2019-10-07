import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decade-checkbox',
  template: `<label class="btn btn-primary" [class.active]="decadeValue">
               <input type="checkbox" autocomplete="off" [checked]="decadeValue" (change)="changeValue()" > {{decadeNumber(decade)}}
             </label>`,
  styleUrls: ['./decade.component.scss']
})
export class DecadeComponent implements OnInit {
  @Input() decade: string;
  @Input() decadeValue: boolean;

  @Output() changeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public decadeNumber(decade: string) {
    switch(decade) {
      case "eighties": {
        return "1980s";
      }
      case "nineties": {
        return "1990s";
      }
      case "twoThousands": {
        return "2000s";
      }
      case "twentyTens": {
        return "2010s";
      }
    }
  }

  changeValue() {
    this.changeEvent.emit([this.decade, !this.decadeValue])
  }

}

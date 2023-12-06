import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IgxGridModule } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IgxGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'igx-grid-height';

  gridData = [
    {
      ID: 1,
      Name: 'A',
      Age: 20,
    },
    {
      ID: 2,
      Name: 'B',
      Age: 30,
    },
    {
      ID: 3,
      Name: 'C',
      Age: 40,
    },
    {
      ID: 4,
      Name: 'D',
      Age: 50,
    },
    {
      ID: 5,
      Name: 'E',
      Age: 60,
    },
    {
      ID: 6,
      Name: 'F',
      Age: 70,
    },
    {
      ID: 7,
      Name: 'G',
      Age: 80,
    },
    {
      ID: 8,
      Name: 'H',
      Age: 90,
    },
    {
      ID: 9,
      Name: 'I',
      Age: 100,
    },
    {
      ID: 10,
      Name: 'J',
      Age: 110,
    },
    {
      ID: 11,
      Name: 'K',
      Age: 120,
    },
    {
      ID: 12,
      Name: 'L',
      Age: 130,
    },
    {
      ID: 13,
      Name: 'M',
      Age: 140,
    },
    {
      ID: 14,
      Name: 'N',
      Age: 150,
    },
    {
      ID: 15,
      Name: 'O',
      Age: 160,
    },
    {
      ID: 16,
      Name: 'P',
      Age: 170,
    },
    {
      ID: 17,
      Name: 'Q',
      Age: 180,
    },
    {
      ID: 18,
      Name: 'R',
      Age: 190,
    },
    {
      ID: 19,
      Name: 'S',
      Age: 200,
    },
    {
      ID: 20,
      Name: 'T',
      Age: 210,
    },
    {
      ID: 21,
      Name: 'U',
      Age: 220,
    },
    {
      ID: 22,
      Name: 'V',
      Age: 230,
    },
    {
      ID: 23,
      Name: 'W',
      Age: 240,
    },
    {
      ID: 24,
      Name: 'X',
      Age: 250,
    },
  ];
}

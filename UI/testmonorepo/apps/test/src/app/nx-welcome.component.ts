import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'testmonorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
 <div>
  <h5>Test 1</h5>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

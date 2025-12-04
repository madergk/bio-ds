import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-cheatsheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cheatsheet.component.html',
  styleUrls: ['./cheatsheet.component.css']
})
export class CheatsheetComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Simple accordion toggle functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
      button.addEventListener('click', function(this: HTMLElement) {
        const targetId = this.getAttribute('data-bs-target');
        const target = document.querySelector(targetId || '');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Toggle all accordion items
        document.querySelectorAll('.accordion-collapse').forEach(collapse => {
          collapse.classList.remove('show');
        });
        document.querySelectorAll('.accordion-button').forEach(btn => {
          btn.classList.add('collapsed');
          btn.setAttribute('aria-expanded', 'false');
        });

        if (!isExpanded && target) {
          target.classList.add('show');
          this.classList.remove('collapsed');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }
}


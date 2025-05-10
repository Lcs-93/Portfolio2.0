import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-screenshots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-screenshots.component.html',
  styleUrls: ['./modal-screenshots.component.scss']
})
export class ModalScreenshotsComponent {
  @Input() images: string[] = [];
  @Output() close = new EventEmitter<void>();

  current = 0;

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.current = (this.current + 1) % this.images.length;
  }

  closeModal() {
    this.close.emit();
  }
}

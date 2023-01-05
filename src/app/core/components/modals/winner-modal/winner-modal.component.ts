import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-winner-modal',
  templateUrl: './winner-modal.component.html',
  styleUrls: ['./winner-modal.component.scss']
})
export class WinnerModalComponent {

  constructor(
    private dialogRef: MatDialogRef<WinnerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public winner: string
  ) {
  }

  public closeModal(): void {
    this.dialogRef.close(false);
  }

  public restartGame(): void {
    this.dialogRef.close(true);
  }
}

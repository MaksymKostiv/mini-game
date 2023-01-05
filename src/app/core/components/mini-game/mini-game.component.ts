import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {interval, Subscription, takeWhile} from 'rxjs';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {WinnerModalComponent} from "../modals/winner-modal/winner-modal.component";

@Component({
  selector: 'app-mini-game',
  templateUrl: './mini-game.component.html',
  styleUrls: ['./mini-game.component.scss']
})
export class MiniGameComponent implements OnInit {
  public cells: Cell[] = [];
  public playerScore = 0;
  public computerScore = 0;
  public timeControl!: FormControl;
  public timeoutSubscription!: Subscription | null;
  public highlightedCell!: number;
  private gameOver = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
  }

 public ngOnInit(): void {
    this.timeControl = new FormControl(1000)
    this.initializeCells()

  }

  public startGame(): void {
    this.resetScore()
    if (this.gameOver) {
      this.initializeCells()
    }
    const timeLimit: number = this.timeControl.value;
    let previousIdx: number | null = null
    if (!this.timeoutSubscription) {
      this.timeoutSubscription = interval(timeLimit).subscribe(() => {
        this.highlightedCell = Math.floor(Math.random() * 100);
        if (previousIdx) {
          if (!this.cells[previousIdx].userClick) {
            this.cells[previousIdx].color = 'yellow'
            this.computerScore++;
            this.checkScore()
          }
        }
        previousIdx = this.highlightedCell

        this.cells[this.highlightedCell].color = 'red';
        this.cdr.detectChanges()

      });
    }
  }

  public cellClicked(cell: number): void {

    if (cell === this.highlightedCell) {
      this.playerScore++;

      this.cells[cell].color = 'green';
      this.cells[cell].userClick = true;

      this.checkScore()
    }
  }

  private checkScore() {
    if (this.playerScore === 10 || this.computerScore === 10) {
      this.gameOver = true;

      if (this.timeoutSubscription) {
        this.timeoutSubscription.unsubscribe();
        this.timeoutSubscription = null;

      }

      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '370px';
      const winner = this.playerScore > this.computerScore ? "Гравець" : "Комп'ютер";

      const dialogRef = this.dialog.open(WinnerModalComponent, {...dialogConfig, data: winner, })
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.resetScore()
          this.startGame()
        }
      })
    }
  }

  private resetScore(): void {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  private initializeCells() {
    this.cells = [];
    for (let i = 0; i < 100; i++) {
      this.cells.push({
        id: i,
        color: 'blue',
        userClick: false
      });
    }
  }
}


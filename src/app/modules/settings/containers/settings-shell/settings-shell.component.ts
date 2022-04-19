import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { SettingsDialogComponent } from '../../components/settings-dialog/settings-dialog.component';

const avatarList = [
  'assets/avatars/cat400.png',
  'assets/avatars/dog400.png',
  'assets/avatars/bird400.png',
];

@Component({
  selector: 'app-settings-shell',
  templateUrl: './settings-shell.component.html',
  styleUrls: ['./settings-shell.component.scss'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class SettingsShellComponent implements OnInit {

  public dialogRef?: MatDialogRef<SettingsDialogComponent>;
  public currentAvatar: string = '';

  constructor(private _route: Router, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    const index = Math.floor(Math.random()*(avatarList.length));
    this.currentAvatar = avatarList[index];
  }

  openSettings(dataConfig: any): void {
    this.dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '50%'
    })
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const preview = {
      path64: this.convertToBase64(file),
    };

    preview.path64.subscribe((previewFile) => this.currentAvatar = previewFile);

  }

  convertToBase64(file: File): Observable<string> {
    return new Observable((subscriber: Subscriber<string>) => {
      this.readFile(file, subscriber);
    })
  }

  readFile(file: File, subscriber: Subscriber<string | ArrayBuffer>): void {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result || undefined);
      subscriber.complete();
    };
    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

  navigateToHome(): void {
    this._route.navigate(['home']);
  }

  navigateToExit(): void {
    this._route.navigate(['login']);
  }

}

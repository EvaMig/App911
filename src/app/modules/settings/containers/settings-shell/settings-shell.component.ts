import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

const avatarList = [
  'assets/avatars/cat400.png',
  'assets/avatars/dog400.png',
  'assets/avatars/bird400.png',
];

@Component({
  selector: 'app-settings-shell',
  templateUrl: './settings-shell.component.html',
  styleUrls: ['./settings-shell.component.scss']
})
export class SettingsShellComponent implements OnInit {

  public currentAvatar: string = '';

  constructor() { }

  ngOnInit(): void {
    const index = Math.floor(Math.random()*(avatarList.length));
    this.currentAvatar = avatarList[index];
  }

  onFileSelected(event: any): void {
    const files = event.target.files[0];
    console.log(files);
    const preview = {
      path64: this.convertToBase64(files),
    };

    preview.path64.subscribe((x) => this.currentAvatar = x);

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
}

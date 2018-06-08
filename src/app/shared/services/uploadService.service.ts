import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
    constructor (private angularFireStorage: AngularFireStorage) {}
    public uploadFile (path: string, file: File): AngularFireUploadTask {
        return this.angularFireStorage.upload(path + '/' + file.name, file);
    }
}

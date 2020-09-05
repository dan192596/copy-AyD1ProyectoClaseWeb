import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog-usuario',
  templateUrl: './dialog-usuario.component.html',
  styleUrls: ['./dialog-usuario.component.scss']
})
export class DialogUsuarioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}

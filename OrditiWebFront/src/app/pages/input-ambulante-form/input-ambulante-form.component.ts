import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'input-ambulante-form',
  templateUrl: './input-ambulante-form.component.html',
  styleUrls: ['./input-ambulante-form.component.scss']
})
export class InputAmbulanteFormComponent implements OnInit {

  registered = false;
  submitted = false;
  userForm: FormGroup;
  guid: string;
  serviceErrors: any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.http.get('/api/v1/generate_uid').subscribe((data: any) => {
      this.guid = data.guid;
    }, error => {
      console.log("There was an error generating the proper GUID on the server", error);
    });
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
      local: ['', []],
      produto: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  invalidName() {
    return (this.submitted && (this.serviceErrors.nome != null || this.userForm.controls.name.errors != null));
  }

  invalidEmail() {
    return (this.submitted && (this.serviceErrors.email != null || this.userForm.controls.email.errors != null));
  }

  invalidProduto() {
    return (this.submitted && (this.serviceErrors.produto != null || this.userForm.controls.produto.errors != null));
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid == true) {
      return;
    }
    else {
      let data: any = Object.assign({ guid: this.guid }, this.userForm.value);
      console.log(data);

      this.http.post('/api/v1/ambulante', data).subscribe((data: any) => {
        let path = '/ambulante/' + data.ambulante.cpf;
        this.router.navigate([path]);
      }, error => {
        this.serviceErrors = error.error.error;
        console.log(this.serviceErrors);
      });

      this.registered = true;

    }
  }

}

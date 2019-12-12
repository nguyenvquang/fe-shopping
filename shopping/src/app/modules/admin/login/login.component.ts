import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.value.username, this.form.value.password, (data: any) => this.goToHome(data));
      this.authService.getIdToken();
      this.submitEM.emit(this.form.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {

  }

  goToHome(data: any) {
    this.router.navigate(['admin', 'dashboard']);
  }
}

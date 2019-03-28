import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "workout-auth-form",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.css"]
})
export class AuthFormComponent implements OnInit {
  @Output()
  submitted = new EventEmitter<FormGroup>();

  form = this._fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });

  get emailError() {
    const control = this.form.get("email") as AbstractControl;
    return (
      control.touched &&
      (control.hasError("email") || control.hasError("required"))
    );
  }

  get passwordError() {
    const control = this.form.get("password") as AbstractControl;
    return control.touched && control.hasError("required");
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted.emit(this.form);
  }
}

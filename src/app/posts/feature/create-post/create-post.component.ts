import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  #formBuilder = inject(FormBuilder);
  firstFormGroup = this.#formBuilder.group({
    postTitle: ['', Validators.required],
  });
  secondFormGroup = this.#formBuilder.group({
    postBody: ['', Validators.required],
  });

  onSubmit() {
    console.log('Post Title: ' + this.firstFormGroup.value.postTitle);
    console.log('Post Body: ' + this.secondFormGroup.value.postBody);

    this.resetForms();
  }

  private resetForms() {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
  }
}

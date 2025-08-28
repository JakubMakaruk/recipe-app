import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-recipe-steps',
  standalone: true,
  imports: [TranslatePipe, MatIcon, MatCheckbox, ReactiveFormsModule],
  templateUrl: './recipe-steps.component.html',
  styleUrl: './recipe-steps.component.scss',
})
export class RecipeStepsComponent {
  private readonly formBuilder = inject(FormBuilder);

  public readonly steps = input<string[]>([]);

  protected readonly form = signal<FormGroup>(
    this.formBuilder.group({
      stepsArray: this.formBuilder.array<FormControl<boolean>>([]),
    }),
  );

  protected readonly stepsArray = computed(
    () => this.form().get('stepsArray') as FormArray<FormControl<boolean>>,
  );

  constructor() {
    effect(() => {
      const steps = this.steps() ?? [];
      const formArray = this.form().get('stepsArray') as FormArray<
        FormControl<boolean>
      >;

      formArray.clear();
      steps.forEach(() => {
        formArray.push(this.formBuilder.control(false, { nonNullable: true }));
      });
    });
  }
}

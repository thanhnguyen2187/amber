import { DynamicFormGroup } from '../dynamic-form.interfaces';

export function toggleRadioButton(
  {
    dynamicFormGroup,
    controlIndex,
  }: {
    dynamicFormGroup: DynamicFormGroup,
    controlIndex: number,
  }
): void {
  dynamicFormGroup.formControls.forEach(
    (
      dynamicFormControl,
      index,
    ) => {
      dynamicFormControl.value = (
        controlIndex === index
      );
    }
  );
}

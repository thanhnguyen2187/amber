export type DynamicFormControlType =
  'text' |
  'checkbox' |
  'textarea'
;

export type DynamicFormGroupType =
  'textInputs' |
  'checkboxes' |
  'textarea'
;

export interface DynamicFormGroup {
  type: DynamicFormGroupType;
  title: string;
  key: string | number;
  rowsCount: number;
  formControls: DynamicFormControl[];
}

export interface DynamicFormControl {
  type: DynamicFormControlType;
  label: string;
  key: string | number;
  value: string | number | boolean;
}

export function convertDynamicFormGroup(
  dynamicFormGroup: DynamicFormGroup,
): {
  [_: string]: number | string | string[] | {}
} {
  const body: {
    [_: string]: number | string | string[] | {}
  } = {};
  switch (dynamicFormGroup.type) {
    case 'checkboxes':
      body[dynamicFormGroup.key] = dynamicFormGroup.formControls.filter(
        dynamicFormControl => dynamicFormControl.value
      ).map(
        dynamicFormControl => dynamicFormControl.key
      );
      break;
    case 'textInputs':
      body[dynamicFormGroup.key] = {};
      dynamicFormGroup.formControls.forEach(
        dynamicFormControl => {
          // @ts-ignore
          body[dynamicFormGroup.key][dynamicFormControl.key] = dynamicFormControl.value;
        }
      );
      break;
    case 'textarea':
      body[dynamicFormGroup.key] = dynamicFormGroup.formControls[0].value;
      break;
  }
  return body;
}

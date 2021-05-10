export type DynamicFormControlType =
  'text' |
  'checkbox' |
  'textarea' |
  'radio' |
  'blank'
;

export type DynamicFormGroupType =
  'textInputs' |
  'radioInputs' |
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
  const filteredControls = dynamicFormGroup.formControls.filter(
    (dynamicFormControl) => dynamicFormControl.type != 'blank'
  );
  switch (dynamicFormGroup.type) {
    case 'checkboxes':
      body[dynamicFormGroup.key] = filteredControls.filter(
        dynamicFormControl => dynamicFormControl.value
      ).map(
        dynamicFormControl => dynamicFormControl.key
      );
      break;
    case 'textInputs':
      body[dynamicFormGroup.key] = {};
      filteredControls.forEach(
        dynamicFormControl => {
          // @ts-ignore
          body[dynamicFormGroup.key][dynamicFormControl.key] = dynamicFormControl.value;
        }
      );
      break;
    case 'textarea':
      // let the value of the only textarea be corresponded with the key
      body[dynamicFormGroup.key] = dynamicFormGroup.formControls[0].value;
      break;
    case 'radioInputs':
      // let the key of the selected radio be corresponded with the key
      body[dynamicFormGroup.key] = filteredControls.filter(
        (dynamicFormControl) => dynamicFormControl.value
      )[0].key;
      break;
  }
  return body;
}

import { advancedSettingsI, chipGroupFieldsI, generalSettingsI, selectFieldsI } from '../../api/generate-utils'

export interface FormTextInputI {
  name: string
  label: string
  control: any
  required: boolean
  rows: number
}

export interface FormDropdownInputI {
  name: string
  label: string
  control: any
  styleSize: string
  width: string
  setValue?: any
  field: selectFieldsI
  required: boolean
}

export interface FormChipGroupInputI {
  name: string
  label: string
  control: any
  width: string
  setValue?: any
  field?: chipGroupFieldsI
  required: boolean
  disabled?: boolean
}

export interface FormChipGroupMultipleInputI {
  name: string
  label: string
  control: any
  width: string
  setValue?: any
  options?: { value: string; label: string }[]
  required: boolean
}

export interface FormInputGenerateSettingsI {
  control: any
  setValue?: any
  generalSettingsFields: generalSettingsI
  advancedSettingsFields: advancedSettingsI
}

export interface FormInputRadioButtonI {
  label: string
  subLabel: string
  value: string
  currentSelectedValue: string
  enabled: boolean
}

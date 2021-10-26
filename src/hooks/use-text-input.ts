import { useInput } from './use-input';

export const useTextInput = (validate: (value: string) => boolean) => {
  return useInput(validate, '', (dispatch: React.Dispatch<React.SetStateAction<string>>, event) => {
    dispatch((event as React.ChangeEvent<HTMLInputElement>).target.value);
  })
};
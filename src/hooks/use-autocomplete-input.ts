import { useInput } from './use-input';

export const useAutocompleteInput = (validate: (value: string[]) => boolean) => {
  return useInput(validate, [], (dispatch: React.Dispatch<React.SetStateAction<string[]>>, event: React.SyntheticEvent, value: (string | string[])[]) => {
    dispatch(value as string[]);
  })
};
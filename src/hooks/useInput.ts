import { useState, useCallback, ChangeEvent } from 'react';

interface Form {
  [name: string]: string;
}

export const useInput = (initialForm: Form) => {

  const [form, setForm] = useState<Form>(initialForm)

  const onChange = useCallback((
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  return [form, onChange, reset] as const;
}
import { useState, useCallback } from 'react';

interface Form {
  [name: string]: string;
}

type UseInputReturn = [
  Form,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  () => void,
]

export const useInput = (initialForm: Form): UseInputReturn => {
  const [form, setForm] = useState<Form>(initialForm)

  const onChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  return [form, onChange, reset];
}
import { useState, useCallback } from 'react';

interface Form {
  [name: string]: string;
}

type UseInputReturn = [
  Form,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  () => void,
]

export const useInput = (): UseInputReturn => {
  const [form, setForm] = useState<Form>({})

  const onChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }, []);

  const reset = useCallback(() => {
    setForm({});
  }, []);

  return [form, onChange, reset];
}
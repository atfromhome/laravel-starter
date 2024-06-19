/* eslint-disable @typescript-eslint/no-explicit-any */
import { InertiaFormProps } from "@inertiajs/react/types/useForm";
import React, {
  createContext,
  FormEventHandler,
  HTMLAttributes,
  ReactElement,
  useContext
} from "react";

export type FormData = any;

const FormContext = createContext<InertiaFormProps<FormData> | undefined>(undefined);

export type FormProps = HTMLAttributes<HTMLFormElement> & {
  form: InertiaFormProps<FormData>;
};

const Form = (props: FormProps): ReactElement => {
  const { form, ...rest } = props;

  return (
    <FormContext.Provider value={form}>
      <form {...rest} />
    </FormContext.Provider>
  );
};

type FormFieldContextValue = {
  id?: string | undefined;
  name: string;
};

type FormFieldProps = FormFieldContextValue & {
  render: (
    field: {
      name: string;
      value: string | number;
      error?: string;
      invalid?: boolean;
      onChange: (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
    },
    form: InertiaFormProps<FormData>
  ) => React.ReactNode;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = (props: FormFieldProps) => {
  const form = useContext(FormContext);

  if (!form) {
    throw new Error("FormField should be used within <FormProvider>");
  }

  const formValue = form.data[props.name] || "";
  const fieldErrorMessage = form.errors[props.name];
  const invalid = Boolean(fieldErrorMessage);

  const onChange = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    form.setData((prevData: FormData) => ({
      ...prevData,
      [e.target.id || e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    }));
  };

  return (
    <FormFieldContext.Provider value={{ id: props.id, name: props.name }}>
      {props.render(
        { name: props.name, value: formValue, error: fieldErrorMessage, invalid, onChange },
        form
      )}
    </FormFieldContext.Provider>
  );
};

export { Form, FormField, FormContext, FormFieldContext };

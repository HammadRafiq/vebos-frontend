// form
import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

export function FormProvider({ children, onSubmit, methods }: any) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}

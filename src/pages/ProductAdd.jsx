import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  // Yup dogrulama yapmamizi saglar.
  const schema = Yup.object({
    productName: Yup.string().required("Product name is required."),
    unitPrice: Yup.number().required("Unit price is required."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="productName" placeholder="Product Name" />
        <KodlamaIoTextInput name="unitPrice" placeholder="Unit Price" />
        <Button color="green" type="submit">
          Add to Products
        </Button>
      </Form>
    </Formik>
  );
}

// KodlamaIoTextInput.jsx ile tek satir hale getirdigimiz kisim.

/* <FormField>
        <Field name="productName" placeholder="Product Name"></Field>
        <ErrorMessage
          name="productName"
          render={(error) => (
            <Label pointing basic color="red" content={error}></Label>
          )}
        ></ErrorMessage>
   </FormField> 
*/

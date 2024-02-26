import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const FeedbackSchema = Yup.object().shape({
    contact: Yup.object().shape({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    }),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.contact.name,
      number: values.contact.number,
    };
    actions.resetForm();
    if (onAddContact) {
      onAddContact(newContact);
    }
  };

  return (
    <Formik
      initialValues={{ contact: { name: "", number: "" } }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.formContainer}>
        <div className={styles.formField}>
          <label htmlFor="contact.name" className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            name="contact.name"
            placeholder="Name"
            className={styles.inputField}
          />
          <ErrorMessage
            name="contact.name"
            component="div"
            className={styles.errorMessage}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="contact.number" className={styles.label}>
            Number
          </label>
          <Field
            type="text"
            name="contact.number"
            placeholder="Number"
            className={styles.inputField}
          />
          <ErrorMessage
            name="contact.number"
            component="div"
            className={styles.errorMessage}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

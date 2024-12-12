import { Form, Formik } from "formik";
import { InputHandler } from "./InputHandler";
import { SubmitBtn } from "./SubmitBtn";
import * as Yup from "yup";
import { get } from "lodash";
import { CustomerFormProps } from "../Types";
import { API } from "../Api";
import { toast } from "react-toastify";

export const CustomerForm: React.FC<CustomerFormProps> = ({
  setIsSubmitted,
  setCardData,
}) => {
  const validationSchema = Yup.object({
    Name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(30, "Name cannot exceed 30 characters"),

    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    Phone: Yup.string()
      .matches(
        /^\+2(010|011|012|015)[0-9]{8}$/,
        "Phone number must be an Egyptian phone number"
      )
      .required("Phone number is required"),

    BillingAddress: Yup.string()
      .min(5, "Billing address must be at least 5 characters long")
      .required("Billing address is required"),

    CardType: Yup.string()
      .oneOf(
        ["physical", "virtual"],
        "Card type must be either physical or virtual"
      )
      .required("Card type is required"),

    ShippingAddress: Yup.string().when("CardType", {
      is: "physical",
      then: (schema: any) => schema.required("Shipping address is required"),
      otherwise: (schema: any) => schema.notRequired().nullable(),
    }),
  });

  async function handleCardInfo(data: {}) {
    try {
      const response = await API.post("/IssueCard/issue-complete", data);
      setCardData(response.data);
    } catch (error: any) {
      console.log(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
    }
  }

  const handleSubmit = async (values: {}) => {
    try {
      await handleCardInfo(values);
      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(false);
    }
  };

  return (
    <Formik
      initialValues={{}}
      validateOnBlur
      validateOnChange
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(formikProps) => (
        <Form>
          <InputHandler
            name="Name"
            id="Name"
            label="Name"
            placeholder="ex. Ahmed Sabbah"
          />
          <InputHandler
            name="Email"
            id="Email"
            label="Email"
            type="email"
            placeholder="ex. example@gmail.com"
          />
          <InputHandler
            name="Phone"
            id="Phone"
            label="Phone"
            placeholder="+201034567890"
          />
          <InputHandler
            name="BillingAddress"
            id="BillingAddress"
            label="Billing Address"
            placeholder="123 Main St"
          />
          <InputHandler
            name="CardType"
            id="CardType"
            label="Card Type"
            type="select"
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="physical">Physical</option>
            <option value="virtual">Virtual</option>
          </InputHandler>
          {get(formikProps.values, "CardType") === "physical" && (
            <InputHandler
              name="ShippingAddress"
              id="ShippingAddress"
              label="Shipping Address"
              placeholder="Enter your shipping address"
            />
          )}
          <SubmitBtn
            disabled={formikProps.isSubmitting}
            color="primary"
            btnTxt={formikProps.isSubmitting ? "Submitting..." : "Submit"}
          />
        </Form>
      )}
    </Formik>
  );
};

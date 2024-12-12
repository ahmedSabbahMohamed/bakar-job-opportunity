import { useFormikContext } from "formik";
import { Label, Input } from "reactstrap";
import { InputHandlerProps } from "../Types";
import { get } from "lodash";

export const InputHandler: React.FC<InputHandlerProps> = ({
  label,
  id,
  name,
  type = "text",
  disabled = false,
  onChangeInput,
  className = "mb-3",
  inputClassName = "",
  ...props
}) => {
  const { touched, errors, values, handleBlur, setFieldValue, submitCount } =
    useFormikContext<any>();

  const error =
    (!!get(errors, name, false) && submitCount > 0) ||
    (!!get(touched, name, false) && !!get(errors, name, false));
  const errorMessage = get(errors, name, false);

  return (
    <div className={className}>
      {label && (
        <Label className="text-white fw-bold mb-0" htmlFor={id}>
          {label}
        </Label>
      )}
      <Input
        {...props}
        id={id}
        name={name}
        type={type}
        className={`rounded ${inputClassName}`}
        invalid={error}
        value={get(values, name, "")}
        disabled={disabled}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
          if (onChangeInput && typeof onChangeInput === "function") {
            onChangeInput(e);
          }
        }}
        onBlur={handleBlur}
      />
      {error && (
        <small className="text-danger fw-bold d-flex w-100 m-0">
          {typeof errorMessage === "string" && errorMessage}
        </small>
      )}
    </div>
  );
};

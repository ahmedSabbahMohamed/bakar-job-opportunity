import { InputType } from "reactstrap/types/lib/Input";

export type InputHandlerProps = {
  label?: string;
  id: string;
  name: string;
  type?: InputType;
  disabled?: boolean;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  [key: string]: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type SubmitBtnProps = {
  btnTxt: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type CardInfoProps = {
  data: {
    cvc?: string;
    brand: string;
    expiryMonth: number;
    expiryYear: number;
    last4: string;
  } | null;
};

export type FormContainerProps = {
  form: React.ReactNode;
};

export type CustomerFormProps = {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setCardData: React.Dispatch<React.SetStateAction<any>>;
};

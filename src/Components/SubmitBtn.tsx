import { Button } from "reactstrap";
import { SubmitBtnProps } from "../Types";

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ btnTxt, onClick, ...props }) => {
  return (
    <Button className="w-100 mt-3 fw-bold" onClick={onClick} type="submit" {...props}>
      {btnTxt}
    </Button>
  );
};

import { CardInfoProps } from "../Types";
import cardImg from "../assets/images/card.png";

export const CardInfo: React.FC<CardInfoProps> = ({ data }) => {

  return (
    <div className="position-relative px-md-2">
      <img src={cardImg} className="w-100 h-auto" />
      <span
        style={{ top: "28%", right: "10%" }}
        className="position-absolute text-white fs-4"
      >
        {data?.cvc}
      </span>
      <span
        style={{ top: "70%", left: "5%" }}
        className="text-white position-absolute fs-2"
      >
        **** **** **** {data?.last4}
      </span>
      <span
        style={{ top: "85%", left: "5%" }}
        className="text-white position-absolute fs-4"
      >
        {data?.brand}
      </span>
      <span
        style={{ top: "85%", left: "45%" }}
        className="text-white position-absolute fs-4"
      >
        {data?.expiryMonth} / {data?.expiryYear}
      </span>
    </div>
  );
};

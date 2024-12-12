import congratsImg from "../assets/images/congrats.png";

export const Congrats = () => {
  return (
    <div className="text-center text-md-start order-2 order-md-1 ms-auto">
      <img
        src={congratsImg}
        alt="complete-icon"
        style={{ width: "200px", height: "200px" }}
      />
      <h2 className="text-success fw-bold">Congratulations</h2>
      <p className="text-black-50 fw-bold fs-3">
        We've added your card details
      </p>
    </div>
  );
};

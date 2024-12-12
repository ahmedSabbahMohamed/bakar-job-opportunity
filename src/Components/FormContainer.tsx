import customerBg from "../assets/images/customer-bg.jpg";
import { FormContainerProps } from "../Types";

export const FormContainer: React.FC<FormContainerProps> = ({ form }) => {
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center py-4"
      style={{
        backgroundImage: `url(${customerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="rounded shadow p-4 mx-2 mx-md-0"
        style={{
          maxWidth: "100%",
          width: "400px",
          backgroundColor: "#FFFFFF1A",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-primary fw-bold mb-4">Customer Info</h1>
        {form}
      </div>
    </div>
  );
};

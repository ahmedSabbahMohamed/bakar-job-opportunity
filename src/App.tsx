import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { Case, Default, Switch } from "react-if";
import { FormContainer } from "./Components/FormContainer";
import { CustomerForm } from "./Components/CustomerForm";
import { Col, Row } from "reactstrap";
import { Congrats } from "./Components/Congrats";
import { CardInfo } from "./Components/CardInfo";
import { Confetti } from "./Components/Confetti";
import { CardInfoProps } from "./Types";
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cardData, setCardData] = useState<CardInfoProps['data'] | null>(null);
  return (
    <Switch>
      <Default>
        <FormContainer
          form={
            <CustomerForm
              setIsSubmitted={setIsSubmitted}
              setCardData={setCardData}
            />
          }
        />
      </Default>
      <Case condition={isSubmitted && cardData !== null}>
        <Row className="min-vh-100 m-0 align-items-center px-3">
          <Col
            md={5}
            sm={12}
            className="text-center text-md-start order-2 order-md-1 ms-auto"
          >
            <Congrats />
          </Col>
          <Col md={6} sm={12} className="order-1 order-md-2">
            <CardInfo data={cardData} />
          </Col>
          <Confetti />
        </Row>
      </Case>
    </Switch>
  );
}

export default App;

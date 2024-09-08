// ** React Imports
import { Fragment } from "react";
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import PickerDateTime from "./PickerDateTime";

const Pickers = () => {
  return (
    <Col md="4" sm="12" className="mb-1">
      {/* <PickerDefault /> */}
      <PickerDateTime />
    </Col>
  );
};
export default Pickers;

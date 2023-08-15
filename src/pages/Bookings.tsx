import Heading from "@/ui/Heading";
import Row from "@/ui/Row";

interface BookingsProps {}

const Bookings: React.FC<BookingsProps> = ({}) => {
  return (
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <p>TEST</p>
    </Row>
  );
};

export default Bookings;

import Heading from "@/ui/Heading";
import Row from "@/ui/Row";

interface CabinsProps {}

const Cabins: React.FC<CabinsProps> = ({}) => {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
};

export default Cabins;

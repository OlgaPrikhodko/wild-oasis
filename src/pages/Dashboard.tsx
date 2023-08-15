import Heading from "@/ui/Heading";
import Row from "@/ui/Row";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
    </Row>
  );
};

export default Dashboard;

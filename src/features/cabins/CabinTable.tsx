import { useSearchParams } from "react-router-dom";

import CabinRow from "./CabinRow";
import Menus from "@/ui/Menus";
import Spinner from "@/ui/Spinner";
import Table from "@/ui/Table";

import { useCabins } from "./useCabins";
import { CabinType } from "@/types/supabase.types";

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins: CabinType[] = [];
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((item) => item.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((item) => item.discount !== 0);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCabins}
          render={(cabin: CabinType) => (
            <CabinRow cabin={cabin} key={cabin.id} />
          )}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;

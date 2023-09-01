import { useSearchParams } from "react-router-dom";
import Select from "./form/Select";

export type OptionType = { value: string; label: string };

type SortFieldProps = {
  options: OptionType[];
};

function SortBy({ options }: SortFieldProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;

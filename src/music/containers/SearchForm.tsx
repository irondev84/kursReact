import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

type Props = { onSearch: (keyword: string) => void };

const SearchForm = ({ onSearch }: Props) => {
  const [queryDraft, setQueryDraft] = useState("");

  return (
    <div>
      <div>
        <div className="p-inputgroup flex-1">
          <InputText
            placeholder="Search albums"
            value={queryDraft}
            onChange={(e) => setQueryDraft(e.target.value)}
          />
          <Button onClick={() => onSearch(queryDraft)}>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

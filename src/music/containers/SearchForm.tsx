import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useEffect, useRef, useState } from "react";

type Props = { onSearch: (keyword: string) => void };

const SearchForm = ({ onSearch }: Props) => {
  const [queryDraft, setQueryDraft] = useState("");

  const prevHandler = useRef<number>();

  useEffect(() => {
    clearTimeout(prevHandler.current);

    prevHandler.current = setTimeout(() => {
      console.log(queryDraft);
    }, 500);
  }, [queryDraft]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(queryDraft);
      }}
    >
      <div>
        <div className="p-inputgroup flex-1">
          <InputText
            placeholder="Search albums"
            value={queryDraft}
            onChange={(e) => setQueryDraft(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useEffect, useRef, useState } from "react";

type Props = { onSearch: (keyword: string) => void };

const SearchForm = ({ onSearch }: Props) => {
  const [queryDraft, setQueryDraft] = useState("");

  useEffect(() => {
    if (queryDraft === "") return;

    const prevHandler = setTimeout(() => {
      console.log("search", queryDraft);
    }, 500);

    return () => clearTimeout(prevHandler);
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

import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

type Props = {};

const SearchForm = (props: Props) => {

  

  return (
    <div>
      <div>
        <div className="p-inputgroup flex-1">
          <InputText placeholder="Keyword" />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

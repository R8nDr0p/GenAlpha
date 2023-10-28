import React from "react";
import Input from "../../shared/components/FormElements/Input";

function NewPlace() {
  return (
      <>
          <h1>New places page is here</h1>
          <form className={"place-form list-none mx-auto p-4 w-[90%] max-w-[40rem] shadow-xl rounded bg-amber-100"}>
              <Input element={'input'} type="text" label={'Title'} />
          </form>
      </>
  );
}

export default NewPlace;

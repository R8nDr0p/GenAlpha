import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/Validators";
import { useForm } from "../../shared/hooks/form-hook";

function NewPlace() {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false,
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <form
        onSubmit={placeSubmitHandler}
        className={
          "place-form list-none mx-auto p-4 w-[90%] max-w-[40rem] shadow-xl rounded bg-amber-100"
        }
      >
        <Input
          id={"title"}
          element={"input"}
          type="text"
          label={"Title"}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a valid title"}
          onInput={inputHandler}
        />
        <Input
          id={"description"}
          element={"textarea"}
          type="Description"
          label={"Description"}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText={
            "Please enter a valid description (at least 5 characters)."
          }
          onInput={inputHandler}
        />
        <Input
          id={"address"}
          element={"input"}
          type="Address"
          label={"Address"}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a valid Address."}
          onInput={inputHandler}
        />
        <Button type={"submit"} disabled={!formState.isValid}>
          Add Place
        </Button>
      </form>
    </>
  );
}

export default NewPlace;

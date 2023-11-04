import React, { useCallback, useReducer } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/Validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputsKey) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};
function NewPlace() {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
    isValid: false,
  });
  const InputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

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
          onInput={InputHandler}
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
          onInput={InputHandler}
        />
        <Input
          id={"address"}
          element={"input"}
          type="Address"
          label={"Address"}
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Please enter a valid Address."}
          onInput={InputHandler}
        />
        <Button type={"submit"} disabled={!formState.isValid}>
          Add Place
        </Button>
      </form>
    </>
  );
}

export default NewPlace;

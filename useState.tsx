import React, { useState } from "react";

function PickName() {
  const [name, setName] = useState("red");

  return (
    <>
      <h1>My name is {name}!</h1>
      <button
        type="button"
        onClick={() => setName("foo")}
      >Foo</button>
      <button
        type="button"
        onClick={() => setName("bar")}
      >Bar</button>
      <button
        type="button"
        onClick={() => setName("baz")}
      >Baz</button>
    </>
  );
}

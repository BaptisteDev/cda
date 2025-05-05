import React from "react";
import { render } from "@testing-library/react";
import { AuthContext } from "../../context/AuthContext";
import AuthProvider from "../../components/providers/AuthProvider";

describe("Unit  - AuthProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("initialise user à null si local storage est vide", () => {
    let ctx;
    const Consumer = () => {
      ctx = React.useContext(AuthContext);
      return null;
    };

    render(
      <AuthProvider>
        <Consumer></Consumer>
      </AuthProvider>
    );

    expect(ctx.user).toBeNull();
  });
});

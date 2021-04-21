import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "../Button";

describe('<BigName />', () => {
    it('build test', () => {
        render(<Button>sdf</Button>)
        expect(screen.getByText("component")).toBeDefined()
    })
})

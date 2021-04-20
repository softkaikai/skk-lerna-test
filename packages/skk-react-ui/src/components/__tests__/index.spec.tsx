import React from "react";
import { render, screen } from "@testing-library/react";

import { BigName } from "../BigName";

describe('<BigName />', () => {
    it('build test', () => {
        render(<BigName />)
        expect(screen.getByText("component")).toBeDefined()
    })
})

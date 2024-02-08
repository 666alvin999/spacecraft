import { render, screen } from "@testing-library/react-native";

import { Header } from "../src/component";

describe("Header", () => {
    it("renders correctly", () => {
        render(Header());

        expect(screen.getByText("SPACECRAFT")).toBeVisible();
    });
});

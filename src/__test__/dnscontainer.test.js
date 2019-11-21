import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DNSContainer from "../dnscontainer/dnscontainer";
import Image from "../dnscontainer/image/image";

describe("DNS Container Test", () => {
  test("Require container ref, width and height", async () => {
    const container = render(
      <DNSContainer>
        <Image />
      </DNSContainer>
    );
  });
});

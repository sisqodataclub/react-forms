import { Outlet } from "react-router";
import { PageTitle } from "../components/PageTitle";

export default function ServicesLayout() {
  return (
    <section>
      <PageTitle title="Our Services" />

      {/* Child routes render here */}
      <Outlet />
    </section>
  );
}

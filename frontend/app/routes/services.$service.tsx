import { Navigate, useParams } from "react-router-dom";
import DynamicServicePage from "../components/landing/dynamic";
import { servicesContent } from "../components/landing/servicesContent";

export default function ServiceRoute() {
  const { service } = useParams<{ service: string }>();

  if (!service || !servicesContent[service]) {
    return <Navigate to="/404" replace />;
  }

  return <DynamicServicePage {...servicesContent[service]} />;
}

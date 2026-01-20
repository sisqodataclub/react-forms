"use client";

import { useParams, Navigate } from "react-router-dom";
import DeepCleaningContent from "../components/landing/dynamic";
import { servicesContent } from "../components/landing/servicesContent";

export default function ServicePage() {
  const { service } = useParams();

  if (!service || !servicesContent[service as keyof typeof servicesContent]) {
    return <Navigate to="/404" replace />;
  }

  const content = servicesContent[service as keyof typeof servicesContent];

  return <DeepCleaningContent {...content} />;
}

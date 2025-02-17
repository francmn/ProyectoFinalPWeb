import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="contenedor" id="error-page">
      <h1>Ups!</h1>
      <p>Un error inexperado ha ocurrido.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
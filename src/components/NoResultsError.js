export const NoResultsError = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <p>
        {" "}
        ¡Ups, no encontramos algún producto, intenta escribir otra palabra!{" "}
      </p>
      <img
        alt=""
        src="https://storage.googleapis.com/us.artifacts.almalevisol.appspot.com/thread-26485642-14143258703243306071.png"
        style={{ width: "60%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

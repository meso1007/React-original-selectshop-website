import React from "react";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "bold",
          letterSpacing: "4px",
          margin: 0,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Sorry, the page you're looking for
        <br />
        doesn't exist.
      </p>
      <a
        href="/"
        style={{
          marginTop: "30px",
          display: "inline-block",
          padding: "10px 20px",
          fontSize: "1rem",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#1a1a1a",
          backgroundColor: "#fff",
          borderRadius: "5px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#eaeaea")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
      >
        Back to Home
      </a>
    </div>
  );
}

export default NotFound;

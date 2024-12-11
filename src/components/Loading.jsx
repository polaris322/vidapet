// components/Loading.js
export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: 1050, // Bootstrap z-index for modals
      }}
    >
      <div>
        <img
          src="/assets/logo/ANIMADO/IMG_8027.gif"
          alt="Loading..."
          style={{ width: "100px", height: "100px" }}
        />
        <p className="text-center mt-3">Loading...</p>
      </div>
    </div>
  );
}

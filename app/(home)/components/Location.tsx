import Image from "next/image";

export default function Location() {
  const LocationIcon = () => {
    return (
      <Image
        src="/images/location-pin.svg"
        alt="location icon"
        width="25"
        height="25"
        draggable={false}
      />
    )
  };

  return (
    <div style={{ display: "flex", gap: 10, color: "var(--color-light-2)" }}>
      <LocationIcon />
      <div style={{ margin: "auto 0" }}>
        <span>San Francisco, CA</span>
      </div>
    </div>
  );
}
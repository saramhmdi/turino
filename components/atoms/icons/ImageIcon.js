import Image from "next/image";

function ImageIcon({ iconName, className , type = "svg" }) {
  return (
    <Image
      src={`/images/${iconName}.${type}`}
      alt={iconName}
      className={className}
      width={300}
      height={300}
    />
  );
}

export default ImageIcon;

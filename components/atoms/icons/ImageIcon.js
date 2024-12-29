import Image from "next/image";

function ImageIcon({ iconName, className, type = "svg", color }) {
  return (
    <Image
      src={`/images/${iconName}.${type}`}
      alt={iconName}
      className={className}
      width={300}
      style={{ color: color }}
      height={300}
    />
  );
}

export default ImageIcon;

import Image from "next/image";

function ImageIcon({ iconName, className }) {
  return (
    <Image
      src={`/images/${iconName}.svg`}
      alt={iconName}
      className={className}
      width={300}
      height={300}
    />
  );
}

export default ImageIcon;

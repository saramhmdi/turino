import Image from "next/image";

function Picture({ path, title, className }) {
  return (
    <Image
      src={path}
      alt="image"
      className={className}
      width={300}
      height={300}
    />
  );
}

export default Picture;

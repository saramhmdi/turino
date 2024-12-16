import Link from "next/link";

function TurinoCustomerServicesLinks({ items, title }) {
  return (
    <div className="text-text ">
      <p className="font-semibold	text-[22px] py-4 md:text-2xl	">{title}</p>
      <ul>
        {items.map((item) => (
          <li className="font-normal text-base md:text-xl	" key={item.link}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TurinoCustomerServicesLinks;

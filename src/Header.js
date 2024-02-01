import HeaderData from "./HeaderData";

const glassData = [
  {
    name: "View all",
    photoName: "images/head1.jpg",
  },
  {
    name: "2024 Collection",
    photoName: "images/head6.jpg",
  },
  {
    name: "BOLD Collection",
    photoName: "images/head7.jpg",
  },
  {
    name: "Bestsellers",
    photoName: "images/head4.jpg",
  },
  {
    name: "Gifts",
    photoName: "images/head5.jpg",
  },
  {
    name: "Tinted Lenses",
    photoName: "images/head2.jpg",
  },
  {
    name: "Square",
    photoName: "images/head3.jpg",
  },
  {
    name: "Oval",
    photoName: "images/head8.jpg",
  },
  {
    name: "Goggles",
    photoName: "images/head9.jpg",
  },
];

function Header() {
  return (
    <div className="header">
      {glassData.map((glass) => (
        <HeaderData glassObj={glass} />
      ))}
    </div>
  );
}

export default Header;

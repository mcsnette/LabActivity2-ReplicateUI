import GlassesItem from "./GlassesItem";

const glassItem = [
  {
    name: "Benven G13",
    photoName: "images/glass1.jpg",
    price: "P17,000",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "Benven GR7",
    photoName: "images/glass2.jpg",
    price: "P17,000",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "Molta BRC11",
    photoName: "images/glass3.jpg",
    price: "P16,000",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Molta YC9",
    photoName: "images/glass4.jpg",
    price: "P16,000",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Void 01",
    photoName: "images/glass5.jpg",
    price: "P17,000",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Void GC10",
    photoName: "images/glass6.jpg",
    price: "P17,000",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Kiko 01",
    photoName: "images/glass7.jpg",
    price: "P17,300",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Kiko GR7",
    photoName: "images/glass8.jpg",
    price: "P17,300",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Dada 01(G)",
    photoName: "images/glass9.jpg",
    price: "P17,000",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Dada RC6",
    photoName: "images/glass10.jpg",
    price: "P17,000",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Dada BRC11",
    photoName: "images/glass11.jpg",
    price: "P17,000",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Hovo Y5",
    photoName: "images/glass12.jpg",
    price: "P15,000",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "Hovo 01(B)",
    photoName: "images/glass13.jpg",
    price: "P15,000",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "Musee YC8",
    photoName: "images/glass14.jpg",
    price: "P14,680",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "Amber GDC1",
    photoName: "images/glass15.jpg",
    price: "P14,140",
    color: "+3 colors",
    reaction: "M",
  },
  {
    name: "Tam 01(G)",
    photoName: "images/glass16.jpg",
    price: "P13,160",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "Heizer KC6",
    photoName: "images/glass17.jpg",
    price: "P13,650",
    color: "+5 colors",
    reaction: "M",
  },
  {
    name: "Helix GR4",
    photoName: "images/glass18.jpg",
    price: "P14,140",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "July 01",
    photoName: "images/glass19.jpg",
    price: "P14,680",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "Tambu 01",
    photoName: "images/glass20.jpg",
    price: "P15,660",
    color: "+6 colors",
    reaction: "M",
  },
  {
    name: "Lilit 01(K)",
    photoName: "images/glass21.jpg",
    price: "P13,160",
    color: "+6 colors",
    reaction: "M",
  },
  {
    name: "Lilit 01",
    photoName: "images/glass22.jpg",
    price: "P13,160",
    color: "+6 colors",
    reaction: "M",
  },
  {
    name: "Nada WC3",
    photoName: "images/glass23.jpg",
    price: "P14,680",
    color: "+4 colors",
    reaction: "M",
  },
  {
    name: "Palette 01 Small",
    photoName: "images/glass24.jpg",
    price: "P13,700",
    color: "+1 colors",
    reaction: "M",
  },
];

function Glasses() {
  return (
    <div>
      <div className="glasses-front">
        <p id="sunglasses">Sunglasses / Gifts (24)</p>
        <p>Quick View</p>
        <p>Filter</p>
      </div>
      <div className="glasses">
        {glassItem.map((glass) => (
          <GlassesItem key={glass.name} glassObj={glass} />
        ))}
      </div>
    </div>
  );
}

export default Glasses;

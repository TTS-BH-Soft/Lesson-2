import Phone from "../assets/Contact/phone.svg";
import MapMarker from "../assets/Contact/map-marker.svg";
import MailBulk from "../assets/Contact/mail-bulk.svg";

const contactData = [
  {
    id: 1,
    image: MapMarker,
    title: "Address",
    content: "101 Baker Street, NY",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    hasShadow: false,
  },
  {
    id: 2,
    title: "Phone",
    image: Phone,
    content: "+896 120 5889",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    hasShadow: true,
  },
  {
    id: 3,
    title: "Mail",
    image: MailBulk,
    content: "mail@company.com",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    hasShadow: false,
  },
];

export default contactData;

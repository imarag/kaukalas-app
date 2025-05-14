import services1Image from "../images/services1.jpg";
import services2Image from "../images/services2.jpg";
import services3Image from "../images/services3.jpg";

export default [
    {
        title: {
            gr: "Χημική Ισορροπία",
            en: "Chemical Balance",
        },
        description: {
            gr: "Έλεγχος και ρύθμιση των χημικών στοιχείων της πισίνας, όπως το χλώριο και το pH.",
            en: "Checking and adjusting the chemical elements of the pool, such as chlorine and pH.",
        },
        imageURL: services1Image,
        imageAlt: "Testing and adjusting chlorine and pH levels in a pool",
    },
    {
        title: {
            gr: "Καθαρισμός Πισίνας",
            en: "Pool Cleaning",
        },
        description: {
            gr: "Καθαρισμός της γραμμής του νερού στην επιφάνεια της πισίνας για την απομάκρυνση των ελαιωδών υπολειμμάτων.",
            en: "Cleaning the water line on the surface of the pool to remove oily residues.",
        },
        imageURL: services2Image,
        imageAlt: "Technician cleaning the water line of a pool",
    },
    {
        title: {
            gr: "Καθαρισμός Φίλτρων",
            en: "Filter Cleaning",
        },
        description: {
            gr: "Έλεγχος και καθαρισμός των φίλτρων της πισίνας για να διασφαλιστεί η σωστή λειτουργία τους.",
            en: "Checking and cleaning the pool filters to ensure their proper functioning.",
        },
        imageURL: services3Image,
        imageAlt: "Cleaning pool filters for proper water circulation",
    },
];

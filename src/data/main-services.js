import services1Image from "../images/service1-pool-cleaning-equipment.jpg";
import services2Image from "../images/service2-pool-cleaning-interior.jpg";
import services3Image from "../images/service3-water-cleaning.jpg";

export default [
    {
        title: {
            el: "Χημική Ισορροπία",
            en: "Chemical Balance",
        },
        description: {
            el: "Έλεγχος και ρύθμιση των χημικών στοιχείων της πισίνας, όπως το χλώριο και το pH.",
            en: "Checking and adjusting the chemical elements of the pool, such as chlorine and pH.",
        },
        url: services1Image,
        alt: "Testing and adjusting chlorine and pH levels in a pool",
    },
    {
        title: {
            el: "Καθαρισμός Πισίνας",
            en: "Pool Cleaning",
        },
        description: {
            el: "Καθαρισμός της γραμμής του νερού στην επιφάνεια της πισίνας για την απομάκρυνση των ελαιωδών υπολειμμάτων.",
            en: "Cleaning the water line on the surface of the pool to remove oily residues.",
        },
        url: services2Image,
        alt: "Technician cleaning the water line of a pool",
    },
    {
        title: {
            el: "Καθαρισμός Φίλτρων",
            en: "Filter Cleaning",
        },
        description: {
            el: "Έλεγχος και καθαρισμός των φίλτρων της πισίνας για να διασφαλιστεί η σωστή λειτουργία τους.",
            en: "Checking and cleaning the pool filters to ensure their proper functioning.",
        },
        url: services3Image,
        alt: "Cleaning pool filters for proper water circulation",
    },
];

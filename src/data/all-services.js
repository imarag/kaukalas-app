import LeavesCleaning from "../images/leaves-cleaning.webp";
import PoolCleaningEquipment4 from "../images/pool-cleaning-equipment4.jpg";
import PoolCleaningEquipment5 from "../images/service3-water-cleaning.jpg";

import PoolChemical1 from "../images/pool-chemical1.jpg";
import PoolChemical2 from "../images/pool-chemical.jpg";

import PoolFilter1 from "../images//pool-filter.jpg";
import PoolFilter2 from "../images//pool-filter2.jpg";

import PoolCleaningEquipment1 from "../images/pool-cleaning-equipment.jpg";
import PoolCleaningEquipment2 from "../images/pool-cleaning-equipment2.jpg";
import PoolCleaningEquipment3 from "../images/pool-cleaning-equipment3.jpg";

import PoolCover from "../images/pool-cover.jpg";
import PoolCover2 from "../images/pool-cover2.jpg";
import PoolFishNet from "../images/clean-pool-fish-net.jpg"



export default [
    {
        title: {
            gr: "Τακτικός καθαρισμός πισίνας",
            en: "Regular Pool Cleaning",
        },
        description: {
            gr: "Ο τακτικός καθαρισμός της πισίνας εξασφαλίζει καθαρό και ασφαλές νερό.",
            en: "Regular pool cleaning ensures clean and safe water.",
        },
        tags: {
            gr: [
                "Απομάκρυνση φύλλων, σκόνης και υπολειμμάτων από την επιφάνεια",
                "Έλεγχος και διατήρηση της σωστής κυκλοφορίας του νερού",
                "Ρύθμιση της χημικής ισορροπίας του νερού",
            ],
            en: [
                "Removing leaves, dust, and debris from the surface",
                "Ensuring proper water circulation",
                "Adjusting the chemical balance of the water",
            ],
        },
        images: [
            { url: LeavesCleaning, alt: "Καθαρισμός επιφάνειας πισίνας / Pool surface cleaning" },
            { url: PoolCleaningEquipment4, alt: "Κυκλοφορία νερού / Water circulation" },
            { url: PoolCleaningEquipment5, alt: "Έλεγχος ποιότητας νερού / Water quality check" },
        ],
    },
    {
        title: {
            gr: "Χημική εξισορρόπηση νερού",
            en: "Chemical Water Balancing",
        },
        description: {
            gr: "Απαραίτητη για την υγεία και ασφάλεια των κολυμβητών.",
            en: "Essential for swimmer health and safety.",
        },
        tags: {
            gr: [
                "Μέτρηση και ρύθμιση του pH",
                "Έλεγχος και προσαρμογή αλκαλικότητας",
                "Διατήρηση σωστών επιπέδων χλωρίου",
            ],
            en: [
                "Measuring and adjusting pH levels",
                "Checking and adjusting alkalinity",
                "Maintaining proper chlorine levels",
            ],
        },
        images: [
            { url: PoolChemical1, alt: "Έλεγχος pH νερού / pH water testing" },
            { url: PoolChemical2, alt: "Προσθήκη χημικών / Chemical dosing" },
        ],
    },
    {
        title: {
            gr: "Συντήρηση φίλτρων πισίνας",
            en: "Pool Filter Maintenance",
        },
        description: {
            gr: "Βελτιστοποίηση λειτουργίας των φίλτρων και παράταση ζωής τους.",
            en: "Optimize filter performance and extend lifespan.",
        },
        tags: {
            gr: [
                "Καθαρισμός φίλτρων από ρύπους",
                "Αφαίρεση μικροοργανισμών",
                "Έλεγχος της λειτουργίας του συστήματος",
            ],
            en: [
                "Cleaning filters from debris",
                "Removing microorganisms",
                "Checking system functionality",
            ],
        },
        images: [
            { url: PoolFilter1, alt: "Φίλτρο πισίνας / Pool filter" },
            { url: PoolFilter2, alt: "Καθαρισμός φίλτρου / Filter cleaning" },
        ],
    },
    {
        title: {
            gr: "Καθαρισμός πυθμένα και τοιχωμάτων",
            en: "Bottom and Wall Cleaning",
        },
        description: {
            gr: "Για υγιεινή και καθαρή πισίνα χωρίς άλγες και άλατα.",
            en: "Keeps the pool clean and free of algae and scale.",
        },
        tags: {
            gr: [
                "Καθαρισμός άλγης και αλάτων",
                "Χρήση επαγγελματικού εξοπλισμού",
                "Απολύμανση πυθμένα και τοιχωμάτων",
            ],
            en: [
                "Removing algae and scale",
                "Using professional equipment",
                "Sanitizing bottom and walls",
            ],
        },
        images: [
            { url: PoolCleaningEquipment1, alt: "Άλγες στον πυθμένα / Algae in pool bottom" },
            { url: PoolCleaningEquipment2, alt: "Καθαρισμός τοιχωμάτων / Wall scrubbing" },
            { url: PoolCleaningEquipment3, alt: "Εργαλεία καθαρισμού πισίνας / Pool cleaning tools" },
        ],
    },
    {
        title: {
            gr: "Καθαρισμός αντλιών και σωληνώσεων",
            en: "Pump and Pipe Cleaning",
        },
        description: {
            gr: "Πρόληψη φραγών και διασφάλιση καλής κυκλοφορίας.",
            en: "Prevent clogs and ensure good circulation.",
        },
        tags: {
            gr: [
                "Αφαίρεση ρύπων από αντλίες και σωληνώσεις",
                "Πρόληψη βλαβών λόγω φραγής",
                "Ενίσχυση απόδοσης του συστήματος",
            ],
            en: [
                "Removing debris from pumps and pipes",
                "Preventing clog-related issues",
                "Improving system efficiency",
            ],
        },
        images: [
            { url: PoolCover, alt: "Αντλία πισίνας / Pool pump" },
            { url: PoolCover2, alt: "Καθαρισμός σωληνώσεων / Pipe flushing" },
            { url: PoolFishNet, alt: "Φραγμένη σωλήνα / Clogged pipe" },
        ],
    },
];

import Service1 from "./images/services1.jpg"
import Service2 from "./images/services2.jpg"
import Service3 from "./images/services3.jpg"

import Client1 from "./images/client1.svg"
import Client2 from "./images/client2.svg"
import Client3 from "./images/client3.svg"
import Client4 from "./images/client4.svg"
import Client5 from "./images/client5.svg"

import MainServiceImage1 from "./images/services1.jpg"
import MainServiceImage2 from "./images/services2.jpg"
import MainServiceImage3 from "./images/services3.jpg"

import Image1Before from "./images/image 1 before.png"
import Image1After from "./images/image 1 after.png"
import Image2Before from "./images/image 2 before.png"
import Image2After from "./images/image 2 after.png"
import Image3Before from "./images/image 3 before.png"
import Image3After from "./images/image 3 after.png"
import Image4Before from "./images/image 4 before.png"
import Image4After from "./images/image 4 after.png"

import Gallery1 from "./images/gallery1.jpg";
import Gallery2 from "./images/gallery2.jpg";
import Gallery3 from "./images/gallery3.jpg";
import Gallery4 from "./images/gallery4.jpg";
import Gallery5 from "./images/gallery5.jpg";
import Gallery6 from "./images/gallery6.jpg";
import Gallery7 from "./images/gallery7.jpg";
import Gallery8 from "./images/gallery8.jpg";
import Gallery9 from "./images/gallery9.jpg";
import Gallery10 from "./images/gallery10.jpg";
import Gallery11 from "./images/gallery11.jpg";
import Gallery12 from "./images/gallery12.jpg";
import Gallery13 from "./images/gallery13.jpg";
import Gallery14 from "./images/gallery14.jpg";
import Gallery15 from "./images/gallery15.jpg";

import { BarChartIcon } from "./SvgIcons"
import { GearIcon } from "./SvgIcons"
import { TrophyIcon } from "./SvgIcons"
import { BinocularsIcon } from "./SvgIcons"
import { CalendarCheckedIcon } from "./SvgIcons"
import { PigIcon } from "./SvgIcons"

export const menuLinks = [
    {
        label: "Αρχική Σελίδα",
        labelEn: "Home",
        to: "/"
    },
    {
        label: "Η Εταιρεία Μας",
        labelEn: "About Us",
        to: "/about"
    },
    {
        label: "Συλλογή Εργων",
        labelEn: "Gallery",
        to: "/gallery"
    },
    {
        label: "Υπηρεσίες",
        labelEn: "Services",
        to: "/services"
    },
    {
        label: "Επικοινωνία",
        labelEn: "Contact",
        to: "/contact"
    }
];


export const customersImages = [
    Client1, Client2, Client3, Client4, Client5
];
export const testimonials = [
    {
        "name": "David",
        "profession": "Ελεύθερος Επαγγελματίας",
        "professionEn": "Freelancer",
        "description": "Ο Γιώργος φροντίζει την πισίνα μας τα τελευταία χρόνια και επίσης κάνει τη συντήρηση στη βίλα μας. Τον συνιστώ ανεπιφύλακτα για τη δουλειά του και την προσωπικότητά του.",
        "descriptionEn": "Giorgos has been taking care of our swimming pool for the past few years and also maintains our villa. I highly recommend him for his work and personality."
    },
    {
        "name": "Βαγγέλης Λαμπρινός",
        "profession": "Ελεύθερος Επαγγελματίας",
        "professionEn": "Freelancer",
        "description": "Τέλεια και γρήγορη εξυπηρέτηση, υπεύθυνος επαγγελματίας με λύσεις για όλα τα προβλήματα.",
        "descriptionEn": "Perfect and fast service, responsible professional with solutions for all problems."
    },
    {
        "name": "Στυλιανός Βογιατζάκης",
        "profession": "Δημόσιος Υπάλληλος",
        "professionEn": "Public Employee",
        "description": "Συνεπής επαγγελματίας, γρήγορη εξυπηρέτηση και πολύ καλή επικοινωνία!!! Ελπίζουμε να συνεχίσετε σε αυτό το επίπεδο εξυπηρέτησης και αποτελεσματικότητας....",
        "descriptionEn": "Consistent professional, fast service, and very good communication! We hope you continue this level of service and efficiency."
    }
];


export const galleryBeforeAfter = [
    Image1Before, Image1After, Image2Before, Image2After, Image3Before, Image3After, Image4Before, Image4After
];

export const mainServices = [
    {
        "title": "Χημική Ισορροπία",
        "titleEn": "Chemical Balance",
        "description": "Έλεγχος και ρύθμιση των χημικών στοιχείων της πισίνας, όπως το χλώριο και το pH.",
        "descriptionEn": "Checking and adjusting the chemical elements of the pool, such as chlorine and pH.",
        "imageURL": MainServiceImage1
    },
    {
        "title": "Καθαρισμός Πισίνας",
        "titleEn": "Pool Cleaning",
        "description": "Καθαρισμός της γραμμής του νερού στην επιφάνεια της πισίνας για την απομάκρυνση των ελαιωδών υπολειμμάτων.",
        "descriptionEn": "Cleaning the water line on the surface of the pool to remove oily residues.",
        "imageURL": MainServiceImage2
    },
    {
        "title": "Καθαρισμός Φίλτρων",
        "titleEn": "Filter Cleaning",
        "description": "Έλεγχος και καθαρισμός των φίλτρων της πισίνας για να διασφαλιστεί η σωστή λειτουργία τους.",
        "descriptionEn": "Checking and cleaning the pool filters to ensure their proper functioning.",
        "imageURL": MainServiceImage3
    }
];

export const allServices = [
    {
        "title": "Τακτικός καθαρισμός πισίνας",
        "titleEn": "Regular Pool Cleaning",
        "description": "Ο τακτικός καθαρισμός της πισίνας περιλαμβάνει την απομάκρυνση φύλλων, σκόνης και άλλων υπολειμμάτων από την επιφάνεια του νερού. Οι επαγγελματίες καθαρισμού θα φροντίσουν επίσης για τη σωστή κυκλοφορία του νερού και τον έλεγχο των χημικών ισορροπιών για τη διατήρηση καθαρού και ασφαλούς νερού.",
        "descriptionEn": "Regular pool cleaning includes removing leaves, dust, and other debris from the water surface. Professionals will also ensure proper water circulation and check chemical balances to maintain clean and safe water.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Χημική εξισορρόπηση νερού",
        "titleEn": "Chemical Water Balancing",
        "description": "Η σωστή χημική εξισορρόπηση του νερού είναι απαραίτητη για την υγεία και την ασφάλεια των κολυμβητών. Η υπηρεσία αυτή περιλαμβάνει τη μέτρηση και ρύθμιση του pH, της αλκαλικότητας και των επιπέδων χλωρίου, ώστε να αποφεύγονται ερεθισμοί και η ανάπτυξη βακτηριδίων.",
        "descriptionEn": "Proper chemical water balancing is essential for the health and safety of swimmers. This service includes measuring and adjusting pH, alkalinity, and chlorine levels to prevent irritation and bacterial growth.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Συντήρηση φίλτρων πισίνας",
        "titleEn": "Pool Filter Maintenance",
        "description": "Τα φίλτρα της πισίνας είναι υπεύθυνα για την απομάκρυνση μικροοργανισμών και άλλων ρύπων από το νερό. Η τακτική συντήρηση των φίλτρων διασφαλίζει την καλύτερη δυνατή απόδοσή τους, καθώς και την παράταση της διάρκειας ζωής τους.",
        "descriptionEn": "Pool filters are responsible for removing microorganisms and other contaminants from the water. Regular maintenance ensures optimal performance and extends their lifespan.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Καθαρισμός πυθμένα και τοιχωμάτων",
        "titleEn": "Bottom and Wall Cleaning",
        "description": "Ο καθαρισμός του πυθμένα και των τοιχωμάτων της πισίνας είναι απαραίτητος για την απομάκρυνση άλγης, αλάτων και άλλων εναποθέσεων. Με επαγγελματικό εξοπλισμό, τα τοιχώματα και ο πυθμένας καθαρίζονται σε βάθος, προσφέροντας μια λαμπερή και υγιή πισίνα.",
        "descriptionEn": "Cleaning the bottom and walls of the pool is necessary to remove algae, scales, and other deposits. Using professional equipment, the walls and bottom are thoroughly cleaned, providing a sparkling and healthy pool.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Καθαρισμός αντλιών και σωληνώσεων",
        "titleEn": "Pump and Pipe Cleaning",
        "description": "Οι αντλίες και οι σωληνώσεις της πισίνας συχνά συσσωρεύουν υπολείμματα και ρύπους, που μπορεί να επηρεάσουν την απόδοση του συστήματος. Ο καθαρισμός αυτών των τμημάτων εξασφαλίζει τη βέλτιστη κυκλοφορία του νερού και αποτρέπει προβλήματα λειτουργίας.",
        "descriptionEn": "The pool pumps and pipes often accumulate debris and contaminants that can affect system performance. Cleaning these components ensures optimal water circulation and prevents operational issues.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Έλεγχος και συντήρηση του θερμαντήρα",
        "titleEn": "Heater Inspection and Maintenance",
        "description": "Ο θερμαντήρας της πισίνας χρειάζεται τακτικό έλεγχο και συντήρηση για να διασφαλίζεται η σωστή λειτουργία του. Αυτή η υπηρεσία περιλαμβάνει τον έλεγχο των ρυθμίσεων θερμοκρασίας, τη διάγνωση τυχόν βλαβών και τη διατήρηση της ενεργειακής απόδοσης.",
        "descriptionEn": "The pool heater requires regular inspection and maintenance to ensure proper operation. This service includes checking temperature settings, diagnosing any faults, and maintaining energy efficiency.",
        "imageURLs": [Service1, Service2, Service3]
    }
];

export const galleryImages = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
    Gallery13,
    Gallery14,
    Gallery15
];


  export const coreValues = [
    {
        "title": "Ποιότητα",
        "titleEn": "Quality",
        "icon": <TrophyIcon className="size-16 fill-secondary"/>,
        "text": "Δεσμευόμαστε να παρέχουμε υπηρεσίες που πληρούν τα υψηλότερα πρότυπα ποιότητας, εξασφαλίζοντας την πλήρη ικανοποίηση των πελατών μας.",
        "textEn": "We are committed to delivering services that meet the highest standards of quality, ensuring complete customer satisfaction."
    },
    {
        "title": "Αξιοπιστία",
        "titleEn": "Reliability",
        "icon": <BarChartIcon className="size-16 fill-secondary"/>,
        "text": "Παρέχουμε αξιόπιστες λύσεις που ξεπερνούν τις προσδοκίες, με συνεπή και επαγγελματική εξυπηρέτηση.",
        "textEn": "We provide reliable solutions that exceed expectations, with consistent and professional service."
    },
    {
        "title": "Εξειδίκευση",
        "titleEn": "Expertise",
        "icon": <GearIcon className="size-16 fill-secondary"/>,
        "text": "Εφαρμόζουμε τις πιο σύγχρονες τεχνικές και μεθόδους, αξιοποιώντας την εξειδίκευσή μας για την επίτευξη εξαιρετικών αποτελεσμάτων.",
        "textEn": "We apply the latest techniques and methods, leveraging our expertise to achieve exceptional results."
    }
];

export const faqs = [
    {
        question: "Ποιες υπηρεσίες προσφέρετε για τον καθαρισμό πισίνας;",
        questionEn: "What services do you offer for pool cleaning?",
        answer: "Προσφέρουμε μια σειρά υπηρεσιών που περιλαμβάνουν επαγγελματικό καθαρισμό πισίνας, συντήρηση εξοπλισμού, έλεγχο ισορροπίας χημικών, καθαρισμό φίλτρων και αναπλήρωση νερού για να διατηρείτε την πισίνα σας σε άριστη κατάσταση.",
        answerEn: "We offer a range of services including professional pool cleaning, equipment maintenance, chemical balance checks, filter cleaning, and water replenishment to keep your pool in top condition."
    },
    {
        question: "Πόσο συχνά πρέπει να καθαρίζεται η πισίνα μου;",
        questionEn: "How often should my pool be cleaned?",
        answer: "Συνιστάται να καθαρίζετε την πισίνα σας τουλάχιστον μία φορά την εβδομάδα για να διατηρείτε το νερό κρυστάλλινο και να εξασφαλίσετε την ομαλή λειτουργία του εξοπλισμού σας. Ωστόσο, η συχνότητα μπορεί να διαφέρει ανάλογα με τη χρήση και τους περιβαλλοντικούς παράγοντες.",
        answerEn: "It is recommended to clean your pool at least once a week to keep the water crystal clear and ensure the proper functioning of your equipment. However, the frequency may vary depending on usage and environmental factors."
    },
    {
        question: "Ποιες χημικές ουσίες χρησιμοποιούνται στη συντήρηση της πισίνας;",
        questionEn: "What chemicals are used in pool maintenance?",
        answer: "Χρησιμοποιούμε διάφορες χημικές ουσίες, όπως χλώριο, ρυθμιστές pH, αλγηκτόνα και άλλες εξειδικευμένες θεραπείες για να εξασφαλίσουμε ότι το νερό της πισίνας σας είναι ασφαλές, καθαρό και ισορροπημένο.",
        answerEn: "We use various chemicals such as chlorine, pH regulators, algaecides, and other specialized treatments to ensure your pool water is safe, clean, and balanced."
    },
    {
        question: "Προσφέρετε υπηρεσίες επείγοντος καθαρισμού πισίνας;",
        questionEn: "Do you offer emergency pool cleaning services?",
        answer: "Ναι, προσφέρουμε υπηρεσίες επείγοντος καθαρισμού πισίνας για καταστάσεις που απαιτούν άμεση παρέμβαση. Μπορείτε να μας επικοινωνήσετε οποιαδήποτε στιγμή για επείγουσες ανάγκες συντήρησης της πισίνας.",
        answerEn: "Yes, we offer emergency pool cleaning services for situations requiring immediate intervention. You can contact us at any time for urgent pool maintenance needs."
    },
    {
        question: "Πώς μπορώ να προγραμματίσω μια υπηρεσία καθαρισμού πισίνας;",
        questionEn: "How can I schedule a pool cleaning service?",
        answer: "Μπορείτε να προγραμματίσετε μια υπηρεσία καθαρισμού πισίνας μέσω της ιστοσελίδας μας συμπληρώνοντας την φόρμα επικοινωνίας ή καλώντας μας απευθείας. Προσφέρουμε ευέλικτο προγραμματισμό για να καλύψουμε τις ανάγκες σας.",
        answerEn: "You can schedule a pool cleaning service through our website by filling out the contact form or by calling us directly. We offer flexible scheduling to meet your needs."
    }
];

export const whyUs = [
    {
        icon: <TrophyIcon className="size-16 fill-secondary" />,
        title: "Επαγγελματισμός και Εμπειρία",
        titleEn: "Professionalism and Experience",
        description: "Χρόνια εμπειρίας στον τομέα της κατασκευής γυψοσανίδων με άρτια καταρτισμένη ομάδα.",
        descriptionEn: "Years of experience in drywall construction with a highly skilled team."
    },
    {
        icon: <BinocularsIcon className="size-16 fill-secondary" />,
        title: "Αναλυτική Προσέγγιση",
        titleEn: "Analytical Approach",
        description: "Κάθε έργο παρακολουθείται με μεγάλη προσοχή στη λεπτομέρεια για άριστα αποτελέσματα.",
        descriptionEn: "Every project is monitored with great attention to detail for excellent results."
    },
    {
        icon: <BarChartIcon className="size-16 fill-secondary" />,
        title: "Υψηλής Ποιότητας Υλικά",
        titleEn: "High-Quality Materials",
        description: "Χρησιμοποιούμε μόνο υλικά υψηλής ποιότητας για τη διασφάλιση της μακροχρόνιας αντοχής και ανθεκτικότητας.",
        descriptionEn: "We use only high-quality materials to ensure long-lasting durability and resistance."
    },
    {
        icon: <CalendarCheckedIcon className="size-16 fill-secondary" />,
        title: "Σαφείς Χρονοδιαγράμματα",
        titleEn: "Clear Timelines",
        description: "Δεσμευόμαστε να ολοκληρώνουμε τα έργα εντός των συμφωνημένων προθεσμιών.",
        descriptionEn: "We are committed to completing projects within agreed timelines."
    },
    {
        icon: <GearIcon className="size-16 fill-secondary" />,
        title: "Προσαρμοσμένες Λύσεις",
        titleEn: "Customized Solutions",
        description: "Παρέχουμε εξατομικευμένες λύσεις που ανταποκρίνονται στις μοναδικές ανάγκες του κάθε πελάτη.",
        descriptionEn: "We provide customized solutions that meet each client's unique needs."
    },
    {
        icon: <PigIcon className="size-16 fill-secondary" />,
        title: "Ανταγωνιστικές Τιμές",
        titleEn: "Competitive Prices",
        description: "Σαφείς και δίκαιες τιμές χωρίς κρυφές χρεώσεις ή εκπλήξεις.",
        descriptionEn: "Transparent and fair pricing with no hidden charges or surprises."
    }
];



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

import { PeopleIcon } from "./SvgIcons"
import { BarChartIcon } from "./SvgIcons"
import { GearIcon } from "./SvgIcons"
import { TrophyIcon } from "./SvgIcons"
import { HeadsetIcon } from "./SvgIcons"
import { SeedIcon } from "./SvgIcons.js"

export const menuLinks = [
    {
        label: "Αρχική Σελίδα",
        to: "/"
    },
    {
        label: "Σχετικά με εμάς",
        to: "/about"
    },
    {
        label: "Τα έργα μας",
        to: "/gallery"
    },
    {
        label: "Οι υπηρεσίες μας",
        to: "/services"
    },
    {
        label: "Επικοινωνία",
        to: "/contact"
    }
];

export const customersImages = [
    Client1, Client2, Client3, Client4, Client5
]


export const testimonials = [
    {
        "name": "David",
        "profession": "Ελεύθερος Επαγγελματίας",
        "description": "Giorgos is taking care for our swimming pool in the last years. He also doing the maintenance in our villa. I highly recommend him for his work and personality."
    },
    {
        "name": "Vagelis Lamprinos",
        "profession": "Ελεύθερος Επαγγελματίας",
        "description": "Perfect and fast service, responsible professional who has solutions for all problems."
    },
    {
        "name": "Στυλιανός Βογιατζάκης",
        "profession": "Δημόσιος Υπάλληλος",
        "description": "Consistent professional, fast service and very good communication!!! We hope you continue this level of service and efficiency...."
    }
]


export const galleryBeforeAfter = [
    Image1Before, Image1After, Image2Before, Image2After, Image3Before, Image3After, Image4Before, Image4After
]

export const mainServices = [
    {
        "title": "Χημική Ισορροπία",
        "description": "Έλεγχος και ρύθμιση των χημικών στοιχείων της πισίνας, όπως το χλώριο και το pH.",
        "imageURL": MainServiceImage1
    },
    {
        "title": "Καθαρισμός Πισίνας",
        "description": "Καθαρισμός της γραμμής του νερού στην επιφάνεια της πισίνας για την απομάκρυνση των ελαιωδών υπολειμμάτων.",
        "imageURL": MainServiceImage2
    },
    {
        "title": "Καθαρισμός Φίλτρων",
        "description": "Έλεγχος και καθαρισμός των φίλτρων της πισίνας για να διασφαλιστεί η σωστή λειτουργία τους.",
        "imageURL": MainServiceImage3
    }
]
export const allServices = [
    {
        "title": "Τακτικός καθαρισμός πισίνας",
        "description": "Ο τακτικός καθαρισμός της πισίνας περιλαμβάνει την απομάκρυνση φύλλων, σκόνης και άλλων υπολειμμάτων από την επιφάνεια του νερού. Οι επαγγελματίες καθαρισμού θα φροντίσουν επίσης για τη σωστή κυκλοφορία του νερού και τον έλεγχο των χημικών ισορροπιών για τη διατήρηση καθαρού και ασφαλούς νερού.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Χημική εξισορρόπηση νερού",
        "description": "Η σωστή χημική εξισορρόπηση του νερού είναι απαραίτητη για την υγεία και την ασφάλεια των κολυμβητών. Η υπηρεσία αυτή περιλαμβάνει τη μέτρηση και ρύθμιση του pH, της αλκαλικότητας και των επιπέδων χλωρίου, ώστε να αποφεύγονται ερεθισμοί και η ανάπτυξη βακτηριδίων.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Συντήρηση φίλτρων πισίνας",
        "description": "Τα φίλτρα της πισίνας είναι υπεύθυνα για την απομάκρυνση μικροοργανισμών και άλλων ρύπων από το νερό. Η τακτική συντήρηση των φίλτρων διασφαλίζει την καλύτερη δυνατή απόδοσή τους, καθώς και την παράταση της διάρκειας ζωής τους.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Καθαρισμός πυθμένα και τοιχωμάτων",
        "description": "Ο καθαρισμός του πυθμένα και των τοιχωμάτων της πισίνας είναι απαραίτητος για την απομάκρυνση άλγης, αλάτων και άλλων εναποθέσεων. Με επαγγελματικό εξοπλισμό, τα τοιχώματα και ο πυθμένας καθαρίζονται σε βάθος, προσφέροντας μια λαμπερή και υγιή πισίνα.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Καθαρισμός αντλιών και σωληνώσεων",
        "description": "Οι αντλίες και οι σωληνώσεις της πισίνας συχνά συσσωρεύουν υπολείμματα και ρύπους, που μπορεί να επηρεάσουν την απόδοση του συστήματος. Ο καθαρισμός αυτών των τμημάτων εξασφαλίζει τη βέλτιστη κυκλοφορία του νερού και αποτρέπει προβλήματα λειτουργίας.",
        "imageURLs": [Service1, Service2, Service3]
    },
    {
        "title": "Έλεγχος και συντήρηση του θερμαντήρα",
        "description": "Ο θερμαντήρας της πισίνας χρειάζεται τακτικό έλεγχο και συντήρηση για να διασφαλίζεται η σωστή λειτουργία του. Αυτή η υπηρεσία περιλαμβάνει τον έλεγχο των ρυθμίσεων θερμοκρασίας, τη διάγνωση τυχόν βλαβών και τη διατήρηση της ενεργειακής απόδοσης.",
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
        "image": <TrophyIcon className="icon icon-secondary icon-large"/>,
        "text": "Δεσμευόμαστε να παρέχουμε υπηρεσίες που πληρούν τα υψηλότερα πρότυπα ποιότητας, εξασφαλίζοντας την πλήρη ικανοποίηση των πελατών μας."
    },
    {
        "title": "Ακεραιότητα",
        "image": <PeopleIcon className="icon icon-secondary icon-large"/>,
        "text": "Λειτουργούμε με ειλικρίνεια και διαφάνεια σε όλες μας τις συναλλαγές, χτίζοντας σχέσεις εμπιστοσύνης με τους πελάτες μας."
    },
    {
        "title": "Αξιοπιστία",
        "image": <BarChartIcon className="icon icon-secondary icon-large"/>,
        "text": "Παρέχουμε αξιόπιστες λύσεις που ξεπερνούν τις προσδοκίες, με συνεπή και επαγγελματική εξυπηρέτηση."
    },
    {
        "title": "Εξειδίκευση",
        "image": <GearIcon className="icon icon-secondary icon-large"/>,
        "text": "Εφαρμόζουμε τις πιο σύγχρονες τεχνικές και μεθόδους, αξιοποιώντας την εξειδίκευσή μας για την επίτευξη εξαιρετικών αποτελεσμάτων."
    }
];

export const faqs = [
    {
        question: "Ποιες υπηρεσίες προσφέρετε για τον καθαρισμό πισίνας;",
        answer: "Προσφέρουμε μια σειρά υπηρεσιών που περιλαμβάνουν επαγγελματικό καθαρισμό πισίνας, συντήρηση εξοπλισμού, έλεγχο ισορροπίας χημικών, καθαρισμό φίλτρων και αναπλήρωση νερού για να διατηρείτε την πισίνα σας σε άριστη κατάσταση."
    },
    {
        question: "Πόσο συχνά πρέπει να καθαρίζεται η πισίνα μου;",
        answer: "Συνιστάται να καθαρίζετε την πισίνα σας τουλάχιστον μία φορά την εβδομάδα για να διατηρείτε το νερό κρυστάλλινο και να εξασφαλίσετε την ομαλή λειτουργία του εξοπλισμού σας. Ωστόσο, η συχνότητα μπορεί να διαφέρει ανάλογα με τη χρήση και τους περιβαλλοντικούς παράγοντες."
    },
    {
        question: "Ποιες χημικές ουσίες χρησιμοποιούνται στη συντήρηση της πισίνας;",
        answer: "Χρησιμοποιούμε διάφορες χημικές ουσίες, όπως χλώριο, ρυθμιστές pH, αλγηκτόνα και άλλες εξειδικευμένες θεραπείες για να εξασφαλίσουμε ότι το νερό της πισίνας σας είναι ασφαλές, καθαρό και ισορροπημένο."
    },
    {
        question: "Προσφέρετε υπηρεσίες επείγοντος καθαρισμού πισίνας;",
        answer: "Ναι, προσφέρουμε υπηρεσίες επείγοντος καθαρισμού πισίνας για καταστάσεις που απαιτούν άμεση παρέμβαση. Μπορείτε να μας επικοινωνήσετε οποιαδήποτε στιγμή για επείγουσες ανάγκες συντήρησης της πισίνας."
    },
    {
        question: "Πώς μπορώ να προγραμματίσω μια υπηρεσία καθαρισμού πισίνας;",
        answer: "Μπορείτε να προγραμματίσετε μια υπηρεσία καθαρισμού πισίνας μέσω της ιστοσελίδας μας συμπληρώνοντας την φόρμα επικοινωνίας ή καλώντας μας απευθείας. Προσφέρουμε ευέλικτο προγραμματισμό για να καλύψουμε τις ανάγκες σας."
    }
];


export const whyUs = [
    {
        "title": "Οικολογικές Λύσεις",
        "description": "Χρησιμοποιούμε οικολογικά προϊόντα και μεθόδους για να διατηρούμε την πισίνα σας καθαρή, ενώ προστατεύουμε τον πλανήτη.",
        "icon": <SeedIcon className="icon icon-large icon-primary "/>
    },
    {
        "title": "Εξειδικευμένο Προσωπικό",
        "description": "Η ομάδα μας αποτελείται από εξειδικευμένους επαγγελματίες με πολυετή εμπειρία στον καθαρισμό και τη συντήρηση πισίνας.",
        "icon": <PeopleIcon className="icon icon-large icon-primary "/>
    },
    {
        "title": "Άμεση Υποστήριξη",
        "description": "Παρέχουμε άμεση και αποτελεσματική υποστήριξη για όλες τις ανάγκες σας, εξασφαλίζοντας την άριστη λειτουργία της πισίνας σας.",
        "icon": <HeadsetIcon className="icon icon-large icon-primary "/>
    }
];




import Avatar1 from "./images/avatar1.png"
import Avatar2 from "./images/avatar2.png"
import Avatar3 from "./images/avatar3.png"
import Avatar4 from "./images/avatar4.png"

import { BiClipboardCheckFill } from "./SvgIcons"
import { BiPeopleFill } from "./SvgIcons"
import { BiGraphUpArrow } from "./SvgIcons"
import { BiCrossHair } from "./SvgIcons"
import { Truck } from "./SvgIcons"
import { ClipboardFillIcon } from "./SvgIcons"

import Image1Before from "./images/image 1 before.png"
import Image1After from "./images/image 1 after.png"
import Image2Before from "./images/image 2 before.png"
import Image2After from "./images/image 2 after.png"
import Image3Before from "./images/image 3 before.png"
import Image3After from "./images/image 3 after.png"
import Image4Before from "./images/image 4 before.png"
import Image4After from "./images/image 4 after.png"

export const qaList = [
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

export const companyTeam = [
    {"name": "Ιωάννης Μαραγκάκης", "icon-src": Avatar1},
    {"name": "Γιώργος Μαραγκάκης", "icon-src": Avatar2},
    {"name": "Ιωάννης Περουλάκης", "icon-src": Avatar3},
    {"name": "Πετρος Πατεράκης",   "icon-src": Avatar4}
]

export const coreValues = [
    {
        "title": "Ποιότητα",
        "image": <BiClipboardCheckFill className="icon icon-light icon-large"/>,
        "text": "Δεσμευόμαστε να παρέχουμε υπηρεσίες που πληρούν τα υψηλότερα πρότυπα ποιότητας, εξασφαλίζοντας την πλήρη ικανοποίηση των πελατών μας."
    },
    {
        "title": "Ακεραιότητα",
        "image": <BiPeopleFill className="icon icon-light icon-large"/>,
        "text": "Λειτουργούμε με ειλικρίνεια και διαφάνεια σε όλες μας τις συναλλαγές, χτίζοντας σχέσεις εμπιστοσύνης με τους πελάτες μας."
    },
    {
        "title": "Αξιοπιστία",
        "image": <BiGraphUpArrow className="icon icon-light icon-large"/>,
        "text": "Παρέχουμε αξιόπιστες λύσεις που ξεπερνούν τις προσδοκίες, με συνεπή και επαγγελματική εξυπηρέτηση."
    },
    {
        "title": "Εξειδίκευση",
        "image": <BiCrossHair className="icon icon-light icon-large"/>,
        "text": "Εφαρμόζουμε τις πιο σύγχρονες τεχνικές και μεθόδους, αξιοποιώντας την εξειδίκευσή μας για την επίτευξη εξαιρετικών αποτελεσμάτων."
    }
];

export const servicesOffered = ["Εξαιρετική Ποιότητα", "Ευθύνη", "Ικανοποίηση Πελατών"]

export const whyUs = [
    {
        "title": "Οικολογικές Λύσεις",
        "description": "Χρησιμοποιούμε οικολογικά προϊόντα και μεθόδους για να διατηρούμε την πισίνα σας καθαρή, ενώ προστατεύουμε τον πλανήτη.",
        "icon": <Truck className="icon icon-dark"/>
    },
    {
        "title": "Εξειδικευμένο Προσωπικό",
        "description": "Η ομάδα μας αποτελείται από εξειδικευμένους επαγγελματίες με πολυετή εμπειρία στον καθαρισμό και τη συντήρηση πισίνας.",
        "icon": <BiPeopleFill className="icon icon-dark"/>
    },
    {
        "title": "Άμεση Υποστήριξη",
        "description": "Παρέχουμε άμεση και αποτελεσματική υποστήριξη για όλες τις ανάγκες σας, εξασφαλίζοντας την άριστη λειτουργία της πισίνας σας.",
        "icon": <ClipboardFillIcon className="icon icon-dark"/>
    }
];

export const galleryImages = [
    Image1Before, Image1After, Image2Before, Image2After, Image3Before, Image3After, Image4Before, Image4After
]

export const testimonyData = [
    {
        "name": "Ιωάννης Μαραγκάκης",
        "profession": "Ελεύθερος Επαγγελματίας",
        "description": "Οι οικολογικές λύσεις καθαρισμού τους, διατηρούν την πισίνα μου αρκετά καθαρή, και μου αρέσει που ξέρω ότι η οικογένειά μου κολυμπά σε ένα καθαρό και ασφαλές περιβάλλον. Τους συνιστώ ανεπιφύλακτα!"
    },
    {
        "name": "Ιωάννης Περουλάκης",
        "profession": "Ελεύθερος Επαγγελματίας",
        "description": "Η εμπορική υπηρεσία καθαρισμού πισίνας τους είναι εξαιρετική, και η δέσμευσή τους για χρήση βιώσιμων προϊόντων ταυτίζεται πλήρως με τις δικές μας αξίες. Το προσωπικό είναι εξαιρετικά συνεργάσιμο και προσεκτικό σε κάθε λεπτομέρεια."
    },
    {
        "name": "Πέτρος Πατεράκης",
        "profession": "Δημόσιος Υπάλληλος",
        "description": "Η οικολογική τους προσέγγιση και οι εξειδικευμένοι τεχνικοί τους εξασφαλίζουν ότι οι πισίνες μας είναι πάντα άψογες. Είναι ένα αξιόπιστο μέλος της ομάδας συντήρησής μας και δεν θα μπορούσαμε να είμαστε πιο ευχαριστημένοι με την υπηρεσία τους."
    }
]

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
        label: "Επικοινωνία",
        to: "/contact"
    }
];

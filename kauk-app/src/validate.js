export function validateFormData(name, email, telephone, message) {
    const errorMessage = [];
    // Validate Name
    if (!name) {
        errorMessage.push("Πρέπει να εισάγεται ένα ονοματεπώνυμο");
    } else if (name.length > 50) {
        errorMessage.push("Το όνομα που εισάγατε είναι πολύ μεγάλο");
    }
    else if (name.length < 10) {
        errorMessage.push("Το όνομα που εισάγατε είναι πολύ μικρό");
    }

    // Validate Email
    if (!email) {
        errorMessage.push("Πρέπει να εισάγεται ένα email");
    } else if (email.length > 60) {
        errorMessage.push("Το email που εισάγατε είναι πολύ μεγάλο");
    } else {
        const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        if (!isEmail) {
            errorMessage.push("Αυτή η μορφή του email δεν είναι σωστή");
        }
    }

    // Validate Telephone
    if (!telephone) {
        errorMessage.push("Πρέπει να εισάγεται ένα τηλέφωνο επικοινωνίας");
    } else if (telephone.length > 10) {
        errorMessage.push("Το τηλέφωνο μπορεί να πάρει μέχρι 10 ψηφία");
    } else if (telephone.length < 10) {
        errorMessage.push("Το τηλέφωνο πρέπει να έχει 10 ψηφία");
    } else {
        const hasOnlyDigits = /^\d+$/.test(telephone);
        if (!hasOnlyDigits) {
            errorMessage.push("Το τηλέφωνο μπορεί να πάρει μόνο ψηφία");
        }
    }

    // Validate Message
    if (!message) {
        errorMessage.push("Πρέπει να εισάγεται ένα μήνυμα");
    } else if (message.length < 10) {
        errorMessage.push("Το μήνυμα που εισάγατε είναι πολύ μικρό!");
    }

    return errorMessage;
}

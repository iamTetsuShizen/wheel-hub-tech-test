import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        lng: "es",
        resources: {
            es: {
                translation: {
                    appTitle: "Test Frontend Wheel Hub",
                    logoAlt: "Logo Wheel Hub",
                    whatToDo: "¿Qué deberá realizar?",
                    firstStepFirstParagraph: "En la primera pestaña, deberá confirmar que es mayor de edad y que acepta el tratamiento de sus datos según la política de datos vigentes.",
                    firstStepSecondParagraph: "En la segunda pestaña, deberá crear un usuario, una contraseña y una pista para recordar la contraseña (como dato opcional).",
                    firstStepThirdParagraph: "En tercer lugar, deberá visualizarse el mensaje de éxito de creación.",
                    ageConsent: "Confirmo que es mayor de edad, y acepta el tratamiento de sus datos según al política de protección de datos vigente.",
                    createUsername: "Crea tu usuario",
                    addUser: "Introduce tu usuario",
                    createPassword: "Crea tu contraseña",
                    addPassword: "Crea tu contraseña",
                    repeatPassword: "Repite tu contraseña",
                    canAddClueText: "También puedes crear una pista que te ayude a recordar tu contraseña.",
                    createClue: "Crea tu pista para recordar tu contraseña (opcional)",
                    addClue: "Introduce tu pista",
                    success: "Success",
                    accountCreated: "¡La cuenta se creó correctamente!",
                    stepThreeLipsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum, magna quis scelerisque consectetur, libero enim sollicitudin dolor, at tincidunt eros quam laoreet dolor. Praesent facilisis justo erat, quis mollis sapien malesuada elementum. Cras et sem ut nibh ullamcorper euismod. Integer pretium suscipit eleifend. Donec consequat posuere leo, sed finibus leo egestas non. Donec ac arcu sed elit suscipit viverra.",
                    errorSamePasswords: "Las contraseñas deben coincidir.",
                    errorUsernameLength: "El nombre de usuario deberia tener entre 5 a 25 letras.",
                    errorUsernameStartWithNumber: "El nombre de usuario no puede empezar con un número.",
                    errorPasswordLength: "La contraseña debe tener de 8 a 24 caracteres.",
                    errorPasswordMissingNumber: "La contraseña debe tener al menos un numero.",
                    errorPasswordMissingUppercase: "La contraseña debe tener al menos una mayúscula.",
                }
            },
            en: {
                translation: {
                    appTitle: "Test Frontend Wheel Hub",
                    logoAlt: "Logo Wheel Hub",
                    whatToDo: "What to do?",
                    firstStepFirstParagraph: "In the first tab, you must confirm that you are of legal age and that you accept the processing of your data according to the current data policy.",
                    firstStepSecondParagraph: "In the second tab, you must create a username, a password, and a clue to remember the password (as optional data).",
                    firstStepThirdParagraph: "Thirdly, you should see the success message of creation.",
                    ageConsent: "I confirm that I am of legal age, and I accept the processing of my data according to the current data protection policy.",
                    createUsername: "Create your username",
                    addUser: "Enter your username",
                    createPassword: "Create your password",
                    addPassword: "Enter your password",
                    repeatPassword: "Repeat your password",
                    canAddClueText: "You can also create a clue to help you remember your password.",
                    createClue: "Create your clue to remember your password (optional)",
                    addClue: "Enter your clue",
                    success: "Success",
                    accountCreated: "The account was created successfully!",
                    stepThreeLipsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum, magna quis scelerisque consectetur, libero enim sollicitudin dolor, at tincidunt eros quam laoreet dolor. Praesent facilisis justo erat, quis mollis sapien malesuada elementum. Cras et sem ut nibh ullamcorper euismod. Integer pretium suscipit eleifend. Donec consequat posuere leo, sed finibus leo egestas non. Donec ac arcu sed elit suscipit viverra.",
                    errorSamePasswords: "The passwords must be the same.",
                    errorUsernameLength: "The username has an incorrect length (from 5 to 25 letters).",
                    errorUsernameStartWithNumber: "The username cannot start with a number.",
                    errorPasswordLength: "The password has an incorrect length (from 8 to 24 letters).",
                    errorPasswordMissingNumber: "The password has to have at least a number.",
                    errorPasswordMissingUppercase: "The password has to have at least a letter to be uppercase."
                }
            }
        }
});
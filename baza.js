const words = [
  "polska",
  "mięso",
  "jedzenie",
  "warzywa",
  "owoce",
  "banan",
  "kiwi",
  "mięso",
  "statek",
  "sklep",
  "angielski",
  "ruski",
  "ścieki",
  "adres",
  "mieszkanie",
  "dom",
  "pistolet",
  "karabin",
  "papier",
  "karton",
  "alkohol",
  "koń",
  "pojazd",
  "auto",
  "ciężarówka",
  "lista",
  "biurko",
  "krzesło",
  "lampa",
  "ściana",
  "okno",
  "drzwi",
  "podłoga",
  "szafka",
  "bateria",
  "płyta",
  "pudełko",
  "płyta",
  "helikopter",
  "samolot",
  "powietrze",
  "pierogi",
  "patelnia",
  "tata",
  "mama",
  "wujek",
  "ciocia",
  "babcia",
  "dziadek",
  "woda",
  "olej",
  "obraz",
  "telewizor",
  "telefon",
  "głośnik",
  "mikrofon",
  "kamień",
  "konkurencja",
  "ukraina",
  "praca",
  "kuzyn",
  "kuzynka",
  "lupa",
  "karta",
  "czas",
  "godzina",
  "minuta",
  "sekunda",
  "noga",
  "ręka",
  "oko",
  "nos",
  "mandat",
  "komputer",
  "policja",
  "karetka",
  "straż",
  "kanał",
  "ocena",
  "gazeta",
  "zasłona",
  "folia",
  "farba",
  "dach",
  "klamka",
  "szyba",
  "szkło",
  "metal",
  "złoto",
  "srebro",
  "pędzel",
  "dzwonek",
  "prąd",
  "gra",
  "butelka",
  "szklanka",
  "luneta",
  "latarka",
  "lornetka",
  "ziemia",
  "księżyc",
  "klucz",
  "śrubokręt",
  "młotek",
  "ramka",
  "koparka",
  "klej",
  "powiadomienie",
  "kawa",
  "herbata",
  "gaza",
  "apteczka",
  "bandaż",
  "notatnik",
  "rodzina",
  "dziecko",
  "żona",
  "mąż",
  "siostra",
  "brat",
  "but",
  "lampka",
  "czapka",
  "bluza",
  "bluzka",
  "szelki",
  "włosy",
  "nerka",
  "czarny",
  "biały",
  "żółty",
  "pomarańczowy",
  "zielony",
  "brązowy",
  "szary",
  "niebieski",
  "różowy",
  "fioletowy",
  "kontakt",
  "numer",
  "alfabet",
  "klawiatura",
  "film",
  "zdjęcie",
  "tekst",
  "tłumacz",
  "piekarz",
  "typ",
  "beton",
  "kafelki",
  "drewno",
  "samochód",
  "motor",
  "karta",
  "kartoteka",
  "ulepszenie",
  "wiadomość",
  "dzwon",
  "sok",
  "jabłko",
  "ananas",
  "pomarańcz",
  "jagoda",
  "malina",
  "rubin",
  "cyna",
  "stal",
  "żelazo",
  "piec",
  "stolnica",
  "komunikator",
  "konsola",
  "błąd",
  "zeszyt",
  "książka",
  "lektura",
  "piosenka",
  "kościół",
  "bóg",
  "ubezpieczenie",
  "żubr",
  "ciuchy",
  "ubrania",
  "róg",
  "taśma",
  "składanka",
  "nafta",
  "paliwo",
  "garnek",
  "buzia",
  "szklanka",
  "szalik",
  "szyja",
  "nos",
  "czoło",
  "ręce",
  "ramiona",
  "ręka",
  "czaszka",
  "głowa",
  "słoń",
  "żyrafa",
  "zwierzęta",
  "krokodyl",
  "pies",
  "kot",
  "baza",
  "gra",
  "polak",
  "polka",
  "karta",
  "karty",
  "sieć",
  "zadania",
  "ekran",
  "myszka",
  "szczur",
  "serce",
  "bambus",
  "drzewo",
  "słoik",
  "pojemnik",
  "mózg",
  "wujek",
  "szafa",
  "fotel",
  "batonik",
  "lornetka",
  "wodolot",
  "magma",
  "zupa",
  "kulka",
  "kwadrat",
  "trójkąt",
  "trapez",
  "matematyka",
  "geografia",
  "pulpit",
  "historia",
  "król",
  "góra",
  "osa",
  "pszczoła",
  "tytoń",
  "wywar",
  "rosół",
  "uran",
  "radioaktywność",
  "łódź podwodna",
  "broda",
  "wąsy",
  "zegarek",
  "zegar",
  "rama",
  "rower",
  "strzelba",
  "kotwica",
  "rura",
  "kontynent",
  "miasto",
  "kwanty",
  "wieś",
  "mieszkaniec",
  "domek",
  "dom",
  "siekiera",
  "wełna",
  "rurka",
  "młot",
  "wiatr",
  "łuk",
  "anonimowośc",
  "pieniądze",
  "monarchia",
  "lampa",
  "lampart",
  "stodoła",
  "wiata",
  "dół",
  "mój",
  "ogień",
  "świnia",
  "stos",
  "łajno",
  "siano",
  "betoniarka",
  "błoto",
  "wioska",
  "filantrop",
  "elektrostatyka",
  "elektryczność",
  "kod",
  "zapis",
  "ładunek",
  "energia",
  "słońce",
  "szukać",
  "pożywienie",
  "fizyka",
  "składać",
  "prom",
  "kosmos",
  "pomoc",
  "przyjaźń",
  "miłość",
  "misja",
  "grać",
  "strzelać",
  "połączenie",
  "internet",
  "paczka",
  "pakiet",
  "dane",
  "klocki",
  "picie",
  "komin",
  "drzewko",
  "ciśnienie",
  "muzyka",
  "pszenica",
  "aparat",
  "elektrownia",
  "głośność",
  "głos",
  "rakieta",
  "silnik",
  "kolejka",
  "górka",
  "krajobraz",
  "kominek",
  "główka",
  "ciekawostka",
  "nauka",
  "rozwijać",
  "słoneczko",
  "pole",
  "łyse",
  "plan",
  "pomalutku",
  "bez",
  "pośpiechu",
  "wszystko",
  "zrobie",
  "sam",
  "rodzinka",
  "strona",
  "metro",
  "dotyk",
  "ból",
  "palec",
  "ropa",
  "podstawka",
  "rzeka",
  "morze",
  "bagno",
  "drzewa",
  "fakty",
  "po",
  "faktach",
  "easteregg",
  "kosmiczny",
  "program",
  "telewizorek",
  "powiadomienia",
  "skupienie",
  "włączenie",
  "funkcja",
  "dzwonki",
  "post",
  "filmik",
  "aplikacja",
  "wiadomości",
  "wycinka",
  "okno",
  "karty",
  "zakład",
  "zakładka",
  "druk",
  "znajdź",
  "narzędzia",
  "wytnij",
  "edytuj",
  "wklej",
  "kopiuj",
  "powiększenie",
  "ustawienia",
  "pomagać",
  "zakończenie",
  "koniec gry",
  "kamera",
  "instrument",
  "wznoszenie",
  "gwiazda",
  "serwis",
  "moduł",
  "wzmacniacz",
  "muzyczka",
  "kapsuła",
  "lądownik",
  "paliwko",
  "resztka",
  "krytyczny",
  "problem",
  "szczelne",
  "lądowanie",
  "zniknąć",
  "radar",
  "restart",
  "koszta",
  "rozwój",
  "doskonałość",
  "główna",
  "czasem",
  "podoba",
  "mi",
  "się",
  "biblioteka",
  "subskrybcje",
  "czas",
  "główna strona",
  "ludzie",
  "nazwisko",
  "imie",
  "astronauta",
  "rok",
  "żółw",
  "garść",
  "mniej",
  "płaska",
  "ziemniak",
  "ryba",
  "mixer",
  "karty",
  "kontroler",
  "koza",
  "pszczółka maja",
  "czoło",
  "pomidory",
  "fujarka",
  "kulki",
  "stal",
  "ołów",
  "ładowarka",
  "dom",
  "kredka",
  "medal",
  "puchar",
  "puszka",
  "bezpieczik",
  "organy",
  "kula",
  "wtyczka",
  "słuchawki",
  "ołówek",
  "zdjęcia",
  "zegarki",
  "ID",
  "twój",
  "stary grat",
  "grat",
  "młody",
  "stary",
  "dziwny",
  "normalny",
  "piłeczka",
  "piłka",
  "piłki",
  "zeszycik",
  "notes",
  "pamiętnik",
  "klawisze",
  "las",
  "lasek",
  "myszeczka",
  "pasek",
  "paseczki",
  "drzwiczki",
  "opakowanie",
  "plastik",
  "syrena",
  "światło",
  "ufo",
  "strefa 51",
  "wersja",
  "mobilna",
  "gierka",
  "kabel",
  "kabelek",
  "broń",
  "bóg",
  "discord",
  "polisz",
  "milicja",
  "książeczka",
  "księżniczka",
  "lampeczka",
  "wino",
  "helikopterek",
  "portfel",
  "słownik",
  "tacka",
  "ogólnie",
  "mag",
  "magów",
  "magiem",
  "magami",
  "kierownica",
  "samochody"
]

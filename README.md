# Aplikacja typu Messenger

## Opis projektu
To **strona internetowa do przesyłania wiadomości** — pełna aplikacja webowa z frontendem i backendem.  
Umożliwia użytkownikom **rejestrację, logowanie i komunikację w czasie rzeczywistym**.  
Projekt jest przykładem **aplikacji typu messenger** z własnym API, bazą danych i logiką backendową.

---

## Funkcjonalności
- Rejestracja i logowanie użytkownika  
- Wyświetlanie listy rozmów  
- Wysyłanie i odbieranie wiadomości  
- Bezpieczne hasła (hashowane)  
- Komunikacja klient-serwer w czasie rzeczywistym
- Przesylanie małych rozmiarów zdjęć
- Edytowanie danych profilu

---

## Architektura projektu
Projekt jest full‑stack i składa się z dwóch części:

/frontend – część klienta (HTML, CSS, JavaScript)
/backend – część serwerowa (Node.js +, API, baza danych mongoDB, cloudinary)


Front i backend komunikują się przez własne API REST, a wszystkie dane są przechowywane w bazie danych mongoDB.

---

## 📥 Instalacja i uruchomienie

1. Sklonuj repo:
```bash
git clone https://github.com/M01L3/aplikacja_typu_messenger.git

Przejdź do katalogu projektu:

cd aplikacja_typu_messenger

Zainstaluj zależności backendu i frontendu:

cd backend
npm install
cd ../frontend
npm install

Uruchom backend:
cd backend
npm start

Uruchom frontend w osobnym terminalu:
cd frontend
npm start

Otwórz przeglądarkę na http://localhost:PORT

Autor

M01L3 – projekt stworzony w ramach nauki programowania i praktyk szkolnych.
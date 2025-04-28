# 🤝 Zasady współpracy przy projekcie Spellb00k

Dziękujemy za zainteresowanie współpracą przy projekcie Spellb00k! Ten dokument zawiera wskazówki dotyczące zgłaszania błędów, proponowania nowych funkcji oraz zasad współpracy przy rozwijaniu kodu.

## 🐛 Zgłaszanie błędów

Jeśli napotkasz błąd w działaniu aplikacji, prosimy o utworzenie zgłoszenia (issue) korzystając z następujących wskazówek:

1. Sprawdź, czy podobny problem nie został już zgłoszony w zakładce Issues
2. Użyj szablonu Bug Report, który zapewni strukturę ułatwiającą analizę problemu
3. Opisz szczegółowo kroki prowadzące do wystąpienia błędu
4. Dołącz zrzuty ekranu, jeśli to możliwe
5. Podaj informacje o środowisku (przeglądarka, system operacyjny, wersja aplikacji)

## 💡 Propozycje nowych funkcji

Masz pomysł na nową funkcję dla Spellb00k? Chętnie poznamy Twoją propozycję!

1. Sprawdź, czy podobna funkcja nie została już zaproponowana w zakładce Issues
2. Użyj szablonu Feature Request, aby odpowiednio sformułować swoją propozycję
3. Opisz przypadek użycia i korzyści wynikające z implementacji nowej funkcji
4. Jeśli to możliwe, zaproponuj sposób implementacji lub przedstaw ogólny zarys rozwiązania

## 🔄 Proces Pull Request

Aby przyczynić się do rozwoju kodu Spellb00k, należy postępować zgodnie z poniższym procesem:

1. **Fork repozytorium** na swoje konto GitHub
2. **Utwórz nową gałąź** (branch) z odpowiednią nazwą opisującą wprowadzane zmiany:
   - `feature/nazwa-funkcji` dla nowych funkcji
   - `fix/nazwa-poprawki` dla poprawek błędów
   - `docs/opis-zmian` dla zmian w dokumentacji
3. **Wprowadź zmiany** w utworzonej gałęzi, przestrzegając standardów kodowania
4. **Dodaj testy** pokrywające nową funkcjonalność lub potwierdzające naprawę błędu
5. **Zaktualizuj dokumentację**, jeśli wprowadzone zmiany tego wymagają
6. **Wyślij Pull Request** do głównego repozytorium

## 📋 Standardy kodowania

Aby zachować spójność i czytelność kodu, prosimy o przestrzeganie następujących zasad:

- Używaj standardu formatowania zgodnego z konfiguracją ESLint i Prettier w projekcie
- Pisz zrozumiałe komentarze dla złożonych fragmentów kodu
- Dodawaj JSDoc dla publicznych funkcji i komponentów
- Stosuj się do zasad nazewnictwa przyjętych w projekcie
- Utrzymuj pokrycie testami na poziomie co najmniej 80%

## ✅ Code Review

Każdy Pull Request przechodzi następujący proces recenzji:

1. Automatyczne sprawdzenie przez CI/CD (testy, linting, typecheck)
2. Code review przez co najmniej jednego członka zespołu
3. Adresowanie uwag i poprawki w razie potrzeby
4. Zatwierdzenie i połączenie zmian z główną gałęzią

## 🧪 Testowanie

Dla każdej nowej funkcji lub poprawki błędu powinny zostać napisane odpowiednie testy:

- Testy jednostkowe dla logiki biznesowej
- Testy integracyjne dla komponentów współpracujących ze sobą
- Testy end-to-end dla krytycznych ścieżek użytkownika

## 📜 Licencja

Przyczyniając się do projektu Spellb00k, zgadzasz się na licencjonowanie swoich zmian na warunkach licencji MIT używanej przez projekt.

## 🙏 Podziękowania

Doceniamy każdy wkład w rozwój projektu - od zgłaszania błędów, przez propozycje usprawnień, po Pull Requesty z nowymi funkcjami. Dziękujemy za pomoc w tworzeniu lepszego narzędzia dla społeczności!

---

W razie pytań lub wątpliwości, nie wahaj się utworzyć Issue lub skontaktować się z zespołem przez kanały komunikacji projektu.

📘 **Spellb00k Team**
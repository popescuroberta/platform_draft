# platform_draft

Această platformă permite organizarea eficientă a evenimentelor și gestionarea staff-ului, cu sincronizarea datelor în timp real cu foi de calcul și generarea automată a rapoartelor. Ea asigură o operare eficientă pentru administratori, manageri și staff, oferind în același timp informații detaliate prin intermediul rapoartelor.

## 1. Obiectiv General

Dezvoltarea unei platforme pentru gestionarea evenimentelor și a staff-ului, cu sincronizarea în timp real a datelor cu foi de calcul și generarea automată de rapoarte.

## 2. Funcționalități Principale

### A. Autentificare și Roluri Utilizatori
- **Logare și Înregistrare:** Autentificare securizată prin email și parolă.
- **Autentificare cu JWT:** Asigură un control total asupra autentificării utilizatorilor.
- **Roluri Utilizatori:**
  - **Administrator:** Control total asupra evenimentelor și utilizatorilor.
  - **Manager:** Poate atribui sarcini și edita detaliile evenimentelor.
  - **Staff:** Poate vizualiza evenimentele și sarcinile atribuite.

### B. Gestionarea Evenimentelor
- **Creare, Editare și Ștergere Evenimente:** Administrare completă a detaliilor evenimentului.
- **Atribuire Staff/Manageri:** Atribuirea staff-ului și managerilor pentru evenimente specifice.
- **Integrare cu Calendar Interactiv:** Evenimentele sunt sincronizate cu un calendar interactiv.
- **Sincronizare cu Foi de Calcul:** Datele se actualizează automat în foi de calcul în timp real.

### C. Gestionarea Staff-ului
- **Organizare Roluri:** Înregistrarea și organizarea angajaților pe roluri specifice.
- **Atribuire Sarcini și Ture:** Atribuirea sarcinilor și tururilor angajaților.
- **Monitorizare Prezență și Performanță:** Urmărirea prezenței și performanței angajaților (check-in/check-out).
- **Sincronizare Automată cu Foi de Calcul:** Toate actualizările din aplicație sunt sincronizate cu foaia de calcul în timp real.

### D. Editare și Sincronizare cu Foi de Calcul
- **Actualizări în Timp Real:** Datele din aplicație sunt scrise într-un fișier de calcul stocat în cloud.
- **Sincronizare Bidirecțională:** Modificările manuale din foaia de calcul se reflectă în aplicație.
- **Integrare API:** Utilizarea Google Sheets API sau Microsoft Graph API pentru gestionarea foilor de calcul.

### E. Generare Rapoarte
- **Export Automatat de Rapoarte:** Rapoartele sunt exportate automat în format Excel și PDF.
- **Statistici și Analize:** Vizualizarea prezenței, distribuirea sarcinilor, evaluarea performanței și evaluarea evenimentelor.
- **Filtrare și Analiză Date:** Posibilitatea de a filtra și analiza datele.

### F. Notificări și Comunicare
- **Notificări pentru Sarcini și Program:** Alerta utilizatorilor cu privire la sarcini noi sau modificări de program.
- **Mesagerie Internă:** Funcționalitate de chat între manageri și staff.
- **Email-uri Automate:** Confirmări și rapoarte trimise automat prin email.

## 3. Tehnologii Utilizate

### A. Backend (Server și API-uri)
- **Node.js & Express:** Logica serverului pentru gestionarea proceselor aplicației.
- **PostgreSQL/MySQL:** Baze de date relaționale pentru stocarea datelor.
- **JWT:** Autentificare securizată.
- **Google Sheets API/Microsoft Graph API:** Sincronizare cu foi de calcul.

### B. Frontend (Web și Mobil)
- **React (Next.js) / Vue.js:** Framework-uri pentru crearea interfeței web.
- **React Native / Flutter:** Dezvoltare aplicații mobile cross-platform.
- **Tailwind CSS / Material UI:** Framework-uri de design pentru o interfață modernă și responsivă.

### C. Managementul Datelor și Rapoartelor
- **Google Sheets / Microsoft Excel:** Pentru sincronizarea și editarea datelor în timp real.
- **Chart.js / D3.js:** Vizualizarea datelor și statisticilor.
- **PDFKit:** Generarea de rapoarte PDF.

### D. Hosting & Deployment
- **Vercel / Netlify:** Deployment pentru frontend.
- **AWS / Firebase / Heroku:** Deployment pentru backend.
- **Google Drive / OneDrive:** Stocare cloud pentru foile de calcul.

## 4. Fluxul General de Utilizare

1. **Login:** Utilizatorii se loghează folosind email-ul și parola.
2. **Creare Eveniment:** Administratorul creează un eveniment și atribuie staff-ul.
3. **Sincronizare Date:** Evenimentul și atribuțiile sunt salvate și sincronizate într-o foaie de calcul.
4. **Gestionare Sarcini:** Staff-ul vizualizează sarcinile și își înregistrează progresul.
5. **Monitorizare în Timp Real:** Managerul monitorizează evenimentul și statusul staff-ului.
6. **Generare Rapoarte:** La final, aplicația generează rapoarte pe baza foilor de calcul actualizate.

## 5. Instrucțiuni de Instalare
!UNDER DEVELOPMENT AT THIS MOMENT

1. Clonează repository-ul:  
   ```bash
   git clone https://github.com/popescuroberta/platform_draft.git
   ```

2. Instalează dependențele:  
   Pentru backend:  
   ```bash
   cd backend  
   npm install
   ```
   Pentru frontend:  
   ```bash
   cd frontend  
   npm install
   ```

3. Setează variabilele de mediu:  
   Creează un fișier `.env` și adaugă cheile necesare (de ex., secretul JWT, URL-ul bazei de date, chei API).

4. Pornește server-ul de dezvoltare:  
   Backend:  
   ```bash
   npm start
   ```
   Frontend:  
   ```bash
   npm run dev
   ```

5. Accesează aplicația în browser la `http://localhost:3000`.

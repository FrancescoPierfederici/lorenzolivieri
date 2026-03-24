

## Piano: Ottimizzazione Mobile-First (solo mobile)

Tutte le modifiche usano classi Tailwind responsive — il desktop resta **identico**.

### 1. LatestBookSection.tsx — Layout split verticale mobile
- Su mobile (< sm): mostrare l'immagine come blocco visibile in alto (~45vh), poi il testo sotto su sfondo solido `bg-background`
- Su sm+: layout attuale invariato (immagine di sfondo + overlay + testo sovrapposto)

### 2. BestsellerSection.tsx — Layout split verticale mobile
- Stesso approccio: immagine visibile in alto su mobile, testo sotto
- Su sm+: invariato

### 3. BooksSection.tsx — Hint di scroll mobile
- Aggiungere testo "Scorri →" sotto il carosello, visibile solo su mobile (`sm:hidden`)

### 4. CTA buttons — Touch targets mobile
- Padding `py-4` su mobile nei due section sopra (attualmente `py-3.5`)

### File modificati
- `src/components/LatestBookSection.tsx`
- `src/components/BestsellerSection.tsx`
- `src/components/BooksSection.tsx`

### Cosa NON cambia
- Tutto il layout desktop (sm+ in su)
- Nessuna nuova dipendenza
- Colori, font, stile invariati


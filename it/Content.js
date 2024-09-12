export default {
    footer: {
        help: `Qualcosa non funziona? Chiedi nel 
        <a href="{0}" target="_blank">Forum</a> o tramite <a href="{1}">e-mail</a> o
        <a href="{2}">Chat</a> per assistenza.`,
        credit: `{0}, creato da <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `Benvenuto su DOM Cloud! 🎉`,
        description: ` <p>Salve, {0}</p>
        <p>
          Grazie per esserti unito alla flotta di DOM Cloud, per raggiungere la libertà
          di avere successo su Internet!
        </p>
        <p>
          Per servirti al meglio, dobbiamo confermare la regione in cui ti trovi attualmente.
          Questo influenzerà anche le tue opzioni di pagamento e la posizione predefinita del server, che puoi cambiare in seguito:
        </p>
        `,
        createWebsiteHint: `Pronto? Creiamo il tuo primo sito web.`,
        createWebsiteBtn: `Crea un sito web`,
        emailConfirmation: `
            Sembra che tu debba verificare l'e-mail <strong>{0}</strong>
            prima di poter continuare.<br />
            Per favore, controlla la tua casella di posta elettronica (e la cartella spam).
        `,
        emailConfirmationHint: `E-mail non ancora arrivata?`,
        emailConfirmationBtn: `Invia di nuovo l'e-mail di conferma`,
        emailConfirmationSent: "E-mail di conferma inviata a <strong>{0}</strong>!",
        changeCountryBtn: `Cambia paese`,
    },
    notification: {
        freeUserGuideTitle: `Benvenuto a bordo!`,
        freeUserGuideHint: `Grazie per averci scelto come tua piattaforma cloud 🥳 Se non l'hai ancora fatto,
          consulta la nostra <a href="{0}" target="_blank">guida introduttiva</a>.
          Vuoi vivere l'esperienza completa? Prova a <a href="{1}">aggiornare il tuo piano</a> per sbloccare ulteriori funzionalità,
          come domini personalizzabili gratuiti, accesso completo alle API di terze parti,
          Docker e servizi di backend personalizzati <a href={2} target="_blank">e molto altro</a>!`,
        empty: 'Niente da vedere qui',
    },
    purchaseConfirmation: {
        purchasedHint: "Grazie. Una volta che il nostro sistema ha verificato il tuo pagamento, verrà inviata una e-mail di conferma al tuo indirizzo e-mail.",
        purchaseCancel: "Il tuo pagamento è stato annullato.",
    },
    accountDeletion: {
        title: `Elimina il tuo account`,
        hint: `ATTENZIONE! L'eliminazione dell'account è permanente e non possiamo annullare questa azione. Se hai un host o un dominio registrato, devi prima eliminarli. Contattaci se hai bisogno di assistenza.`,
        prompt: `Per favore, inserisci il tuo indirizzo e-mail per confermare l'eliminazione dell'account.`,
        disabled: `Non puoi eliminare questo account se c'è un hosting o un dominio registrato.`,
    },
    hostCreate: {
        chooseTemplate: `Scegli un modello per iniziare`,
        startFromScratch: `Inizia da zero`,
        uploadFileHint: `Carica un file o inserisci l'URL per analizzare il contenuto`,
        readingTheFile: `Lettura del file...`,
        readingFiles: `Lettura di {0} di {1} file...`,
        readingZipFile: `Lettura del file zip...`,
        compressingZipFile: `Compressione in un file zip...`,
        uploadingFiles: `Caricamento file... ({0} di {1})`,
        uploadCompleted: `Caricamento completato ({0} file con una dimensione totale di {1})`,
        uploadError: `Caricamento fallito con codice di stato {0}`,
        emptyZipFile: `Nessun file trovato nello zip`,
        noFileSelected: `Nessun file selezionato`,
        exceededFileSizeLimit: `La dimensione del file ({0}) supera il limite ({1}), prova a caricarlo prima su GitHub e inserisci il link qui.`,
        missingTemplate: `Recupero del modello di dati fallito. Il file potrebbe essere mancante.`,
        checkingRepo: `Questo repository è in fase di verifica...`,
        cloneWithDeployKey: `Clonazione del repository con chiave di distribuzione.`,
        uploadDirectory: `Carica una directory`,
        uploadZipFile: `Carica un file zip`,
        dropDirectory: `Trascina la directory qui...`,
        dropZipFile: `Trascina il file zip qui...`,
        dropWhatsThat: `Non è un file zip o una directory...`,
        dropMultiple: `(Per favore, trascina solo un file o una directory)`,
        readingDroppedDirectory: `Lettura della directory trascinata...`,
        readingDroppedZipFile: `Lettura del file zip trascinato...`,
        orPasteUrl: "... o incolla URL del repository Git/Zip",
        attachDeployKey: `Allega chiave di distribuzione`,
        selectFramework: `Dicci il framework o il linguaggio`,
        applyFramework: `Applica questo modello`,
        attachDeployKeyHint: `Se il tuo repository è impostato come privato, puoi usare 
            le chiavi di distribuzione per accedervi. Abbiamo creato una chiave di distribuzione asimmetrica 
            per te, devi aggiungere questa chiave pubblica al tuo repository. `,
        attachDeployKeyLearnMore: `Scopri di più sull'integrazione di GitHub 
            con le chiavi di distribuzione.`,
        attachDeployKeyOpenConfig: `Apri la configurazione delle chiavi di distribuzione del repository`,
        attachDeployKeyConfirm: `Ho aggiunto questa chiave pubblica`,
    },
    hostConnection: {
        title: `Verifica della connessione`,
        description: `
        <p>
            Questa pagina verifica se questo sito web è accessibile
            da Internet.
        </p>
        <p>
            Ci sono tre requisiti per un sito web per essere
            accessibile da Internet:
        </p>
        <ul>
            <li>Il server DNS deve essere disponibile</li>
            <li>L'indirizzo IP restituito deve essere corretto</li>
            <li>Il contenuto del server deve essere accessibile</li>
        </ul>
        <p>
            Se uno dei requisiti sopra menzionati fallisce, questo sito web potrebbe
            non essere accessibile da Internet.
        </p>`,
        dnsOffTitle: `Nessun nameserver`,
        dnsOffContent: `Questo sito web non ha un nameserver. Potrebbe essere configurato esternamente.`,
        dnsManagedTitle: `DNS gestito`,
        dnsManagedContent: `Il DNS di questo sito web è gestito da DOM Cloud.`,
        dnsMixedTitle: `DNS misto`,
        dnsMixedContent: `Il DNS di questo sito web ha una configurazione
            mista. Assicurati che il nameserver sia
            configurato correttamente. Non mescolare le nostre
            voci con altre voci!`,
        dnsExternalTitle: `DNS gestito esternamente`,
        dnsExternalContent: `Il DNS di questo sito web è gestito da un fornitore di terze parti.`,
        pingNoIpTitle: `Indirizzo IP non trovato`,
        pingNoIpContent: `Il server DNS non restituisce un indirizzo IP.`,
        pingNoIp6Title: `Nessun IPv6`,
        pingNoIp6Content: `Il DNS di questo sito web non ha un indirizzo IPv6. Potrebbe non essere disponibile per gli utenti IPv6.`,
        pingWrongIpTitle: `Indirizzo IP errato`,
        pingWrongIpContent: `Il DNS di questo sito web restituisce un indirizzo IP errato. 
            Potrebbe fornire contenuti sbagliati o essere dietro un proxy.`,
        pingNoWwwTitle: `Indirizzo IP della sottodirectory www.* non trovato`,
        pingNoWwwContent: ` 
            Alcune persone potrebbero non essere in grado di accedere a questo
            sito web se lo precedono con www. Si consiglia di
            impostare un reindirizzamento per la sottodirectory www.`,
        pingOkTitle: `Indirizzo IP corretto`,
        pingOkContent: `Il DNS di questo sito web restituisce l'indirizzo IP corretto.`,
        webNoHttpTitle: `Sito web non accessibile`,
        webNoHttpContent: `Questo sito web non è accessibile tramite HTTP.`,
        webNoHttpsTitle: `Sito web non accessibile tramite HTTPS`,
        webNoHttpsContent: `Questo sito web non è accessibile tramite HTTPS.`,
        webRedirectTitle: `Reindirizzamento HTTP`,
        webRedirectContent: `Questo sito web esegue un reindirizzamento a un'altra pagina`,
        web404Title: `HTTP 404`,
        web404Content: `Questo sito web non è stato trovato.`,
        webErrorTitle: `Errore del server`,
        webErrorContent: `Questo sito web ha risposto con un errore del server.`,
        webWrongContentTitle: `Contenuto sbagliato`,
        webWrongContentContent: `Questo sito web restituisce un contenuto sbagliato. Potrebbe avere un problema di configurazione 
            o restituire un altro indirizzo IP. È consigliabile consolidare 
            i sottodomini www e non-www.`,
        webOkTitle: `Sito web OK`,
        webOkContent: `Questo sito web è accessibile tramite HTTP e HTTPS e non restituisce errori.`,
    },
    hostFirewall: {
        title: `Controlla Firewall`,
        description: `
        <p>
            Il firewall aiuta a proteggere il tuo sito web dall'essere sfruttato in caso di
            attacco hacker bloccando tutto il traffico in uscita eccetto quelli nella
            <a href="{0}" target="_blank" rel="noreferrer">whitelist</a>.
        </p>
        <p>
            A seconda dell'uso del tuo sito web, potresti voler disattivare il
            firewall se il tuo sito richiede API di terze parti o altre forme di 
            comunicazione non elencate nella whitelist.
        </p>
        <p>Il firewall si applica al dominio e a tutti i sottodomini al suo interno. È 
        obbligatoriamente attivato per gli utenti con piano gratuito. Per disattivarlo, 
        devi avere un piano di abbonamento (Lite o superiore).</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">Leggi di più</a></p>
        `,
        offTitle: `Il firewall è spento`,
        offContent: `<p>
            Tutto il traffico in uscita è consentito. Mantieni il tuo sito sicuro, per favore!
        </p>`,
        offBtn: `Accendilo`,
        onTitle: `Il firewall è attivo`,
        onContent: `<p>
            Tutte le connessioni in uscita di terze parti sono bloccate eccetto quelle nella whitelist.<br/>
            Disattivalo per rimuovere questa limitazione.
        </p>`,
        onBtn: `Spegni`,
    },
    hostNginx: {
        title: `Controlla Configurazione NGINX`,
        description: `
        <p>
            NGINX è il nostro principale gateway server che serve porte HTTP (80 e 443).
            Per far funzionare il tuo sito web, la tua app web deve essere correttamente configurata
            qui. Qui puoi visualizzare la tua configurazione attuale e apportare modifiche 
            tramite l'interfaccia utente preconfigurata o la configurazione completa di NGINX come script YAML.
        </p>
        <p>
            NGINX serve tipicamente contenuti statici prima, configurati tramite il percorso <code>root</code>,
            o inoltra la richiesta dinamicamente alla tua App tramite PHP-FPM <code>fastcgi</code> 
            o Passenger <code>passenger</code> se tale file non esiste.
        </p>
        <p>
            La configurazione NGINX è diversa per i sottodomini. Se i contenuti del tuo sottodominio si trovano 
            all'interno di questo sito web, inserisci il nome del sottodominio qui sotto per configurarlo. 
            Inoltre, prenditi un momento per leggere la nostra <a href="{0}" target="_blank" rel="noreferrer">
            Configurazione NGINX</a> o contattaci in caso di problemi.
        </p>
        `,
        subdomain: `Sottodominio`,
        error: `ERRORE: non esiste alcuna configurazione per {0}`,
        errorFetch: "C'è stato un errore nel recupero della configurazione NGINX",
        notExist: `ERRORE: non esiste alcuna configurazione per {0}`,
        tabCurrent: `Configurazione NGINX attuale`,
        tabEdit: `Modifica interattivamente`,
        tabPreview: `Anteprima modifiche`,
        labels: {
            subfolderConfig: "Configurazione sottocartella",
            rootConfig: "Configurazione root",
            rootPath: "Percorso root",
            rootIsAlias: "Root è alias",
            resolveType: "Tipo di risoluzione",
            resolveTypes: {
                static: "Statico",
                php: "PHP-FPM",
                app: "App Phusion",
                gls: "App Generica",
                socat: "Inoltra Porta",
                deny: "Rifiuta Richieste",
            },
            staticMode: "Modalità statica",
            staticModes: {
                default: "Predefinito",
                smart: "Intelligente",
                autoindex: "Auto-index",
                index: "Indice root",
            },
            static404Path: "Percorso file HTML 404",
            phpMode: "Modalità PHP",
            phpModes: {
                default: 'Predefinito',
                smart: 'Intelligente',
                indexSafe: 'Indice root - Sicuro',
                index: 'Indice root - Standard',
                always: 'Indice root - Sempre',
            },
            socatPort: 'Inoltra a Porta',
            appMode: 'Modalità App',
            appEntry: 'File di avvio App',
            appBin: 'Percorso binario App',
            appModes: {
                default: 'Auto',
                node: 'Node',
                python: 'Python',
                ruby: 'Ruby',
            },
            glsCmd: 'Comando App',
            appEnv: 'Chiavi Ambiente',
            appDev: 'Modalità Sviluppo?',
            appRoot: 'Directory di lavoro',
            addSubfolderConfig: 'Aggiungi configurazione sottocartella',
        },
        hints: {
            root: "I file statici da {0} verranno risolti in {1}",
            socat: "Inoltra le richieste dei client alla porta {0}",
            app: "Esegui il script {0} da {1} utilizzando {2} da {3}",
            gls: "Esegui \"{0}\" da {1} con la porta $PORT assegnata",
            staticModes: {
                default: 'Serve file statici',
                smart: 'Prova a trovare il file HTML se possibile',
                index: 'Serve index.html root se non viene trovato alcun file',
                autoindex: 'Consente di elencare i file del server se non viene trovato index.html',
                with404: 'o mostra la pagina di errore 404 personalizzata'
            },
            phpModes: {
                default: 'Serve index.php o file php che terminano con .php',
                smart: 'Prova a trovare il file PHP senza .php',
                indexSafe: 'Serve index.php root ma non tentare se il client cerca un file',
                index: 'Serve index.php root quando non viene trovato alcun file statico',
                always: 'Consenti richieste PATH_INFO gestite da PHP',
            },
            deleteSubfolderPrompt: "Sei sicuro di voler eliminare la configurazione della sottocartella per {0}?",
            inputSubfolderPrompt: "Inserisci la sottocartella (deve iniziare con '/' e senza spazi)",
            inputSubfolderNotValid: "Input della sottocartella non valido",
            inputSubfolderNotUnique: "Il valore della sottocartella deve essere univoco rispetto ad altre voci di sottocartella",
        }
    },
    hostDNS: {
        title: `Controlla Configurazione DNS`,
        description: `<p>Questa pagina ti aiuta a cambiare i record DNS se punti il tuo server di nomi di dominio a noi. 
        </p> <p>In alternativa, puoi anche modificare i record DNS tramite Webmin.</p>`,
        helpText: `Aiuto sulla configurazione`,
        error: `ERRORE: non esiste alcuna configurazione per {0}`,
        errorFetch: "C'è stato un errore nel recupero della configurazione DNS",
        notExist: `ERRORE: non esiste alcuna configurazione per {0}`,
        tabCurrent: `Impostazioni DNS attuali`,
        tabEdit: `Modifica DNS interattivamente`,
        tabPreview: `Anteprima modifiche`,
        existingRecords: `Record DNS esistenti`,
        addedRecords: `Record DNS aggiunti`,
    },
    hostLog: {
        runningList: 'Elenco processi in esecuzione',
        logTypeError: 'Log Errori NGINX',
        logTypeAccess: 'Log Accessi NGINX',
        logTypePassenger: 'Log App Passenger',
        logTypeErrorHint: 'Questo log contiene i log errori NGINX e PHP per il giorno corrente',
        logTypeAccessHint: 'Questo log contiene i log accessi NGINX per il giorno corrente',
        logTypePassengerHint: 'Questo log contiene il log dell\'app Passenger attualmente in esecuzione',
        errorFetch: "C'è stato un errore nel recupero del file di log",
        subdomain: `Sottodominio`,
        maxLines: `Linee massime`,
        emptyLog: `Questo log è attualmente vuoto`,
    },
    hostManage: {
        title: `Gestisci Accesso al Sito Web`,
        description: `
        <p>
            Usa i seguenti accessi di login per caricare o modificare il contenuto del tuo sito web.
            <a href="{0}" target="_blank">Per saperne di più</a>.
        </p>`,
        openPorts: `Porte Aperte`,
        openPortsDescription: `Porte aperte per modificare il tuo server`,
        onlineEditor: `Editor Online`,
        webminInfo: `<p>
            Webmin viene utilizzato per gestire i file del server e
            le configurazioni tramite interfaccia web.
        </p>
        <p>Verrai automaticamente loggato.</p>`,
        filestashInfo: `<p>
            Filestash viene utilizzato per gestire i file del server 
            utilizzando l'interfaccia web di connessione SFTP
            (per caricare file, utilizzare il drag-and-drop).
        </p>
        <p>Verrai automaticamente loggato.</p>`,
        phpMyAdminInfo: ` <p>
        phpMyAdmin viene utilizzato per gestire il database MySQL
        tramite interfaccia web.
        </p>
        <p class="mb-0">
            Devi inserire manualmente le credenziali.
        </p>`,
        phpPgAdminInfo: `  <p>
        phpPgAdmin viene utilizzato per gestire il database PostgreSQL
        tramite interfaccia web.
        </p>
        <p class="mb-0">
            Devi inserire manualmente le credenziali.
        </p>`,
        websshInfo: `<p>
            WebSSH viene utilizzato per aprire una connessione SSH tramite
            interfaccia web.
            </p>
            <p class="mb-0">Verrai automaticamente loggato.</p>`,
        vscodeInfo: ` <p>
            Apri VS Code per modificare file ed eseguire comandi
            direttamente sul tuo server.<br />
            Assicurati di aver già installato VS Code e
            l'estensione Remote SSH.
        </p>
        <p>
            Se desideri aprire un'altra cartella, inseriscila qui
            e premi invio:
        </p>`,
    },
    hostTransfer: {
        warn: `ATTENZIONE! Il trasferimento del sito web significa spostarlo su un altro account. Perderai l'accesso ai tuoi dati poiché il proprietario è cambiato!`,
        currentOwner: `Proprietario attuale: {0}`,
        hint: `Inserisci l'email dell'account che desideri ricevere:`,
        disabled: `Non puoi trasferire questo sito web mentre non è attivo.`,
        member: `I membri non possono trasferire questo sito web.`,
        action: `Trasferisci!`,
    },
    hostDelete: {
        warn: `ATTENZIONE! Le eliminazioni dell'host sono permanenti e non possiamo annullare l'azione. Si prega di essere certi.`,
        hint: `Inserisci il nome utente del tuo sito web per accettare l'eliminazione dell'host.`,
        member: `I membri non possono eliminare questo sito web.`,
        action: `Elimina!`,
    },
    hostCname: {
        disabled: `Non puoi cambiare il nome del dominio quando questo sito web non è attivo.`,
        curHint: `Nome del dominio attuale: `,
        hint: `Puoi cambiare il nome del dominio principale del sito web qui. Inserisci il nuovo nome di dominio:`,
        warn: `Questo renderà il tuo sito web inutilizzabile per il dominio corrente! Si prega di aggiornare DNS nel nuovo dominio in anticipo per ridurre al minimo i tempi di inattività.`,
        member: `I membri non possono cambiare il dominio di questo sito web.`,
        action: `Cambia il nome del dominio!`,
    },
    hostRename: {
        disabled: `Non puoi cambiare il nome utente quando questo sito web non è attivo.`,
        hint: `Puoi cambiare il nome utente del tuo sito web qui. Inserisci il nuovo nome utente:`,
        warn: `Questo cambierà anche il nome utente del database! Il tuo sito web potrebbe essere inutilizzabile finché non lo cambi nella configurazione del sito web.`,
        member: `I membri non possono cambiare il nome utente di questo sito web.`,
        action: `Rinomina questo nome utente!`,
    },
    hostPasswd: {
        disabled: `Non puoi cambiare la password quando questo sito web non è attivo.`,
        hint: `Puoi cambiare la password del tuo sito web qui. Inserisci la nuova password:`,
        warn: `Questo cambierà anche la password del database! Il tuo sito web potrebbe essere inutilizzabile finché non lo cambi nella configurazione del sito web.`,
        member: `I membri non possono cambiare la password di questo sito web.`,
        action: `Aggiorna questa password!`,
    },
    hostCheck: {
        title: `Controllo DNS obbligatorio`,
        prompt: `Questo controlla se {0} può essere risolto tramite il DNS di Google prima di essere aggiunto al nostro server.`,
        valid: `Questo dominio è risolvibile`,
        validNote: `Questo dominio sarà risolvibile una volta che le configurazioni aggiuntive saranno aggiunte automaticamente per te`,
        incorrect: `Record A+AAAA/CNAME errato per questo dominio, configuralo prima di continuare.`,
        missing: `Record A+AAAA/CNAME mancante per questo dominio, configuralo prima di continuare.`,
        loading: `...`,
        retrying: `...`,
    },
    domain: {
        createInfo: `Tieni presente che stai registrando solo un dominio. Se desideri
            gestire il sito web, <a href="{0}" target="_blank">crea il sito web qui</a>`,
        transferInfo: `Assicurati di avere i diritti di accesso per trasferire il
            dominio da un altro servizio. Ti contatteremo se il
            trasferimento del dominio fallisce dopo il pagamento, ma se non riesci a
            provare la proprietà del dominio tramite il codice EPP o i requisiti
            documentali esistenti, non possiamo aiutarti. Secondo i Termini di Servizio non
            riceverai un rimborso per l'acquisto di un dominio in nessun
            caso.`,
        eppTransferInfo: `Puoi trasferire il tuo dominio a un altro registrar
            utilizzando questo codice EPP. Il trasferimento funziona se il dominio non è bloccato`,
        dnsManagedHint: `Non forniamo un'interfaccia utente per record DNS personalizzati. <br />
          Se i tuoi nameserver sono impostati su <b>{0}</b> allora i DNS sono gestiti da
          <a href="{1}" target="_blank">i rispettivi DNS del sito web</a>.`,
        dnsManagedOpen: `Se vuoi cambiarlo comunque, gestiscilo tramite il nostro
        <a href="{0}" target="_blank">interfaccia utente del registrar</a>. Fai clic su password dimenticata
        e inserisci la tua email corrente per impostare la password la prima volta.`
    },
};

export default {
    footer: {
        help: `Werkt iets niet? Vraag om hulp op
        <a href="{0}" target="_blank">het forum</a> of via <a href="{1}">email</a> of
        <a href="{2}">chat</a>.`,
        credit: `{0}, gemaakt door <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `Welkom bij {0}! 🎉`,
        description: ` <p>Hallo, {0}</p>
        <p>
          Bedankt dat je lid bent geworden van {1} om de vrijheid van webontwikkelaars op internet te bereiken!
        </p>
        <p>
          Om je optimaal van dienst te kunnen zijn, moeten we bevestigen in welke regio je je momenteel bevindt.
          Dit heeft ook invloed op je betalingsopties en de standaard serverlocatie, die je later kunt wijzigen:
        </p>
        `,
        createWebsiteHint: `Klaar? Laten we je eerste website maken.`,
        createWebsiteBtn: `Maak een website`,
        emailConfirmation: `
            Het lijkt erop dat je de email <strong>{0}</strong> moet verifiëren
            voordat je verder kunt gaan.<br />
            Controleer je email (en spam) inbox.
        `,
        emailConfirmationHint: `Email nog niet ontvangen?`,
        emailConfirmationBtn: `Verificatie-email opnieuw verzenden`,
        emailConfirmationSent: "Verificatie-email naar <strong>{0}</strong> is verzonden!",
        changeCountryBtn: `Land wijzigen`,
    },
    notification: {
        freeUserGuideTitle: "Welkom aan Boord!",
        freeUserGuideHint: "Bedankt dat je ons hebt gekozen als je cloudplatform 🥳 Als je dat nog niet hebt gedaan, probeer dan onze <a href=\"{0}\" target=\"_blank\">Startgids</a> te lezen. Onze volledige ervaring nodig? Probeer <a href=\"{1}\">je plan te upgraden</a> om de API-firewall, gratis domeinbanners te verwijderen en <a href=\"{2}\" target=\"_blank\">meer functies</a> te ontgrendelen!",
        lockedUserGuideTitle: "Welkom aan Boord!",
        lockedUserGuideHint: "Bedankt dat je ons hebt gekozen als je cloudplatform 🥳 Maak je eerste website <a href=\"{0}\">hier</a>. Je wordt mogelijk gevraagd om je GitHub-account te koppelen om dit account te verifiëren. Je kunt ook gewoon <a href=\"{1}\">je plan upgraden</a> om je account direct te verifiëren samen met <a href=\"{2}\" target=\"_blank\">meer functies</a> als een abonnerend account.",
        accountNoticeTitle: "⚠️ Je account kan worden geschorst",
        accountNoticeHint: "Je account is geschorst om deze reden: {0}. Je kunt <a href=\"{1}\">je plan upgraden</a> om dit probleem op te lossen.",
        empty: "Niets te zien hier"
    },
    purchaseConfirmation: {
        purchasedHint: "Bedankt. Als ons systeem je betaling heeft bevestigd, wordt er een bevestigings-email naar je emailadres gestuurd.",
        purchaseCancel: "Je betaling is geannuleerd.",
    },
    accountDeletion: {
        title: `Je account verwijderen`,
        hint: `LET OP! Het verwijderen van het account is permanent en we kunnen de actie niet ongedaan maken. Als je een host of geregistreerd domein hebt, moet je deze eerst verwijderen. Neem contact met ons op als je hulp nodig hebt.`,
        prompt: `Schrijf je email om akkoord te gaan met het verwijderen van het account.`,
        disabled: `Je kunt dit account niet verwijderen als er nog een hosting of geregistreerd domein is.`,
    },
    hostNeedInvite: {
        title: "Uitnodigingscode vereist",
        hint: "Hallo 👋 Om van ons gratis plan te kunnen genieten, moeten we je vertrouwen via een uitnodigingscode of een link naar een GitHub-account. De uitnodigingscode komt van de persoon die dit platform aan je heeft aanbevolen.",
        hintBtn: "Verlenen!",
        hintGitHub: "Als alternatief kun je je GitHub-account koppelen. Je GitHub-account moet <b>zes maanden of ouder zijn en een of meer volgers hebben</b>.",
        githubFail: "Sorry! Je gekoppelde GitHub-account is nog niet vertrouwd. Je kunt proberen het juiste account opnieuw te koppelen dat aan onze vereisten voldoet.",
        altHint: "Als je deze stap wilt overslaan, kun je <a href=\"{0}\">minstens één keer upgraden</a>. Upgraden bevestigt dat je echt een mens bent en zonder uitnodigingscode of extra accounts te koppelen vertrouwd kunt worden 😄."
    },
    hostCreate: {
        chooseTemplate: `Kies een sjabloon om mee te beginnen`,
        startFromScratch: `Begin vanaf nul`,
        uploadFileHint: `Upload een bestand of voer de URL in om de inhoud te analyseren`,
        readingTheFile: `Het bestand lezen...`,
        readingFiles: `{1} bestanden lezen van {0}...`,
        readingZipFile: `De zip-bestand lezen...`,
        compressingZipFile: `In een zip-bestand comprimeren...`,
        uploadingFiles: `Bestanden uploaden... ({1} van {0})`,
        uploadCompleted: `Upload voltooid ({1} bestand(en) met een totale grootte van {0})`,
        uploadError: `Upload mislukt met statuscode {0}`,
        emptyZipFile: `Geen bestand gevonden in de zip`,
        noFileSelected: `Geen bestand geselecteerd`,
        exceededFileSizeLimit: `De bestandsgrootte ({0}) overschrijdt de limiet ({1}), probeer het eerst naar GitHub te uploaden en plaats hier de link.`,
        missingTemplate: `Het ophalen van het gegevenssjabloon is mislukt. Misschien ontbreekt het bestand nog steeds.`,
        checkingRepo: `Deze repo controleren...`,
        cloneWithDeployKey: `Repo wordt gekloond met een implementatiesleutel.`,
        uploadDirectory: `Upload een map`,
        uploadZipFile: `Upload een zip-bestand`,
        dropDirectory: `Laat die map vallen...`,
        dropZipFile: `Laat dat zip-bestand vallen...`,
        dropWhatsThat: `Dat is geen zip-bestand of map...`,
        dropMultiple: `(Laat alsjeblieft slechts één bestand of map vallen)`,
        readingDroppedDirectory: `De neergezette map lezen...`,
        readingDroppedZipFile: `Het neergezette zip-bestand lezen...`,
        orPasteUrl: "... of plak Git Repo/Zip URL",
        attachDeployKey: `Koppel implementatiesleutel`,
        selectFramework: `Vertel ons het framework of de taal`,
        applyFramework: `Dit sjabloon toepassen`,
        attachDeployKeyHint: `Als je repository privé is ingesteld, kun je
            implementatiesleutels gebruiken om toegang te krijgen. We hebben een asymmetrische implementatiesleutel voor je gemaakt, je moet deze publieke sleutel toevoegen aan je repository.`,
        attachDeployKeyLearnMore: `Meer weten over GitHub-integratie met implementatiesleutels.`,
        attachDeployKeyOpenConfig: `Open de implementatiesleutelconfiguratie van de repository`,
        attachDeployKeyConfirm: `Ik heb deze publieke sleutel toegevoegd`,
    },
    hostConnection: {
        title: `Verbinding controleren`,
        description: `
            <p>
                Deze pagina controleert of deze website toegankelijk is vanaf het internet.
            </p>
            <p>
                Er zijn drie voorwaarden voor een website om toegankelijk te zijn vanaf het internet:
            </p>
            <ul>
                <li>De DNS-server moet beschikbaar zijn</li>
                <li>Het geretourneerde IP-adres moet correct zijn</li>
                <li>De inhoud van de server moet toegankelijk zijn</li>
            </ul>
            <p>
                Als een van de bovenstaande voorwaarden niet wordt voldaan, is deze website mogelijk niet toegankelijk vanaf het internet.
            </p>`,
        dnsOffTitle: `Geen naamserver`,
        dnsOffContent: `Deze website heeft geen naamserver. Het kan extern worden geconfigureerd.`,
        dnsNotExistTitle: "Domein bestaat niet",
        dnsNotExistContent: "Dit domein is niet gevonden of is mogelijk niet geregistreerd. Heeft u het gekocht?",    
        dnsManagedTitle: `DNS beheerd`,
        dnsManagedContent: `De DNS van deze website wordt beheerd door {0}.`,
        dnsMixedTitle: `DNS is gemengd`,
        dnsMixedContent: `De DNS van deze website heeft een gemengde configuratie. Zorg ervoor dat de naamserver correct is geconfigureerd. Meng onze records niet met andere records!`,
        dnsExternalTitle: `Extern beheerde DNS`,
        dnsExternalContent: `De DNS van deze website wordt beheerd door een derde partij.`,
        pingNoIpTitle: `IP-adres niet gevonden`,
        pingNoIpContent: `De DNS-server retourneert geen IP-adres.`,
        pingNoIp6Title: `Geen IPv6`,
        pingNoIp6Content: `De DNS van deze website heeft geen IPv6-adres. Het kan niet beschikbaar zijn voor IPv6-gebruikers.`,
        pingWrongIpTitle: `Onjuist IP-adres`,
        pingWrongIpContent: `De DNS van deze website retourneert een onjuist IP-adres. Het kan de juiste inhoud niet leveren of het bevindt zich achter een proxy.`,
        pingNoWwwTitle: `IP-adres voor www.* subdomein niet gevonden`,
        pingNoWwwContent: `
                Sommige mensen kunnen deze website mogelijk niet bereiken als ze www ervoor plaatsen. Het is aanbevolen om een www subdomein omleiding in te stellen.`,
        pingNoWwwFix: "Instellen www.* subdomein omleiden",
        pingOkTitle: `IP-adres OK`,
        pingOkContent: `De DNS van deze website retourneert het juiste IP-adres.`,
        webNoHttpTitle: `Website is niet toegankelijk`,
        webNoHttpContent: `Deze website is niet toegankelijk via HTTP.`,
        webNoHttpsTitle: `HTTPS niet beschikbaar`,
        webNoHttpsContent: `Deze website heeft mogelijk geen HTTPS-certificaat geïnstalleerd, of het is verlopen of niet correct geconfigureerd.`,
        pingNoHttpsFix: "HTTPS-certificaat installeren",
        webBadHttpTitle: `Website retourneert een fout`,
        webBadHttpContent: `Deze website retourneert een 500 of 403 fout. Het is mogelijk niet correct geconfigureerd (controleer NGINX/App instellingen!).`,
        webBadRedirectTitle: `Website heeft slechte omleidingen`,
        webBadRedirectContent: `Deze website leidt bezoekers om naar buiten het domein. Het is mogelijk niet correct geconfigureerd (controleer de Basis URL instellingen!).`,
        webInfiniteRedirectTitle: "Website heeft oneindige omleidingen",
        webInfiniteRedirectContent: "Deze website verwerkt momenteel oneindige HTTPS-verzoeken, het staat mogelijk al achter een HTTPS-proxy.",
        webInfiniteRedirectFix: "HTTPS-omleiding uitschakelen",
        webBadWwwTitle: "www.* subdomein is niet toegankelijk",
        webBadWwwContent: "Het www-subdomein is niet toegankelijk of retourneert een fout.",
        webInsecureTitle: "Website biedt onveilige HTTP-verzoeken aan",
        webInsecureContent: "Deze website leidt niet door naar het HTTPS-protocol, dit wordt niet aanbevolen en kan cookieproblemen veroorzaken.",
        webInsecureContentFix: "Forceer HTTPS-omleiding",
        webOkTitle: `Website is OK`,
        webOkContent: `Deze website is toegankelijk via HTTP en HTTPS.`,
    },
    hostFirewall: {
        title: `Firewall controleren`,
        description: `
            <p>
                Een firewall helpt uw website te beschermen tegen misbruik in geval van een hackerinbraak door al het uitgaande verkeer te blokkeren behalve dat op de <a href="{0}" target="_blank" rel="noreferrer">witte lijst</a>.
            </p>
            <p>
                Afhankelijk van uw gebruik van de website, wilt u mogelijk de firewall uitschakelen als uw website derde partij API's of andere vormen van communicatie vereist die niet op de witte lijst staan.
            </p>
            <p>De firewall is van toepassing op het domein en alle subdomeinen. Het wordt verplicht ingeschakeld voor gebruikers met een gratis plan. Om het uit te schakelen moet u een abonnement hebben (Lite of hoger).</p>
            <p><a href="{1}" target="_blank" rel="noreferrer">Meer lezen</a></p>
            `,
        offTitle: `Firewall is uitgeschakeld`,
        offContent: `<p>
                Al het uitgaande verkeer is toegestaan. Houd uw site veilig, alstublieft!
            </p>`,
        offBtn: `Zet het aan`,
        onTitle: `Firewall is actief`,
        onContent: `<p>
                Alle uitgaande verbindingen van derden zijn geblokkeerd behalve voor de witte lijst.<br/>
                Zet het uit om deze beperking te verwijderen.
            </p>`,
        onBtn: `Zet het uit`,
    },
    hostNginx: {
        title: `NGINX Configuratie controleren`,
        description: `
            <p>
                NGINX is onze hoofdserver gateway die HTTP poorten (80 en 443) bedient. Om uw website te laten werken, moet uw webapp hier correct worden geconfigureerd. Hier kunt u uw huidige configuratie bekijken en wijzigingen aanbrengen via een vooraf geconfigureerde UI of volledige NGINX-configuratie als YAML-script.
            </p>
            <p>
                NGINX bedient doorgaans eerst statische inhoud die is geconfigureerd via het <code>root</code> pad, of stuurt het verzoek dynamisch door naar uw app via PHP-FPM <code>fastcgi</code> of Passenger <code>passenger</code> als een dergelijk bestand niet bestaat.
            </p>
            <p>
                NGINX-configuratie is anders voor subdomeinen. Als uw subdomeininhoud zich binnen deze website bevindt, voer dan hieronder de naam van het subdomein in om het te configureren. Neem ook een moment om onze <a href="{0}" target="_blank" rel="noreferrer">NGINX-configuratie</a> te lezen en neem contact met ons op als u problemen ondervindt.
            </p>
            `,
        subdomain: `Subdomein`,
        error: `Fout: er is geen configuratie voor {0}`,
        errorFetch: "Er is een fout opgetreden bij het ophalen van de NGINX-configuratie",
        notExist: `Fout: er is geen configuratie voor {0}`,
        tabCurrent: `Huidige NGINX-configuratie`,
        tabEdit: `Interactief bewerken`,
        tabPreview: `Voorvertoning wijzigingen`,
        labels: {
            subfolderConfig: "Submapconfiguratie",
            rootConfig: "Hoofdconfiguratie",
            rootPath: "Rootpad",
            rootIsAlias: "Root is een alias",
            resolveType: "Resolutietype",
            resolveTypes: {
                static: "Statisch",
                php: "PHP-FPM",
                app: "Phusion App",
                gls: "Algemene App",
                proxy: "Poortdoorsturing",
                deny: "Verzoek weigeren",
            },
            staticMode: "Statische modus",
            staticModes: {
                default: "Standaard",
                smart: "Slim",
                autoindex: "Autoindex",
                index: "Rootindex",
            },
            static404Path: "404 HTML-bestandspad",
            phpMode: "PHP-modus",
            phpModes: {
                default: 'Standaard',
                smart: 'Slim',
                indexSafe: 'Rootindex - Veilig',
                index: 'Rootindex - Standaard',
                always: 'Rootindex - Altijd',
            },
            proxyPort: 'Poortdoorsturing',
            appMode: 'App-modus',
            appEntry: 'App startbestand',
            appBin: 'App-binary pad',
            appModes: {
                default: 'Automatisch',
                node: 'Node',
                python: 'Python',
                ruby: 'Ruby',
            },
            glsCmd: 'App-opdracht',
            appEnv: 'Omgevingssleutels',
            appDev: 'Ontwikkelmodus?',
            appRoot: 'Werkdirectory',
            addSubfolderConfig: 'Submapconfiguratie toevoegen',
        },
        hints: {
            root: "Lost {1} op naar statische bestanden vanaf {0}",
            proxy: "Stuurt klantverzoeken door naar poort {0}",
            app: "Voert {0} script uit vanaf {1} met {2} vanuit {3}",
            gls: "Voert \"{0}\" uit vanuit {1} naar gespecificeerde $PORT",
            staticModes: {
                default: 'Biedt statische bestanden aan',
                smart: 'Probeert indien mogelijk HTML-bestanden te vinden',
                index: 'Biedt root index.html aan als geen bestand wordt gevonden',
                autoindex: 'Staat serverbestandlijst toe als index.html niet wordt gevonden',
                with404: 'Of toont aangepaste 404 foutpagina'
            },
            phpModes: {
                default: 'Biedt PHP-bestanden aan die eindigen op .php of index.php',
                smart: 'Probeert PHP-bestanden te vinden zonder .php',
                indexSafe: 'Biedt root index.php aan maar probeert het niet als het bestand door de klant wordt gezocht',
                index: 'Biedt root index.php aan als geen statisch bestand wordt gevonden',
                always: 'Staat PATH_INFO-stijlverzoeken toe om PHP te verwerken',
            },
            deleteSubfolderPrompt: "Weet u zeker dat u de submapconfiguratie voor {0} wilt verwijderen?",
            inputSubfolderPrompt: "Voer submap in (beginnend met '/' en geen spaties)",
            inputSubfolderNotValid: "Submapinvoer is niet geldig",
            inputSubfolderNotUnique: "Submapwaarde moet uniek zijn ten opzichte van andere submapitems",
        }
    },
    hostDNS: {
        title: `DNS Configuratie controleren`,
        description: `<p>Deze pagina helpt u bij het wijzigen van DNS-records als u uw domeinnaamservers naar ons verwijst.</p> <p>U kunt ook DNS-records bewerken via Webmin.</p>`,
        helpText: `Configuratiehulp`,
        error: `Fout: er is geen configuratie voor {0}`,
        errorFetch: "Er is een fout opgetreden bij het ophalen van de DNS-configuratie",
        notExist: `Fout: er is geen configuratie voor {0}`,
        tabCurrent: `Huidige DNS-instellingen`,
        tabEdit: `DNS interactief bewerken`,
        tabPreview: `Voorvertoning wijzigingen`,
        existingRecords: `Bestaande DNS-records`,
        addedRecords: `Toegevoegde DNS-records`,
    },
    hostLog: {
        runningList: 'Lijst met actieve processen',
        logTypeError: 'NGINX-foutenlog',
        logTypeAccess: 'NGINX-toegangslog',
        logTypePassenger: 'Passenger-app-log',
        logTypeErrorHint: 'Deze log bevat de NGINX- en PHP-foutenlogs van de huidige datum',
        logTypeAccessHint: 'Deze log bevat de NGINX-toegangslogs van de huidige datum',
        logTypePassengerHint: 'Deze log bevat de actieve logs van uw Passenger-app',
        errorFetch: "Er is een fout opgetreden bij het ophalen van de logbestanden",
        subdomain: `Subdomein`,
        maxLines: `Maximaal aantal regels`,
        emptyLog: `Deze log is momenteel leeg`,
    },
    hostManage: {
        title: `Manage Website Access`,
        description: `
        <p>
            Use the following login access to upload or edit your website
            content. <a href="{0}" target="_blank">Learn more</a>.
        </p>`,
        openPorts: `Opened Ports`,
        openPortsDescription: `Opened Ports for editing your server`,
        onlineEditor: `Online Editors`,
        webminInfo: `<p>
            Webmin is used to manage your server files and
            configurations using web interface.
        </p>
        <p>You'll be autologged in.</p>`,
        filestashInfo: `<p>
            Filestash is used to manage your server files 
            using web-interface of SFTP connection.
            (to upload files, use drag-and-drop).
        </p>
        <p>You'll be autologged in.</p>`,
        phpMyAdminInfo: ` <p>
        phpMyAdmin is used to manage MySQL database
        using web interface.
        </p>
        <p class="mb-0">
            You need to enter credentials manually.
        </p>`,
        phpPgAdminInfo: `  <p>
        phpPgAdmin is used to manage PostgreSQL database
        using web interface.
        </p>
        <p class="mb-0">
            You need to enter credentials manually.
        </p>`,
        websshInfo: `<p>
            WebSSH is used to open SSH connection using web
            interface.
            </p>
            <p class="mb-0">You'll be autologged in.</p>`,
        vscodeInfo: ` <p>
            Open VS Code to edit files and run commands
            directly on your server.<br />
            Make sure you already have installed VS Code and
            its Remote SSH Extension.
        </p>
        <p>
            If you want to open another folder, enter here
            and press return:
        </p>`,
    },
    hostTransfer: {
        warn: `ATTENTION! Website transfer means moving it to another account. You will lose access to your data because the owner has changed!`,
        currentOwner: `Current owner: {0}`,
        hint: `Please enter the email of the account you wish to receive:`,
        disabled: `You cannot transfer this website while it's not active.`,
        member: `Members cannot transfer this website.`,
        action: `Transfer!`,
    },
    hostDelete: {
        warn: `ATTENTION! Host deletions are permanent and we can't reverse the action. Please be certain.`,
        hint: `Please enter your website username to agree to host deletion.`,
        member: `Members cannot delete this website.`,
        action: `Delete!`,
    },
    hostCname: {
        disabled: `You cannot change the domain name when this website is not active.`,
        curHint: `Current domain name: `,
        hint: `You can change the main domain name website here. Enter the new domain name:`,
        warn: `This will make your website unusable for current domain! Please update DNS in new domain beforehand for minimal downtime.`,
        member: `Members cannot change the domain of this website.`,
        action: `Change domain name!`,
    },
    hostRename: {
        disabled: `You cannot change the username when this website is not active.`,
        hint: `You can change your website username here. Enter the new username:`,
        warn: `This will also change database username! Your website may be unusable until you change it in your website config.`,
        member: `Members cannot change the username of this website.`,
        action: `Rename this username!`,
    },
    hostPasswd: {
        disabled: `You cannot change the password when this website is not active.`,
        hint: `You can change your website password here. Enter the new password:`,
        warn: `This will also change database password! Your website may be unusable until you change it in your website config.`,
        member: `Members cannot change the password this website.`,
        action: `Update this password!`,
    },
    hostCheck: {
        'title': `Mandatory DNS Checkup`,
        'prompt': `This checks whether {0} can be resolved via Google's DNS before get added into our server.`,
        'valid': `This domain is resolvable`,
        'valid_with_note': `This domain will be resolvable once additional configs added automatically for you`,
        'incorrect': 'Incorrect A+AAAA/CNAME record to this domain, please configure it first before continue.',
        'missing': 'Missing A+AAAA/CNAME record to this domain, please configure it first before continue.',
        'loading': '...',
        'retrying': '...',
    },
    domain: {
        createInfo: `Keep in mind you are only registering a domain. If you want
            to manage the website, <a href="{0}" target="_blank">create the website here</a>`,
        transferInfo: `Make sure that you have access rights to transfer the
            domain from another service. We will reach out to you if the
            domain transfer fails after payment, but if you fail to
            prove domain ownership through the EPP code or existing
            document requirements, we cannot help you. By ToS you will
            not get a refund in the purchase of a domain under any
            circumstances.`,
        eppTransferInfo: `You can transfer your domain to another registrar by
            using this EPP code. The transfer works if the domain is not locked`,
    },
    invoiceDescription: {
        domainPurchaseOf: "Domain Purchase of {0}",
        domainExtendOf: "Domain Extend of {0}",
        domainTransferOf: "Domain Transfer of {0}",
        hostPurchase: "Host Purchase",
        hostRenew: "Host Renew",
        hostUpgrade: "Host Upgrade",
        hostExtend: "Host Extend",
        withPlan: " with {0} Plan",
        forMonths: " for {0} months",
        forYears: " for {0} years",
        forYearsAndMonths: " for {0} years and {1} months",
        dataTransferAddonsFor: "Additional Data transfer for {0} GB",
        tip: "Convenience Fee",
    },
}

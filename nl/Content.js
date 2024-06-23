export default {
    footer: {
        help: `Werkt iets niet? Vraag om hulp op
        <a href="{0}" target="_blank">het forum</a> of via <a href="{1}">email</a> of
        <a href="{2}">chat</a>.`,
        credit: `{0}, gemaakt door <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `Welkom bij DOM Cloud! 🎉`,
        description: ` <p>Hallo, {0}</p>
        <p>
          Bedankt dat je je hebt aangesloten bij de DOM Cloud vloot om de vrijheid te bereiken
          om succes te behalen op het internet!
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
        freeUserGuideTitle: `Welkom aan boord!`,
        freeUserGuideHint: `Bedankt dat je voor ons als je cloudplatform hebt gekozen 🥳 Als je dat nog niet hebt gedaan,
          probeer dan onze <a href="{0}" target="_blank">Aan de slag</a> Gids te lezen.
          Wil je onze volledige ervaring? Probeer dan je plan <a href="{1}">te upgraden</a> om
          meer functies te ontgrendelen zoals gratis aanpasbaar domein, volledige toegang tot API van derden,
          docker en aangepaste achtergrondservices <a href={2} target="_blank">en nog veel meer</a>!`,
        empty: 'Niets te zien hier',
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
        title: `Check Connection`,
        description: `
        <p>
            This page checks if this website is accessible from the
            internet.
        </p>
        <p>
            There are three prerequisites for a website to be accessible
            from the internet:
        </p>
        <ul>
            <li>The DNS server must be available</li>
            <li>The returned IP address must be correct</li>
            <li>The server's content must be accessible</li>
        </ul>
        <p>
            If one of the prerequisites above fails, this website may
            not be accessible from the internet.
        </p>`,
        dnsOffTitle: `No name server`,
        dnsOffContent: `This website does not have a name server. It maybe externally configured.`,
        dnsManagedTitle: `DNS managed`,
        dnsManagedContent: `This website's DNS is managed by DOM Cloud.`,
        dnsMixedTitle: `DNS is mixed`,
        dnsMixedContent: `This website's DNS has a mixed
            configuration. Ensure that the name server
            is configured properly. Do not mix our
            records with other records!`,
        dnsExternalTitle: `DNS managed externally`,
        dnsExternalContent: `This website's DNS is handled by a third party.`,
        pingNoIpTitle: `IP Address not found`,
        pingNoIpContent: `The DNS server does not return an IP address.`,
        pingNoIp6Title: `No IPv6`,
        pingNoIp6Content: ` This website's DNS has no IPv6 address. It maybe unavailable for IPv6 users.`,
        pingWrongIpTitle: `Incorrect IP Address`,
        pingWrongIpContent: `This website's DNS returned an incorrect IP address. 
            It may not serve the correct content, or it's behind a proxy.`,
        pingNoWwwTitle: `www.* subdomain IP address not found`,
        pingNoWwwContent: ` 
            Some people may not be able to access this
            website if they prefix it with www. Setup a
            www subdomain redirect is recommended.`,
        pingOkTitle: `IP Address OK`,
        pingOkContent: `This website's DNS returned the correct IP address.`,
        webNoHttpTitle: `Website is not accessible`,
        webNoHttpContent: `This website is not accessible via HTTP.`,
        webNoHttpsTitle: `HTTPS not available`,
        webNoHttpsContent: `This website may not have HTTPS certificate
            installed, or it's expired, or not configured properly.`,
        webBadHttpTitle: `Website is returning an error`,
        webBadHttpContent: `This website returns 500 or 403 error, 
            it may not be configured properly (check NGINX/App settings!).`,
        webBadRedirectTitle: `Website is has bad redirects`,
        webBadRedirectContent: `This website is redirecting visitors to outside the domain, 
            it may not be configured properly (check Base URL settings!).`,
        webBadWwwTitle: `www.* subdomain is not accessible`,
        webBadWwwContent: `This website's www subdomain is either not accessible or returning error.`,
        webInsecureTitle: `Website is not fully secure`,
        webInsecureContent: ` This website doesn't redirect HTTP to HTTPS,
            which is fine but not recommended.`,
        webOkTitle: `Website is OK`,
        webOkContent: `This website is accessible via HTTP and HTTPS.`,
    },
    hostFirewall: {
        title: `Check Firewall`,
        description: `
        <p>
            Firewall helps your website not to be exploited in the event of a
            hacker break-in by blocking all outgoing traffic except those on the
            <a href="{0}" target="_blank" rel="noreferrer">whitelist</a>.
        </p>
        <p>
            Depending on your use of the website, you may want to turn off the
            firewall if your website requires third party API or other forms of 
            communication not listed in the whitelist.
        </p>
        <p>The firewall applies to the domain and all subdomains within. It is 
        mandatorily turned on for users with free plan. To turn it off, you 
        have to be in subscribing plan (Lite or above).</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">Read more</a></p>
        `,
        offTitle: `Firewall is off`,
        offContent: `<p>
            All outgoing traffic is allowed. Keep your site secure, please!
        </p>`,
        offBtn: `Turn it on`,
        onTitle: `Firewall is active`,
        onContent: `<p>
            All third-party outgoing connection is blocked except for whitelists.<br/>
            Turn it off to remove this limitation.
        </p>`,
        onBtn: `Turn it off`,
    },
    hostNginx: {
        title: `Check NGINX Config`,
        description: `
        <p>
            NGINX is our main server gateway that serves HTTP ports (80 and 443).
            To make your website works, your web app must be correctly configured
            here. Here you can view your current configuration and make changes 
            either via preconfigured UI or full-blown NGINX config as YAML script. 
        </p>
        <p>
            NGINX typically serves static content first that's configured via <code>root</code>
            path, or forward the request dynamically to your App via PHP-FPM <code>fastcgi</code> 
            or Passenger <code>passenger</code> if such file doesn't exist.
        </p>
        <p>
            NGINX config is different for subdomains. If your subdomain content happens 
            to live inside this website, please enter the subdomain name below to configure it. 
            Also, please take a moment to read <a href="{0}" target="_blank" rel="noreferrer">
            our NGINX Configuration</a> or contact us in case you came into a problem.
        </p>
        `,
        subdomain: `Subdomain`,
        error: `ERROR: no configuration exists for {0}`,
        errorFetch: "There was an error fetching the NGINX config",
        notExist: `ERROR: no configuration exists for {0}`,
        tabCurrent: `Current NGINX Config`,
        tabEdit: `Edit Interactively`,
        tabPreview: `Preview Changes`,
        labels: {
            subfolderConfig: "Subfolder Config",
            rootConfig: "Root Config",
            rootPath: "Root Path",
            rootIsAlias: "Root is Alias",
            resolveType: "Resolve Type",
            resolveTypes: {
                static: "Static",
                php: "PHP-FPM",
                app: "Phusion App",
                gls: "Generic App",
                socat: "Forward Port",
                deny: "Deny Requests",
            },
            staticMode: "Static Mode",
            staticModes: {
                default: "Default",
                smart: "Smart",
                autoindex: "Auto-index",
                index: "Root Index",
            },
            static404Path: "404 HTML File Path",
            phpMode: "PHP Mode",
            phpModes: {
                default: 'Default',
                smart: 'Smart',
                indexSafe: 'Root Index - Safe',
                index: 'Root Index - Standard',
                always: 'Root Index - Always',
            },
            socatPort: 'Forward to Port',
            appMode: 'App Mode',
            appEntry: 'App Startup File',
            appBin: 'App Binary Path',
            appModes: {
                default: 'Auto',
                node: 'Node',
                python: 'Python',
                ruby: 'Ruby',
            },
            glsCmd: 'App Command',
            appEnv: 'Environment Keys',
            appDev: 'Development Mode?',
            appRoot: 'Working Directory',
            addSubfolderConfig: 'Add subfolder config',
        },
        hints: {
            root: "Static files from {0} will be resolved to {1}",
            socat: "Forward client requests to port {0}",
            app: "Invoke {0} script from {1} using {2} from {3}",
            gls: "Run \"{0}\" from {1} with given $PORT",
            staticModes: {
                default: 'Serve static files',
                smart: 'Attempt to find HTML file if possible',
                index: 'Serve root index.html if no file found',
                autoindex: 'Allow listing server files if index.html is not found',
                with404: 'or show custom 404 error page'
            },
            phpModes: {
                default: 'Serve index.php or php files that ends with .php',
                smart: 'Attempt to find PHP file without .php',
                indexSafe: 'Serve root index.php but don\'t try if client looks for a file',
                index: 'Serve root index.php when static file is not found',
                always: 'Allow PATH_INFO style requests handled to PHP',
            },
            deleteSubfolderPrompt: "Are you sure want to delete subfolder config for {0}",
            inputSubfolderPrompt: "Please input subfolder (must start with '/' and no spaces)",
            inputSubfolderNotValid: "Subfolder input is not valid",
            inputSubfolderNotUnique: "Subfolder value must unique with other subfolder entries",
        }
    },
    hostDNS: {
        title: `Check DNS Config`,
        description: `<p>This page helps you change DNS records if you point your domain name server to us. 
        </p> <p>Alternatively, you can also edit DNS records via Webmin.</p>`,
        helpText: `Help on configuration`,
        error: `ERROR: no configuration exists for {0}`,
        errorFetch: "There was an error fetching the dns config",
        notExist: `ERROR: no configuration exists for {0}`,
        tabCurrent: `Current DNS Settings`,
        tabEdit: `Edit DNS Interactively`,
        tabPreview: `Preview Changes`,
        existingRecords: `Existing DNS Records`,
        addedRecords: `Added DNS Records`,
    },
    hostLog: {
        runningList: 'Running processes list',
        logTypeError: 'NGINX Error Log',
        logTypeAccess: 'NGINX Access Log',
        logTypePassenger: 'Passenger App Log',
        logTypeErrorHint: 'This log contains NGINX and PHP error logs for the current day',
        logTypeAccessHint: 'This log contains NGINX access logs for the current day',
        logTypePassengerHint: 'This log contains Passenger App log that\'s currently running',
        errorFetch: "There was an error fetching the log file",
        subdomain: `Subdomain`,
        maxLines: `Max Lines`,
        emptyLog: `This log is empty right now`,
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
        'valid-note': `This domain will be resolvable once additional configs added automatically for you`,
        'incorrect': 'Incorrect A/CNAME record to this domain, please configure it first before continue.',
        'missing': 'Missing A/CNAME record to this domain, please configure it first before continue.',
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

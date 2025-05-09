export default {
    footer: {
        help: `Etwas funktioniert nicht? Fragen Sie im 
        <a href="{0}" target="_blank">Forum</a> oder per <a href="{1}">E-Mail</a> oder
        im <a href="{2}">Chat</a> um Hilfe.`,
        credit: `{0}, erstellt von <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `Willkommen bei {0}! 🎉`,
        description: ` <p>Hallo, {0}</p>
        <p>
          Vielen Dank, dass Sie {1} beigetreten sind, um die Freiheit für Webentwickler im Internet zu erreichen!
        </p>
        <p>
          Um Sie optimal bedienen zu können, müssen wir die Region bestätigen, in der Sie sich derzeit befinden.
          Dies beeinflusst auch Ihre Zahlungsoptionen und den Standardserverstandort, den Sie später ändern können:
        </p>
        `,
        createWebsiteHint: `Bereit? Lass uns deine erste Website erstellen.`,
        createWebsiteBtn: `Erstelle eine Website`,
        emailConfirmation: `
            Es sieht so aus, als müssten Sie die E-Mail <strong>{0}</strong> verifizieren,
            bevor Sie fortfahren können.<br />
            Bitte überprüfen Sie Ihren E-Mail-Posteingang (und den Spam-Ordner).
        `,
        emailConfirmationHint: `E-Mail ist noch nicht angekommen?`,
        emailConfirmationBtn: `Bestätigungs-E-Mail erneut senden`,
        emailConfirmationSent: "E-Mail-Bestätigung an <strong>{0}</strong> wurde gesendet!",
        changeCountryBtn: `Land ändern`,
    },
    notification: {
        freeUserGuideTitle: "Willkommen an Bord!",
        freeUserGuideHint: "Vielen Dank, dass Sie uns als Ihre Cloud-Plattform gewählt haben 🥳 Wenn Sie es noch nicht getan haben, lesen Sie unseren <a href=\"{0}\" target=\"_blank\">Einstiegsleitfaden</a>. Brauchen Sie unser volles Erlebnis? Versuchen Sie <a href=\"{1}\">Ihr Paket zu upgraden</a>, um die API-Firewall, kostenlose Domain-Banner zu entfernen und <a href=\"{2}\" target=\"_blank\">mehr Funktionen</a> freizuschalten!",
        lockedUserGuideTitle: "Willkommen an Bord!",
        lockedUserGuideHint: "Vielen Dank, dass Sie uns als Ihre Cloud-Plattform gewählt haben 🥳 Erstellen Sie Ihre erste Website <a href=\"{0}\">hier</a>. Möglicherweise werden Sie aufgefordert, Ihr GitHub-Konto zu verknüpfen, um dieses Konto zu verifizieren. Sie können auch einfach <a href=\"{1}\">Ihr Paket upgraden</a>, um Ihr Konto sofort zu verifizieren und <a href=\"{2}\" target=\"_blank\">mehr Funktionen</a> zu erhalten.",
        accountNoticeTitle: "⚠️ Ihr Konto kann gesperrt werden",
        accountNoticeHint: "Ihr Konto wurde aus folgendem Grund gesperrt: {0}. Sie können <a href=\"{1}\">Ihr Paket upgraden</a>, um dieses Problem zu lösen.",
        empty: "Nichts zu sehen hier"    
    },
    purchaseConfirmation: {
        purchasedHint: "Vielen Dank. Wenn unser System Ihre Zahlung verifiziert hat, wird eine Bestätigungs-E-Mail an Ihre E-Mail gesendet.",
        purchaseCancel: "Ihre Zahlung wurde storniert.",
    },
    accountDeletion: {
        title: `Löschen Ihres Kontos`,
        hint: `ACHTUNG! Das Löschen des Kontos ist dauerhaft und wir können die Aktion nicht rückgängig machen. Wenn Sie einen Host oder eine Domain registriert haben, müssen Sie diese vorher löschen. Kontaktieren Sie uns, wenn Sie Hilfe benötigen.`,
        prompt: `Bitte geben Sie Ihre E-Mail-Adresse ein, um das Löschen des Kontos zu bestätigen.`,
        disabled: `Sie können dieses Konto nicht löschen, wenn noch ein Hosting oder eine registrierte Domain vorhanden ist.`,
    },
    hostNeedInvite: {
        title: "Einladungscode erforderlich",
        hint: "Hallo 👋 Damit Sie unseren kostenlosen Plan nutzen können, müssen wir Ihnen entweder über einen Einladungscode oder einen Link zu einem GitHub-Konto vertrauen. Der Einladungscode stammt von der Person, die Ihnen diese Plattform empfohlen hat.",
        hintBtn: "Erlauben!",
        hintGitHub: "Alternativ können Sie Ihr GitHub-Konto verknüpfen. Ihr GitHub-Konto muss <b>mindestens sechs Monate alt sein und einen oder mehrere Follower haben</b>.",
        githubFail: "Entschuldigung! Ihr verknüpftes GitHub-Konto ist noch nicht vertrauenswürdig. Sie können versuchen, das richtige Konto erneut zu verknüpfen, das unseren Anforderungen entspricht.",
        altHint: "Wenn Sie diesen Schritt überspringen möchten, können Sie <a href=\"{0}\">mindestens einmal upgraden</a>. Ein Upgrade bestätigt, dass Sie tatsächlich menschlich sind und ohne Einladungscode oder zusätzliche Kontoverknüpfungen vertrauenswürdig sind 😄."
    },
    hostCreate: {
        chooseTemplate: `Wählen Sie eine Vorlage, um zu beginnen`,
        startFromScratch: `Von Grund auf neu beginnen`,
        uploadFileHint: `Laden Sie eine Datei hoch oder geben Sie die URL ein, um den Inhalt zu analysieren`,
        readingTheFile: `Datei wird gelesen...`,
        readingFiles: `Lese {0} von {1} Datei(en)...`,
        readingZipFile: `Zip-Datei wird gelesen...`,
        compressingZipFile: `In eine Zip-Datei komprimieren...`,
        uploadingFiles: `Dateien werden hochgeladen... ({0} von {1})`,
        uploadCompleted: `Upload abgeschlossen ({0} Datei(en) mit einer Gesamtgröße von {1}}`,
        uploadError: `Upload fehlgeschlagen mit Statuscode {0}`,
        emptyZipFile: `Keine Datei in der Zip gefunden`,
        noFileSelected: `Keine Datei ausgewählt`,
        exceededFileSizeLimit: `Die Dateigröße ({0}) überschreitet das Limit ({1}), versuchen Sie, sie zuerst auf GitHub hochzuladen und geben Sie den Link hier ein.`,
        missingTemplate: `Das Abrufen der Datavorlage ist fehlgeschlagen. Möglicherweise fehlt die Datei noch.`,
        checkingRepo: `Dieses Repo wird überprüft...`,
        cloneWithDeployKey: `Repo wird mit einem Deploy-Schlüssel geklont.`,
        uploadDirectory: `Laden Sie ein Verzeichnis hoch`,
        uploadZipFile: `Laden Sie eine Zip-Datei hoch`,
        dropDirectory: `Legen Sie das Verzeichnis hier ab...`,
        dropZipFile: `Legen Sie die Zip-Datei hier ab...`,
        dropWhatsThat: `Das ist keine Zip-Datei oder kein Verzeichnis...`,
        dropMultiple: `(Bitte nur eine Datei oder ein Verzeichnis ablegen)`,
        readingDroppedDirectory: `Das abgelegte Verzeichnis wird gelesen...`,
        readingDroppedZipFile: `Die abgelegte Zip-Datei wird gelesen...`,
        orPasteUrl: "... oder fügen Sie Git-Repo/Zip-URL ein",
        attachDeployKey: `Deploy-Schlüssel anhängen`,
        selectFramework: `Nennen Sie uns das Framework oder die Sprache`,
        applyFramework: `Diese Vorlage anwenden`,
        attachDeployKeyHint: `Wenn Ihr Repository privat eingestellt ist, können Sie Deploy-Schlüssel verwenden, um darauf zuzugreifen. Wir haben einen asymmetrischen Deploy-Schlüssel für Sie erstellt, Sie müssen diesen öffentlichen Schlüssel zu Ihrem Repository hinzufügen. `,
        attachDeployKeyLearnMore: `Erfahren Sie mehr über die GitHub-Integration 
            mit Deploy-Schlüsseln.`,
        attachDeployKeyOpenConfig: `Öffnen Sie die Deploy-Schlüssel-Konfiguration des Repositorys`,
        attachDeployKeyConfirm: `Ich habe diesen öffentlichen Schlüssel hinzugefügt`,
    },
    hostConnection: {
        title: `Verbindung prüfen`,
        description: `
        <p>
            Diese Seite überprüft, ob diese Website vom
            Internet aus zugänglich ist.
        </p>
        <p>
            Es gibt drei Voraussetzungen, damit eine Website vom
            Internet aus zugänglich ist:
        </p>
        <ul>
            <li>Der DNS-Server muss verfügbar sein</li>
            <li>Die zurückgegebene IP-Adresse muss korrekt sein</li>
            <li>Der Inhalt des Servers muss zugänglich sein</li>
        </ul>
        <p>
            Wenn eine der oben genannten Voraussetzungen fehlschlägt, ist diese Website möglicherweise
            nicht vom Internet aus zugänglich.
        </p>`,
        dnsOffTitle: `Kein Namensserver`,
        dnsOffContent: `Diese Website hat keinen Namensserver. Es ist möglicherweise extern konfiguriert.`,
        dnsNotExistTitle: "Domain existiert nicht",
        dnsNotExistContent: "Diese Domain wurde nicht gefunden oder ist möglicherweise nicht registriert. Haben Sie sie gekauft?",    
        dnsManagedTitle: `DNS verwaltet`,
        dnsManagedContent: `Das DNS dieser Website wird von {0} verwaltet.`,
        dnsMixedTitle: `DNS ist gemischt`,
        dnsMixedContent: `Das DNS dieser Website hat eine gemischte
            Konfiguration. Stellen Sie sicher, dass der Namensserver
            richtig konfiguriert ist. Mischen Sie unsere
            Einträge nicht mit anderen Einträgen!`,
        dnsExternalTitle: `DNS extern verwaltet`,
        dnsExternalContent: `Das DNS dieser Website wird von einem Drittanbieter verwaltet.`,
        pingNoIpTitle: `IP-Adresse nicht gefunden`,
        pingNoIpContent: `Der DNS-Server gibt keine IP-Adresse zurück.`,
        pingNoIp6Title: `Kein IPv6`,
        pingNoIp6Content: `Das DNS dieser Website hat keine IPv6-Adresse. Es ist möglicherweise für IPv6-Benutzer nicht verfügbar.`,
        pingNoIp6Hint: "Bitte einen AAAA-Eintrag mit dem Wert hinzufügen",
        pingWrongIpTitle: `Falsche IP-Adresse`,
        pingWrongIpContent: `Das DNS dieser Website gibt eine falsche IP-Adresse zurück. 
            Es könnte den falschen Inhalt liefern oder hinter einem Proxy stehen.`,
        pingWrongIpCurrent: "Aktuelle IP-Adressen",
        pingWrongIpExpect: "Korrekte IP-Adressen",
        pingNoWwwTitle: `www.* Subdomain IP-Adresse nicht gefunden`,
        pingNoWwwContent: ` 
            Einige Personen können möglicherweise nicht auf diese
            Website zugreifen, wenn sie sie mit www. voranstellen. Eine
            Weiterleitung der www-Subdomain einzurichten, wird empfohlen.`,
        pingNoWwwFix: "www.* Subdomain-Weiterleitung einrichten",
        pingOkTitle: `IP-Adresse OK`,
        pingOkContent: `Das DNS dieser Website gibt die korrekte IP-Adresse zurück.`,
        webNoHttpTitle: `Website ist nicht zugänglich`,
        webNoHttpContent: `Diese Website ist über HTTP nicht zugänglich.`,
        webNoHttpsTitle: `HTTPS nicht verfügbar`,
        webNoHttpsContent: `Diese Website hat möglicherweise kein HTTPS-Zertifikat
            installiert, oder es ist abgelaufen oder nicht richtig konfiguriert.`,
        pingNoHttpsFix: "HTTPS-Zertifikat installieren",
        webBadHttpTitle: `Website gibt einen Fehler zurück`,
        webBadHttpContent: `Diese Website gibt einen 500- oder 403-Fehler zurück, 
            sie ist möglicherweise nicht richtig konfiguriert (überprüfen Sie die NGINX/App-Einstellungen!).`,
        webBadRedirectTitle: `Website hat schlechte Weiterleitungen`,
        webBadRedirectContent: `Diese Website leitet Besucher außerhalb der Domain weiter, 
            sie ist möglicherweise nicht richtig konfiguriert (überprüfen Sie die Basis-URL-Einstellungen!).`,
        webInfiniteRedirectTitle: "Website hat unendliche Weiterleitungen",
        webInfiniteRedirectContent: "Diese Website liefert derzeit unendliche HTTPS-Anfragen, sie befindet sich möglicherweise bereits hinter einem HTTPS-Proxy.",
        webInfiniteRedirectFix: "HTTPS-Weiterleitung deaktivieren",
        webBadWwwTitle: "www.* Subdomain ist nicht zugänglich",
        webBadWwwContent: "Die www-Subdomain ist entweder nicht zugänglich oder gibt einen Fehler zurück.",
        webInsecureTitle: "Website bietet unsichere HTTP-Anfragen an",
        webInsecureContent: "Diese Website leitet nicht zum HTTPS-Protokoll um, dies wird nicht empfohlen und kann zu Cookie-Problemen führen.",
        webInsecureContentFix: "HTTPS-Weiterleitung erzwingen",
        webOkTitle: `Website OK`,
        webOkContent: `Diese Website ist für HTTP und HTTPS zugänglich und gibt keine Fehler zurück.`,
    },
    hostFirewall: {
        title: `Firewall überprüfen`,
        description: `
        <p>
            Eine Firewall hilft, Ihre Website vor Ausnutzung im Falle eines
            Hackerangriffs zu schützen, indem sie den gesamten ausgehenden Datenverkehr blockiert, 
            außer denjenigen, die auf der <a href="{0}" target="_blank" rel="noreferrer">Whitelist</a> stehen.
        </p>
        <p>
            Abhängig von der Nutzung Ihrer Website möchten Sie möglicherweise die Firewall ausschalten,
            wenn Ihre Website eine API eines Drittanbieters oder andere Formen der Kommunikation benötigt,
            die nicht in der Whitelist aufgeführt sind.
        </p>
        <p>Die Firewall gilt für die Domain und alle Subdomains. Sie ist 
        zwingend eingeschaltet für Benutzer mit dem kostenlosen Plan. Um sie auszuschalten, 
        müssen Sie einen Abonnementplan (Lite oder höher) haben.</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">Mehr erfahren</a></p>
        `,
        offTitle: `Firewall ist ausgeschaltet`,
        offContent: `<p>
            Der gesamte ausgehende Datenverkehr ist erlaubt. Halten Sie Ihre Seite bitte sicher!
        </p>`,
        offBtn: `Einschalten`,
        onTitle: `Firewall ist aktiv`,
        onContent: `<p>
            Alle ausgehenden Verbindungen von Drittanbietern sind außer für Whitelist-Einträge blockiert.<br/>
            Schalten Sie sie aus, um diese Einschränkung zu entfernen.
        </p>`,
        onBtn: `Ausschalten`,
    },
    hostNginx: {
        title: `NGINX-Konfiguration überprüfen`,
        description: `
        <p>
            NGINX ist unser Hauptserver-Gateway, das HTTP-Ports (80 und 443) bedient.
            Damit Ihre Website funktioniert, muss Ihre Web-App hier korrekt konfiguriert sein.
            Hier können Sie Ihre aktuelle Konfiguration anzeigen und Änderungen entweder 
            über die vorkonfigurierte Benutzeroberfläche oder eine vollständige NGINX-Konfiguration als YAML-Skript vornehmen.
        </p>
        <p>
            NGINX bedient typischerweise statische Inhalte zuerst, die über den <code>root</code>-Pfad konfiguriert sind, oder leitet die Anfrage dynamisch über PHP-FPM <code>fastcgi</code> oder Passenger <code>passenger</code> an Ihre App weiter, wenn eine solche Datei nicht existiert.
        </p>
        <p>
            Die NGINX-Konfiguration ist für Subdomains unterschiedlich. Wenn Ihre Subdomain-Inhalte innerhalb dieser Website liegen, geben Sie bitte den Subdomain-Namen unten ein, um sie zu konfigurieren. 
            Nehmen Sie sich auch einen Moment Zeit, um unsere <a href="{0}" target="_blank" rel="noreferrer">NGINX-Konfiguration</a> zu lesen oder kontaktieren Sie uns, falls Sie auf ein Problem stoßen.
        </p>
        `,
        subdomain: `Subdomain`,
        error: `FEHLER: Keine Konfiguration vorhanden für {0}`,
        errorFetch: "Fehler beim Abrufen der NGINX-Konfiguration",
        notExist: `FEHLER: Keine Konfiguration vorhanden für {0}`,
        tabCurrent: `Aktuelle NGINX-Konfiguration`,
        tabEdit: `Interaktiv bearbeiten`,
        tabPreview: `Änderungen Vorschau`,
        labels: {
            subfolderConfig: "Unterordner-Konfiguration",
            rootConfig: "Root-Konfiguration",
            rootPath: "Root-Pfad",
            rootIsAlias: "Root ist Alias",
            resolveType: "Auflösungstyp",
            resolveTypes: {
                static: "Statisch",
                php: "PHP-FPM",
                app: "Phusion App",
                gls: "Generische App",
                proxy: "Port weiterleiten",
                deny: "Anfragen verweigern",
            },
            staticMode: "Statischer Modus",
            staticModes: {
                default: "Standard",
                smart: "Intelligent",
                autoindex: "Auto-Index",
                index: "Root-Index",
            },
            static404Path: "404 HTML-Dateipfad",
            phpMode: "PHP-Modus",
            phpModes: {
                default: 'Standard',
                smart: 'Intelligent',
                indexSafe: 'Root-Index - Sicher',
                index: 'Root-Index - Standard',
                always: 'Root-Index - Immer',
            },
            proxyPort: 'Weiterleiten zu Port',
            appMode: 'App-Modus',
            appEntry: 'App-Startdatei',
            appBin: 'App-Binärpfad',
            appModes: {
                default: 'Auto',
                node: 'Node',
                python: 'Python',
                ruby: 'Ruby',
            },
            glsCmd: 'App-Befehl',
            appEnv: 'Umgebungsschlüssel',
            appDev: 'Entwicklungsmodus?',
            appRoot: 'Arbeitsverzeichnis',
            addSubfolderConfig: 'Unterordner-Konfiguration hinzufügen',
        },
        hints: {
            root: "Statische Dateien von {0} werden nach {1} aufgelöst",
            proxy: "Leite Kundenanfragen an Port {0} weiter",
            app: "Führe {0}-Skript aus {1} mit {2} von {3} aus",
            gls: "Führe \"{0}\" aus {1} mit gegebenem $PORT aus",
            staticModes: {
                default: 'Statische Dateien bedienen',
                smart: 'Versuche, HTML-Datei zu finden, wenn möglich',
                index: 'Root-Index.html bedienen, wenn keine Datei gefunden wird',
                autoindex: 'Serverdateien auflisten, wenn index.html nicht gefunden wird',
                with404: 'oder benutzerdefinierte 404-Fehlerseite anzeigen'
            },
            phpModes: {
                default: 'Index.php oder php-Dateien bedienen, die mit .php enden',
                smart: 'Versuche, PHP-Datei ohne .php zu finden',
                indexSafe: 'Root-Index.php bedienen, aber nicht versuchen, wenn Kunde nach einer Datei sucht',
                index: 'Root-Index.php bedienen, wenn keine statische Datei gefunden wird',
                always: 'Erlaube PATH_INFO-Anfragen an PHP weiterzugeben',
            },
            deleteSubfolderPrompt: "Sind Sie sicher, dass Sie die Unterordner-Konfiguration für {0} löschen möchten?",
            inputSubfolderPrompt: "Bitte Unterordner eingeben (muss mit '/' beginnen und keine Leerzeichen enthalten)",
            inputSubfolderNotValid: "Unterordner-Eingabe ist nicht gültig",
            inputSubfolderNotUnique: "Unterordner-Wert muss eindeutig sein gegenüber anderen Unterordner-Einträgen",
        }
    },
    hostDNS: {
        title: `DNS-Konfiguration überprüfen`,
        description: `<p>Diese Seite hilft Ihnen dabei, DNS-Einträge zu ändern, wenn Sie Ihren Domain-Name-Server auf uns verweisen. 
        </p> <p>Alternativ können Sie auch DNS-Einträge über Webmin bearbeiten.</p>`,
        helpText: `Hilfe bei der Konfiguration`,
        error: `FEHLER: Keine Konfiguration vorhanden für {0}`,
        errorFetch: "Fehler beim Abrufen der DNS-Konfiguration",
        notExist: `FEHLER: Keine Konfiguration vorhanden für {0}`,
        tabCurrent: `Aktuelle DNS-Einstellungen`,
        tabEdit: `DNS interaktiv bearbeiten`,
        tabPreview: `Änderungen Vorschau`,
        existingRecords: `Bestehende DNS-Einträge`,
        addedRecords: `Hinzugefügte DNS-Einträge`,
    },
    hostLog: {
        runningList: 'Liste der laufenden Prozesse',
        logTypeError: 'NGINX-Fehlerprotokoll',
        logTypeAccess: 'NGINX-Zugriffsprotokoll',
        logTypePassenger: 'Passenger-App-Protokoll',
        logTypeErrorHint: 'Dieses Protokoll enthält NGINX- und PHP-Fehlerprotokolle des aktuellen Tages',
        logTypeAccessHint: 'Dieses Protokoll enthält NGINX-Zugriffsprotokolle des aktuellen Tages',
        logTypePassengerHint: 'Dieses Protokoll enthält Passenger-App-Protokoll der aktuell laufenden App',
        errorFetch: "Fehler beim Abrufen der Protokolldatei",
        subdomain: `Subdomain`,
        maxLines: `Maximale Zeilen`,
        emptyLog: `Dieses Protokoll ist derzeit leer`,
    },
    hostManage: {
        title: `Website-Zugriff verwalten`,
        description: `
        <p>
            Verwenden Sie die folgenden Login-Daten, um Inhalte Ihrer Website hochzuladen oder zu bearbeiten.
            <a href="{0}" target="_blank">Mehr erfahren</a>.
        </p>`,
        openPorts: `Geöffnete Ports`,
        openPortsDescription: `Geöffnete Ports zum Bearbeiten Ihres Servers`,
        onlineEditor: `Online-Editoren`,
        webminInfo: `<p>
            Webmin wird verwendet, um Ihre Serverdateien und
            Konfigurationen über die Weboberfläche zu verwalten.
        </p>
        <p>Sie werden automatisch eingeloggt.</p>`,
        filestashInfo: `<p>
            Filestash wird verwendet, um Ihre Serverdateien 
            über eine Weboberfläche der SFTP-Verbindung zu verwalten.
            (Zum Hochladen von Dateien verwenden Sie Drag-and-Drop).
        </p>
        <p>Sie werden automatisch eingeloggt.</p>`,
        phpMyAdminInfo: ` <p>
        phpMyAdmin wird verwendet, um MySQL-Datenbanken
        über die Weboberfläche zu verwalten.
        </p>
        <p class="mb-0">
            Sie müssen die Anmeldedaten manuell eingeben.
        </p>`,
        phpPgAdminInfo: `  <p>
        phpPgAdmin wird verwendet, um PostgreSQL-Datenbanken
        über die Weboberfläche zu verwalten.
        </p>
        <p class="mb-0">
            Sie müssen die Anmeldedaten manuell eingeben.
        </p>`,
        websshInfo: `<p>
            WebSSH wird verwendet, um eine SSH-Verbindung über die Weboberfläche herzustellen.
            </p>
            <p class="mb-0">Sie werden automatisch eingeloggt.</p>`,
        vscodeInfo: ` <p>
            Öffnen Sie VS Code, um Dateien zu bearbeiten und Befehle
            direkt auf Ihrem Server auszuführen.<br />
            Stellen Sie sicher, dass Sie VS Code und
            die Remote-SSH-Erweiterung bereits installiert haben.
        </p>
        <p>
            Wenn Sie einen anderen Ordner öffnen möchten, geben Sie diesen hier ein
            und drücken Sie die Eingabetaste:
        </p>`,
    },
    hostTransfer: {
        warn: `ACHTUNG! Website-Übertragung bedeutet, sie auf ein anderes Konto zu verschieben. Sie werden den Zugriff auf Ihre Daten verlieren, da der Eigentümer gewechselt hat!`,
        currentOwner: `Aktueller Eigentümer: {0}`,
        hint: `Bitte geben Sie die E-Mail-Adresse des Kontos ein, das Sie erhalten möchten:`,
        disabled: `Sie können diese Website nicht übertragen, während sie nicht aktiv ist.`,
        member: `Mitglieder können diese Website nicht übertragen.`,
        action: `Übertragen!`,
    },
    hostDelete: {
        warn: `ACHTUNG! Host-Löschungen sind dauerhaft und können nicht rückgängig gemacht werden. Bitte seien Sie sicher.`,
        hint: `Bitte geben Sie Ihren Website-Benutzernamen ein, um der Host-Löschung zuzustimmen.`,
        member: `Mitglieder können diese Website nicht löschen.`,
        action: `Löschen!`,
    },
    hostCname: {
        disabled: `Sie können den Domainnamen nicht ändern, während diese Website nicht aktiv ist.`,
        curHint: `Aktueller Domainname: `,
        hint: `Sie können hier den Hauptdomainnamen der Website ändern. Geben Sie den neuen Domainnamen ein:`,
        warn: `Dies wird Ihre Website für die aktuelle Domain unbrauchbar machen! Bitte aktualisieren Sie DNS im neuen Domainnamen vorher, um minimale Ausfallzeiten zu gewährleisten.`,
        member: `Mitglieder können die Domain dieser Website nicht ändern.`,
        action: `Domainnamen ändern!`,
    },
    hostRename: {
        disabled: `Sie können den Benutzernamen nicht ändern, während diese Website nicht aktiv ist.`,
        hint: `Sie können hier Ihren Website-Benutzernamen ändern. Geben Sie den neuen Benutzernamen ein:`,
        warn: `Dies wird auch den Datenbankbenutzernamen ändern! Ihre Website kann unbrauchbar sein, bis Sie es in Ihrer Website-Konfiguration ändern.`,
        member: `Mitglieder können den Benutzernamen dieser Website nicht ändern.`,
        action: `Diesen Benutzernamen umbenennen!`,
    },
    hostPasswd: {
        disabled: `Sie können das Passwort nicht ändern, während diese Website nicht aktiv ist.`,
        hint: `Sie können hier Ihr Website-Passwort ändern. Geben Sie das neue Passwort ein:`,
        warn: `Dies wird auch das Datenbankpasswort ändern! Ihre Website kann unbrauchbar sein, bis Sie es in Ihrer Website-Konfiguration ändern.`,
        member: `Mitglieder können das Passwort dieser Website nicht ändern.`,
        action: `Dieses Passwort aktualisieren!`,
    },
    hostCheck: {
        title: `Obligatorische DNS-Überprüfung`,
        prompt: `Dies überprüft, ob {0} über Googles DNS aufgelöst werden kann, bevor es zu unserem Server hinzugefügt wird.`,
        valid: `Diese Domain ist auflösbar`,
        validNote: `Diese Domain wird auflösbar sein, sobald zusätzliche Konfigurationen automatisch für Sie hinzugefügt werden`,
        incorrect: `Falscher A+AAAA/CNAME-Eintrag für diese Domain, bitte konfigurieren Sie es zuerst, bevor Sie fortfahren.`,
        missing: `Fehlender A+AAAA/CNAME-Eintrag für diese Domain, bitte konfigurieren Sie es zuerst, bevor Sie fortfahren.`,
        loading: `...`,
        retrying: `...`,
    },
    domain: {
        createInfo: `Denken Sie daran, dass Sie nur eine Domain registrieren. Wenn Sie die Website verwalten möchten, <a href="{0}" target="_blank">erstellen Sie die Website hier</a>`,
        transferInfo: `Stellen Sie sicher, dass Sie die Zugriffsrechte haben, um die Domain von einem anderen Dienst zu übertragen. Wir werden uns mit Ihnen in Verbindung setzen, wenn der Domaintransfer nach der Zahlung fehlschlägt, aber wenn Sie das Domain-Eigentum nicht durch den EPP-Code oder vorhandene Dokumentanforderungen nachweisen können, können wir nicht helfen. Laut AGB erhalten Sie unter keinen Umständen eine Rückerstattung beim Kauf einer Domain.`,
        eppTransferInfo: `Sie können Ihre Domain zu einem anderen Registrar übertragen, indem Sie diesen EPP-Code verwenden. Der Transfer funktioniert, wenn die Domain nicht gesperrt ist.`,
        dnsManagedHint: `Wir bieten keine Benutzeroberfläche für benutzerdefinierte DNS-Einträge. <br />
        Wenn Ihre Nameserver auf <b>{0}</b> gesetzt sind, werden die DNS von
        <a href="{1}" target="_blank">der jeweiligen Website-DNS</a> verwaltet.`,
        dnsManagedOpen: `Wenn Sie es trotzdem ändern möchten, verwalten Sie es bitte über unsere
        <a href="{0}" target="_blank">Registrar-Benutzeroberfläche</a>. Klicken Sie auf Passwort vergessen und geben Sie Ihre aktuelle E-Mail-Adresse ein, um Ihr Passwort zum ersten Mal festzulegen.`
    },
};

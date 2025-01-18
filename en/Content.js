export default {
    footer: {
        help: `Something doesn't work? Ask for help in 
        <a href="{0}" target="_blank">forum</a> or <a href="{1}">email</a> or
        <a href="{2}">chat</a>.`,
        credit: `{0}, built by <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `Welcome to DOM Cloud! 🎉`,
        description: ` <p>Hi, {0}</p>
        <p>
          Thank you for joining the DOM Cloud fleet to reach the freedom to
          achieve success on the Internet!
        </p>
        <p>
          To be able to serve you optimally, we need confirm the region you currently occupy. 
          This also affects your payment options and the default server location which you can change later:
        </p>
        `,
        createWebsiteHint: `Ready? Let's make your first website.`,
        createWebsiteBtn: `Create a website`,
        emailConfirmation: `
            Looks like you need to verify email <strong>{0}</strong>
            before continuing.<br />
            Please check your email (and spam) inbox.
        `,
        emailConfirmationHint: `Email hasn't arrived yet?`,
        emailConfirmationBtn: `Send Confirmation Email Again`,
        emailConfirmationSent: "Email confirmation to <strong>{0}</strong> has been sent!",
        changeCountryBtn: `Change country`,
        keepUsingEnglish: `Keep using English`,
    },
    notification: {
        freeUserGuideTitle: "Welcome Aboard!",
        freeUserGuideHint: "Thank you for choosing us as your cloud platform 🥳 If you haven't already, try reading our <a href=\"{0}\" target=\"_blank\">Getting Started</a> Guide. Need our fullest experience? Try <a href=\"{1}\">upgrading your plan</a> to get rid of API firewall, free domain banners and unlock <a href=\"{2}\" target=\"_blank\">more features</a>!",
        lockedUserGuideTitle: "Welcome Aboard!",
        lockedUserGuideHint: "Thank you for choosing us as your cloud platform 🥳 Create your first website <a href=\"{0}\">here</a>. You might be asked to link your GitHub account to verify this account. You can also just <a href=\"{1}\">upgrade your plan</a> to verify your account instantly along with <a href=\"{2}\" target=\"_blank\">more features</a> as a subscribing account.",
        accountNoticeTitle: "⚠️ Your account may be suspended",
        accountNoticeHint: "Your account is suspended due to this reason: {0}. You can <a href=\"{1}\">upgrade your plan</a> to solve this issue.",
        empty: "Nothing to see here"
    },
    purchaseConfirmation: {
        purchasedHint: "Thank you. If our system has verified your payment, a confirmation email will be sent to your email.",
        purchaseCancel: "Your payment has been canceled.",
    },
    accountDeletion: {
        title: `Deleting your Account`,
        hint: `ATTENTION! Account deletion is permanent and we cannot reverse the action. If you have a host or domain registered, you need to delete them beforehand. Contact us if you need help.`,
        prompt: `Please write your email to agree for account deletion.`,
        disabled: `You cannot delete this account if there is still hosting or a registered domain.`,
    },
    hostNeedInvite: {
        title: `Invite Code Needed`,
        hint: `Hello 👋 To enjoy DOM Cloud free plan we need to trust you either via invite code or Linking to GitHub account. The invitation code comes from 
        who recommends you this platform.`,
        hintBtn: `Grant!`,
        hintGitHub: `Alternatively, you can link your GitHub account. Your GitHub account must <b>be six months or older and has one or more followers</b>.`,
        githubFail: `Sorry! Your linked GitHub account is not trusted yet. You can try re-linking the correct account that matches our requirements.`,
        altHint: `If you wish to avoid this step, you can <a href="{0}">Upgrade at least once</a>. 
        Upgrading verifies you that you're truly human and can be trusted without an invitation code or linking extra accounts 😄.`
    },
    hostCreate: {
        chooseTemplate: `Choose a template to start with`,
        startFromScratch: `Start from scratch`,
        uploadFileHint: `Upload or enter the URL to analyze the content`,
        readingTheFile: `Reading the file...`,
        readingFiles: `Reading {0} of {1} file(s)...`,
        readingZipFile: `Reading the zip file...`,
        compressingZipFile: `Compressing into a zip file...`,
        uploadingFiles: `Uploading files... ({0} of {1})`,
        uploadCompleted: `Upload complete ({0} file(s) with total size {1}}`,
        uploadError: `Upload failed with status code {0}`,
        emptyZipFile: `No file found in the zip`,
        noFileSelected: `No file selected`,
        exceededFileSizeLimit: `This file size ({0}) exceeds the limit ({1}), try upload it to GitHub first and put the link here instead.`,
        missingTemplate: `Failed to fetch the data template. Maybe the file still missing.`,
        checkingRepo: `Checking this repo...`,
        cloneWithDeployKey: `Repo will be cloned with a deploy key.`,
        uploadDirectory: `Upload a directory`,
        uploadZipFile: `Upload a zip file`,
        dropDirectory: `Drop that directory...`,
        dropZipFile: `Drop that zip file...`,
        dropWhatsThat: `That ain't a zip file or directory...`,
        dropMultiple: `(Please only drop one file or directory)`,
        readingDroppedDirectory: `Reading the dropped directory...`,
        readingDroppedZipFile: `Reading the dropped zip file...`,
        orPasteUrl: "... or paste Git Repo/Zip URL",
        attachDeployKey: `Attach deploy key`,
        selectFramework: `Tell us the framework or language`,
        applyFramework: `Apply this template`,
        attachDeployKeyHint: `If your repository is set private, you can use
            deploy keys to access it. We created an asymmetric deploy key
            for you, you need to add this public key to your repository. `,
        attachDeployKeyLearnMore: `Learn more about GitHub integration 
            with deploy keys.`,
        attachDeployKeyOpenConfig: `Open repository's deploy key configuration`,
        attachDeployKeyConfirm: `I have added this public key`,
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
        dnsNotExistTitle: `Domain not exist`,
        dnsNotExistContent: `This domain is not found or may not be registered. Have you purchase it?`,
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
            website if they prefix it with www. It's recommended
            to redirect www.* subdomain to current site domain.`,
        pingNoWwwFix: `Setup www.* subdomain redirect`,
        pingOkTitle: `IP Address OK`,
        pingOkContent: `This website's DNS returned the correct IP address.`,
        webNoHttpTitle: `Website is not accessible`,
        webNoHttpContent: `This website is not accessible via HTTP.`,
        webNoHttpsTitle: `HTTPS not available`,
        webNoHttpsContent: `This website may not have HTTPS certificate
            installed, or it's expired, or not configured properly.`,
        pingNoHttpsFix: "Install HTTPS certificate",
        webBadHttpTitle: `Website is returning an error`,
        webBadHttpContent: `This website returns 500 or 403 error, 
            it may not be configured properly (check NGINX/App logs!).`,
        webBadRedirectTitle: `Website has bad redirects`,
        webBadRedirectContent: `This website redirects visitor to outside the domain, 
            it may not be configured properly (check Base URL settings!).`,
        webInfiniteRedirectTitle: `Website has infinite redirects`,
        webInfiniteRedirectContent: `This website currently serving infinite HTTPS requests, 
            it may already behind a HTTPS proxy.`,
        webInfiniteRedirectFix: "Disable HTTPS redirect",
        webBadWwwTitle: `www.* subdomain is not accessible`,
        webBadWwwContent: `The www subdomain is either not accessible or returning error.`,
        webInsecureTitle: `Website is serving insecure HTTP requests`,
        webInsecureContent: `This website doesn't redirect to HTTPS protocol,
            it is not recommended and can lead to cookie issues.`,
        webInsecureContentFix: "Force HTTPS redirect",
        webOkTitle: `Website is OK`,
        webOkContent: `This website can be accessed via HTTP/HTTPS securely.`,
    },
    hostFirewall: {
        title: `Check Firewall`,
        description: `
        <p>
            Firewall helps reduce damage on your website in case your
            website got compromised by hackers. It works by blocking all 
            outgoing traffic except those listed on the <a href="{0}" target="_blank" rel="noreferrer">whitelist</a>.
        </p>
        <p>
            Depending on your use of the website, you may want to turn off the
            firewall if your website requires third party API or other forms of 
            communication not listed in the whitelist.
        </p>
        <p>Firewall applies to the domain and all subdomains within. It is 
        mandatorily turned on for users with free plan to avoid exploitation. 
        To turn it off, you have to be in subscribing plan (Lite or above).</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">Read more</a></p>
        `,
        offTitle: `Firewall is disabled`,
        offContent: `<p>
            All outgoing traffic is allowed. Keep your site secure, please!
        </p>`,
        offBtn: `Activate Firewall`,
        onTitle: `Firewall is active`,
        onContent: `<p>
            All third-party outgoing connection is blocked except listed in the whitelists.<br/>
            Disable the firewall to remove this limitation!
        </p>`,
        onBtn: `Disable Firewall`,
    },
    hostNginx: {
        title: `Check NGINX Config`,
        description: `
        <p>
            NGINX is our main server gateway that serves HTTP ports (80 and 443).
            To make your website works, your web app must be correctly configured
            here. Here you can view your current configuration and make changes 
            either via raw NGINX config (with certain limitation) or interactive generator. 
        </p>
        <p>
            NGINX typically serves static content first that's configured via <code>root</code>
            path. If it doesn't exist it will forward the request dynamically to your App via 
            <code>fastcgi</code> or <code>passenger</code>. You may add more special routes
            and rewrites depending on your website needs.
        </p>
        <p>
            NGINX is different for domain and subdomains. Please enter the subdomain name below to configure it
            if you wish. Also, please take a moment to read <a href="{0}" target="_blank" rel="noreferrer">
            our NGINX Configuration</a> or contact us in case you came into a problem.
        </p>
        `,
        subdomain: `Subdomain`,
        error: `ERROR: no configuration exists for {0}`,
        errorFetch: "There was an error fetching the NGINX config",
        notExist: `ERROR: no configuration exists for {0}`,
        tabCurrent: `Edit NGINX Config`,
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
        logTypePhp: 'PHP Error Log',
        logTypePassenger: 'Passenger App Log',
        logTypeProxfix: 'Proxfix App Log',
        logTypeErrorHint: 'This log contains NGINX error logs for the current day',
        logTypeAccessHint: 'This log contains NGINX access logs for the current day',
        logTypePhpHint: 'This log contains PHP error logs for the current day',
        logTypePassengerHint: 'This log contains App log ran by Passenger that\'s currently running',
        logTypeProxfixHint: 'This log contains App log ran by Proxfix that\'s currently running',
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
    hostServer: {
        disabled: `You cannot change the server region when this website is not active.`,
        hint: `You can move your website to another cloud or self-hosted server here. Choose a new server:`,
        warn: `This will perform backup, delete, then restore on this website. Also could make your website temporarily inacessible due to IP addresses changing!`,
        member: `Members cannot change the server region of this website.`,
        upgrade: `Moving this website to another server requires backup feature, you need to upgrade.`,
        action: `Move to this server!`,
    },
    hostCheck: {
        title: `Mandatory DNS Checkup`,
        prompt: `This checks whether {0} can be resolved via Google's DNS before get added into our server.`,
        valid: `This domain is resolvable`,
        valid_with_note: `This domain will be resolvable once additional configs added automatically for you`,
        incorrect: 'Incorrect A+AAAA/CNAME record to this domain, please configure it first before continue.',
        missing: 'Missing A+AAAA/CNAME record to this domain, please configure it first before continue.',
        loading: '...',
        retrying: '...',
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
        dnsManagedHint: `We don't provide UI for custom DNS records. <br />
          If your nameservers are set to <b>{0}</b> then DNS are handled by
          <a href="{1}" target="_blank">the respective website DNS</a>.`,
        dnsManagedOpen: `If you want to change it anyway please manage it via our
        <a href="{0}" target="_blank">Registrar UI</a>. Click forgot password
        and enter your current email to set your password the first time.`
    },
}

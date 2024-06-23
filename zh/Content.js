export default {
    footer: {
        help: `有什么问题吗？在<a href="{0}" target="_blank">论坛</a>或通过
        <a href="{1}">电子邮件</a>或
        <a href="{2}">聊天</a>请求帮助。`,
        credit: `{0}, 由<a href="{1}">{2}</a>创建`,
    },
    welcome: {
        title: `欢迎来到DOM Cloud！ 🎉`,
        description: ` <p>你好，{0}</p>
        <p>
          感谢你加入DOM Cloud舰队，获得在互联网上取得成功的自由！
        </p>
        <p>
          为了能为你提供最佳服务，我们需要确认你当前所在的区域。
          这也会影响你的支付选项和默认服务器位置，之后你可以更改：
        </p>
        `,
        createWebsiteHint: `准备好了吗？我们来创建你的第一个网站吧。`,
        createWebsiteBtn: `创建网站`,
        emailConfirmation: `
            似乎你需要先验证电子邮件 <strong>{0}</strong>
            才能继续。<br />
            请检查你的电子邮件（和垃圾邮件）收件箱。
        `,
        emailConfirmationHint: `还没有收到电子邮件？`,
        emailConfirmationBtn: `重新发送确认电子邮件`,
        emailConfirmationSent: "确认电子邮件已发送到 <strong>{0}</strong>！",
        changeCountryBtn: `更改国家`,
    },
    notification: {
        freeUserGuideTitle: `欢迎加入！`,
        freeUserGuideHint: `感谢你选择我们作为你的云平台 🥳 如果你还没有，
          尝试阅读我们的<a href="{0}" target="_blank">入门指南</a>。
          想要获得完整体验？ 尝试<a href="{1}">升级你的计划</a>以解锁
          更多功能，如免费自定义域名、第三方API的完全访问、
          docker和自定义后台服务<a href={2} target="_blank">等更多功能</a>！`,
        empty: '这里没什么可看的',
    },
    purchaseConfirmation: {
        purchasedHint: "谢谢。如果我们的系统确认了你的付款，确认电子邮件将发送到你的电子邮件地址。",
        purchaseCancel: "你的付款已取消。",
    },
    accountDeletion: {
        title: `删除你的账户`,
        hint: `注意！删除账户是永久性的，我们无法撤消操作。如果你有主机或已注册域名，你需要先删除它们。如果需要帮助，请联系我们。`,
        prompt: `请写下你的电子邮件以同意删除账户。`,
        disabled: `如果仍有主机或已注册域名，则无法删除此账户。`,
    },
    hostCreate: {
        chooseTemplate: `选择一个模板开始`,
        startFromScratch: `从头开始`,
        uploadFileHint: `上传或输入URL以分析内容`,
        readingTheFile: `读取文件中...`,
        readingFiles: `读取{1}中的{0}个文件...`,
        readingZipFile: `读取ZIP文件中...`,
        compressingZipFile: `压缩到ZIP文件中...`,
        uploadingFiles: `上传文件中... ({1}中的{0})`,
        uploadCompleted: `上传完成 ({0}个文件，总大小{1})`,
        uploadError: `上传失败，状态代码{0}`,
        emptyZipFile: `ZIP中未找到文件`,
        noFileSelected: `未选择文件`,
        exceededFileSizeLimit: `文件大小({0})超过限制({1})，尝试先上传到GitHub并在此处放置链接。`,
        missingTemplate: `无法获取数据模板。该文件可能仍然丢失。`,
        checkingRepo: `检查此存储库...`,
        cloneWithDeployKey: `将使用部署密钥克隆存储库。`,
        uploadDirectory: `上传目录`,
        uploadZipFile: `上传ZIP文件`,
        dropDirectory: `拖放目录...`,
        dropZipFile: `拖放ZIP文件...`,
        dropWhatsThat: `那不是ZIP文件或目录...`,
        dropMultiple: `(请只拖放一个文件或目录)`,
        readingDroppedDirectory: `读取拖放的目录中...`,
        readingDroppedZipFile: `读取拖放的ZIP文件中...`,
        orPasteUrl: "... 或粘贴Git Repo/Zip URL",
        attachDeployKey: `附加部署密钥`,
        selectFramework: `告诉我们框架或语言`,
        applyFramework: `应用此模板`,
        attachDeployKeyHint: `如果你的存储库设置为私有，你可以
            使用部署密钥进行访问。我们为你创建了一个非对称部署密钥，你需要将此公钥添加到你的存储库中。`,
        attachDeployKeyLearnMore: `了解更多关于使用部署密钥进行GitHub集成的信息。`,
        attachDeployKeyOpenConfig: `打开存储库部署密钥配置`,
        attachDeployKeyConfirm: `我添加了这个公钥`,
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

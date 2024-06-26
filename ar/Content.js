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
    },
    notification: {
        freeUserGuideTitle: `Welcome Abroad!`,
        freeUserGuideHint: `Thank you for choosing us as your cloud platform 🥳 If you haven't
          already, try reading our <a href="{0}" target="_blank">Getting Started</a>
          Guide. Need our fullest experience? Try <a href="{1}">upgrading your plan</a> to unlock 
          more features such as free customizable domain, full 3rd party API access, 
          docker and custom background services <a href={2} target="_blank">and much more</a>!`,
        empty: 'Nothing to see here',
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
        title: `تحقق من الاتصال`,
        description: `
        <p>
            تتحقق هذه الصفحة مما إذا كان هذا الموقع يمكن الوصول إليه من
            الإنترنت.
        </p>
        <p>
            هناك ثلاثة متطلبات مسبقة لكي يكون الموقع قابلاً للوصول
            من الإنترنت:
        </p>
        <ul>
            <li>يجب أن يكون خادم DNS متاحًا</li>
            <li>يجب أن يكون عنوان IP المرتجع صحيحًا</li>
            <li>يجب أن يكون محتوى الخادم قابلاً للوصول</li>
        </ul>
        <p>
            إذا فشل أحد المتطلبات المذكورة أعلاه، قد لا يكون هذا الموقع
            قابلاً للوصول من الإنترنت.
        </p>`,
        dnsOffTitle: `لا يوجد خادم أسماء`,
        dnsOffContent: `هذا الموقع لا يحتوي على خادم أسماء. قد يكون مهيأ خارجيًا.`,
        dnsManagedTitle: `DNS مُدار`,
        dnsManagedContent: `يتم إدارة DNS لهذا الموقع بواسطة DOM Cloud.`,
        dnsMixedTitle: `DNS مختلط`,
        dnsMixedContent: `DNS لهذا الموقع يحتوي على تكوين مختلط. تأكد من
            تكوين خادم الأسماء بشكل صحيح. لا تخلط سجلاتنا مع السجلات الأخرى!`,
        dnsExternalTitle: `DNS مُدار خارجيًا`,
        dnsExternalContent: `يتم التعامل مع DNS لهذا الموقع من قبل طرف ثالث.`,
        pingNoIpTitle: `لم يتم العثور على عنوان IP`,
        pingNoIpContent: `لا يقوم خادم DNS بإرجاع عنوان IP.`,
        pingNoIp6Title: `لا يوجد IPv6`,
        pingNoIp6Content: `لا يحتوي DNS لهذا الموقع على عنوان IPv6. قد يكون غير متاح لمستخدمي IPv6.`,
        pingWrongIpTitle: `عنوان IP غير صحيح`,
        pingWrongIpContent: `قام DNS لهذا الموقع بإرجاع عنوان IP غير صحيح.
            قد لا يخدم المحتوى الصحيح، أو أنه خلف وكيل.`,
        pingNoWwwTitle: `لم يتم العثور على عنوان IP لنطاق www.*`,
        pingNoWwwContent: `
            قد لا يتمكن بعض الأشخاص من الوصول إلى هذا
            الموقع إذا قاموا ببدءه بـ www. يوصى بإعداد
            إعادة توجيه نطاق www.`,
        pingOkTitle: `عنوان IP صحيح`,
        pingOkContent: `قام DNS لهذا الموقع بإرجاع عنوان IP صحيح.`,
        webNoHttpTitle: `الموقع غير متاح`,
        webNoHttpContent: `هذا الموقع غير متاح عبر HTTP.`,
        webNoHttpsTitle: `HTTPS غير متاح`,
        webNoHttpsContent: `قد لا يحتوي هذا الموقع على شهادة HTTPS
            مثبتة، أو قد انتهت صلاحيتها، أو لم يتم تكوينها بشكل صحيح.`,
        webBadHttpTitle: `الموقع يعيد خطأ`,
        webBadHttpContent: `هذا الموقع يعيد خطأ 500 أو 403،
            قد لا يكون مهيأ بشكل صحيح (تحقق من إعدادات NGINX/التطبيق!).`,
        webBadRedirectTitle: `الموقع يحتوي على عمليات إعادة توجيه سيئة`,
        webBadRedirectContent: `يقوم هذا الموقع بإعادة توجيه الزوار إلى خارج النطاق،
            قد لا يكون مهيأ بشكل صحيح (تحقق من إعدادات عنوان URL الأساسي!).`,
        webBadWwwTitle: `النطاق الفرعي www.* غير متاح`,
        webBadWwwContent: `النطاق الفرعي www لهذا الموقع إما غير متاح أو يعيد خطأ.`,
        webInsecureTitle: `الموقع غير آمن بالكامل`,
        webInsecureContent: `لا يقوم هذا الموقع بإعادة توجيه HTTP إلى HTTPS،
            وهذا أمر جيد ولكن غير موصى به.`,
        webOkTitle: `الموقع جيد`,
        webOkContent: `يمكن الوصول إلى هذا الموقع عبر HTTP و HTTPS.`,
    },
    hostFirewall: {
        title: `تحقق من جدار الحماية`,
        description: `
        <p>
            يساعد جدار الحماية موقعك على عدم التعرض للاختراق في حالة
            اختراقه عن طريق حظر كل حركة المرور الصادرة باستثناء تلك الموجودة في
            <a href="{0}" target="_blank" rel="noreferrer">القائمة البيضاء</a>.
        </p>
        <p>
            بناءً على استخدامك للموقع، قد ترغب في إيقاف تشغيل
            جدار الحماية إذا كان موقعك يتطلب API لطرف ثالث أو أشكال أخرى من
            الاتصال غير المدرجة في القائمة البيضاء.
        </p>
        <p>ينطبق جدار الحماية على النطاق وجميع النطاقات الفرعية بداخله. يتم
        تشغيله بشكل إلزامي للمستخدمين ذوي الخطة المجانية. لإيقاف تشغيله، يجب أن
        تكون في خطة اشتراك (Lite أو أعلى).</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">اقرأ المزيد</a></p>
        `,
        offTitle: `جدار الحماية متوقف`,
        offContent: `<p>
            يتم السماح بكل حركة المرور الصادرة. حافظ على موقعك آمنًا، من فضلك!
        </p>`,
        offBtn: `تشغيله`,
        onTitle: `جدار الحماية نشط`,
        onContent: `<p>
            يتم حظر كل الاتصال الصادر للطرف الثالث باستثناء القوائم البيضاء.<br/>
            قم بإيقاف تشغيله لإزالة هذا القيد.
        </p>`,
        onBtn: `إيقافه`,
    },
    hostNginx: {
        title: `تحقق من تكوين NGINX`,
        description: `
        <p>
            NGINX هو بوابة الخادم الرئيسية لدينا التي تخدم المنافذ HTTP (80 و 443).
            لجعل موقعك يعمل، يجب تكوين تطبيق الويب الخاص بك بشكل صحيح
            هنا. هنا يمكنك عرض تكوينك الحالي وإجراء التغييرات
            إما عبر واجهة مستخدم مهيأة مسبقًا أو تكوين NGINX بالكامل كسيناريو YAML.
        </p>
        <p>
            يقوم NGINX عادةً بخدمة المحتوى الثابت أولاً الذي يتم تكوينه عبر مسار <code>root</code>
            ، أو إعادة توجيه الطلب ديناميكيًا إلى تطبيقك عبر PHP-FPM <code>fastcgi</code>
            أو Passenger <code>passenger</code> إذا لم يكن هذا الملف موجودًا.
        </p>
        <p>
            يختلف تكوين NGINX للنطاقات الفرعية. إذا كان محتوى نطاقك الفرعي
            يقع داخل هذا الموقع، يرجى إدخال اسم النطاق الفرعي أدناه لتكوينه.
            أيضًا، يرجى أخذ لحظة لقراءة <a href="{0}" target="_blank" rel="noreferrer">
            تكوين NGINX الخاص بنا</a> أو الاتصال بنا في حالة مواجهتك لمشكلة.
        </p>
        `,
        subdomain: `النطاق الفرعي`,
        error: `خطأ: لا يوجد تكوين لـ {0}`,
        errorFetch: "حدث خطأ أثناء جلب تكوين NGINX",
        notExist: `خطأ: لا يوجد تكوين لـ {0}`,
        tabCurrent: `تكوين NGINX الحالي`,
        tabEdit: `تحرير بشكل تفاعلي`,
        tabPreview: `معاينة التغييرات`,
        labels: {
            subfolderConfig: "تكوين المجلد الفرعي",
            rootConfig: "تكوين الجذر",
            rootPath: "مسار الجذر",
            rootIsAlias: "الجذر هو الاسم المستعار",
            resolveType: "نوع الحل",
            resolveTypes: {
                static: "ثابت",
                php: "PHP-FPM",
                app: "تطبيق Phusion",
                gls: "تطبيق عام",
                socat: "إعادة توجيه المنفذ",
                deny: "رفض الطلبات",
            },
            staticMode: "وضع الثابت",
            staticModes: {
                default: "افتراضي",
                smart: "ذكي",
                autoindex: "الفهرسة التلقائية",
                index: "فهرس الجذر",
            },
            static404Path: "مسار ملف 404 HTML",
            phpMode: "وضع PHP",
            phpModes: {
                default: 'افتراضي',
                smart: 'ذكي',
                indexSafe: 'فهرس الجذر - آمن',
                index: 'فهرس الجذر - قياسي',
                always: 'فهرس الجذر - دائمًا',
            },
            socatPort: 'إعادة التوجيه إلى المنفذ',
            appMode: 'وضع التطبيق',
            appEntry: 'ملف بدء التشغيل للتطبيق',
            appBin: 'مسار البرنامج الثنائي للتطبيق',
            appModes: {
                default: 'تلقائي',
                node: 'Node',
                python: 'Python',
                ruby: 'Ruby',
            },
            glsCmd: 'أمر التطبيق',
            appEnv: 'مفاتيح البيئة',
            appDev: 'وضع التطوير؟',
            appRoot: 'دليل العمل',
            addSubfolderConfig: 'إضافة تكوين المجلد الفرعي',
        },
        hints: {
            root: "سيتم حل الملفات الثابتة من {0} إلى {1}",
            socat: "إعادة توجيه طلبات العميل إلى المنفذ {0}",
            app: "تشغيل سيناريو {0} من {1} باستخدام {2} من {3}",
            gls: "تشغيل \"{0}\" من {1} باستخدام $PORT المعطاة",
            staticModes: {
                default: 'خدمة الملفات الثابتة',
                smart: 'محاولة العثور على ملف HTML إن أمكن',
                index: 'خدمة ملف index.html الجذر إذا لم يتم العثور على ملف',
                autoindex: 'السماح بإدراج ملفات الخادم إذا لم يتم العثور على ملف index.html',
                with404: 'أو عرض صفحة خطأ 404 مخصصة'
            },
            phpModes: {
                default: 'خدمة ملف index.php أو ملفات PHP التي تنتهي بـ .php',
                smart: 'محاولة العثور على ملف PHP بدون .php',
                indexSafe: 'خدمة ملف index.php الجذر ولكن لا تحاول إذا كان العميل يبحث عن ملف',
                index: 'خدمة ملف index.php الجذر عندما لا يتم العثور على ملف ثابت',
                always: 'السماح بطلبات نمط PATH_INFO التي يتم توجيهها إلى PHP',
            },
            deleteSubfolderPrompt: "هل أنت متأكد من رغبتك في حذف تكوين المجلد الفرعي لـ {0}",
            inputSubfolderPrompt: "يرجى إدخال المجلد الفرعي (يجب أن يبدأ بـ '/' وبدون مسافات)",
            inputSubfolderNotValid: "إدخال المجلد الفرعي غير صالح",
            inputSubfolderNotUnique: "يجب أن تكون قيمة المجلد الفرعي فريدة مع إدخالات المجلد الفرعي الأخرى",
        }
    },
    hostDNS: {
        title: `تحقق من تكوين DNS`,
        description: `<p>تساعدك هذه الصفحة على تغيير سجلات DNS إذا قمت بتوجيه خادم اسم النطاق الخاص بك إلينا.
        </p> <p>بدلاً من ذلك، يمكنك أيضًا تحرير سجلات DNS عبر Webmin.</p>`,
        helpText: `مساعدة في التكوين`,
        error: `خطأ: لا يوجد تكوين لـ {0}`,
        errorFetch: "حدث خطأ أثناء جلب تكوين dns",
        notExist: `خطأ: لا يوجد تكوين لـ {0}`,
        tabCurrent: `إعدادات DNS الحالية`,
        tabEdit: `تحرير DNS بشكل تفاعلي`,
        tabPreview: `معاينة التغييرات`,
        existingRecords: `سجلات DNS الموجودة`,
        addedRecords: `سجلات DNS المضافة`,
    },
    hostLog: {
        runningList: 'قائمة العمليات الجارية',
        logTypeError: 'سجل أخطاء NGINX',
        logTypeAccess: 'سجل وصول NGINX',
        logTypePassenger: 'سجل تطبيق Passenger',
        logTypeErrorHint: 'يتضمن هذا السجل سجلات أخطاء NGINX و PHP لليوم الحالي',
        logTypeAccessHint: 'يتضمن هذا السجل سجلات وصول NGINX لليوم الحالي',
        logTypePassengerHint: 'يتضمن هذا السجل سجل تطبيق Passenger الجاري',
        errorFetch: "حدث خطأ أثناء جلب ملف السجل",
        subdomain: `النطاق الفرعي`,
        maxLines: `الحد الأقصى لعدد السطور`,
        emptyLog: `هذا السجل فارغ حاليًا`,
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
        dnsManagedHint: `We don't provide UI for custom DNS records. <br />
          If your nameservers are set to <b>{0}</b> then DNS are handled by
          <a href="{1}" target="_blank">the respective website DNS</a>.`,
        dnsManagedOpen: `If you want to change it anyway please manage it via our
        <a href="{0}" target="_blank">Registrar UI</a>. Click forgot password
        and enter your current email to set your password the first time.`
    },
}

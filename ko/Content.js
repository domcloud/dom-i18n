export default {
    footer: {
        help: `문제가 발생하셨나요?
        <a href="{0}" target="_blank">포럼</a>이나 <a href="{1}">이메일</a> 또는
        <a href="{2}">채팅</a>으로 도움을 요청하세요.`,
        credit: `{0}, 작성자 <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `DOM Cloud에 오신 것을 환영합니다! 🎉`,
        description: ` <p>안녕하세요, {0}</p>
        <p>
          인터넷에서 성공할 수 있는 자유를 얻기 위해 DOM Cloud 함대에 가입해 주셔서 감사합니다!
        </p>
        <p>
          최상의 서비스를 제공하기 위해 현재 위치한 지역을 확인해야 합니다.
          이는 나중에 변경할 수 있는 결제 옵션과 기본 서버 위치에도 영향을 미칩니다:
        </p>
        `,
        createWebsiteHint: `준비되셨나요? 첫 번째 웹사이트를 만들어 보겠습니다.`,
        createWebsiteBtn: `웹사이트 만들기`,
        emailConfirmation: `
            계속 진행하기 전에 <strong>{0}</strong> 이메일을 확인해야 할 것 같습니다.<br />
            이메일(및 스팸) 수신함을 확인해 주세요.
        `,
        emailConfirmationHint: `이메일이 아직 도착하지 않았나요?`,
        emailConfirmationBtn: `확인 이메일 재전송`,
        emailConfirmationSent: "<strong>{0}</strong>에 확인 이메일이 전송되었습니다!",
        changeCountryBtn: `국가 변경`,
    },
    notification: {
        freeUserGuideTitle: `환영합니다!`,
        freeUserGuideHint: `클라우드 플랫폼으로 저희를 선택해 주셔서 감사합니다 🥳 아직 시작하지 않았다면,
          <a href="{0}" target="_blank">시작 가이드</a>를 읽어 보세요.
          전체 경험을 원하십니까? <a href="{1}">계획을 업그레이드</a>하여
          무료 맞춤형 도메인, 전체 타사 API 액세스,
          도커 및 사용자 지정 백그라운드 서비스와 같은 기능을 잠금 해제하세요 <a href={2} target="_blank">등등</a>!`,
        empty: '여기에 볼 것이 없습니다',
    },
    purchaseConfirmation: {
        purchasedHint: "감사합니다. 결제가 확인되면 확인 이메일이 이메일로 전송됩니다.",
        purchaseCancel: "결제가 취소되었습니다.",
    },
    accountDeletion: {
        title: `계정 삭제`,
        hint: `주의! 계정 삭제는 영구적이며 이 작업을 되돌릴 수 없습니다. 호스트나 등록된 도메인이 있는 경우 먼저 삭제해야 합니다. 도움이 필요하면 문의하세요.`,
        prompt: `계정 삭제에 동의하려면 이메일을 입력하세요.`,
        disabled: `호스팅이나 등록된 도메인이 있으면 이 계정을 삭제할 수 없습니다.`,
    },
    hostNeedInvite: {
        title: "초대 코드 필요",
        hint: "안녕하세요 👋 DOM Cloud 무료 플랜을 이용하려면 초대 코드 또는 GitHub 계정 연결을 통해 신뢰를 얻어야 합니다. 초대 코드는 이 플랫폼을 추천한 사람으로부터 받습니다.",
        hintBtn: "허용!",
        hintGitHub: "또는 GitHub 계정을 연결할 수 있습니다. GitHub 계정은 <b>6개월 이상되어야 하며 팔로워가 1명 이상 있어야 합니다</b>.",
        githubFail: "죄송합니다! 연결된 GitHub 계정은 아직 신뢰할 수 없습니다. 우리의 요구 사항을 충족하는 올바른 계정을 다시 연결해 보세요.",
        altHint: "이 단계를 건너뛰고 싶다면, <a href=\"{0}\">한 번 이상 업그레이드</a>할 수 있습니다. 업그레이드는 초대 코드나 추가 계정을 연결하지 않고도 신뢰할 수 있는 실제 사람임을 확인합니다 😄."
    },
    hostCreate: {
        chooseTemplate: `시작할 템플릿을 선택하세요`,
        startFromScratch: `처음부터 시작`,
        uploadFileHint: `분석할 콘텐츠 파일을 업로드하거나 URL을 입력하세요`,
        readingTheFile: `파일을 읽는 중...`,
        readingFiles: `{1}개의 파일 중 {0}개를 읽는 중...`,
        readingZipFile: `ZIP 파일을 읽는 중...`,
        compressingZipFile: `ZIP 파일로 압축 중...`,
        uploadingFiles: `파일을 업로드하는 중... ({1}개 중 {0}개)`,
        uploadCompleted: `업로드 완료 ({1}개 파일의 총 크기 {0})`,
        uploadError: `상태 코드 {0}으로 업로드 실패`,
        emptyZipFile: `ZIP 파일에서 파일을 찾을 수 없습니다`,
        noFileSelected: `선택된 파일이 없습니다`,
        exceededFileSizeLimit: `이 파일의 크기({0})가 제한({1})을 초과합니다. 먼저 GitHub에 업로드하고 링크를 여기에 넣어 보세요.`,
        missingTemplate: `데이터 템플릿을 가져오는 데 실패했습니다. 파일이 아직 없을 수 있습니다.`,
        checkingRepo: `이 저장소를 확인하는 중...`,
        cloneWithDeployKey: `저장소가 배포 키로 복제됩니다.`,
        uploadDirectory: `디렉토리 업로드`,
        uploadZipFile: `ZIP 파일 업로드`,
        dropDirectory: `디렉토리를 놓으세요...`,
        dropZipFile: `ZIP 파일을 놓으세요...`,
        dropWhatsThat: `이것은 ZIP 파일이나 디렉토리가 아닙니다...`,
        dropMultiple: `(하나의 파일이나 디렉토리만 놓아주세요)`,
        readingDroppedDirectory: `드롭된 디렉토리를 읽는 중...`,
        readingDroppedZipFile: `드롭된 ZIP 파일을 읽는 중...`,
        orPasteUrl: "... 또는 Git 저장소/ZIP URL을 붙여넣기",
        attachDeployKey: `배포 키 연결`,
        selectFramework: `프레임워크나 언어를 알려주세요`,
        applyFramework: `이 템플릿 적용`,
        attachDeployKeyHint: `저장소가 비공개로 설정된 경우 배포 키를 사용하여
            액세스할 수 있습니다. 비대칭 배포 키를 만들었으므로 이 공개 키를 저장소에 추가해야 합니다.`,
        attachDeployKeyLearnMore: `배포 키로 GitHub 통합에 대해 자세히 알아보세요.`,
        attachDeployKeyOpenConfig: `저장소 배포 키 설정 열기`,
        attachDeployKeyConfirm: `이 공개 키를 추가했습니다`,
    },
    hostConnection: {
        title: `연결 확인`,
        description: `
            <p>
                이 페이지는 이 웹사이트가 인터넷에서 접근 가능한지 확인합니다.
            </p>
            <p>
                웹사이트가 인터넷에서 접근 가능하려면 세 가지 전제 조건이 필요합니다:
            </p>
            <ul>
                <li>DNS 서버가 가용해야 합니다</li>
                <li>반환된 IP 주소가 정확해야 합니다</li>
                <li>서버의 콘텐츠가 접근 가능해야 합니다</li>
            </ul>
            <p>
                위의 전제 조건 중 하나라도 실패하면 이 웹사이트는 인터넷에서 접근 가능하지 않을 수 있습니다.
            </p>`,
        dnsOffTitle: `네임 서버 없음`,
        dnsOffContent: `이 웹사이트에는 네임 서버가 없습니다. 외부에서 구성할 수 있습니다.`,
        dnsManagedTitle: `DNS 관리됨`,
        dnsManagedContent: `이 웹사이트의 DNS는 DOM Cloud에서 관리합니다.`,
        dnsMixedTitle: `DNS가 혼합되었습니다`,
        dnsMixedContent: `이 웹사이트의 DNS는 혼합 구성을 가지고 있습니다. 네임 서버가 올바르게 구성되었는지 확인하세요. 다른 레코드와 우리의 레코드를 혼합하지 마세요!`,
        dnsExternalTitle: `외부에서 관리되는 DNS`,
        dnsExternalContent: `이 웹사이트의 DNS는 제3자에 의해 관리됩니다.`,
        pingNoIpTitle: `IP 주소를 찾을 수 없습니다`,
        pingNoIpContent: `DNS 서버가 IP 주소를 반환하지 않습니다.`,
        pingNoIp6Title: `IPv6 없음`,
        pingNoIp6Content: `이 웹사이트의 DNS는 IPv6 주소가 없습니다. 이는 IPv6 사용자에게는 이용할 수 없을 수 있습니다.`,
        pingWrongIpTitle: `잘못된 IP 주소`,
        pingWrongIpContent: `이 웹사이트의 DNS가 잘못된 IP 주소를 반환합니다. 이는 올바른 콘텐츠를 제공하지 않거나, 프록시 뒤에 있을 수 있습니다.`,
        pingNoWwwTitle: `www.* 서브도메인의 IP 주소를 찾을 수 없습니다`,
        pingNoWwwContent: `
                일부 사용자는 이 웹사이트를 www로 접두사를 붙여 접근할 때 접근할 수 없을 수 있습니다. www 서브도메인 리디렉션 설정을 권장합니다.`,
        pingOkTitle: `IP 주소 확인됨`,
        pingOkContent: `이 웹사이트의 DNS는 올바른 IP 주소를 반환합니다.`,
        webNoHttpTitle: `웹사이트에 접근할 수 없습니다`,
        webNoHttpContent: `이 웹사이트는 HTTP를 통해 접근할 수 없습니다.`,
        webNoHttpsTitle: `HTTPS 이용 불가`,
        webNoHttpsContent: `이 웹사이트는 HTTPS 인증서가 설치되지 않았거나, 만료되었거나, 제대로 구성되지 않았을 수 있습니다.`,
        webBadHttpTitle: `웹사이트가 오류를 반환합니다`,
        webBadHttpContent: `이 웹사이트는 500 또는 403 오류를 반환합니다. 올바르게 구성되지 않았을 수 있습니다 (NGINX/앱 설정을 확인하세요!).`,
        webBadRedirectTitle: `웹사이트가 잘못된 리디렉션을 가지고 있습니다`,
        webBadRedirectContent: `이 웹사이트는 방문자를 도메인 외부로 리디렉션합니다. 올바르게 구성되지 않았을 수 있습니다 (기본 URL 설정을 확인하세요!).`,
        webBadWwwTitle: `www.* 서브도메인에 접근할 수 없습니다`,
        webBadWwwContent: `이 웹사이트의 www 서브도메인은 접근할 수 없거나 오류를 반환합니다.`,
        webInsecureTitle: `웹사이트가 완전히 안전하지 않습니다`,
        webInsecureContent: `이 웹사이트는 HTTP를 HTTPS로 리디렉션하지 않습니다. 이는 괜찮지만 권장되지 않습니다.`,
        webOkTitle: `웹사이트 정상`,
        webOkContent: `이 웹사이트는 HTTP 및 HTTPS를 통해 접근 가능합니다.`,
    },
    hostFirewall: {
        title: `방화벽 확인`,
        description: `
            <p>
                방화벽은 화이트리스트에 없는 모든 아웃고잉 트래픽을 차단하여 해커의 침입 시 귀하의 웹사이트가 악용되지 않도록 도와줍니다.
            </p>
            <p>
                귀하의 웹사이트 사용에 따라, 웹사이트가 서드파티 API나 화이트리스트에 포함되지 않은 다른 형태의 통신을 요구하는 경우 방화벽을 끄고 싶을 수 있습니다.
            </p>
            <p>방화벽은 도메인 및 모든 서브도메인에 적용됩니다. 무료 플랜 사용자에게는 강제로 켜집니다. 이를 끄려면 라이트 이상의 구독 플랜에 가입해야 합니다.</p>
            <p><a href="{0}" target="_blank" rel="noreferrer">더 읽기</a></p>
            `,
        offTitle: `방화벽 꺼짐`,
        offContent: `<p>
                모든 아웃고잉 트래픽이 허용됩니다. 사이트를 안전하게 유지하세요!
            </p>`,
        offBtn: `켜기`,
        onTitle: `방화벽 활성화`,
        onContent: `<p>
                화이트리스트를 제외한 모든 서드파티 아웃고잉 연결이 차단됩니다. 이 제한을 제거하려면 끄세요.
            </p>`,
        onBtn: `끄기`,
    },
    hostNginx: {
        title: `NGINX 설정 확인`,
        description: `
            <p>
                NGINX는 HTTP 포트(80 및 443)를 제공하는 주요 서버 게이트웨이입니다. 웹사이트가 작동하려면 웹 앱이 여기에 올바르게 구성되어야 합니다. 현재 구성을 확인하고 사전 구성된 UI 또는 YAML 스크립트로 전체 NGINX 구성을 통해 변경을 할 수 있습니다.
            </p>
            <p>
                NGINX는 일반적으로 <code>root</code> 경로를 통해 구성된 정적 콘텐츠를 먼저 제공하거나 파일이 없을 경우 PHP-FPM <code>fastcgi</code> 또는 Passenger <code>passenger</code>를 통해 요청을 동적으로 앱에 전달합니다.
            </p>
            <p>
                NGINX 구성은 서브도메인마다 다릅니다. 서브도메인 콘텐츠가 이 웹사이트 내에 존재하는 경우, 아래에 서브도메인 이름을 입력하여 구성하십시오. NGINX 구성을 읽고 문제가 발생하면 저희에게 연락해 주세요.
            </p>
            `,
        subdomain: `서브도메인`,
        error: `오류: {0}에 대한 구성이 존재하지 않습니다`,
        errorFetch: "NGINX 구성을 가져오는 동안 오류가 발생했습니다",
        notExist: `오류: {0}에 대한 구성이 존재하지 않습니다`,
        tabCurrent: `현재 NGINX 구성`,
        tabEdit: `상호작용으로 편집`,
        tabPreview: `변경 미리보기`,
        labels: {
            subfolderConfig: "서브폴더 구성",
            rootConfig: "루트 구성",
            rootPath: "루트 경로",
            rootIsAlias: "루트는 별칭입니다",
            resolveType: "해결 유형",
            resolveTypes: {
                static: "정적",
                php: "PHP-FPM",
                app: "Phusion App",
                gls: "일반 앱",
                socat: "포트 전달",
                deny: "요청 거부",
            },
            staticMode: "정적 모드",
            staticModes: {
                default: "기본값",
                smart: "스마트",
                autoindex: "자동 인덱스",
                index: "루트 인덱스",
            },
            static404Path: "404 HTML 파일 경로",
            phpMode: "PHP 모드",
            phpModes: {
                default: '기본값',
                smart: '스마트',
                indexSafe: '루트 인덱스 - 안전',
                index: '루트 인덱스 - 표준',
                always: '루트 인덱스 - 항상',
            },
            socatPort: '포트 전달',
            appMode: '앱 모드',
            appEntry: '앱 시작 파일',
            appBin: '앱 바이너리 경로',
            appModes: {
                default: '자동',
                node: '노드',
                python: '파이썬',
                ruby: '루비',
            },
            glsCmd: '앱 명령',
            appEnv: '환경 키',
            appDev: '개발 모드?',
            appRoot: '작업 디렉토리',
            addSubfolderConfig: '서브폴더 구성 추가',
        },
        hints: {
            root: "{0}에서 {1}로 정적 파일을 해결합니다",
            socat: "클라이언트 요청을 포트 {0}으로 전달합니다",
            app: "{1}에서 {0} 스크립트를 {2}을 사용하여 {3}에서 호출합니다",
            gls: "\"{0}\"를 {1}에서 지정된 $PORT로 실행합니다",
            staticModes: {
                default: '정적 파일을 제공',
                smart: '가능한 경우 HTML 파일을 찾으려고 시도',
                index: '파일을 찾을 수 없는 경우 루트 index.html을 제공',
                autoindex: 'index.html을 찾을 수 없는 경우 서버 파일 목록을 허용',
                with404: '또는 사용자 정의 404 오류 페이지 표시'
            },
            phpModes: {
                default: 'index.php 또는 .php로 끝나는 PHP 파일 제공',
                smart: '.php 없이 PHP 파일을 찾으려고 시도',
                indexSafe: '루트 index.php를 제공하지만 클라이언트가 파일을 찾으려고 할 때는 시도하지 않음',
                index: '정적 파일을 찾을 수 없는 경우 루트 index.php 제공',
                always: 'PHP를 처리하기 위해 PATH_INFO 스타일의 요청 허용',
            },
            deleteSubfolderPrompt: "정말로 {0}의 서브폴더 구성을 삭제하시겠습니까?",
            inputSubfolderPrompt: "서브폴더를 입력하세요 ('/'로 시작하고 공백이 없어야 합니다)",
            inputSubfolderNotValid: "서브폴더 입력이 유효하지 않습니다",
            inputSubfolderNotUnique: "서브폴더 값은 다른 서브폴더 항목과 고유해야 합니다",
        }
    },
    hostDNS: {
        title: `DNS 구성 확인`,
        description: `<p>이 페이지는 도메인 이름 서버를 우리에게 지시할 경우 DNS 레코드를 변경하는 데 도움을 줍니다.</p> <p>또한, Webmin을 통해 DNS 레코드를 편집할 수도 있습니다.</p>`,
        helpText: `구성 도움말`,
        error: `오류: {0}에 대한 구성이 존재하지 않습니다`,
        errorFetch: "DNS 구성을 가져오는 동안 오류가 발생했습니다",
        notExist: `오류: {0}에 대한 구성이 존재하지 않습니다`,
        tabCurrent: `현재 DNS 설정`,
        tabEdit: `DNS를 상호작용으로 편집`,
        tabPreview: `변경 미리보기`,
        existingRecords: `기존 DNS 레코드`,
        addedRecords: `추가된 DNS 레코드`,
    },
    hostLog: {
        runningList: '실행 중인 프로세스 목록',
        logTypeError: 'NGINX 오류 로그',
        logTypeAccess: 'NGINX 접근 로그',
        logTypePassenger: '패신저 앱 로그',
        logTypeErrorHint: '이 로그에는 현재 날짜의 NGINX 및 PHP 오류 로그가 포함되어 있습니다',
        logTypeAccessHint: '이 로그에는 현재 날짜의 NGINX 접근 로그가 포함되어 있습니다',
        logTypePassengerHint: '이 로그에는 현재 실행 중인 패신저 앱 로그가 포함되어 있습니다',
        errorFetch: "로그 파일을 가져오는 동안 오류가 발생했습니다",
        subdomain: `서브도메인`,
        maxLines: `최대 행`,
        emptyLog: `현재 이 로그는 비어 있습니다`,
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
        dnsManagedHint: `We don't provide UI for custom DNS records. <br />
          If your nameservers are set to <b>{0}</b> then DNS are handled by
          <a href="{1}" target="_blank">the respective website DNS</a>.`,
        dnsManagedOpen: `If you want to change it anyway please manage it via our
        <a href="{0}" target="_blank">Registrar UI</a>. Click forgot password
        and enter your current email to set your password the first time.`
    },
}

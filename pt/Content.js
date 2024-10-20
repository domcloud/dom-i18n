export default {
    footer: {
        help: `Algo não está funcionando? Peça ajuda no
        <a href="{0}" target="_blank">fórum</a> ou por <a href="{1}">email</a> ou
        <a href="{2}">chat</a>.`,
        credit: `{0}, construído por <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `Bem-vindo ao DOM Cloud! 🎉`,
        description: ` <p>Olá, {0}</p>
        <p>
          Obrigado por se juntar à frota DOM Cloud para alcançar a liberdade de
          ter sucesso na Internet!
        </p>
        <p>
          Para podermos atendê-lo de forma ideal, precisamos confirmar a região em que você se encontra atualmente.
          Isso também afeta suas opções de pagamento e a localização padrão do servidor, que você pode alterar posteriormente:
        </p>
        `,
        createWebsiteHint: `Pronto? Vamos criar seu primeiro site.`,
        createWebsiteBtn: `Criar um site`,
        emailConfirmation: `
            Parece que você precisa verificar o email <strong>{0}</strong>
            antes de continuar.<br />
            Por favor, verifique sua caixa de entrada de email (e spam).
        `,
        emailConfirmationHint: `O email ainda não chegou?`,
        emailConfirmationBtn: `Reenviar Email de Confirmação`,
        emailConfirmationSent: "Email de confirmação para <strong>{0}</strong> foi enviado!",
        changeCountryBtn: `Mudar de país`,
    },
    notification: {
        freeUserGuideTitle: `Bem-vindo a bordo!`,
        freeUserGuideHint: `Obrigado por nos escolher como sua plataforma de nuvem 🥳 Se você ainda não fez,
          tente ler nosso <a href="{0}" target="_blank">Guia de Início</a>.
          Quer a experiência completa? Tente <a href="{1}">atualizar seu plano</a> para desbloquear
          mais recursos, como domínio personalizável gratuito, acesso completo a API de terceiros,
          docker e serviços de fundo personalizados <a href={2} target="_blank">e muito mais</a>!`,
        empty: 'Nada para ver aqui',
    },
    purchaseConfirmation: {
        purchasedHint: "Obrigado. Se nosso sistema verificou seu pagamento, um email de confirmação será enviado para seu email.",
        purchaseCancel: "Seu pagamento foi cancelado.",
    },
    accountDeletion: {
        title: `Exclusão da sua Conta`,
        hint: `ATENÇÃO! A exclusão da conta é permanente e não podemos reverter a ação. Se você tiver um host ou domínio registrado, precisará excluí-los primeiro. Entre em contato conosco se precisar de ajuda.`,
        prompt: `Por favor, escreva seu email para concordar com a exclusão da conta.`,
        disabled: `Você não pode excluir esta conta se ainda houver hospedagem ou domínio registrado.`,
    },
    hostCreate: {
        chooseTemplate: `Escolha um modelo para começar`,
        startFromScratch: `Começar do zero`,
        uploadFileHint: `Envie ou insira a URL para analisar o conteúdo`,
        readingTheFile: `Lendo o arquivo...`,
        readingFiles: `Lendo {0} de {1} arquivo(s)...`,
        readingZipFile: `Lendo o arquivo zip...`,
        compressingZipFile: `Compactando em um arquivo zip...`,
        uploadingFiles: `Enviando arquivos... ({0} de {1})`,
        uploadCompleted: `Upload concluído ({0} arquivo(s) com tamanho total de {1})`,
        uploadError: `Falha no upload com o código de status {0}`,
        emptyZipFile: `Nenhum arquivo encontrado no zip`,
        noFileSelected: `Nenhum arquivo selecionado`,
        exceededFileSizeLimit: `O tamanho do arquivo ({0}) excede o limite ({1}), tente enviá-lo primeiro para o GitHub e coloque o link aqui.`,
        missingTemplate: `Falha ao obter o modelo de dados. O arquivo ainda pode estar ausente.`,
        checkingRepo: `Verificando este repositório...`,
        cloneWithDeployKey: `Repositório será clonado com uma chave de implantação.`,
        uploadDirectory: `Enviar um diretório`,
        uploadZipFile: `Enviar um arquivo zip`,
        dropDirectory: `Solte esse diretório...`,
        dropZipFile: `Solte esse arquivo zip...`,
        dropWhatsThat: `Isso não é um arquivo zip ou diretório...`,
        dropMultiple: `(Por favor, solte apenas um arquivo ou diretório)`,
        readingDroppedDirectory: `Lendo o diretório solto...`,
        readingDroppedZipFile: `Lendo o arquivo zip solto...`,
        orPasteUrl: "... ou cole a URL do Git Repo/Zip",
        attachDeployKey: `Anexar chave de implantação`,
        selectFramework: `Diga-nos o framework ou linguagem`,
        applyFramework: `Aplicar este modelo`,
        attachDeployKeyHint: `Se o seu repositório estiver definido como privado, você pode usar
            chaves de implantação para acessar. Criamos uma chave de implantação assimétrica para você, você precisará adicionar esta chave pública ao seu repositório.`,
        attachDeployKeyLearnMore: `Saiba mais sobre integração GitHub com chaves de implantação.`,
        attachDeployKeyOpenConfig: `Abrir configuração de chave de implantação do repositório`,
        attachDeployKeyConfirm: `Adicionei esta chave pública`,
    },
    hostConnection: {
        title: `Verificação de Conexão`,
        description: `
            <p>
                Esta página verifica se este site é acessível a partir da internet.
            </p>
            <p>
                Existem três pré-requisitos para um site ser acessível a partir da internet:
            </p>
            <ul>
                <li>O servidor DNS deve estar disponível</li>
                <li>O endereço IP retornado deve estar correto</li>
                <li>O conteúdo do servidor deve ser acessível</li>
            </ul>
            <p>
                Se qualquer um dos pré-requisitos acima falhar, este site pode não ser acessível a partir da internet.
            </p>`,
        dnsOffTitle: `Nenhum servidor de nomes`,
        dnsOffContent: `Este site não possui um servidor de nomes. Pode ser configurado externamente.`,
        dnsManagedTitle: `DNS gerenciado`,
        dnsManagedContent: `O DNS deste site é gerenciado pela DOM Cloud.`,
        dnsMixedTitle: `DNS misturado`,
        dnsMixedContent: `O DNS deste site tem uma configuração mista. Certifique-se de que o servidor de nomes esteja configurado corretamente. Não misture nossos registros com outros!`,
        dnsExternalTitle: `DNS gerenciado externamente`,
        dnsExternalContent: `O DNS deste site é gerenciado por terceiros.`,
        pingNoIpTitle: `Endereço IP não encontrado`,
        pingNoIpContent: `O servidor DNS não retorna um endereço IP.`,
        pingNoIp6Title: `Sem IPv6`,
        pingNoIp6Content: `O DNS deste site não tem um endereço IPv6. Pode não estar disponível para usuários de IPv6.`,
        pingWrongIpTitle: `Endereço IP incorreto`,
        pingWrongIpContent: `O DNS deste site retorna um endereço IP incorreto. Pode não entregar o conteúdo correto ou estar por trás de um proxy.`,
        pingNoWwwTitle: `Endereço IP para subdomínio www.* não encontrado`,
        pingNoWwwContent: `
                Algumas pessoas podem não conseguir acessar este site ao prefixá-lo com www. É recomendado configurar um redirecionamento de subdomínio www.`,
        pingOkTitle: `Endereço IP correto`,
        pingOkContent: `O DNS deste site retorna o endereço IP correto.`,
        webNoHttpTitle: `Site inacessível`,
        webNoHttpContent: `Este site não é acessível via HTTP.`,
        webNoHttpsTitle: `HTTPS não disponível`,
        webNoHttpsContent: `Este site pode não ter um certificado HTTPS instalado, ou pode estar expirado ou configurado incorretamente.`,
        webBadHttpTitle: `Site retorna um erro`,
        webBadHttpContent: `Este site retorna um erro 500 ou 403. Pode não estar configurado corretamente (verifique as configurações do NGINX/App!).`,
        webBadRedirectTitle: `Site com redirecionamentos incorretos`,
        webBadRedirectContent: `Este site redireciona visitantes para fora do domínio. Pode não estar configurado corretamente (verifique as configurações do URL base!).`,
        webBadWwwTitle: `Subdomínio www.* inacessível`,
        webBadWwwContent: `O subdomínio www deste site está inacessível ou retorna um erro.`,
        webInsecureTitle: `Site não totalmente seguro`,
        webInsecureContent: `Este site não redireciona HTTP para HTTPS. Isso é aceitável, mas não é recomendado.`,
        webOkTitle: `Site OK`,
        webOkContent: `Este site é acessível via HTTP e HTTPS.`,
    },
    hostFirewall: {
        title: `Verificação de Firewall`,
        description: `
            <p>
                Um firewall ajuda a proteger seu site de abuso em caso de invasão de hackers, bloqueando todo o tráfego de saída, exceto para a <a href="{0}" target="_blank" rel="noreferrer">lista de permissões</a>.
            </p>
            <p>
                Dependendo do uso do site, você pode querer desativar o firewall se o seu site precisar se comunicar com APIs de terceiros ou outras formas de comunicação que não estão na lista de permissões.
            </p>
            <p>O firewall se aplica ao domínio e a todos os subdomínios. Ele é obrigatório para usuários com um plano gratuito. Para desativá-lo, você deve ter uma assinatura (Lite ou superior).</p>
            <p><a href="{1}" target="_blank" rel="noreferrer">Leia mais</a></p>
            `,
        offTitle: `Firewall está desativado`,
        offContent: `<p>
                Todo o tráfego de saída é permitido. Por favor, mantenha seu site seguro!
            </p>`,
        offBtn: `Ativar`,
        onTitle: `Firewall está ativo`,
        onContent: `<p>
                Todas as conexões de saída de terceiros estão bloqueadas, exceto para a lista de permissões.<br/>
                Desative-o para remover essa restrição.
            </p>`,
        onBtn: `Desativar`,
    },
    hostNginx: {
        title: `Verificação de Configuração NGINX`,
        description: `
            <p>
                NGINX é nossa principal gateway de servidor que serve as portas HTTP (80 e 443). Para que seu site funcione, seu aplicativo da web deve ser configurado corretamente aqui. Aqui, você pode visualizar sua configuração atual e fazer alterações através de uma IU pré-configurada ou uma configuração completa de NGINX como script YAML.
            </p>
            <p>
                NGINX geralmente serve conteúdo estático configurado através do caminho <code>root</code> primeiro, ou roteia a solicitação dinamicamente para o seu aplicativo via PHP-FPM <code>fastcgi</code> ou Passenger <code>passenger</code> se tal arquivo não existir.
            </p>
            <p>
                A configuração do NGINX é diferente para subdomínios. Se o conteúdo do seu subdomínio estiver contido neste site, insira o nome do subdomínio abaixo para configurá-lo. Reserve também um momento para ler nossa <a href="{0}" target="_blank" rel="noreferrer">documentação de configuração NGINX</a> e entre em contato conosco se tiver problemas.
            </p>
            `,
        subdomain: `Subdomínio`,
        error: `Erro: configuração para {0} não encontrada`,
        errorFetch: "Ocorreu um erro ao buscar a configuração NGINX",
        notExist: `Erro: configuração para {0} não encontrada`,
        tabCurrent: `Configuração NGINX Atual`,
        tabEdit: `Editar Interativamente`,
        tabPreview: `Pré-visualizar Alterações`,
        labels: {
            subfolderConfig: "Configuração de Subpasta",
            rootConfig: "Configuração Principal",
            rootPath: "Caminho Root",
            rootIsAlias: "Root é um alias",
            resolveType: "Tipo de Resolução",
            resolveTypes: {
                static: "Estático",
                php: "PHP-FPM",
                app: "Aplicativo Phusion",
                gls: "Aplicativo Genérico",
                socat: "Encaminhamento de Porta",
                deny: "Negar Solicitação",
            },
            staticMode: "Modo Estático",
            staticModes: {
                default: "Padrão",
                smart: "Inteligente",
                autoindex: "Autoindex",
                index: "Root Index",
            },
            static404Path: "Caminho do Arquivo HTML 404",
            phpMode: "Modo PHP",
            phpModes: {
                default: 'Padrão',
                smart: 'Inteligente',
                indexSafe: 'Root Index - Seguro',
                index: 'Root Index - Padrão',
                always: 'Root Index - Sempre',
            },
            socatPort: 'Encaminhamento de Porta',
            appMode: 'Modo Aplicativo',
            appEntry: 'Arquivo de Entrada do Aplicativo',
            appBin: 'Caminho binário do Aplicativo',
            appModes: {
                default: 'Automático',
                node: 'Node',
                python: 'Python',
                ruby: 'Ruby',
            },
            glsCmd: 'Comando do Aplicativo',
            appEnv: 'Chaves de Ambiente',
            appDev: 'Modo de Desenvolvimento?',
            appRoot: 'Diretório de Trabalho',
            addSubfolderConfig: 'Adicionar Configuração de Subpasta',
        },
        hints: {
            root: "Resolve {1} para arquivos estáticos de {0}",
            socat: "Encaminha solicitações do cliente para a porta {0}",
            app: "Executa o script {0} de {1} com {2} de {3}",
            gls: "Executa \"{0}\" de {1} para a porta especificada $PORT",
            staticModes: {
                default: 'Servir arquivos estáticos',
                smart: 'Tentar encontrar arquivos HTML, se possível',
                index: 'Servir root index.html, se nenhum arquivo for encontrado',
                autoindex: 'Permitir listagem de arquivos do servidor, se index.html não for encontrado',
                with404: 'Ou exibir uma página de erro 404 personalizada'
            },
            phpModes: {
                default: 'Servir arquivos PHP terminando com .php ou index.php',
                smart: 'Tentar encontrar arquivos PHP sem .php',
                indexSafe: 'Servir root index.php mas não tentar quando o arquivo for buscado pelo cliente',
                index: 'Servir root index.php se nenhum arquivo estático for encontrado',
                always: 'Permitir solicitações no estilo PATH_INFO para processar PHP',
            },
            deleteSubfolderPrompt: "Tem certeza de que deseja excluir a configuração de subpasta para {0}?",
            inputSubfolderPrompt: "Insira a subpasta (começando com '/' e sem espaços)",
            inputSubfolderNotValid: "Entrada de subpasta não é válida",
            inputSubfolderNotUnique: "O valor da subpasta deve ser exclusivo em relação a outros itens de subpasta",
        }
    },
    hostDNS: {
        title: `Verificação de Configuração DNS`,
        description: `<p>Esta página ajuda a alterar os registros DNS se você apontar os servidores de nomes do seu domínio para nós.</p> <p>Você também pode editar registros DNS através do Webmin.</p>`,
        helpText: `Ajuda de Configuração`,
        error: `Erro: configuração para {0} não encontrada`,
        errorFetch: "Ocorreu um erro ao buscar a configuração DNS",
        notExist: `Erro: configuração para {0} não encontrada`,
        tabCurrent: `Configurações DNS Atuais`,
        tabEdit: `Editar DNS Interativamente`,
        tabPreview: `Pré-visualizar Alterações`,
        existingRecords: `Registros DNS Existentes`,
        addedRecords: `Registros DNS Adicionados`,
    },
    hostLog: {
        runningList: 'Lista de Processos Ativos',
        logTypeError: 'Log de Erros NGINX',
        logTypeAccess: 'Log de Acesso NGINX',
        logTypePassenger: 'Log de Aplicativo Passenger',
        logTypeErrorHint: 'Este log contém os logs de erros NGINX e PHP da data atual',
        logTypeAccessHint: 'Este log contém os logs de acesso NGINX da data atual',
        logTypePassengerHint: 'Este log contém os logs ativos do seu aplicativo Passenger',
        errorFetch: "Ocorreu um erro ao buscar os arquivos de log",
        subdomain: `Subdomínio`,
        maxLines: `Máximo de Linhas`,
        emptyLog: `Este log está atualmente vazio`,
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

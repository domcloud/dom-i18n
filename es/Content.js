export default {
    footer: {
        help: `¿Algo no funciona? Pida ayuda en 
        <a href="{0}" target="_blank">forum</a> o <a href="{1}">email</a> o
        <a href="{2}">chat</a>.`,
        credit: `{0}, construido por <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `Bienvenido a DOM Cloud! 🎉`,
        description: ` <p>Hola, {0}</p>
        <p>
          Gracias por unirse a la flota de DOM Cloud para alcanzar la libertad de
          ¡alcanzar el éxito en Internet!
        </p>
        <p>
          Para poder atenderle de forma óptima, necesitamos confirmarle la región que actualmente. 
          Esto también afecta a sus opciones de pago y a la ubicación predeterminada del servidor, que podrá cambiar más adelante:
        </p>
        `,
        createWebsiteHint: `¿Preparado? Hagamos tu primer sitio web.`,
        createWebsiteBtn: `Crear un sitio web`,
        emailConfirmation: `
            Parece que necesitas verificar el correo electrónico <strong>{0}</strong>
            antes de continuar.<br />
            Compruebe su correo electrónico (and spam) inbox.
        `,
        emailConfirmationHint: `¿Aún no ha llegado el correo electrónico?`,
        emailConfirmationBtn: `Volver a enviar el correo de confirmación`,
        emailConfirmationSent: "¡La confirmación de correo electrónico a <strong>{0}</strong> ha sido enviada!",
        changeCountryBtn: `Cambiar de país`,
    },
    notification: {
        freeUserGuideTitle: "¡Bienvenido a Bordo!",
        freeUserGuideHint: "Gracias por elegirnos como tu plataforma en la nube 🥳 Si aún no lo has hecho, prueba leyendo nuestra <a href=\"{0}\" target=\"_blank\">Guía de Inicio</a>. ¿Necesitas nuestra experiencia completa? Intenta <a href=\"{1}\">mejorar tu plan</a> para eliminar el firewall de API, los banners de dominio gratuito y desbloquear <a href=\"{2}\" target=\"_blank\">más funciones</a>!",
        lockedUserGuideTitle: "¡Bienvenido a Bordo!",
        lockedUserGuideHint: "Gracias por elegirnos como tu plataforma en la nube 🥳 Crea tu primer sitio web <a href=\"{0}\">aquí</a>. Es posible que se te pida vincular tu cuenta de GitHub para verificar esta cuenta. También puedes simplemente <a href=\"{1}\">mejorar tu plan</a> para verificar tu cuenta al instante junto con <a href=\"{2}\" target=\"_blank\">más funciones</a> como cuenta suscrita.",
        accountNoticeTitle: "⚠️ Tu cuenta puede ser suspendida",
        accountNoticeHint: "Tu cuenta está suspendida debido a este motivo: {0}. Puedes <a href=\"{1}\">mejorar tu plan</a> para resolver este problema.",
        empty: "Nada que ver aquí"
    },
    purchaseConfirmation: {
        purchasedHint: "Gracias. Si nuestro sistema ha verificado su pago, un correo electrónico de confirmación será enviado a su correo electrónico.",
        purchaseCancel: "Su pago ha sido cancelado.",
    },
    accountDeletion: {
        title: `Eliminar su cuenta`,
        hint: `!ATENCIÓN! La eliminación de la cuenta es permanente y no podemos revertir la acción. Si tiene un host o un dominio registrados, debe eliminarlos previamente. Contacte con nosotros si necesita ayuda.`,
        prompt: `Por favor, escriba su correo electrónico para aceptar la eliminación de la cuenta.`,
        disabled: `No puede eliminar esta cuenta si todavía hay alojamiento o un dominio registrado.`,
    },
    hostNeedInvite: {
        title: "Se necesita código de invitación",
        hint: "Hola 👋 Para disfrutar del plan gratuito de DOM Cloud necesitamos confiar en ti, ya sea mediante un código de invitación o vinculando tu cuenta de GitHub. El código de invitación proviene de quien te recomienda esta plataforma.",
        hintBtn: "¡Conceder!",
        hintGitHub: "Alternativamente, puedes vincular tu cuenta de GitHub. Tu cuenta de GitHub debe <b>tener seis meses o más de antigüedad y al menos un seguidor</b>.",
        githubFail: "¡Lo sentimos! Tu cuenta de GitHub vinculada aún no es confiable. Puedes intentar volver a vincular la cuenta correcta que cumpla con nuestros requisitos.",
        altHint: "Si deseas evitar este paso, puedes <a href=\"{0}\">mejorar al menos una vez</a>. Mejorar verifica que realmente eres humano y puedes ser confiable sin un código de invitación o vincular cuentas adicionales 😄."
    },
    hostCreate: {
        chooseTemplate: `Elige una plantilla para comenzar`,
        startFromScratch: `Empezar desde el principio`,
        uploadFileHint: `Sube o ingresa la URL para analizar el contenido`,
        readingTheFile: `Leyendo el archivo...`,
        readingFiles: `Leyendo {0} de {1} archivo(s)...`,
        readingZipFile: `Leyendo el archivo zip...`,
        compressingZipFile: `Comprimiendo en un archivo zip...`,
        uploadingFiles: `Subiendo archivos... ({0} de {1})`,
        uploadCompleted: `Carga completa ({0} archivo(s) con un tamaño total de {1})`,
        uploadError: `Error al cargar con el código de estado {0}`,
        emptyZipFile: `No se encontró ningún archivo en el zip`,
        noFileSelected: `No se seleccionó ningún archivo`,
        exceededFileSizeLimit: 'El tamaño de este archivo ({0}) supera el límite ({1}), intente subirlo a GitHub primero y ponga el enlace aquí en su lugar.',
        missingTemplate: `Error al recuperar la plantilla de datos. Tal vez el archivo aún falta.`,
        checkingRepo: `Verificando este repositorio...`,
        cloneWithDeployKey: `El repositorio se clonará con una clave de implementación.`,
        uploadDirectory: `Subir un directorio`,
        uploadZipFile: `Subir un archivo zip`,
        dropDirectory: `Suelta ese directorio...`,
        dropZipFile: `Suelta ese archivo zip...`,
        dropWhatsThat: `Eso no es un archivo zip o directorio...`,
        dropMultiple: `(Por favor, suelta solo un archivo o directorio)`,
        readingDroppedDirectory: `Leyendo el directorio soltado...`,
        readingDroppedZipFile: `Leyendo el archivo zip soltado...`,
        orPasteUrl: "... o pega la URL del Repo/Zip de Git",
        attachDeployKey: `Adjuntar clave de implementación`,
        selectFramework: `Indícanos el marco o lenguaje`,
        applyFramework: `Aplicar esta plantilla`,
        attachDeployKeyHint: `Si su repositorio está configurado como privado, puede usar
            claves de implementación para acceder a él. Hemos creado una clave de implementación
            asimétrica para usted, debe agregar esta clave pública a su repositorio.`,
        attachDeployKeyLearnMore: `Más información sobre la integración de GitHub
            con claves de implementación.`,
        attachDeployKeyOpenConfig: `Abrir configuración de clave de implementación del repositorio`,
        attachDeployKeyConfirm: `He agregado esta clave pública`,
    },
    hostConnection: {
        title: `Comprobar conexión`,
        description: `
        <p>
            Esta página comprueba si este sitio web es accesible desde
            Internet.
        </p>
        <p>
            Para que un sitio web sea accesible
            desde Internet:
        </p>
        <ul>
            <li>El servidor DNS debe estar disponible</li>
            <li>La dirección IP devuelta debe ser correcta</li>
            <li>El contenido del servidor debe ser accesible</li>
        </ul>
        <p>
            Si falla alguno de los requisitos anteriores, es posible que este sitio web
            no sea accesible desde Internet.
        </p>`,
        dnsOffTitle: `No hay servidor de nombres`,
        dnsOffContent: `Este sitio web no tiene servidor de nombres. Puede que esté configurado externamente.`,
        dnsNotExistTitle: "El dominio no existe",
        dnsNotExistContent: "Este dominio no se encuentra o puede que no esté registrado. ¿Lo has comprado?",    
        dnsManagedTitle: `Gestión de DNS`,
        dnsManagedContent: `DOM Cloud gestiona las DNS de este sitio web.`,
        dnsMixedTitle: `El DNS es mixto`,
        dnsMixedContent: `El DNS de este sitio web tiene una
            mixto. Asegúrese de que el servidor de nombres
            esté configurado correctamente. No mezcle nuestros registros
            con otros registros.`,
        dnsExternalTitle: `DNS gestionado externamente`,
        dnsExternalContent: `El DNS de este sitio web lo gestiona un tercero.`,
        pingNoIpTitle: `Dirección IP no encontrada`,
        pingNoIpContent: `El servidor DNS no devuelve una dirección IP.`,
        pingNoIp6Title: `No IPv6`,
        pingNoIp6Content: ` El DNS de este sitio web no tiene dirección IPv6. Puede que no esté disponible para usuarios IPv6.`,
        pingNoIp6Hint: "Por favor, agrega un registro AAAA con el valor",
        pingWrongIpTitle: `Dirección IP incorrecta`,
        pingWrongIpContent: `El DNS de este sitio web ha devuelto una dirección IP incorrecta. 
            Puede que no sirva el contenido correcto, o que esté detrás de un proxy.`,
        pingWrongIpCurrent: "Direcciones IP actuales",
        pingWrongIpExpect: "Direcciones IP correctas",
        pingNoWwwTitle: `www.* dirección IP del subdominio no encontrada`,
        pingNoWwwContent: ` 
            Es posible que algunas personas no puedan acceder a este
            sitio web si le ponen el prefijo www. Se recomienda configurar una
            www redirección de subdominio se recomienda.`,
        pingNoWwwFix: "Configurar redirección del subdominio www.*",
        pingOkTitle: `Dirección IP OK`,
        pingOkContent: `El DNS de este sitio web devolvió la dirección IP correcta.`,
        webNoHttpTitle: `No se puede acceder al sitio web`,
        webNoHttpContent: `Este sitio web no es accesible a través de HTTP.`,
        webNoHttpsTitle: `HTTPS no disponible`,
        webNoHttpsContent: `Es posible que este sitio web no tenga certificado HTTPS
            instalado, o ha caducado, o no está configurado correctamente.`,
        pingNoHttpsFix: "Instalar certificado HTTPS",
        webBadHttpTitle: `El sitio web está devolviendo un error`,
        webBadHttpContent: `Este sitio web devuelve un error 500 o 403,
            es posible que no esté configurado correctamente (¡verifique la configuración de NGINX/Aplicación!).`,
        webBadRedirectTitle: `El sitio web tiene redirecciones incorrectas`,
        webBadRedirectContent: `Este sitio web está redirigiendo a los visitantes fuera del dominio,
            es posible que no esté configurado correctamente (¡verifique la configuración de la URL base!).`,
        webInfiniteRedirectTitle: "El sitio web tiene redirecciones infinitas",
        webInfiniteRedirectContent: "Este sitio web está actualmente sirviendo solicitudes HTTPS infinitas, puede estar detrás de un proxy HTTPS.",
        webInfiniteRedirectFix: "Deshabilitar redirección HTTPS",
        
        webBadWwwTitle: "El subdominio www.* no es accesible",
        webBadWwwContent: "El subdominio www no es accesible o devuelve un error.",
        webInsecureTitle: "El sitio web está sirviendo solicitudes HTTP inseguras",
        webInsecureContent: "Este sitio web no redirige al protocolo HTTPS, no se recomienda y puede causar problemas con las cookies.",
        webInsecureContentFix: "Forzar redirección HTTPS",
        webOkTitle: `El sitio web está bien`,
        webOkContent: `Este sitio web es accesible a través de HTTP y HTTPS.`,
    },
    hostFirewall: {
        title: `Verificar Firewall`,
        description: `
        <p>
            El firewall ayuda a que tu sitio web no sea explotado en caso de
            una intrusión de hackers al bloquear todo el tráfico saliente excepto
            aquellos en la <a href="{0}" target="_blank" rel="noreferrer">lista blanca</a>.
        </p>
        <p>
            Dependiendo del uso de tu sitio web, es posible que desees apagar
            el firewall si tu sitio web requiere API de terceros u otras formas
            de comunicación que no están en la lista blanca.
        </p>
        <p>El firewall se aplica al dominio y a todos los subdominios dentro del mismo. 
        Está obligado a estar encendido para usuarios con plan gratuito. Para apagarlo, 
        debes estar en un plan de suscripción (Lite o superior).</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">Leer más</a></p>
        `,
        offTitle: `El firewall está apagado`,
        offContent: `<p>
            Todo el tráfico saliente está permitido. ¡Mantén tu sitio seguro, por favor!
        </p>`,
        offBtn: `Encender`,
        onTitle: `El firewall está activo`,
        onContent: `<p>
            Todas las conexiones salientes de terceros están bloqueadas excepto las de la lista blanca.<br/>
            Apágalo para eliminar esta limitación.
        </p>`,
        onBtn: `Apagar`,
    },
    hostNginx: {
        title: `Verificar Configuración de NGINX`,
        description: `
        <p>
            NGINX es nuestra puerta de enlace principal del servidor que sirve los puertos HTTP (80 y 443).
            Para que su sitio web funcione, su aplicación web debe estar configurada correctamente
            aquí. Aquí puede ver su configuración actual y realizar cambios
            ya sea a través de la interfaz de usuario preconfigurada o la configuración completa de NGINX como script YAML.
        </p>
        <p>
            NGINX normalmente sirve contenido estático primero que está configurado a través de la ruta <code>root</code>,
            o redirige la solicitud dinámicamente a su aplicación a través de PHP-FPM <code>fastcgi</code>
            o Passenger <code>passenger</code> si dicho archivo no existe.
        </p>
        <p>
            La configuración de NGINX es diferente para subdominios. Si el contenido de su subdominio se encuentra
            dentro de este sitio web, ingrese el nombre del subdominio a continuación para configurarlo.
            Además, tómese un momento para leer <a href="{0}" target="_blank" rel="noreferrer">
            nuestra Configuración de NGINX</a> o contáctenos si tiene algún problema.
        </p>
        `,
        subdomain: `Subdominio`,
        error: `ERROR: no existe configuración para {0}`,
        errorFetch: "Hubo un error al obtener la configuración de NGINX",
        notExist: `ERROR: no existe configuración para {0}`,
        tabCurrent: `Configuración Actual de NGINX`,
        tabEdit: `Editar Interactivamente`,
        tabPreview: `Vista Previa de los Cambios`,
        labels: {
            subfolderConfig: "Configuración de Subcarpeta",
            rootConfig: "Configuración de Root",
            rootPath: "Ruta de Root",
            rootIsAlias: "Root es Alias",
            resolveType: "Tipo de Resolución",
            resolveTypes: {
                static: "Estático",
                php: "PHP-FPM",
                app: "Aplicación Phusion",
                gls: "Aplicación Genérica",
                socat: "Reenviar Puerto",
                deny: "Denegar Solicitudes",
            },
            staticMode: "Modo Estático",
            staticModes: {
                default: "Predeterminado",
                smart: "Inteligente",
                autoindex: "Auto-índice",
                index: "Índice Root",
            },
            static404Path: "Ruta del Archivo HTML 404",
            phpMode: "Modo PHP",
            phpModes: {
                default: 'Predeterminado',
                smart: 'Inteligente',
                indexSafe: 'Índice Root - Seguro',
                index: 'Índice Root - Estándar',
                always: 'Índice Root - Siempre',
            },
            socatPort: 'Reenviar al Puerto',
            appMode: 'Modo de Aplicación',
            appEntry: 'Archivo de Inicio de la Aplicación',
            appBin: 'Ruta Binaria de la Aplicación',
            appModes: {
                default: 'Automático',
                node: 'Node',
                python: 'Python',
                ruby: 'Ruby',
            },
            glsCmd: 'Comando de la Aplicación',
            appEnv: 'Claves de Entorno',
            appDev: '¿Modo de Desarrollo?',
            appRoot: 'Directorio de Trabajo',
            addSubfolderConfig: 'Agregar configuración de subcarpeta',
        },
        hints: {
            root: "Los archivos estáticos desde {0} se resolverán a {1}",
            socat: "Reenviar solicitudes de cliente al puerto {0}",
            app: "Invocar el script {0} desde {1} usando {2} desde {3}",
            gls: "Ejecutar \"{0}\" desde {1} con $PORT dado",
            staticModes: {
                default: 'Servir archivos estáticos',
                smart: 'Intentar encontrar el archivo HTML si es posible',
                index: 'Servir root index.html si no se encuentra ningún archivo',
                autoindex: 'Permitir listado de archivos del servidor si no se encuentra index.html',
                with404: 'o mostrar página de error 404 personalizada'
            },
            phpModes: {
                default: 'Servir index.php o archivos php que terminen en .php',
                smart: 'Intentar encontrar archivo PHP sin .php',
                indexSafe: 'Servir root index.php pero no intente si el cliente busca un archivo',
                index: 'Servir root index.php cuando no se encuentre un archivo estático',
                always: 'Permitir solicitudes de estilo PATH_INFO manejadas por PHP',
            },
            deleteSubfolderPrompt: "¿Está seguro de que desea eliminar la configuración de subcarpeta para {0}",
            inputSubfolderPrompt: "Por favor, ingrese la subcarpeta (debe comenzar con '/' y no tener espacios)",
            inputSubfolderNotValid: "La entrada de subcarpeta no es válida",
            inputSubfolderNotUnique: "El valor de la subcarpeta debe ser único en comparación con otras entradas de subcarpeta",
        }
    },
    hostDNS: {
        title: `Configurador de Servidor DNS`,
        description: `<p>Esta página te ayuda a cambiar los registros DNS si apuntas tu servidor de nombres de dominio a nosotros.
        </p> <p>Alternativamente, también puedes editar los registros DNS a través de Webmin.</p>`,
        helpText: `Ayuda sobre configuración`,
        error: `ERROR: no existe configuración para {0}`,
        errorFetch: "Hubo un error al obtener la configuración DNS",
        notExist: `ERROR: no existe configuración para {0}`,
        tabCurrent: `Configuración DNS Actual`,
        tabEdit: `Editar DNS Interactivamente`,
        tabPreview: `Vista Previa de Cambios`,
        existingRecords: `Registros DNS Existentes`,
        addedRecords: `Registros DNS Añadidos`,
    },
    hostLog: {
        runningList: 'Lista de procesos en ejecución',
        logTypeError: 'Log de Errores de NGINX',
        logTypeAccess: 'Log de Acceso de NGINX',
        logTypePassenger: 'Log de la Aplicación Passenger',
        logTypeErrorHint: 'Este log contiene los logs de errores de NGINX y PHP del día actual',
        logTypeAccessHint: 'Este log contiene los logs de acceso de NGINX del día actual',
        logTypePassengerHint: 'Este log contiene el log de la Aplicación Passenger que está en ejecución',
        errorFetch: "Hubo un error al obtener el archivo de log",
        subdomain: `Subdominio`,
        maxLines: `Líneas Máximas`,
        emptyLog: `Este log está vacío en este momento`,
    },
    hostManage: {
        title: `Gestionar el acceso al sitio web`,
        description: `
        <p>
            Utilice el siguiente acceso para cargar o editar el contenido de su sitio web
            contenido. <a href="{0}" target="_blank">Más información</a>.
        </p>`,
        openPorts: `Puertos abiertos`,
        openPortsDescription: `Puertos abiertos para editar su servidor`,
        onlineEditor: `Editor y herramientas en línea`,
        webminInfo: `<p>
            Webmin se utiliza para administrar los archivos del servidor y
            mediante una interfaz web.
        </p>
        <p>Serás autolocalizado.</p>`,
        filestashInfo: `<p>
        Filestash se utiliza para gestionar los archivos de su servidor 
        utilizando la interfaz web de la conexión SFTP.
        (para subir archivos, use arrastrar y soltar).
        </p>
        <p>Se iniciará sesión automáticamente.</p>`,
        phpMyAdminInfo: ` <p>
        phpMyAdmin se utiliza para gestionar la base de datos MySQL
        mediante una interfaz web.
        </p>
        <p class="mb-0">
            Debe introducir las credenciales manualmente.
        </p>`,
        phpPgAdminInfo: `  <p>
        phpPgAdmin se utiliza para gestionar la base de datos PostgreSQL
        mediante una interfaz web.
        </p>
        <p class="mb-0">
            Debe introducir las credenciales manualmente.
        </p>`,
        websshInfo: `<p>
            WebSSH se utiliza para abrir una conexión SSH mediante una interfaz web.
            web.
            </p>
            <p class="mb-0">Te autologizarás en.</p>`,
        vscodeInfo: ` <p>
            Abra VS Code para editar archivos y ejecutar comandos
            directamente en tu servidor.<br />
            Asegúrese de que ya tiene instalado VS Code y
            su Extensión SSH Remota.
        </p>
        <p>
            Si desea abrir otra carpeta, introduzca aquí
            y pulse Retorno:
        </p>`,
    },
    hostTransfer: {
        warn: `¡ATENCIÓN! Transferir el sitio web significa moverlo a otra cuenta. ¡Perderás acceso a tus datos porque el propietario ha cambiado!`,
        currentOwner: `Propietario actual: {0}`,
        hint: `Por favor, introduce el correo electrónico de la cuenta que deseas recibir:`,
        disabled: `No puedes transferir este sitio web mientras no esté activo.`,
        member: `Los miembros no pueden transferir este sitio web.`,
        action: `¡Transferir!`,
    },
    hostDelete: {
        warn: `¡ATENCIÓN! Las eliminaciones de host son permanentes y no podemos revertir la acción. Por favor, asegúrate.`,
        hint: `Por favor, introduce tu nombre de usuario del sitio web para aceptar la eliminación del host.`,
        member: `Los miembros no pueden eliminar este sitio web.`,
        action: `¡Eliminar!`,
    },
    hostCname: {
        disabled: `No puedes cambiar el nombre de dominio cuando este sitio web no está activo.`,
        curHint: `Nombre de dominio actual: `,
        hint: `Puedes cambiar el nombre de dominio principal del sitio web aquí. Introduce el nuevo nombre de dominio:`,
        warn: `¡Esto hará que tu sitio web no se pueda usar para el dominio actual! Por favor, actualiza el DNS en el nuevo dominio de antemano para minimizar el tiempo de inactividad.`,
        member: `Los miembros no pueden cambiar el dominio de este sitio web.`,
        action: `¡Cambiar nombre de dominio!`,
    },
    hostRename: {
        disabled: `No puedes cambiar el nombre de usuario cuando este sitio web no está activo.`,
        hint: `Puedes cambiar el nombre de usuario de tu sitio web aquí. Introduce el nuevo nombre de usuario:`,
        warn: `¡Esto también cambiará el nombre de usuario de la base de datos! Tu sitio web puede no estar disponible hasta que lo cambies en la configuración de tu sitio web.`,
        member: `Los miembros no pueden cambiar el nombre de usuario de este sitio web.`,
        action: `¡Cambiar este nombre de usuario!`,
    },
    hostPasswd: {
        disabled: `No puedes cambiar la contraseña cuando este sitio web no está activo.`,
        hint: `Puedes cambiar la contraseña de tu sitio web aquí. Introduce la nueva contraseña:`,
        warn: `¡Esto también cambiará la contraseña de la base de datos! Tu sitio web puede no estar disponible hasta que lo cambies en la configuración de tu sitio web.`,
        member: `Los miembros no pueden cambiar la contraseña de este sitio web.`,
        action: `¡Actualizar esta contraseña!`,
    },
    hostServer: {
        disabled: `No puedes cambiar la región del servidor cuando este sitio web no está activo.`,
        hint: `Puedes mover tu sitio web a otro servidor en la nube o a un servidor auto-alojado aquí. Elige un nuevo servidor:`,
        warn: `Esto realizará una copia de seguridad, eliminará, y luego restaurará este sitio web. ¡También podría hacer que tu sitio web sea temporalmente inaccesible debido a los cambios de direcciones IP!`,
        member: `Los miembros no pueden cambiar la región del servidor de este sitio web.`,
        upgrade: `Mover este sitio web a otro servidor requiere la función de copia de seguridad, necesitas actualizar.`,
        action: `¡Mover a este servidor!`,
    },    
    hostCheck: {
        'title': `Revisión DNS Obligatoria`,
        'prompt': `Esto comprueba si {0} se puede resolver a través del DNS de Google antes de ser agregado a nuestro servidor.`,
        'valid': `Este dominio es resoluble`,
        'valid_with_note': `Este dominio será resoluble una vez que se agreguen automáticamente configuraciones adicionales para usted.`,
        'incorrect': 'Registro A+AAAA/CNAME incorrecto para este dominio, por favor configúrelo primero antes de continuar.',
        'missing': 'Registro A+AAAA/CNAME faltante para este dominio, por favor configúrelo primero antes de continuar.',
        'loading': '...',
        'retrying': '...',
    },
    domain: {
        createInfo: `Tenga en cuenta que solo está registrando un dominio. Si desea
            gestionar el sitio web, <a href="{0}" target="_blank">cree el sitio web aquí</a>`,
        transferInfo: `Asegúrese de tener derechos de acceso para transferir el
            dominio desde otro servicio. Nos pondremos en contacto con usted si la
            transferencia del dominio falla después del pago, pero si no puede
            demostrar la propiedad del dominio mediante el código EPP o los requisitos
            de documentos existentes, no podemos ayudarlo. Según los Términos de Servicio,
            no recibirá un reembolso en la compra de un dominio bajo ninguna
            circunstancia.`,
        eppTransferInfo: `Puede transferir su dominio a otro registrador usando
            este código EPP. La transferencia funciona si el dominio no está bloqueado`,
        dnsManagedHint: `No proporcionamos una interfaz de usuario para registros DNS personalizados. <br />
            Si sus servidores de nombres están configurados en <b>{0}</b>, los DNS son manejados por
            <a href="{1}" target="_blank">el sitio web correspondiente de DNS</a>.`,
        dnsManagedOpen: `Si de todos modos desea cambiarlo, por favor adminístrelo a través de nuestro
            <a href="{0}" target="_blank">interfaz de usuario del registrador</a>. Haga clic en "olvidó su contraseña"
            e ingrese su correo electrónico actual para establecer su contraseña por primera vez.`
    }
}

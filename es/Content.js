export default {
    footer: {
        help: `¿Algo no funciona? Pida ayuda en 
        <a href="{0}">forum</a> o <a href="{1}">email</a> o
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
          Para poder atenderle de forma óptima, necesitamos confirmarle la región que
          actualmente. Esto también afecta a sus opciones de pago y a la
          ubicación predeterminada del servidor, que podrá cambiar más adelante:
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
        changeCountryBtn: `Cambiar de país`,
    },
    purchaseConfirmation: {
        purchasedHint: "Gracias. Si nuestro sistema ha verificado su pago, un correo electrónico de confirmación será enviado a su correo electrónico.",
        purchaseCancel: "Su pago ha sido cancelado.",
    },
    emailConfirmation: {
        hint: `¡IMPORTANTE! Debe confirmar su correo electrónico para empezar a crear sitios web. Compruebe su bandeja de entrada (o de correo no deseado) en {0}`,
        prompt: `¿Está seguro de que desea reenviar el correo electrónico? Esta acción cierra tu sesión. Por favor, compruebe su bandeja de entrada (y su buzón de spam) después de este momento..`,
    },
    accountDeletion: {
        title: `Eliminar su cuenta`,
        hint: `!ATENCIÓN! La eliminación de la cuenta es permanente y no podemos revertir la acción. Si tiene un host o un dominio registrados, debe eliminarlos previamente. Contacte con nosotros si necesita ayuda.`,
        prompt: `Escriba "Y" para aceptar la eliminación de la cuenta.`,
        disabled: `No puede eliminar esta cuenta si todavía hay alojamiento o un dominio registrado.`,
    },
    hostCreate: {
        chooseTemplate: `Elige una plantilla para comenzar`,
        startFromScratch: `No, quiero empezar desde cero`,
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
        exceededFileSizeLimit: `Este tamaño de archivo ({0}) excede el límite ({1}), intente subirlo más tarde usando Webmin.`,
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
        pingWrongIpTitle: `Dirección IP incorrecta`,
        pingWrongIpContent: `El DNS de este sitio web ha devuelto una dirección IP incorrecta. 
            Puede que no sirva el contenido correcto, o que esté detrás de un proxy..`,
        pingNoWwwTitle: `www.* dirección IP del subdominio no encontrada`,
        pingNoWwwContent: ` 
            Es posible que algunas personas no puedan acceder a este
            sitio web si le ponen el prefijo www. Se recomienda configurar una
            www redirección de subdominio se recomienda.`,
        pingOkTitle: `Dirección IP OK`,
        pingOkContent: `El DNS de este sitio web devolvió la dirección IP correcta.`,
        webNoHttpTitle: `No se puede acceder al sitio web`,
        webNoHttpContent: `Este sitio web no es accesible a través de HTTP.`,
        webNoHttpsTitle: `HTTPS no disponible`,
        webNoHttpsContent: `Es posible que este sitio web no tenga certificado HTTPS
            instalado, o ha caducado, o no está configurado correctamente.`,
        webBadHttpTitle: `El sitio web está devolviendo un error`,
        webBadHttpContent: `Este sitio web devuelve un error 500 o 403,
            es posible que no esté configurado correctamente (¡verifique la configuración de NGINX/Aplicación!).`,
        webBadRedirectTitle: `El sitio web tiene redirecciones incorrectas`,
        webBadRedirectContent: `Este sitio web está redirigiendo a los visitantes fuera del dominio,
            es posible que no esté configurado correctamente (¡verifique la configuración de la URL base!).`,
        webInsecureTitle: `El sitio web no es totalmente seguro`,
        webInsecureContent: ` Este sitio web no redirige HTTP a HTTPS,
            lo cual está bien pero no es recomendable.`,
        webOkTitle: `El sitio web está bien`,
        webOkContent: `Este sitio web es accesible a través de HTTP y HTTPS.`,
    },hostFirewall: {
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
        title: `Configurador NGINX`,
        description: `Esta página le ayuda a leer la configuración actual de NGINX y guardar una nueva para su sitio web.`,
        subdomain: `Subdominio`,
        helpText: `Ayuda para la configuración`,
        error: `ERROR: no existe configuración para {0}`,
        errorFetch: "Hubo un error al recuperar la configuración de nginx",
        notExist: `ERROR: no existe configuración para {0}`,
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
            contenido. <a href="{0}">Más información</a>.
        </p>`,
        openPorts: `Puertos abiertos`,
        openPortsDescription: `Puertos abiertos para editar su servidor`,
        onlineEditor: `Editor y herramientas en línea`,
        webminInfo: `<p>
            Webmin se utiliza para administrar los archivos del servidor y
            mediante una interfaz web.
        </p>
        <p>Serás autolocalizado.</p>`,
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
    hostCheck: {
        'title': `Revisión DNS Obligatoria`,
        'prompt': `Esto comprueba si {0} se puede resolver a través del DNS de Google antes de ser agregado a nuestro servidor.`,
        'valid': `Este dominio es resoluble`,
        'valid-note': `Este dominio será resoluble una vez que se agreguen automáticamente configuraciones adicionales para usted.`,
        'incorrect': 'Registro A/CNAME incorrecto para este dominio, por favor configúrelo primero antes de continuar.',
        'missing': 'Registro A/CNAME faltante para este dominio, por favor configúrelo primero antes de continuar.',
        'loading': '...',
        'retrying': '...',
    },
    domain: {
        createInfo: `Tenga en cuenta que sólo está registrando un dominio. Si desea
            gestionar el sitio web, <a href="{0}">crear el sitio web aquí</a>`,
        transferInfo: `Asegúrese de que dispone de derechos de acceso para transferir el
            dominio desde otro servicio. Nos pondremos en contacto con usted si
            transferencia de dominio falla después del pago, pero si no puede
            demostrar la propiedad del dominio mediante el código EPP o los
            no podremos ayudarle. Por ToS usted
            no obtendrá reembolso en la compra de un dominio bajo ninguna
            circunstancia.`,
        eppTransferInfo: `Puede transferir su dominio a otro registrador
            utilizando este código EPP. La transferencia funciona si el dominio no está bloqueado`,
    },
    invoiceDescription: {
        domainPurchaseOf: "Dominio Compra de {0}",
        domainExtendOf: "Dominio Extender de {0}",
        domainTransferOf: "Transferencia de dominio de {0}",
        hostPurchase: "Compra de Host",
        hostRenew: "Renovar Host",
        hostUpgrade: "Actualizar Host",
        hostExtend: "Host Extend",
        withPlan: " con {0} Plan",
        forMonths: " por {0} meses",
        forYears: " por {0} años",
        forYearsAndMonths: " por {0} años y {1} meses",
        dataTransferAddonsFor: "Transferencia adicional de datos para {0} GB",
        tip: "Tasa por comodidad",
    },
}

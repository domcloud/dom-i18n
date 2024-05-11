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
    },
    hostFirewall: {
        title: `Comprobar cortafuegos`,
        description: `
        <p>
            El cortafuegos ayuda a que su sitio web no sea explotado en caso de una
            pirata informático bloqueando todo el tráfico saliente excepto el de la red.
            <a href="{0}" target="_blank" rel="noreferrer">lista blanca</a>.
        </p>
        <p>
            Dependiendo de su uso del sitio web, es posible que desee desactivar el
            firewall si su sitio web requiere API de terceros u otras formas de 
            comunicación no incluidas en la lista blanca.
        </p>
        <p>El cortafuegos se aplica al dominio y a todos los subdominios dentro de.</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">Seguir leyendo</a></p>
        `,
        offTitle: `El cortafuegos está desactivado`,
        offContent: `
        <p>
            No le prohibimos desactivar el Firewall de su alojamiento, siempre que
            siempre que modere regularmente la seguridad de su propio sitio web.
            <br/>
            Ahora usted controla la seguridad de su sitio web. Si el sitio web
            se ve comprometido, ¡el riesgo de prohibición permanente puede producirse en cualquier momento!
        </p>`,
        offBtn: `Enciéndelo`,
        onTitle: `El cortafuegos está activo`,
        onContent: `<p>Siéntate y relájate. Su sitio web está a salvo de exploits.</p>`,
        onBtn: `Apágalo`,
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
        warn: `¡ATENCIÓN! La transferencia de un sitio web significa moverlo a otra cuenta. ¡Una vez transferido perderá el acceso a este alojamiento porque ha cambiado de manos!`,
        currentOwner: `Propietario actual: {0}`,
        hint: `Introduzca el correo electrónico de la cuenta que desea recibir:`,
        disabled: `No puedes transferir este alojamiento mientras no esté activo.`,
        action: `Transferencia!`,
    },
    hostDelete: {
        warn: `¡ATENCIÓN! Las eliminaciones de hosts son permanentes y no podemos revertir la acción. Asegúrese de que.`,
        hint: `Por favor, introduzca su nombre de usuario de hosting para aceptar la eliminación del host.`,
        action: `Borrar!`,
    },
    hostCname: {
        disabled: `El cambio de alojamiento de dominio no está disponible si no se ha pagado o se está utilizando actualmente un plan Freedom.`,
        curHint: `Nombre de dominio actual: `,
        hint: `Aquí puede cambiar el alojamiento del nombre de dominio principal. Introduzca el nuevo nombre de dominio:`,
        warn: `Asegúrese de que es el propietario del dominio y de que ha enrutado correctamente los registros DNS..`,
        action: `Cambiar el nombre de dominio!`,
    },
    hostRename: {
        disabled: `Cambiar el nombre de usuario del host no está disponible si no has pagado o estás utilizando actualmente el plan Freedom..`,
        hint: `Aquí puede cambiar su nombre de usuario de alojamiento. Introduzca el nuevo nombre de usuario:`,
        warn: `Si cambia el nombre de usuario mientras utiliza el dominio predeterminado, el nombre de dominio seguirá.`,
        action: `Cambie el nombre de!`,
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

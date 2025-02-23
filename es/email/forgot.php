<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <?= view('email/css') ?>
</head>

<body>
  <div class="container">
	<p></p>
	<img class="logo" width="150" height="150" alt="" src="<?= app()->appLogoUrl ?>">
	<div class="section">
	  <div>Hola, <?= esc($name) ?></div>
	  <div><br></div>
	  <div>Hemos recibido una notificación de que has olvidado tu contraseña. Si eres tú, continúa haciendo clic en este botón:&nbsp;
	  </div>
	  <div></div>
	</div>
	<div class="button">
	  <a href="<?= $link ?>" target="_blank">Restablecer tu contraseña ahora</a>
	</div>
	<div class="section">
	  ¿Necesitas ayuda para configurar tu alojamiento? Nuestro <a href="mailto:support@<?= app()->emailDomainSender ?>?subject=Necesito ayuda para configurar el alojamiento&amp;body=Hola, quiero preguntarte....">Servicio de Soporte</a> puede ayudarte.<br>
	  También puedes participar en <a href="<?= app()->appSupportUrl ?>">discusiones de la comunidad</a> si lo deseas.
	</div>
	<p class="unsub">¿No te registraste a través de <?= app()->appPortalUrl ?>? Ignora este correo electrónico.</p>
  </div>
</body>

</html>

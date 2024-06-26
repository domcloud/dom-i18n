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
	<img class="logo" width="150" height="150" alt="" src="http://cdn.mcauto-images-production.sendgrid.net/a29c06201af03bf0/70219a8f-d353-4098-bd3d-7e05101cff9d/1000x1000.png">
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
	  ¿Necesitas ayuda para configurar tu alojamiento? Nuestro <a href="mailto:support@domcloud.co?subject=Necesito ayuda para configurar el alojamiento&amp;body=Hola, quiero preguntarte....">Servicio de Soporte</a> puede ayudarte.<br>
	  También puedes participar en <a href="https://github.com/domcloud/domcloud/discussions">discusiones de la comunidad</a> si lo deseas.
	</div>
	<p class="unsub">¿No te registraste a través de domcloud.co? Ignora este correo electrónico.</p>
  </div>
</body>

</html>

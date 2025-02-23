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
	  <div>Enviamos este correo electrónico para informarte sobre este aviso:</div>
	  <h2><?= $head ?>&nbsp;</h2>
	  <div></div>
	  <p><?= $body ?>&nbsp;</p>
	  <div></div>
	  <p>Si consideras que este aviso es un poco molesto, podrías considerar actualizar tu cuenta :)</p>
	  <div></div>
	</div>
	<div class="button">
	  <a href="https://my.domcloud.co/login" target="_blank">Verifica tu cuenta</a>
	</div>
	<div class="section">Gracias por tu atención.<br>¿Necesitas ayuda? Siempre puedes responder a este correo electrónico.<br>
	</div>
  </div>
</body>

</html>

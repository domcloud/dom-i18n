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
	  <div>
	    Gracias por confiar en DOM Cloud. A continuación, se presenta una descripción de tu compra.
	  </div>
	  <div></div>
	</div>
	<div class="section">
	  <table border="0" style="width: 100%;">
	    <tbody>
	      <tr>
	        <td style="width: 50%">
	          <div class="section">
	            <h4><?= $price ?></h4>
	          </div>
	          <div class="section">
	            <?= $description ?>
	          </div>
	        </td>
	        <td style="width: 50%">
	          <p>ID de Transacción <br><b><?= $id ?></b></p>
	          <p>Marca de Tiempo de la Transacción <br><b><?= $timestamp ?></b></p>
	          <p>Método de Transacción <br><b><?= $via ?></b></p>
	        </td>
	      </tr>
	    </tbody>
	  </table>
	</div>
	<div class="section">
	  <p>Puedes guardar este correo electrónico como prueba de la transacción. Mientras tanto, tu alojamiento estará activo en unos minutos. Si no es así, por favor verifica que hayas completado los requisitos del documento de dominio, dirigido correctamente el dominio y limpiado la caché DNS. ¿Necesitas ayuda? Nuestro <a href="mailto:support@domcloud.co?subject=Necesito ayuda para configurar el alojamiento&amp;body=Hola, quiero preguntarte....">Servicio de Soporte</a> puede ayudarte.</p>
	</div>
	<p class="unsub"><a href="https://my.domcloud.co">Cancelar suscripción</a></p>
  </div>
</body>

</html>

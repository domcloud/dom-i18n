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
	<div><br></div>
	<div>Kami mengirimkan email ini untuk memberi tahu Anda tentang pemberitahuan ini&nbsp;:</div>
	<h2><?= $head ?>&nbsp;</h2>
	<div></div>
	<p><?= $body ?>&nbsp;</p>
	<div></div>
	<p>Jika Anda merasa pemberitahuan ini agak mengganggu, Anda dapat mempertimbangkan untuk mengupgrade akun Anda :)</p>
	<div></div>
  </div>
  <div class="button">
	<a href="https://my.domcloud.co/login" target="_blank">Periksa akun Anda</a>
  </div>
  <div class="section">Terima kasih atas perhatian Anda<br>Butuh bantuan? Anda selalu dapat membalas email ini
  </div>
  </div>
</body>

</html>
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
	  <div>Yth, <?= esc($name) ?></div>
	  <div><br></div>
	  <div>Terima kasih telah mendaftar di DOM Cloud. Harap konfirmasi email Anda agar Anda dapat mulai menyiapkan hosting.&nbsp;
	  </div>
	  <div></div>
	</div>
	<div class="button">
	  <a href="<?= $link ?>" target="_blank">Konfirmasi Email Anda Sekarang</a>
	</div>
	<div class="section">
	  Butuh bantuan untuk menyiapkan hosting Anda? <a href="mailto:support@domcloud.co?subject=Butuh bantuan setting hosting&amp;body=Hi, Saya ingin bertanya....">Support
	    Desk</a> kami dapat membantu anda.<br>
	  Anda juga dapat berpartisipasi dalam <a href="https://github.com/domcloud/domcloud-id/discussions">diskusi komunitas kami</a> jika anda suka.
	</div>
	<p class="unsub">Tidak mendaftar melalui domcloud.co? Abaikan email ini.</p>
  </div>
</body>

</html>
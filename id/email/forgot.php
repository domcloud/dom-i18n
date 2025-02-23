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
	  <div>Yth, <?= esc($name) ?></div>
	  <div><br></div>
	  <div>Kami menerima pemberitahuan bahwa Anda lupa kata sandi Anda. Jika itu Anda lanjutkan dengan mengklik tombol ini:&nbsp;
	  </div>
	  <div></div>
	</div>
	<div class="button">
	  <a href="<?= $link ?>" target="_blank">Setel Ulang Kata Sandi Anda Sekarang</a>
	</div>
	<div class="section">
	  Butuh bantuan untuk menyiapkan hosting Anda? <a href="mailto:support@<?= app()->emailDomainSender ?>?subject=Butuh bantuan setting hosting&amp;body=Hi, Saya ingin bertanya....">Support
	    Desk</a> kami dapat membantu anda.<br>
	  Anda juga dapat berpartisipasi dalam <a href="<?= app()->appSupportUrl ?>">diskusi komunitas kami</a> jika anda suka.
	</div>
	<p class="unsub">Tidak mendaftar melalui <?= app()->appPortalUrl ?>? Abaikan email ini.</p>
  </div>
</body>

</html>
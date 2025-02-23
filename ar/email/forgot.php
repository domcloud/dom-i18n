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
	<img class="logo" width="150" height="150" alt="" src="<?= esc(app()->appLogoUrl, 'attr') ?>">
	<div class="section">
	  <div>Hi, <?= esc($name) ?></div>
	  <div><br></div>
	  <div>We received a notification that you've forgot your password. If that's you continue with clicking this button:&nbsp;
	  </div>
	  <div></div>
	</div>
	<div class="button">
	  <a href="<?= $link ?>" target="_blank">Reset your Password Now</a>
	</div>
	<div class="section">
	  Need help setting up your hosting? Our <a href="mailto:support@<?= app()->emailDomainSender ?>?subject=I need help set up hosting&amp;body=Hi, I want to ask you....">Support
	    Desk</a> can help you up.<br>
	  You can also participate in <a href="<?= app()->appSupportUrl ?>">community discussions</a> if you like to.
	</div>
	<p class="unsub">Not registering through <?= app()->appPortalUrl ?>? Ignore this email.</p>
  </div>
</body>

</html>
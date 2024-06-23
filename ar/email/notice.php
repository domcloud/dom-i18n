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
      <div>Hi, <?= esc($name) ?></div>
      <div><br></div>
      <div>We send this email to let you know about this notice&nbsp;:</div>
      <h2><?= $head ?>&nbsp;</h2>
      <div></div>
      <p><?= $body ?>&nbsp;</p>
      <div></div>
      <p>If you feel this notice is kind of annoying, you might consider want to upgrade your account :)</p>
      <div></div>
    </div>
    <div class="button">
      <a href="https://my.domcloud.co/login" target="_blank">Check your account</a>
    </div>
    <div class="section">Thank you for your attention.<br>Need help? You can always reply to this email<br>
    </div>
  </div>
</body>

</html>
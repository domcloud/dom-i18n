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
      <div>Thank you for signing up in DOM Cloud. Please confirm your email so you can start setting up hosting.&nbsp;
      </div>
      <div></div>
    </div>
    <div class="button">
      <a href="<?= $link ?>" target="_blank">Confirm Your Email Now</a>
    </div>
    <div class="section">
      Need help setting up your hosting? Our <a href="mailto:support@domcloud.co?subject=I need help set up hosting&amp;body=Hi, I want to ask you....">Support
        Desk</a> can help you up.<br>
      You can also participate in <a href="https://github.com/domcloud/domcloud/discussions">community discussions</a> if you like to.
    </div>
    <p class="unsub">Not registering through domcloud.id? Ignore this email.</p>
  </div>
</body>

</html>
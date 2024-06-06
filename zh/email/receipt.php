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
      <div>
        Thank you for trusting DOM Cloud. The following is a description of your purchase.
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
              <p>Transaction ID <br><b><?= $id ?></b></p>
              <p>Transaction Timestamp <br><b><?= $timestamp ?></b></p>
              <p>Transaction Method <br><b><?= $via ?></b></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="section">
      <p>You can save this email as proof of transaction. Meanwhile, your hosting will be active in a few minutes. If not, please check that you have completed the domain document requirements, directed the domain correctly, and cleared your DNS cache. Need help? Our <a href="mailto:support@domcloud.co?subject=I need help set up hosting&amp;body=Hi, I want to ask you....">Support
          Desk</a> can help you up.</p>
    </div>
    <p class="unsub"><a href="https://my.domcloud.co">Unsubscribe</a></p>
  </div>
</body>

</html>
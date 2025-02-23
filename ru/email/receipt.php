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
	  <div>Hi, <?= esc($name) ?></div>
	  <div><br></div>
	  <div>
	    Thank you for trusting <?= app()->appTitle ?>. The following is a description of your purchase.
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
	  <p>You can save this email as proof of transaction. Meanwhile, your hosting will be active in a few minutes. If not, please check that you have completed the domain document requirements, directed the domain correctly, and cleared your DNS cache. Need help? Our <a href="mailto:support@<?= app()->emailDomainSender ?>?subject=I need help set up hosting&amp;body=Hi, I want to ask you....">Support
	      Desk</a> can help you up.</p>
	</div>
	<p class="unsub"><a href="<?= app()->appPortalUrl ?>/unsubscribe">Unsubscribe</a></p>
  </div>
</body>

</html>
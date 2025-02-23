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
	  <div>
	    Terimakasih sudah mempercayakan <?= $appTitle ?>. Berikut keterangan pembelian anda.
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
	          <p>ID Transaksi <br><b><?= $id ?></b></p>
	          <p>Waktu Transaksi <br><b><?= $timestamp ?></b></p>
	          <p>Metode Transaksi <br><b><?= $via ?></b></p>
	        </td>
	      </tr>
	    </tbody>
	  </table>
	</div>
	<div class="section">
	  <p>Anda dapat menyimpan email ini sebagai bukti transaksi. Jika anda sudah membeli domain bersamaan dengan hosting, pastikan segera mengkonfirmasi email yang digunakan dalam biodata domain serta melengkapi syarat dokumen yang diperlukan (bila ada). Butuh bantuan? <a href="mailto:support@domcloud.co?subject=Butuh bantuan setting hosting&amp;body=Hi, Saya ingin bertanya....">Support
	      Desk</a> kami dapat membantu anda.</p>
	</div>
	<p class="unsub"><a href="https://my.domcloud.co">Unsubscribe</a></p>
  </div>
</body>

</html>
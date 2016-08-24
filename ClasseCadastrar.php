<?php 
/**
* 
*/
class ClasseCadastrar{

	public function SetCliente($json)
	{
$curl = curl_init();
	curl_setopt_array($curl, array(
  CURLOPT_URL => "http://tattoofatec.herokuapp.com/users",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array("Accept: application/json"),
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS =>  $json,
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: fef7e4bb-65b3-2742-dadc-014915373292"
  ),
));
$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
}
	}


 ?>
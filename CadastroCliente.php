 <?php
require('../tattoofatec/ClasseCadastrar.php');

 if(isset($_POST['botao'])){
 
 
  $array1 =  array();
$nome = $_POST["nome"];
$valor = $_POST["valor"];
$sexo = $_POST["combo"];
$telefone = $_POST["telefone"];

$array1['username'] = $nome;
$array1['password'] = $valor;
$array1['sexo'] = $sexo;
$array1['telefone'] = $telefone;
 $json = json_encode($array1);

$incluir = new ClasseCadastrar();
$incluir->SetCliente($json);
}
?> 
<html>
<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
		<div class="container">
			<div class="">
				<div class="col-md-3 col-md-offset-4">
		<form action="" id="f1" class="" enctype="" method="post">
			<p><label>Nome do Cliente *</label><input type="text" class="form-control" id="nome" name="nome" placeholder="Digite seu Nome" required/><br>

			<p><label>Endereço *</label><input type="text" class="form-control" name="valor" ><br>
        <p><label>Telefone *</label><input type="text" class="form-control" name="telefone" ><br>
             <label>SEXO*</label>
                    <select name="combo" id="combo" class="form-control">
                        <option value="">Selecione um item na lista</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                        
                    </select>
         <br>

	
		
		<input type="submit" name="botao"  class="btn btn-success">
		</form>
		</div>
		</div>
		</div>
	<html>
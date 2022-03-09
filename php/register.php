
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script type="text/javascript" src="../js/mark.js"></script>
<table class ="table" class="login" border="0" cellpadding="2"
	 cellspacing="5" bgcolor="#a8ddb5" align="center">
	 <th class="thead-dark" colspan="2" align="center">Register</th>
		<form name="regform" method="post" action="registerprocess.php">
			<tr><td>Street Address</td>
			<td><input class="form-control"maxlength="64" name="street" required="required" placeholder=""></td></tr>
			<tr><td>City</td>
			<td><input class="form-control" maxlength="64" name="city" required="required" placeholder=""></td></tr>
			<tr><td>State</td>
			<td><input class="form-control" maxlength="2" name="state" required="required" placeholder=""></td></tr>
			<tr><td>Zip Code</td>
			<td><input class="form-control" minlength="5" type="number" maxlength="10" name="zip" required="required" placeholder=""></td></tr>
			<tr><td>Email</td>
			<td><input class="form-control" type="email" maxlength="64"  name="email" required="required" placeholder=""></td></tr>
			<tr><td>Username</td>
			<td><input class="form-control" minlength="6" maxlength="64" name="username" id="username" required="required" placeholder=""></td></tr>
			<tr><td>Password</td>
			<td><input class="form-control" type="password" minlength="6" maxlength="64" name="password" id="password" required="required" placeholder ="" onkeyup="validatePW()"><br>
			<label id="rule1">Minimum password length 6 characters</label><br>
			<label id="rule2">Password contains at least 1 uppercase character</label><br>
			<label id="rule3">Password contains at least 1 lowecase character</label><br>
			<label id="rule4">Password contains at least 1 number</label><br>
			<label id="rule5">Password cannot equal username</label><br>
			</td></tr>
			<tr><td colspan="2" align="center"><input type="submit" 
			name="submit_button" value="Register"></td></tr>
		</form>
	</table>

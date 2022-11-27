<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">	
		<meta name="description" content="Blog">
	</head>
		<title>
			Blog
		</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script type="text/javascript" src="java.js" defer></script>
	</head>
	<body>
        <nav class="nav_bar"><!--gleiche Navigationsmenüleiste-->
			<div class="nav_logo"><img src="paklogo.jpg" alt="pak Logo">Pakistan Kennenlernen</div>
			<a href="#" class="toggle-button">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</a>
			<div class="list-container">
				<ul>
					<li><a href="home.html">Home</a></li>
					<li><a href="culture.html">Kultur</a></li>
					<li><a href="history.html">Geschichte</a></li>
					<li><a href="geography.html">Geografie</a></li>						
					<li><a href="Quiz.html">Quiz Spielen</a></li>
					<li><a href="Blog.html">Blog</a></li>
				</ul>
			</div>
		</nav>
<form action="" method="POST">
    <label>Name:
        <input type="text" name="Name" required /><label>
    <label>Comment:
        <textarea name="Comment" required /></textarea><label>
    <input type="submit" name="Submit"  value="Submit" />
</form>	



    </body>
</html>

<?php
if(isset($_POST["Submit"])){
print "<h2>Your comment has been submitted<h2>";

$Name = $_POST["Name"];
$Comment = $_POST["Comment"];

//alte Kommentare
$Old = fopen("comment.txt", "r+t");
$Old_Comments = fread($Old, 1024);

//neu Komment
$Write = fopen("comment.txt", "w+");
$String =       "<div class='comment'><span>".$Name."</span><br />
                <span>".date("Y/m/d")." | ".date("h:i A")."</span><br />
                <span>".$Comment."</span></div>\n".$Old_Comments;

fwrite($Write, $String);
fclose($Write);
fclose($Old);      

//Display
$Read = fopen("comment.txt", "r+t");
echo "<h1>Comments:</h1><hr>".fread($Read,1024);
fclose($Read);

}
?>
<form action = "http://localhost/cos.php" method="GET">
    Ankieta <br><br>
    Miasto <input type="text" name="miasto"><br>
    Płeć: <input type="radio" name="plec" value="k">kobieta
          <input type="radio" name="plec" value="m">mezczyzna<br>
    zainteresowania:
    <input type="checkbox" name="hobby[]" value="film">film<br>
    <input type="checkbox" name="hobby[]" value="sport">sport<br>
    <input type="checkbox" name="hobby[]" value="taniec">taniec<br>
    <input type="checkbox" name="hobby[]" value="muzyka">muzyka<br>
    <input type="submit" value="wyslij"
</form>
<?php
print("Wprowadzone dane:<br>");
print("Miasto:".$_GET['miasto']."<br>");
print("Plec:".$_GET['plec']."<br>");
print("Hobby: ");
for($i=0;$i<4;$i++){
    if(!empty($_GET['hobby'][$i])){
        print($_GET['hobby'][$i]." ");
    }
}
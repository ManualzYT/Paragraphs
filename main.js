function getParagraph1()
{
var inputs = [];
for(var i = 1 ; i <=6 ; i++)
    
{
    inputs.push(document.getElementById("para1_input_box_" + i).value);
}
  document.getElementById("getParagraph1").innerHTMl = inputs.join(". ")
}
inputs.join("text_input_1 , text_input_2 , text_input_3 , text_input_4 , text_input_5 , text_input_6");
document.getElementById("getParagraph1").innerHTML = inputs.join("text_input_1 , text_input_2 , text_input_3 , text_input_4 , text_input_5 , text_input_6 ");

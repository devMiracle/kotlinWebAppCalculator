import controllers.*
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

fun main(args: Array<String>) {
    val body = document.getElementById("body")!! // !! helps to check for null value
    //making use of string interpolation
    var content = """

    <input type="number" id="first">
    <input type="number" id="second">
    <input type="submit" id="add" value="Add">
    <input type="submit" id="substract" value="Substract">
    <input type="submit" id="multiply" value="Multiply">
    <input type="submit" id="divide" value="Divide">
    <div id="result"></div>
        """
    body.innerHTML = content
    val result = document.getElementById("result")!!



    val first = document.getElementById("first")!! as HTMLInputElement
    val second = document.getElementById("second")!! as HTMLInputElement
    val add = document.getElementById("add")!!
    val substract = document.getElementById("substract")!!
    val multiply = document.getElementById("multiply")!!
    val divide = document.getElementById("divide")!!


    add.addEventListener("click",{
        result.innerHTML = "${add(first.value.toDouble(),second.value.toDouble())}"
    })
    substract.addEventListener("click",{
        result.innerHTML = "${substract(first.value.toDouble(),second.value.toDouble())}"
    })
    multiply.addEventListener("click",{
        result.innerHTML = "${multiply(first.value.toDouble(),second.value.toDouble())}"
    })
    divide.addEventListener("click",{
        result.innerHTML = "${divide(first.value.toDouble(),second.value.toDouble())}"
    })

}

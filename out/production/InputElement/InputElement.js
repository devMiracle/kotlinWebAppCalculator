if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'InputElement'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'InputElement'.");
}
var InputElement = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Unit = Kotlin.kotlin.Unit;
  function add(first, second) {
    return first + second;
  }
  function substract(first, second) {
    return first - second;
  }
  function multiply(first, second) {
    return first * second;
  }
  function divide(first, second) {
    return first / second;
  }
  function main$lambda(closure$first, closure$second, closure$result) {
    return function (it) {
      closure$result.innerHTML = add(toDouble(closure$first.value), toDouble(closure$second.value)).toString();
      return Unit;
    };
  }
  function main$lambda_0(closure$first, closure$second, closure$result) {
    return function (it) {
      closure$result.innerHTML = substract(toDouble(closure$first.value), toDouble(closure$second.value)).toString();
      return Unit;
    };
  }
  function main$lambda_1(closure$first, closure$second, closure$result) {
    return function (it) {
      closure$result.innerHTML = multiply(toDouble(closure$first.value), toDouble(closure$second.value)).toString();
      return Unit;
    };
  }
  function main$lambda_2(closure$first, closure$second, closure$result) {
    return function (it) {
      closure$result.innerHTML = divide(toDouble(closure$first.value), toDouble(closure$second.value)).toString();
      return Unit;
    };
  }
  function main(args) {
    var tmp$, tmp$_0;
    var body = ensureNotNull(document.getElementById('body'));
    var content = '\n    <input type="number" id="first">\n    <input type="number" id="second">\n    <input type="submit" id="add" value="Add">\n    <input type="submit" id="substract" value="Substract">\n    <input type="submit" id="multiply" value="Multiply">\n    <input type="submit" id="divide" value="Divide">\n    <div id="result"><\/div>\n        ';
    body.innerHTML = content;
    var result = ensureNotNull(document.getElementById('result'));
    var first = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('first')), HTMLInputElement) ? tmp$ : throwCCE();
    var second = Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('second')), HTMLInputElement) ? tmp$_0 : throwCCE();
    var add = ensureNotNull(document.getElementById('add'));
    var substract = ensureNotNull(document.getElementById('substract'));
    var multiply = ensureNotNull(document.getElementById('multiply'));
    var divide = ensureNotNull(document.getElementById('divide'));
    add.addEventListener('click', main$lambda(first, second, result));
    substract.addEventListener('click', main$lambda_0(first, second, result));
    multiply.addEventListener('click', main$lambda_1(first, second, result));
    divide.addEventListener('click', main$lambda_2(first, second, result));
  }
  var package$controllers = _.controllers || (_.controllers = {});
  package$controllers.add_lu1900$ = add;
  package$controllers.substract_lu1900$ = substract;
  package$controllers.multiply_lu1900$ = multiply;
  package$controllers.divide_lu1900$ = divide;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('InputElement', _);
  return _;
}(typeof InputElement === 'undefined' ? {} : InputElement, kotlin);

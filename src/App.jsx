import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState("0");
  const [expression, setExpression] = useState("");

  const isOperator = (symbol) => {
    return /[*/+-]/.test(symbol);
  };

  const et = expression.trim();

  const calculate = () => {
    // if last char is an operator ... remove it
    if (isOperator(et.charAt(et.length - 1))) return;

    // clean the expression

    const parts = et.split(" ");
    const newParts = [];

    for (let i = parts.length - 1; i >= 0; i--) {
      if (["/", "*", "+"].includes(parts[i]) && isOperator(parts[i - 1])) {
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i - 1;
        while (isOperator(parts[k])) {
          k--;
          j++;
        }
        i -= j;
      } else {
        newParts.unshift(parts[i]);
      }
    }

    const newExpression = newParts.join(" ");
    if (isOperator(newExpression.charAt(0))) {
      setAnswer(eval(answer + newExpression).toString());
    } else {
      setAnswer(eval(newExpression).toString());
    }

    setExpression("");
  };

  const buttonPress = (value) => {
    if (value === "clear") {
      setAnswer("");
      setExpression("0");
    } else if (isOperator(value)) {
      setExpression(et + " " + value + " ");
    } else if (value === "=") {
      calculate();
    } else if (value === "0") {
      if (expression.charAt(0) !== "0") {
        setExpression(expression + value);
      }
    } else if (value === ".") {
      const lastNumber = expression.split(/[-+*/]/g).pop();

      if (lastNumber.includes(".")) return;
      setExpression(expression + value);
    } else {
      if (expression.charAt(0) === "0") {
        setExpression(expression.slice(1) + value);
      } else {
        setExpression(expression + value);
      }
    }
  };

  return (
    <>
      <div
        id="calculator"
        className="bg-black text-white border-2 border-blue-400 w-[330px] grid grid-cols-4 grid-rows-6 p-2"
      >
        <div
          onClick={() => buttonPress("clear")}
          id="display"
          className="col-span-4 flex justify-end items-end relative"
        >
          <span
            id="display-result"
            className="absolute top-0 right-0 w-16 min-h-8"
          >
            {expression}
          </span>
          {answer}
        </div>
        <div
          onClick={() => buttonPress("clear")}
          id="clear"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 action col-span-2 flex justify-center items-center bg-red-500"
        >
          AC
        </div>
        <div
          onClick={() => buttonPress("/")}
          id="divide"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 arithmetic flex justify-center items-center"
        >
          /
        </div>
        <div
          onClick={() => buttonPress("*")}
          id="multiply"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 arithmetic flex justify-center items-center"
        >
          *
        </div>
        <div
          onClick={() => buttonPress("+")}
          id="add"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 arithmetic col-[4/5] row-[4/5] flex justify-center items-center"
        >
          +
        </div>
        <div
          onClick={() => buttonPress("-")}
          id="subtract"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 arithmetic col-[4/5] row-[3/4] flex justify-center items-center"
        >
          -
        </div>
        <div
          onClick={() => buttonPress(".")}
          id="decimal"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 num col-[3/4] row-[6/7] flex justify-center items-center"
        >
          .
        </div>
        <div
          onClick={() => buttonPress("=")}
          id="equals"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 action row-[5/7] col-[4/5] flex justify-center items-center bg-blue-700"
        >
          =
        </div>
        <div
          onClick={() => buttonPress("1")}
          id="one"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 1 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          1
        </div>
        <div
          onClick={() => buttonPress("2")}
          id="two"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 2 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          2
        </div>
        <div
          onClick={() => buttonPress("3")}
          id="three"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 3 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          3
        </div>
        <div
          onClick={() => buttonPress("4")}
          id="four"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 4 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          4
        </div>
        <div
          onClick={() => buttonPress("5")}
          id="five"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 5 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          5
        </div>
        <div
          onClick={() => buttonPress("6")}
          id="six"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 6 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          6
        </div>
        <div
          onClick={() => buttonPress("7")}
          id="seven"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 7 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          7
        </div>
        <div
          onClick={() => buttonPress("8")}
          id="eight"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 8 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          8
        </div>
        <div
          onClick={() => buttonPress("9")}
          id="nine"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 9 num h-[65px] min-w-[80px] flex justify-center items-center"
        >
          9
        </div>
        <div
          onClick={() => buttonPress("0")}
          id="zero"
          className="border border-gray-400 hover:border-gray-100 hover:text-gray-400 hover:border-2 hover:text-xl transition-all duration-75 0 num h-[65px] min-w-[80px] flex justify-center items-center bg-pink-400 col-[1/3]"
        >
          0
        </div>
      </div>
      <p>designed and coded by mo</p>
    </>
  );
}

export default App;
